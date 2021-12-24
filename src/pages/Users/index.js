import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {Imagem,Container, User } from './styles'
import Avatar from '../../assets/avatar.svg'
import Arrow from '../../assets/arrow.svg'
import Trash from '../../assets/trash.svg'
import {useNavigate} from 'react-router-dom'
import ContainerItens from '../../components/ContainerItens'
import H1 from '../../components/Title'
import Button from '../../components/Button'


export default function Users() {

  const [users, setUsers] =  useState([])
  const navigate = useNavigate()
  

useEffect(()=>{
  async function fetchUsers(){
    const { data: newUsers } = await axios.get("http://localhost:3001/users")
    setUsers(newUsers)
  }

  fetchUsers()

},[])

  async function deleteUser(userId){
    await axios.delete(`http://localhost:3001/users/${userId}`)

    const newUsers = users.filter(user => user.id !== userId)

    setUsers(newUsers)
  }

  function goBackPage(){
    
    navigate("/")

  }
  

 return (
   <Container>
     <Imagem alt="logo-image" src={Avatar}/>
     <ContainerItens isBlur={true}>
     <H1>Usuários</H1>


     <ul>
       {
         users.map(user => (
           <User key={user.id}>
             <p>{user.name}</p>
             <p>{user.age}</p> 
             <button onClick={()=> deleteUser(user.id)} > <img src={Trash} alt="Trashe" /></button>
             </User>
         ))
       }
     </ul>

      
         <Button isBack={true} onClick={goBackPage} > <img alt="seta" src={Arrow} /> Voltar</Button>
       

     </ContainerItens>
   </Container>
 );
}
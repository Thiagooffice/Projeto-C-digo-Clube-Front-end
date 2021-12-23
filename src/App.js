import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios'
import { Container,Imagem,ContainerItens,H1,InputLabel,Input,Button, User } from './styles'
import People from './assets/people.svg'
import Arrow from './assets/arrow.svg'
import Trash from './assets/trash.svg'


export default function App() {

  const [users, setUsers] =  useState([])
  const inputName = useRef()
  const inputAge = useRef()


  async function addNewUser(){

    const { data: newUser } = await axios.post("http://localhost:3001/users", 
   {name: inputName.current.value, 
   age: inputAge.current.value
 })
  
 console.log(newUser)
    setUsers([
     ...users, newUser])
  
}

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
  

 return (
   <Container>
     <Imagem alt="logo-image" src={People}/>
     <ContainerItens>
     <H1>Olá!</H1>
     <InputLabel>Nome</InputLabel>

     <Input ref={inputName} placeholder="Nome"/>

     <InputLabel>Idade</InputLabel>

     <Input ref={inputAge}  placeholder="Idade"/>

     <Button onClick={addNewUser} >Cadastrar <img alt="seta" src={Arrow} /></Button>

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

     </ContainerItens>
     
     
   </Container>
 );
}
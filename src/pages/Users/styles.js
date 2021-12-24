import styled from 'styled-components'
import Background from '../../assets/background.svg'






export const Container = styled.div`
    background: url("${Background}");
    background-size: cover;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 40px;
    height: 100%;
`
export const Imagem = styled.img`
    margin-top: 30px;
`

export const User = styled.li`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 58px;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    width: 342px;
    height: 58px;
    outline: none;
    border: none;
    margin-top: 20px;

    p{
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 28px;
    color: #FFFFFF;
    }
    button{
        background: none;
        border: none;
        cursor: pointer;
    }
`


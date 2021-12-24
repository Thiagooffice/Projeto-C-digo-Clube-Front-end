import styled from 'styled-components'
import Background from '../../assets/background1.svg'





export const Container = styled.div`
    background: url("${Background}");
    background-size: cover;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 40px;
    
`
export const Imagem = styled.img`
    margin-top: 30px;
`



export const InputLabel = styled.p`
    font-style: normal;
    font-size: 18px;
    font-weight: bold;
    line-height: 22px;
    display: flex;
    align-items: center;
    letter-spacing: -0.408px;
    color: #EEEEEE;
    margin-left: 25px;

`
export const Input = styled.input`
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    width: 342px;
    height: 58px;
    outline: none;
    border: none;
    padding-left: 25px;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 34px;
    color: #FFFFFF;
`


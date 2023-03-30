import styled from 'styled-components';


export const ContatoContainer = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 0;
`

export const ContatoH1 = styled.h1`
  font-size: 2.5rem;
  color: #000;
  margin-bottom: 64px;
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #000 ;
  padding: 50px
`

export const FormLabel = styled.label`
  font-size: 1.5rem;
  color: #fff;
  margin: 0 15px 32px 0;

`

export const FormInput = styled.input`
padding: 16px 16px;
margin: 0 15px 32px 0;
border: none;
border-radius: 4px;
`

export const FormButton = styled.button`
    border-radius: 50px;
    background: #f44;
    white-space: nowrap;
    padding: 10px 22px;
    color: #000;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #000;
`

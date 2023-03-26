import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const Container = styled.div`
min-height: 792px;
bottom: 0;
left: 0;
right: 0;
top: 0;
z-index: 0;
background-color: #000000;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpolygon fill='%23220000' points='1600 160 0 460 0 350 1600 50'/%3E%3Cpolygon fill='%23440000' points='1600 260 0 560 0 450 1600 150'/%3E%3Cpolygon fill='%23660000' points='1600 360 0 660 0 550 1600 250'/%3E%3Cpolygon fill='%23880000' points='1600 460 0 760 0 650 1600 350'/%3E%3Cpolygon fill='%23A00' points='1600 800 0 800 0 750 1600 450'/%3E%3C/g%3E%3C/svg%3E");
background-attachment: fixed;
background-size: cover;`;

export const FormWrap = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;

@media screen and (max-widht: 400px){
    height: 80%;
}
`;

export const Icon = styled.text`
margin-left: 32px;
margin-top: 32px;
text-decoration: none;
color:#fff;
font-weight: 700;
font-size: 32px;
@media screen and (max-width: 480px){
    margin-left: 16px;
    margin-top: 8px;
}
`;

export const FormContent = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
@media screen and (max-width: 480px){
    padding: 10px
}
`
export const FormContenBtn = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
background: #f44;
margin-bottom: 20px;
@media screen and (max-width: 480px){
    padding: 10px
}
`


export const Form = styled.form`
background: #010101;
max-width: 400px;
height: auto;
width: 100%;
z-index: 1;
display: grid;
margin: 15px auto;
padding: 60px 32px;
border-radius: 4px;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
@media screen and (max-width: 400px){
    padding: 32px 32px;
}
`;

export const FormH1 = styled.h1`
margin-bottom: 40px;
color: #fff;
font-size: 20px;
font-weight: 400;
text-align: center;
`

export const FormLabel = styled.label`
margin-bottom: 8px;
font-size: 14px;
color: #fff;
`;

export const FormInput = styled.input`
width: 90%;
padding: 16px 16px;
margin-bottom: 32px;
border: none;
border-radius: 4px;
`;

export const FormButton = styled.button`
background: #f44;
padding: 10px 0;
border: none;
border-radius: 4px;
color: #fff;
font-size: 20px;
cursor: pointer;
margin-bottom: 10px;
`;

export const Text = styled.span`
text-align: center;
margin-top: 24px;
color: #fff;
font-size: 14px;
cursor: pointer;
`;

export const EditButton = styled.p`
display: flex;
font-size: 42px;
width: 30px;
height: auto;
color: #f44;
cursor: pointer;
margin-left: 2px;

&:hover{
    color: #fff;
}
`
export const FormButtonSearch = styled.button`
background: #f44;
padding: 32px 0;
width: 300px; 
border: none;
border-radius: 4px;
color: #fff;
font-size: 1.5rem;
cursor: pointer;
margin-bottom: 10px;
margin-top: 20px;
`

export const LinkEdit = styled(Link)`
text-decoration: none;
text-align:center;
background: #f44;
padding: 32px 0;
width: 300px; 
border: none;
border-radius: 4px;
color: #fff;
font-size: 1.5rem;
cursor: pointer;
margin-bottom: 10px;
margin-top: 20px;`

export const FormEditInput = styled.div`  
    display:flex;
    width: 100%;
`
/* att */

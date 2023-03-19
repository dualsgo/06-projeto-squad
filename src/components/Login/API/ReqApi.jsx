import React, { useState } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'
import {
  Container,
  FormWrap,
  Icon,
  FormButton,
  FormContent,
  FormEditInput,
  Form,
  FormInput,
  FormLabel,
  EditButton,
  FormButtonSearch
} from './StyledComponents'
import { Loading } from './Loading'
import { BsPencilSquare } from "react-icons/bs";

function ReqApi() {
  const [alunos, setAlunos] = useState([])
  // estados de disabled
  const [disabledNome, setDisabledNome] = useState(true)
  const [disabledCPF, setDisabledCPF] = useState(true)
  const [disabledEndereco, setDisabledEndereco] = useState(true)
  const [disabledEstado, setDisabledEstado] = useState(true)
  const [disabledTelefone, setDisabledTelefone] = useState(true)
  const [disabledEmail, setDisabledEmail] = useState(true)
  const [disabledPlano, setDisabledPlano] = useState(true)

  const [data, setData] = useState({
    nome: '',
    cpf: '',
    endereco: '',
    estado: '',
    telefone: '',
    email: '',
    plano: ''
  });

  const Alunos = () => {
    setIsLoading(false);
    Axios.get("https://api-drfq.onrender.com/alunos").then((response) => {
      setAlunos(response.data.alunos);
      setIsLoading(true);
    }
    )
  }

  const DelApi = (id) => {
    Axios.delete(`https://api-drfq.onrender.com/alunos/${id}`).then(() => {
      Alunos()
    })
  }

  const PutApi = (id) => {
    Axios.put(`https://api-drfq.onrender.com/alunos/${id}`,
      data
      , { 'Content-Type': 'application/json' }).then(() => {
        Alunos()
      })
  }

  const [isLoading, setIsLoading] = useState(true);

  const handleChange = ({ target: { value, name } }) => {

    setData({
      ...data, [name]: value,
    });
  }

  console.log(alunos)
  return (

    <Container>
      <FormWrap>
        <Icon to='/'>Academia 💪</Icon>

        <FormContent>
          <Link to='/post'><FormButtonSearch>Cadastrar aluno</FormButtonSearch></Link>
          <FormButtonSearch onClick={Alunos}>Listagem de alunos</FormButtonSearch>

          {isLoading ? alunos.map((aluno) => {

            return <>
              <Form onSubmit={(e) => {
                e.preventDefault()
                PutApi(aluno.id)
              }}>


                <FormLabel>Nome: </FormLabel>
                <FormEditInput>
                  <FormInput type="text" name="nome"
                    placeholder={aluno.nome}
                    disabled={disabledNome}
                    onChange={handleChange}

                  />
                  <EditButton onClick={() => setDisabledNome(!disabledNome)}><BsPencilSquare /></EditButton>
                </FormEditInput>


                <FormLabel>CPF: </FormLabel>
                <FormEditInput>
                  <FormInput
                    type="text" name="cpf"
                    placeholder={aluno.cpf}
                    disabled={disabledCPF}
                    onChange={handleChange}
                  />
                  <EditButton onClick={() => setDisabledCPF(!disabledCPF)}><BsPencilSquare /></EditButton>
                </FormEditInput>


                <FormLabel>Endereço: </FormLabel>
                <FormEditInput>
                  <FormInput
                    type="text" name="endereco"
                    placeholder={aluno.endereco}
                    disabled={disabledEndereco}
                    onChange={handleChange}

                  />
                  <EditButton onClick={() => setDisabledEndereco(!disabledEndereco)}><BsPencilSquare /></EditButton>
                </FormEditInput>

                <FormLabel>Cidade:  </FormLabel>
                <FormEditInput>
                  <FormInput
                    type="text" name="cidade"
                    placeholder={aluno.estado}
                    disabled={disabledEstado}
                    onChange={handleChange}

                  />
                  <EditButton onClick={() => setDisabledEstado(!disabledEstado)}><BsPencilSquare /></EditButton>
                </FormEditInput>


                <FormLabel>Telefone: </FormLabel>
                <FormEditInput>
                  <FormInput
                    type="text" name="telefone"
                    placeholder={aluno.telefone}
                    disabled={disabledTelefone}
                    onChange={handleChange}

                  />
                  <EditButton onClick={() => setDisabledTelefone(!disabledTelefone)}><BsPencilSquare /></EditButton>
                </FormEditInput>

                <FormLabel>Email: </FormLabel>
                <FormEditInput>
                  <FormInput
                    type="email" name="email"
                    placeholder={aluno.email}
                    disabled={disabledEmail}
                    onChange={handleChange}

                  />
                  <EditButton onClick={() => setDisabledEmail(!disabledEmail)}><BsPencilSquare /></EditButton>
                </FormEditInput>


                <FormLabel>Plano: </FormLabel>
                <FormEditInput>
                  <FormInput
                    type="text" name="plano"
                    placeholder={aluno.plano}
                    disabled={disabledPlano}
                    onChange={handleChange}

                  />
                  <EditButton onClick={() => setDisabledPlano(!disabledPlano)}><BsPencilSquare /></EditButton>
                </FormEditInput>


                <FormButton type='button' className='buttonCont' onClick={() => DelApi(aluno.id)}>Deletar registro</FormButton>
                <FormButton type='submit'>Atualizar registro</FormButton>

              </Form>
            </>

          }) : <Loading />


          }
        </FormContent>
      </FormWrap>
    </Container>

  );
}

export default ReqApi;

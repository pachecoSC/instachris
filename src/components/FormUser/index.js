/* eslint-disable multiline-ternary */
import React from 'react'
import { useinputValue } from '../../hooks/useInputValue'
import {
  Form,
  Input,
  Button,
  Title,
  Div,
  LinkText,
  LinkIcon,
  IconFingerPrint,
  IconFb,
  IconIg,
  IconGit,
  TextO,
  ElementHorizontal,
  LinkRegistro
} from './styles'

export const FormUser = ({ onSubmit, title }) => {
  const email = useinputValue('')
  const password = useinputValue('')
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  const login = title === 'Iniciar Sesión'

  const HandleSubmit = (event) => {
    event.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  }

  return (
    <Div>
      <IconFingerPrint size='6rem' />
      <Title> {title} </Title>
      <Form onSubmit={HandleSubmit}>
        <Input
          id='userEmail'
          placeholder='ingresar email'
          // version larga..  value={email.value} onChange={email.onchange}
          {...email} // version corta
          // value={email}
          // onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          id='userPassword'
          type='password'
          placeholder='ingresar contraseña'
          {...password}
          // value={password}
          // onChange={(e) => setPassword(e.target.value)}
        />
        {login ? <LinkText to='/'>¿olvidaste la contraseña?</LinkText> : <br />}

        <Button>{title}</Button>
        {login ? <TextO> --- ó ---</TextO> : <p />}
        {login ? (
          <ElementHorizontal>
            <LinkIcon to='/'>
              <IconFb />
            </LinkIcon>
            <LinkIcon to='/'>
              <IconIg />
            </LinkIcon>
            <LinkIcon to='/'>
              <IconGit />
            </LinkIcon>
          </ElementHorizontal>
        ) : (
          <p />
        )}
      </Form>
      {login ? (
        <TextO>
          No esta registrado, desea <LinkRegistro to='/singUp'>Registrarse</LinkRegistro>
        </TextO>
      ) : (
        <p />
      )}
    </Div>
  )
}

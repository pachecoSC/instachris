/* eslint-disable multiline-ternary */
import React from 'react'
import { useinputValue } from '../../hooks/useInputValue'
import {
  Form,
  Input,
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
  LinkRegistro,
  Error
} from './styles'
import { SubmitButton } from '../SubmitButton'

export const FormUser = ({ error, disabled, onSubmit, title }) => {
  const email = useinputValue('')
  const password = useinputValue('')
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  const login = title === 'Iniciar Sesión'
  // console.log('dentro del form: ' + disabled)
  const HandleSubmit = (event) => {
    event.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  }

  return (
    <Div>
      <IconFingerPrint size='6rem' />
      <Title> {title} </Title>
      <Form disabled={disabled} onSubmit={HandleSubmit}>
        <Input
          disabled={disabled}
          id='userEmail'
          placeholder='ingresar email'
          // version larga..  value={email.value} onChange={email.onchange}
          {...email} // version corta
          // value={email}
          // onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          disabled={disabled}
          id='userPassword'
          type='password'
          placeholder='ingresar contraseña'
          {...password}
          // value={password}
          // onChange={(e) => setPassword(e.target.value)}
        />
        {login ? <LinkText to='/'>¿olvidaste la contraseña?</LinkText> : <br />}

        <SubmitButton disabled={disabled}>{title}</SubmitButton>
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
      <>
        {error && <Error>{error}</Error>}
        {login ? (
          <TextO>
            No esta registrado, desea <LinkRegistro to='/singUp'>Registrarse</LinkRegistro>
          </TextO>
        ) : (
          <p />
        )}
      </>
    </Div>
  )
}

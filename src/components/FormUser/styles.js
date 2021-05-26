import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'

import { FiFacebook, FiInstagram, FiGithub } from 'react-icons/fi'
import { MdFingerprint } from 'react-icons/md'

export const Form = styled.form`
  padding: 16px 0;
`

export const Input = styled.input`
  margin-bottom: 8px;
  border: none;
  border-bottom: 1.8px solid #8d00ff;
  padding: 8px 4px;
  display: block;
  width: 100%;
`

export const Button = styled.button`
  background: #8d00ff;
  border-radius: 3px;
  color: #fff;
  height: 32px;
  display: block;
  width: 100%;
  text-align: center;
`

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 500;
  padding: 8px 0;
  text-align: center;
`
export const Div = styled.div`
  padding: 0px 2rem;
  display:flex;
  flex-direction:column;
`
export const LinkRegistro = styled(LinkRouter)`
  // text-decoration: none;
  color: #8d00ff;
  font-weight: bold;
`
export const LinkText = styled(LinkRouter)`
  text-align: right;
  text-decoration: none;
  margin: 10px 0;
  display: block;
`
export const LinkIcon = styled(LinkRouter)`
  text-decoration: none;
  margin-bottom: 8px;
  border: 1px solid #8d00ff;
  margin: 0 0.3rem;
  border-radius: 45%;
  padding: 10px;
`
export const IconFb = styled(FiFacebook)`
  color: #8d00ff;
`
export const IconIg = styled(FiInstagram)`
  color: #8d00ff;
`
export const IconGit = styled(FiGithub)`
  color: #8d00ff;
`
export const IconFingerPrint = styled(MdFingerprint)`
  color: #8d00ff;
  text-align: center;
  width: 100%;
`
export const TextO = styled.p`
  display: block;
  text-align: center;
  padding: 1.5rem 0;
`
export const ElementHorizontal = styled.div`
  display: block;
  text-align: center;
  font-size: 2rem;
  width: 100%;
`

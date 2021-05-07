import styled, { css } from 'styled-components'

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  /* &::-webkit-scrollbar {
    display: none;
  } */
  ${(props) =>
    props.fixed &&
    css`
      //si deseas puedes agregar { } es opcional
      background-color: #fff;
      border-radius: 60px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
      margin: 0 auto;
      left: 0;
      right: 0;
      max-width: 400px;
      padding: 5px;
      position: fixed;
      transform: scale(0.9);
      top: 0px;
      z-index: 1;
    `}/* &.fixed {
    background-color: #fff;
    border-radius: 60px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    margin: 0 auto;
    left: 0;
    right: 0;
    max-width: 400px;
    padding: 5px;
    position: fixed;
    transform: scale(.9);
    top: 0px;
    z-index:1;
  } */
`

export const Item = styled.li`
  padding: 0 8px;
`

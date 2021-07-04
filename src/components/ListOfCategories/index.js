/* eslint-disable multiline-ternary */
// librerias.
import React, { useState, useEffect, Fragment } from 'react'
import { Category } from '../Category'
// estilos
import { List, Item } from './styles'
// datos
// import { categories as MockupCategories} from "../../../api/db.json";

import { useCategoriesData } from '../../hooks/useCategoriesData'

const ListOfCategoriesComponent = () => {
  // const [categories, setCategories] = useState(MockupCategories);
  const [showFixed, setShowFixed] = useState(false)
  const { categories, loading } = useCategoriesData()

  useEffect(
    function () {
      const onScroll = (e) => {
        const newShowFixed = window.scrollY > 180
        showFixed !== newShowFixed && setShowFixed(newShowFixed)
      }

      document.addEventListener('scroll', onScroll)
      // debemos limpiar el evento de escuchar.
      return () => document.removeEventListener('scroll', onScroll)
    },
    [showFixed]
  )

  const RenderList = (fixed) => (
    // <List className ={fixed ? 'fixed': ''}>
    <List fixed={fixed}>
      {loading ? (
        <Item key={loading}>
          <Category />
        </Item>
      ) : (
        categories.map((category) => (
          <Item key={category.id}>
            <Category {...category} path={`/pet/${category.id}`} />
          </Item>
        ))
      )}
    </List>
  )

  return (
    <>
      {RenderList()}
      {showFixed && RenderList(true)}
    </>
  )
}

export const ListOfCategories = React.memo(ListOfCategoriesComponent)

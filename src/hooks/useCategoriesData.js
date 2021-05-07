/* eslint-disable space-before-function-paren */
import { useState, useEffect } from 'react'

export function useCategoriesData() {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(function () {
    setLoading(true)
    window
      .fetch('https://instachris-server-2xr9u1okk-pachecosc.vercel.app/categories')
      .then((res) => res.json())
      .then((response) => {
        setCategories(response)
        setLoading(false)
      })
  }, [])

  // otro ejemplo
  /* useEffect(() => {
    getData(API)
  }, [])

  const getData = async (URL) => {
    const data = await window.fetch(URL)
    .then((res)=>res.json()).catch((err) => err)
    setCategories(data)
  } */

  return { categories, loading }
}

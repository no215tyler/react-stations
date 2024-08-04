// @ts-check

import { useEffect, useState } from 'react'

export const DogListContainer = () => {
  const fetchDogTypes = async () => {
    const res = await fetch('https://dog.ceo/api/breeds/list/all')
    const dogType = await res.json()
    const dogTypesArray = Object.keys(dogType.message)
    return dogTypesArray
  }

  const [breeds, setBreeds] = useState([])

  useEffect(() => {
    console.log('マウント')
    const getDogTypes = async () => {
      const dogTypesArray = await fetchDogTypes()
      setBreeds(dogTypesArray)
    }
    getDogTypes()

    return () => {
      console.log('アンマウント')
    }
  }, [])
  return <></>
}

export default DogListContainer

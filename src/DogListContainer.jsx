// @ts-check

import { useEffect, useState } from 'react'
import BreedsSelect from './BreedsSelect'

export const DogListContainer = () => {
  const fetchDogTypes = async () => {
    const res = await fetch('https://dog.ceo/api/breeds/list/all')
    const dogType = await res.json()
    const dogTypesArray = Object.keys(dogType.message)
    return dogTypesArray
  }

  const [breeds, setBreeds] = useState([])
  const [selectedBreed, setSelectedBreed] = useState('')

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

  const handleBreedChange = breed => {
    setSelectedBreed(breed)
  }

  return (
    <>
      <BreedsSelect
        breeds={breeds}
        onBreedChange={handleBreedChange}
        selectedBreed={selectedBreed}
      />
    </>
  )
}

export default DogListContainer

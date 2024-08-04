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

  const fetchDogListApi = async hound => {
    console.log(hound)
    const res = await fetch(
      `https://dog.ceo/api/breed/${hound}/images/random/3`,
    )
    const dogType = await res.json()
    const dogTypesArray = await dogType.message
    setDogType(dogTypesArray)
  }

  const [breeds, setBreeds] = useState([])
  const [selectedBreed, setSelectedBreed] = useState('akita')
  const [dogType, setDogType] = useState([])

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

  const handleClick = () => {
    fetchDogListApi(selectedBreed)
  }

  return (
    <>
      <BreedsSelect
        breeds={breeds}
        onBreedChange={handleBreedChange}
        selectedBreed={selectedBreed}
      />
      <button id="button2" className="button" onClick={handleClick}>
        表示
      </button>
      <div className="grid_image_container">
        {dogType.map((dog, index) => {
          return <img src={dog} key={index} className="grid_image" />
        })}
      </div>
    </>
  )
}

export default DogListContainer

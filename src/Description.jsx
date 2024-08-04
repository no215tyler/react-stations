// @ts-check
import { useCallback, useState } from 'react'
import DogImage from './DogImage'

export const Description = () => {
  const [dogUrl, setDogUrl] = useState(
    'https://images.dog.ceo/breeds/rottweiler/n02106550_3528.jpg',
  )
  const handleUpdateUrl = useCallback(async () => {
    const res = await fetch('https://dog.ceo/api/breeds/image/random')
    const url = await res.json()
    setDogUrl(url.message)
  }, [])
  return (
    <>
      <p className="description">犬の画像を表示するサイトです。</p>
      <DogImage imageUrl={dogUrl} />
      <br />
      <button onClick={handleUpdateUrl} className="button">
        更新
      </button>
    </>
  )
}

export default Description

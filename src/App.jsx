// DO NOT DELETE

import { useCallback, useState } from 'react'
import './App.css'

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = useState(
    'https://images.dog.ceo/breeds/rottweiler/n02106550_3528.jpg',
  )
  const handleUpdateUrl = useCallback(async () => {
    const res = await fetch('https://dog.ceo/api/breeds/image/random')
    const url = await res.json()
    setDogUrl(url.message)
  }, [])
  return (
    <div>
      <header>
        <h2>Dog Phot App</h2>
      </header>
      <p>犬の画像を表示するサイトです。</p>
      <img src={dogUrl} />
      <br />
      <button onClick={handleUpdateUrl}>更新</button>
    </div>
  )
}

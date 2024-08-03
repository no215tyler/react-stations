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
    <div className="main_wrapper">
      <header className="header">
        <h1>Dog Photo App</h1>
      </header>
      <p className="description">犬の画像を表示するサイトです。</p>
      <div className="image">
        <img src={dogUrl} />
      </div>
      <br />
      <button onClick={handleUpdateUrl} className="button">
        更新
      </button>
    </div>
  )
}

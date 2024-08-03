// DO NOT DELETE

import { useState } from 'react'
import './App.css'

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = useState(
    'https://images.dog.ceo/breeds/rottweiler/n02106550_3528.jpg',
  )
  return (
    <header>
      <h2>Sample App</h2>
      <p>犬の画像を表示するサイトです。</p>
      <img src={dogUrl} />
    </header>
  )
}

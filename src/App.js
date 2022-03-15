import React, { useState, useEffect } from 'react'
import axios from 'axios'

function App() {

const [breedsObj, setBreedsObj] = useState({})
const [selectedBreed, setselectedBreed] = useState('affenpinscher')
const [photo, setPhoto] = useState([])

let allBreeds = []
Object.keys(breedsObj).forEach((breed) => {
  if (breedsObj[breed].length > 0) {
    breedsObj[breed].forEach(it => allBreeds.push(`${breed}/${it}`))
  } else {
      allBreeds.push(breed)
    }
})

useEffect(() => {
  axios.get('https://dog.ceo/api/breeds/list/all').then(({data}) => 
  setBreedsObj(data.message))
},[])

useEffect(() => {
    axios.get(`https://dog.ceo/api/breed/${selectedBreed}/images`).then(({data}) => 
      setPhoto(data.message))
},[selectedBreed])



  return (
  <div className="container">
    <h1 className="title">
      <select onChange={(e) => setselectedBreed(e.target.value)}>
        {allBreeds.map(it => <option key={it} value={it}>{it}</option>)}
      </select>
    </h1>
      <div className="image-container">
        {photo.map(it => <img key={it} src={it} alt={it}/>)}
      </div>
  </div>
  );
}

export default App;

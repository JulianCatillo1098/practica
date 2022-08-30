import { useState , useEffect } from 'react'
import axios from 'axios'
import './App.css'


function App() {
  const [datos, setDatos] = useState()
  useEffect(() => {
    const URL ='https://api.openweathermap.org/data/2.5/weather?q=villavicencio&units=metric&APPID=5f961bf11bc80bee3a05cb5da85cad2a'
    axios.get(URL)
        .then((res)=> setDatos(res.data))
        .catch((err)=> console.log(err))
  
  }, [])
  
  return (
    <div className="App">
      <div className='total'>
        <div className='container'>
          <div className='datos'>
            <div className='pais'><h2>Pais : {datos?.sys.country}</h2></div>
            <div className='ciudad'><h3>ciudad : {datos?.name}</h3></div>
            <div className='longitud'><h2>longitud : {datos?.coord.lon}</h2></div>
            <div className='latitud'><h2>latitud : {datos?.coord.lat}</h2></div>
            <div className='tempe'>temperatura: {datos?.main.temp}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default App

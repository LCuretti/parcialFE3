import { useState } from 'react'
import './App.css'
import Lista from './Components/Lista'

function App() {
    const [search, setSearch] = useState('')
    const [searchList, setSearchList] = useState([])

    let doctores = [
      {id:1, nombre: 'Rick Sanchez', especialidad: 'Gastroenterologo'},
      {id:2, nombre: 'Julius Hibbert', especialidad: 'Dermatologo'},
      {id:3, nombre: 'Nick Riviera', especialidad: 'Otorrinonaringologo'},
      {id:4, nombre: 'John Zoidberg', especialidad: 'Cirujano'}
    ]

    const handleSearch = () => {
      const fillteredDocs = doctores.filter((doctor) => doctor.nombre.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
      setSearchList(fillteredDocs)
    }

    return (
      <>
        <input type="text" placeholder='Busqueda &#128269;' onBlur={(event) => setSearch(event.target.value.trim())}/>
        <button onClick={handleSearch}>&#128269;</button>
        {searchList.length > 0 ? null : <Lista doctores={doctores}/>}
        {search}

        {searchList.length > 0 ?
        <>
          <h2>Doctores Encontrados</h2>
          <Lista doctores={searchList}/>
        </>  
        : null
        }
        {(searchList.length == 0 && search.length > 0) && <h3>No se han encontrado doctores</h3>}
  
      </>
    )
  

    
  }

  

export default App

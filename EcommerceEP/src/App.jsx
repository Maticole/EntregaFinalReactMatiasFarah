import './App.css'
import ItemListContainer from './Components/itemListContainer/itemListContainer'
import NavBar from './Components/navBar/navBar'
import ItemDetailContainer from './Components/itemDetailContainer/itemDetailContainer'
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<ItemListContainer />}/>
        <Route path="/category/:id" element={<ItemListContainer />}/>
        <Route path="/item/:id" element={<ItemDetailContainer />}/>
      </Routes>
      </BrowserRouter>
  )
}

export default App

import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import About from './About'
import Counting from './Counting'
import Fetch from './Fetch'
import Fetchh from './Fetchh'
import Product from './Product'



const  App=()=> {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/about' element={<About/>}/>
         <Route path='/count' element={<Counting/>}/>
         <Route path='/home' elemennt={<Home/>}/>
          <Route path='/fetch' element={<Fetch/>}/>
          <Route path='/fetchh'element={<Fetchh/>}/>
          <Route path='/product'element={<Product/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
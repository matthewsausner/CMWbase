import './App.css'
import React from 'react'
import {
  createBrowserRouter
  , createRoutesFromElements
  , Route
  , RouterProvider
} from 'react-router-dom'
import Home from './Pages/home.jsx'
import Store from './Pages/store.jsx'
import Links from './Pages/links.jsx'
import Tour from './Pages/tour.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} /> 
      <Route path="/store" element={<Store />}/>
      <Route path="/links" element={<Links />}/>
      <Route path="/tour" element={<Tour />}/>
    </>
  )
)


const App = () => {
  return <RouterProvider router={router} />
}

export default App

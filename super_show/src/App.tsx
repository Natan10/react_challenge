import React from 'react'
import Routes from './routes'
import { Slide, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <Routes />
      <ToastContainer
        position="bottom-right"
        autoClose={6000}
        closeOnClick
        transition={Slide}
        newestOnTop={false}
        hideProgressBar={false}
      />
    </>
  )
}

export default App

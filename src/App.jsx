import { Fragment, useState } from 'react'
import { Route, Routes } from "react-router-dom";
import IndexHome from './IndexHome';
import ErrorPage from './ErrorPage';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
function App() {

  return (
    <Fragment>
    <Routes>
<Route path="/" element={<IndexHome/>} />
<Route path="*" element={<ErrorPage/>}/>
    </Routes>
    </Fragment>
  )
}

export default App

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {ErrorBoundary} from 'react-error-boundary'
import Home from "./Home";
import Billing from "./component/Billing/Billing";
function ErrorHandler({error}){
    return (
        <div role="alert">
          <p>An error occurred:</p>
          <pre>{error.message}</pre>
        </div>
      )
}
function App(){ 
    return <>
    <ErrorBoundary FallbackComponent={ErrorHandler}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
       <Route path="billing" element={ <Billing/>}/>
      </Routes>
    </BrowserRouter>
    </ErrorBoundary>
    </>
}

export default App;
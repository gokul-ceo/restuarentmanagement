import React from "react";
import {Billingkeyboard} from "./component/Billingkeyboard";
import Header from "./component/Header";
import {ErrorBoundary} from 'react-error-boundary'
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
    <Header/>
    <Billingkeyboard/>
    </ErrorBoundary>
    </>
}

export default App;
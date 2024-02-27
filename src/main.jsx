import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
/*let counter=1
const refresh=()=>{


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App  counter={counter} />
  </React.StrictMode>,

  
)
}


refresh()
counter+=1
refresh()*/


let counter=1
const refresh=()=>{

ReactDOM.createRoot(document.getElementById('root')).render(<App  counter={counter}/>)
}
refresh()
counter+=1
refresh()
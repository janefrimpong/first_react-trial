/*function MyButton(){
  return(
    <div>
      <button>My button</button>
    </div>
  )
};

export default  function MyApp(){
  return(
    <div>
      <h1>hello World</h1>
      <button/>
    </div>
  )
}*/

/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App*/


/*const App = () =>{
  console.log('Hello from Component')
  return(
    <div>
      <p>Hello World </p>
    </div>
  )
}
export default App()*/


/*const Hello=()=>
{
  return(
    <div>
      <p>Hello world</p>
    </div>
  )
}

const Name=(props)=>{
  return(
    <div>
      <p>{props.name}</p>
      <h1> I am {props.age}</h1>
    </div>
  )
}
const  Friend=["Jane","Harrison","Graham","Samuel"]

const Aap=()=>{
  const now=new Date()
  const a=19
  const b=20
  console.log(now,a+b)
  return(
    <div>
      <p>Hello it is {now.toString()}</p>
      <p>
        {a} plus { b } is { a+b}
      </p>
      <button>Click Me</button>
      <Hello/>
      <Hello/>
      <Hello/>
      <Name name="Janet"/>
      <Name age='20'/>
      <Name age={a}/>
      <p>{Friend}</p>
    
    </div>
  )

}
export default Aap*/

import Dest from "./destructor"
import State from "./use_state"
const Course=(props)=>{
  return(
    <div>
      <h1>{props.co}</h1>
    </div>
  )
  
}
const Part1=(props)=>
{
  return(
    <div>
      <p>
        {props.p1}
      </p>
      <p>
      {props.p2}
      </p>
      <p>
        {props.p3}
      </p>
      
    </div>
  )
}

const Exercise=(props)=>
{
  return(
    <div>
      <p>
        {props.e1}
      </p>
      <p>
        {props.e2}
      </p>
      <p>
        {props.e3}
      </p>
    </div>
  )
}




const App=()=>
{
  const course="Half Stack application development"
  const part1="Fundermentals of react"
  const exercises1=10
  const part2="Using props to pass data"
  const exercises2=7
  const part3="State of a component"
  const exercises3=14
  const age=20

  
  
  
 /* return(
    <div>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
          {part2} {exercises2}
        </p>
        <p>
          {part3} {exercises3}
        </p>
        <p>
          Number of exercises {exercises1+exercises2+exercises3}
        </p>
        <Course co={course}/> 
    </div>
  )*/
  
  return(
    <div>
      <Course co={course}/>
      <Part1 p1={part1} />
      <Exercise e1={exercises1}/>
      <Part1 p2={part2} />
      <Exercise e2={exercises2}/>
      <Part1 p3={part3}/>
      <Exercise e3={exercises3}/>
      <p>Number of exercies {exercises1+exercises2+exercises3}</p>
      <Dest age={age} />
      
      
    </div>
  )
}
export default App
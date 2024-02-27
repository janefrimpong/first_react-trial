import { useState } from "react";
const State=()=>{
    const [counter,setCounter]=useState(0)
    setTimeout(  ()=>setCounter(counter+1),1000)
}
export default State
const Dest=(props)=>{
    const bornYear=()=>{
        const yearNow=new Date().getFullYear()
        return yearNow-props.age
    }
    return(
        <div><p>
            So you were prolly born in {bornYear()}
            </p>
            </div>
    )
}
export default Dest
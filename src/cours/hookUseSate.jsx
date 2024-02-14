import { useState } from "react"


export default function HookUseSate() {

    //incrementation de Compteur.
    const [count, setCount] = useState(0)
    const incremente = () =>{
        setCount(count +1)
    }
    const decremente = () =>{
        setCount(count -1)
    }

    //useState avec des tableau.
    const[persone, setPersone]= useState({
        firstName: 'Kageu Djouche',
        lastName: 'Auriol Ulrich',
        age: 22
    },
 )

const incrementeAge = ()=> {
   setPersone( {...persone, age : persone.age +1} )
}
    
    return(
        <div>
            <h2>HookUseState</h2> <br />
            <p>compteur : {count}</p>
            <button onClick={incremente}>Incrémenter</button><button onClick={decremente}>Decrémenter</button> <br/>

            <p>Age  de {persone.firstName} est : {persone.age}</p>
            <button onClick={incrementeAge}>Gagner Une Année</button> <br/>

        </div>
    )
}
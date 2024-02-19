import { useState } from "react"

export default function Formulaire() {

    var textstyl = {color:'blue',fontFamily: 'cursive',}
    
    const[firsname, setFirsname] = useState('@') 

    const handleChange = (e) => {
        setFirsname(e.target.value) //change le champs a chaque modification
    }
    const reset = ()=>{
        setFirsname('@')
    }


    //Formulaire non controlé fontion pour recuperer une fois apuiyé sur button

    const handleSubmit = (e) =>{
        e.preventDefault() //recupere le champs d'element (e)
        console.log(new FormData(e.target))
    }
        /*proprieté enfant enfant*/
    const [checked, setChecked] = useState(true)
    const toggleCheck = () => {
        setChecked(!checked) //click sa change
    }
   

//Definir notre theme
const [ecouteTheme, setEcouteTheme] = useState(true)
const grey = {backgroundColor:'#B3B6B7',}
const gold= {backgroundColor:'#FFE4B5' , color:''}

const  clikTheme = () =>{
    setEcouteTheme(!ecouteTheme)
   
}
    return(
        <div style={ecouteTheme ? grey : gold}>
            <h2>Formulaire React</h2>
            <form>
                <h3>Champs controlé par react</h3>
                <input type="text" name="firsname"  style={{width:'400px'}} value={firsname} onChange={handleChange}/>
                <button type="button" onClick={reset}>Reset</button>
                <p >textInput : <k style={textstyl}>{firsname}</k ></p>
            </form>


            <form onSubmit={handleSubmit}>
            <h3>Champs non controlé</h3>
            <input type="text" name="secondename" defaultValue={'@KUD'}/>
            
            <input type="checkbox" checked={checked} onChange={toggleCheck} />
            {checked && <button>Envoyer</button>}
            <button disabled={checked}>Conseill</button>
            <br/><br/>
            </form>

            <button onClick={() => clikTheme() }>{ecouteTheme ? 'Grey' : 'Gold'}</button> <br/><br/><br/>
        </div>
    )
    
}
import { useState } from "react"

export default function FluxDonnee() {
    //Faire monter les Info d'un Parent Enfant <revers dataflow en react>

    const [isTermAccepted, setIsTermAcepted] = useState(false)

    return(
        <div checked>
            <h2>FLUX de DONNEE</h2>
            <FunCheckbox  checked ={isTermAccepted} onCheck={setIsTermAcepted}/> {/*checked : ecoute && onCheck change lorsqu'on click */}
            <button disabled={!isTermAccepted}>Envoyer le Form</button>

        </div>
    ) 
}

function FunCheckbox({checked, onCheck}) { //heritage et envoiee a cheked && onCheck
    
    return(
        <div>
            <p> <input type="checkbox" 
                onChange={(e) => onCheck(e.target.checked)}  //funtion de change en check de const [isTermAccepted, setIsTermAcepted] = useState(false)
                 checked={checked} //ecoute checked
                     /> 
                Accepter les conditions d'utilisation
            </p>
        </div>
    )
}
import { useMemo, useState } from "react"

export default function HookUseMemo() {

    const [firsname, setFirstname] = useState('')
    const changeFirsname = (e) => {
        setFirstname(e.target.value)
    }
    const [password, setPassword] = useState('')
    const changePassword = (e) => {
        setPassword(e.target.value)
    }

    const security = useMemo(() => { // utiliser pour optimiser les performence de rapidité
        return passwordSecurity (password)
    }, [password])
    //color
    const rouge = {color:'red'}
    const  orange = {color:'orange'},
        bleu = {color : 'blue'}
     const a = password.length

    return <div className="container my-3 vstack gap-2">
        <input
                label="User"
                placeholder="entez votre nom.."
                value={firsname}
                onChange={changeFirsname}
        />
            <div>
            <input
                label="Password"
                placeholder="passWord..."
                value={password}
                onChange={changePassword}
        /> -
            Monsieur <strong>{firsname}</strong> votre passWord est : 
                     <strong style={a<5 ? rouge : a<9 ? orange : bleu}>{security}</strong>
            </div>
    </div>
}

//function de securité MDP
function passwordSecurity(password) {
    if(password.length <5) {
        return 'faible'
    }    else if (password.length <9) {
        return 'Moyen'
    }
    return 'Fort'
}
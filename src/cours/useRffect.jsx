import { useEffect, useState } from "react"

export default function UseEffect() {

    //pour chanter le title de l'entete
    const [title , setTitle] = useState('')
    const [firsname, setFirstname] = useState('')
    const changeTitle = (e)=>{
        setTitle(e.target.value)
    }
    useEffect(() =>{
        document.title=title
        }, [title])


    //ecouter le scroll
    const [y, setY] = useState(0)
    useEffect(() => {
        const handler =(e) =>{
            setY(window.scrollY) //ecoute le changement du scroll
        }
        window.addEventListener('scroll', handler)
        return () => {
            window.removeEventListener('scroll', handler) //pour nettoyer le scroll
        }
    })

  
    return <div className="vstack gap-2">
        <br/><br/>
        <h2>Manipulation de Hook useEffet</h2>

        <input 
                placeholder="Modifier le titre"
                value={title}
                onChange={changeTitle}
        />
         <p>valeurScroll: {y}</p>
        <input
                placeholder="Prénom"
                value={firsname}
                onChange={setFirstname}
        />

        <DecompteNumer />
        <ChangeTaille /> <br/><br/>
    </div>
}




function DecompteNumer() {
    
    const [duration , setDuration] = useState('')
    const changeDuration = (e)=>{ //funtion pour que quans on change le nbre sa decr le nbr changé
        setDuration(e.target.value)
        setSecondeLeft(e.target.value)
    }
    const [secondeLeft, setSecondeLeft]= useState(duration)


    useEffect (() => {
       const timer = setInterval  (() =>{ //declare un timer
            setSecondeLeft(v => {
                if(v <= 1){ //bloquer le decompte si sa arrive a zero
                    clearInterval(timer)
                    return 0
                }
                return v-1
            })
        },1000)
            return ()=> {clearInterval(timer)} //effacer les call back
    }, [duration])


    return<div className="gap-2"> <br/>
        <h3>Decompte...</h3>
        <input 
                value={duration}
                onChange={changeDuration}
                placeholder="Timer..."
        />
        <p> Décompte : {secondeLeft} </p>  
    </div>
}

function ChangeTaille() {

    let vert ={backgroundColor:'red'} 
        , rouge ={backgroundColor:'green'}

   const [ecoute, setEcoute] = useState(true)
//    const changeEcoute = () =>{
//     setEcoute(!ecoute)
//    }

   useEffect(()=>{
       const timer = setInterval(()=>{
            setEcoute(!ecoute)
        },1000)
        return (()=>{clearInterval(timer)})
}, [ecoute])

    return<div> <p>iseState & useEffect</p>
        {ecoute ? <g style={vert}>Rouge</g> : <g style={rouge}>Verte</g>}
    </div>
    
}
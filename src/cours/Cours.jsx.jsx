
var a = 8
var ternaire = true
const style1 = { backgroundColor: 'green'}
const style2 = { backgroundColor: 'red'}


const todos = [
    'kageu ulrich',
    'nguaingam merveille',
    'djouche thrist',
    'noumsi fortune'
  ]
  

export default function IntroJsx() {
    const handleClick = ()=>{
        alert("j'ai clické sur le titre")
       }

       //  const changeCouleur=(a) => { a=prompt('entrer un nombre') } .
    return (
        <div className="App" >
           <h1 style={a===3 ? style2 : style1} > bonjour les gens </h1>
           <h2><button onClick={handleClick}>leTitre</button></h2>
           {ternaire &&<h2> affiche le Ternaire</h2> // && == a ? : .
           } 
           <br/>
            <ul> 
             
              {todos.map(todo => (<li key={todo}>{todo}</li>))}
             </ul>
        </div>
      );
}


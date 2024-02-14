import './App.css';


var a = 3
var termair = true
const style1 = { backgroundColor: 'green'}
const style2 = { backgroundColor: 'red'}

const todos = [
  'kageu ulrich',
  'nguaingam merveille',
  'djouche thrist',
  'noumsi fortune'
]

function App() {
   const handleClick = ()=>{
    alert("j'ai clické sur le titre")
   }
  //  const changeCouleur=(a) => { a=prompt('entrer un nombre') }
  return (
    <div className="App" >
       <h1 style={a===3 ? style2 : style1} > bonjour les gens </h1>
       <h2><button onClick={handleClick}>leTitre</button></h2>
       {termair &&<h2> affiche le Tairemere</h2> // && == a ? :
       } 
       <br/>
        <ul> 
         
          {todos.map(todo => (<li key={todo}>{todo}</li>))}
         </ul>
    </div>
  );
}

export default App;

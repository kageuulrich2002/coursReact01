import './App.css';
import IntroJsx from "./cours/Cours.jsx"; 
import FluxDonnee from './cours/fluxDonnee';
import Formulaire from "./cours/formulaire.jsx";
import HookUseSate from "./cours/hookUseSate.jsx";
import HookUseMemo from './cours/useMemo';
import UseEffect from './cours/useRffect';
function App() {

  
  return (
    <div className="container" >
      <IntroJsx />
      <HookUseSate />
      <Formulaire />
      <FluxDonnee  />
      <UseEffect />
      <HookUseMemo />
      
   
   <br/><br/>
    </div>
  );
}

export default App;

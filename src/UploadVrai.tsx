import "./tableau.css";
import Pepper from "./assets/XavierChalet.jpg"
import Alice from "./assets/aliceChalet.png"
import Eliane from "./assets/ElianeChalet.jpeg"



function PepperS(){
  return <img className="image" src={Pepper}></img>
  }
  
function AliceS(){
  return <img className="image" src={Alice}></img>
}
function ElianeS(){
  return <img className="image" src={Eliane}></img>
}
 
      
    
  


function Func() {
    const equipe1 = [
        { Nom: "Pepper", Photo: <PepperS/>},
        { Nom: "Eliane", Photo: <ElianeS/>},
        
      ];

      const equipe2 = [
        { Nom: "Alice", Photo: <AliceS/>},
      ];


      

    return  <div className="App">
    <header>Team1</header>
  
      <table>
        <tr>
          <th>Nom</th>
          <th>Photo</th>
        </tr>
        {equipe1.map((val, key) => {
          return (
            <tr key={key} className="imageCoul">
              <td>{val.Nom}</td>
              <td>{val.Photo}</td>
            </tr>
          );
        })}
      </table>

      <header>Team2</header>
  
      <table>
        <tr>
          <th>Nom</th>
          <th>Photo</th>
        </tr>
        {equipe2.map((val, key) => {
          return (
            <tr key={key} className="imageCoul">
              <td>{val.Nom}</td>
              <td>{val.Photo}</td>
            </tr>
          );
        })}
      </table>
      </div>
}

export default Func;
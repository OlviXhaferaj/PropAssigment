import './App.css';
import PersonCard from './Components/PersonCard';
function App() {
  return (
    <div className="App">
      <PersonCard name={"Doe"} 
      lname={"Jane"} 
      age={45} 
      hcolor = {"Black"}
      />
      <PersonCard 
      name={"Smith"}
      lname={"John"}
      age={88}
      hcolor={"Brown"}
      />
      <PersonCard
      name={"Fillmore"}
      lname={"Millard"}
      age={50}
      hcolor={"Brown"}
      />
      <PersonCard
      name={"Smith"}
      lname={"Maria"}
      age={62}
      hcolor={"Brown"}
      />
    </div>
  );
}

export default App;

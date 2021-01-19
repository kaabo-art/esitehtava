import './App.css';
const names = require('./names.json')
const numbers = [1, 2, 3, 4, 5];


const App = () => {
  console.log('names: ', names)
  return (
    <div className="App">
      <header className="App-header">

        <p>
          Tämä on nimilista...
        </p>
         <div>{names.names.map((name) =>
          <li>{name.name}, {name.amount}</li>)}
        </div> 

      </header>
    </div>
  );
}

export default App;

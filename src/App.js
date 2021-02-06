import React, {useState, useEffect} from 'react';
import './App.css';
import Search from "./components/search/search";
import CardList from "./components/card-list/card-list";


function App() {
  const [monsters, setMonsters] = useState([])
  const [searchField, setSearchField] = useState('')

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(response => setMonsters(response))
  },[])

  const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField))
  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <Search setSearchField={setSearchField} placeholder={'search monsters'} />
      <CardList monsters={filteredMonsters}/>
    </div>
  );
}

export default App;

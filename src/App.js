import { Component } from 'react';
import logo from './logo.svg';
import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [], 
      searchField: ''
  };
  console.log('constructor');
  }

  componentDidMount() {
    console.log('component did mount');
    fetch('https://jsonplaceholder.typicode.com/users') 
      .then((response) => response.json())
      .then(users => this.setState(
        () => { return {monsters: users} 
      },
      () => {
        console.log(this.state)
      }
      ))
  }

  onSearchChange = (event) => {
         // console.log(event)
        //console.log(event.target.value)
        const searchField = event.target.value.toLocaleLowerCase()

         this.setState(() => {
          return { searchField};
        }, () => {console.log({searchField})}
        )
      }

  render() {
    console.log('render');

    const {monsters, searchField, } = this.state;
    const {onSearchChange} = this;

    const filteredMonsters = monsters.filter((monster) => {
            return monster.name.toLocaleLowerCase().includes(searchField);
        });
    return (
    <div className="App">
      <SearchBox
          className='monsters-search-box'
          onChangeHandler={onSearchChange}
          placeholder='search monsters'/>
      <CardList monsters={filteredMonsters}/>
    </div>
  );
  }
}

export default App;

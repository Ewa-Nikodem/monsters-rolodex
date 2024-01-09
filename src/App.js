import { Component } from 'react';
import logo from './logo.svg';
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
      )) //this.setState({monsters: users}))
  }

  render() {
    console.log('render');
    return (
    <div className="App">
      <input className='search-box' type='search' placeholder='search monsters' onChange={(event) => {
        console.log(event.target.value)
        const searchString = event.target.value.toLocaleLowerCase()
        const filteredMonsters = this.state.monsters.filter((monster) => {
            return monster.name.toLocaleLowerCase().includes(searchString);
        });

         this.setState(() => {
          return { monsters: filteredMonsters};
        })
      }}/>
      {this.state.monsters.map( (monster) => {
        return <div key={monster.id}><h1>{monster.name}</h1></div>
      })
      }
    </div>
  );
  }
}

export default App;

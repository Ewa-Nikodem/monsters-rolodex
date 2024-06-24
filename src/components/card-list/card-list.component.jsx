import { Component } from "react";

class CardList extends Component {
    render() {
    const {monsters} = this.props;
      return ( //return (<div>Hello, I am a cardlist component</div>);
      <div>
        {monsters.map( (monster) => {
        return (
            <div key={monster.id}>
                <h1>{monster.name}</h1>
            </div>
            )})
      } 
      </div>
      );       
    }
}

export default CardList;
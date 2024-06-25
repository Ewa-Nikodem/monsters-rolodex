import { Component } from "react";
import './card-list.styles.css';
import Card from "../card/card.component";

class CardList extends Component {
    render() {
    const {monsters} = this.props;

      return ( //return (<div>Hello, I am a cardlist component</div>);
      <div className="card-list">
        {monsters.map( (monster) => {
          
        return (
          <Card key={monster.id} monsters={monster}/>
        )
          })
      } 
      </div>
      );       
    }
}

export default CardList;
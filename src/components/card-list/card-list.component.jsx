import './card-list.styles.css';
import Card from "../card/card.component";


// const CardList = (props) => {  //<= 2 diff ways of writing props
//  const {monsters} = props;

const CardList = ({monsters}) => {  //destructuring right inside of the parameter

 return ( //because we dont have anything else, we can also do an implicit return (without the word return)
  <div className="card-list">
    {monsters.map(monster => {
      return (
        <Card monsters={monster}/>
      )
    })}
  </div>
 )
}

export default CardList;

// class CardList extends Component {
//     render() {
//     const {monsters} = this.props;

//       return ( //return (<div>Hello, I am a cardlist component</div>);
//       <div className="card-list">
//         {monsters.map( (monster) => {
          
//         return (
//           <Card monsters={monster}/>
//         )
//           })
//       } 
//       </div>
//       );       
//     }
// }

//export default CardList;
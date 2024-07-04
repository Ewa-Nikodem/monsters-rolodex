import './card.styles.css';


const Card = (props) => {

  const {id, email, name} = props.monsters;

  return(
    <div className="card-container" key={id}>
        <img 
            alt={`monster ${name}`} 
            src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
            <h2>{name}</h2>
            <p>{email}</p>
    </div>
  )
}

// class Card extends Component {
//     render() {

//         const {monsters} = this.props;
//         const {name, email, id} = monsters; //or immediately  const {name, email, id} = this.props.monsters;

//         return (     
//             <div className="card-container" key={id}>
//               <img 
//                 alt={`monster ${name}`} 
//                 src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
//               <h2>{name}</h2>
//               <p>{email}</p>
//             </div>
//             )    
//   }}


export default Card;
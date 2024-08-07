import { Component } from "react";
import './search-box.styles.css';


const SearchBox = (props) => {

    const {className, placeholder, onChangeHandler} = props;

    return(
        <input 
            className={`search-box ${className}`}
            type='search' 
            placeholder={placeholder}
            onChange={onChangeHandler}/>
    )
}
export default SearchBox;

// class SearchBox extends Component {
//     render() {
//         //const {className, placeholder, onChangeHandler} = this.props;
//         return(
//             <input 
//                 className={`search-box ${this.props.className}`}
//                 type='search' 
//                 placeholder={this.props.placeholder}
//                 onChange={this.props.onChangeHandler}/>
//         );}
// }
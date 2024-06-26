import { Component } from "react";
import './search-box.styles.css';

class SearchBox extends Component {
    render() {
        //const {className, placeholder, onChangeHandler} = this.props;
        return(
            <input 
                className={`search-box ${this.props.className}`}
                type='search' 
                placeholder={this.props.placeholder}
                onChange={this.props.onChangeHandler}/>
        );}
}

export default SearchBox;
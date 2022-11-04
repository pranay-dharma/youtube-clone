import React from 'react'
import '../App.css';


class SearchBar extends React.Component{
    state = {
        term: ''
    }
    onInputChange = e => {
        this.setState({term:e.target.value})
    };
    onFormSubmit = e =>{
e.preventDefault();
this.props.onFormSubmit(this.state.term);
    }

    render(){
        return(
           
           <>
           <form onSubmit={this.onFormSubmit}>
            <div>
                <input type='search' placeholder='search for video...' id='search' value={this.state.term} onChange={this.onInputChange} />
            </div>
            </form>
            </>
        )
    }
}
export default SearchBar
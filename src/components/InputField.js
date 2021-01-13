//Main Component of search app
//allows user to enter a search item 
import React from 'react';
import './InputField.css'

class InputField extends React.Component {
    state = {term: ''}
    
    //callback function called whenever input is changed inside search box
    onChange = (event) => {
        //re-renders component 
        this.setState({term: event.target.value})
    }

    //callback function called whenever user presses enter on keyboard
    onSubmit = (event) => {
        //prevents default link behavior of opening a new page
        event.preventDefault();
        this.props.userSubmit(this.state.term);
    }
    render() {
        return (
            <div>
                <form onSubmit= {this.onSubmit} className = "container">
                    <label><h2>Search: </h2></label>
                    <input 
                    className="userInput" 
                    type="text" 
                    value={this.state.term}
                    onChange={this.onChange}
                    />
                </form>
            </div>
        )
    }
}

export default InputField;
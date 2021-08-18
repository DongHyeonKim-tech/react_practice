import React, {Component} from 'react';

class EventPractice extends Component {

    state = {
        username: "",
        message: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleClick = () => {
        if( this.state.username !== "" && this.state.message!== "" ) {
            alert(this.state.username + ": " + this.state.message);
            this.setState({
                username: "",
                message: ""
            });            
        }
        else {
            alert("Please fill in all blanks")
        }
    }

    handleKeyPress = (e) => {
        if(e.key === "Enter") {
            this.handleClick();
        }
    }

    render() {
        return (
            <div>
                <h1>EventPractice</h1>
                <input
                  type="text"
                  name="username"
                  placeholder="사용자명"
                  value={this.state.username}
                  onChange={this.handleChange}
                />
                <input
                  type="text"
                  name="message"
                  placeholder="메시지"
                  value={this.state.message}
                  onChange={this.handleChange}
                  onKeyPress={this.handleKeyPress}
                />
                <button onClick={this.handleClick}>Confirm</button>
            </div>
        )
    }

}

export default EventPractice
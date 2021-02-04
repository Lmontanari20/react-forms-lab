import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      text: '',
      counter: props.maxChars
    };
  }

  // handlers 
  handleChange = event => {
    let str = event.target.value
    let count = this.state.counter - str.length
    
    this.setState({
      text: str,
      counter: count
    })
    console.log(this.state.text)
  }


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.handleChange(event)} value={this.state.text}/>
        <p>{this.state.counter}</p>
      </div>
    );
  }
}

export default TwitterMessage;

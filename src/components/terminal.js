import React, { Component } from "react";
import '../css/terminal.css';

export default class Terminal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: ["Chatbot says: \"Hi! I'm a chatbot here to answer any questions you might have about Enrico.\""],
      currentCommand: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  /*
    componentDidUpdate(prevProps,prevState) {
      if(prevProps.currentCommand!=this.props.currentCommand){
        var history = this.state.history
        history.push(this.state.currentCommand)
        this.setState({
          history: history,
          currentCommand:this.props.currentCommand
        })
      }
    }
  */

  renderHistory() {
    var components = []
    var history = this.state.history
    for (var command in history) {
      components.push(<li>{history[command]}</li>)
    }
    return components
  }

  handleKeyDown = async e => {
    if (e.key === 'Enter') {
      var history = this.state.history
      history.push(this.state.currentCommand)

      var xmlhttp = new XMLHttpRequest();
      var oldThis = this;
      xmlhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
          // document.getElementById("result").innerHTML=this.responseText;
          var result = JSON.parse(this.responseText)
          history.push("Chatbot says: \"" + result + "\"")
          if (history.length > 5) {
            history.splice(0, 2);
          }

          oldThis.setState({
            history: history,
            currentCommand: ""
          })
        }
        else if (this.readyState === 4 && this.status !== 200) {
          history.push("Error returned from chatbot API.")
          history.push(this.status)
          oldThis.setState({
            history: history,
            currentCommand: ""
          })
        }
      };

      xmlhttp.open("POST", "https://us-central1-personal-chatbot-793a5.cloudfunctions.net/chat", true);
      var myMessage = { "message": this.state.currentCommand };
      if (this.state.currentCommand === "") {
        myMessage = { "message": "Empty" }
      }
      var blob = new Blob([JSON.stringify(myMessage, null, 2)], { type: 'application/json' });
      xmlhttp.send(blob);
    }
  }

  handleChange = e => {
    this.setState({
      currentCommand: e.target.value
    })
  }

  render() {
    return (
      <div className="terminal">

        <div className="history">
          {this.renderHistory()}
        </div>

        <div className="currentCommand">
          <li><input type="text" onKeyDown={this.handleKeyDown} onChange={this.handleChange} value={this.state.currentCommand} /></li>
        </div>

      </div>
    )
  }
}
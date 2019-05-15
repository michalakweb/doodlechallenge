import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    messages: []
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    fetch('https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0/?token=6bMaqT4jsfNY')
    .then(response => response.json())
    .then(
      data => {
        data = Object.values(data);
        this.setState({messages: [...data]});
      }
    )
  }

  render() {
    return (
      <div className='app'>
        Hello
        {
          //Navbar
          //MessageList
          //SendMessageForm
        }
      </div>
    )
  }
}

export default App;

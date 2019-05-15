import React from 'react';
import './App.css';

// Components
import Navbar from './components/Navbar';
import MessageList from './components/MessageList';
import SendMessageForm from './components/SendMessageForm';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
        messages: []
    }
    this.sendMessage = this.sendMessage.bind(this)
    this.getData = this.getData.bind(this)
  } 

  // App loads data once the component mounts
  componentDidMount() {
    this.getData();
  }

  // getting data is a fucntion, because it will also
  // be called when a new message is sent
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

  // message is sent via a post method 
  // and then component updates its state via getData()
  sendMessage(message) {
    fetch('https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0/?token=6bMaqT4jsfNY', {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({message: `${message}`, author: 'Mateusz'})
    })
    .then(() => {
        this.getData();
    }
    );
  }

  render() {
    return (
      <div className='container'>
        <div className='column'>
          <Navbar/>
        </div>
        <div className='column--list'>
          <MessageList messages={this.state.messages} />
        </div>
        <div className='column'>
          <SendMessageForm sendMessage={this.sendMessage}/>
        </div>
        
      </div>
    )
  }
}

export default App;

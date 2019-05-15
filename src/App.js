import React from 'react';
import './App.css';

// Components
import Navbar from './components/Navbar';
import MessageList from './components/MessageList';
import SendMessageForm from './components/SendMessageForm';

class App extends React.Component {
  state = {
    messages: []
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

  render() {
    return (
      <div className='app'>
        <Navbar/>
        <MessageList messages={this.state.messages} />
        <SendMessageForm />
      </div>
    )
  }
}

export default App;

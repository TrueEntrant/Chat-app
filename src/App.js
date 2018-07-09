import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import Field from './msgField';

class App extends Component {

  state = {
    messages : [],
    textMessage: ""
  };

  constructor (props){
    super(props);


    this.onTextMassageChange = this.onTextMassageChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onTextMassageChange(e) {  
    this.setState({textMessage: e.target.value});
  }

  onSubmit(event) {
    ( this.state.textMessage &&
    this.setState({
      messages: [...this.state.messages, this.state.textMessage],
      textMessage: ""
    }));
    
    event.preventDefault();
  }

  componentDidMount() {
    if(document.querySelector('.field'))
    console.dir(document.querySelector('.field'));
    // .scrollWidth = 5;
  }

  componentDidUpdate() {
    if(document.querySelector('.field'))
    document.querySelector('.field').scrollTop = 99999999;
  }

  render() {
    return (
        <div className='App'>
          <div className='Users'>
            <div className='User Link'>
              <img src="user/avatar" alt="ava"/>
              <p className='nickName'>User 1</p>
            </div>
            <div className='Add Link'>
              <p>Add new contact</p>
            </div>
          </div>

          <div className='messages'>
            <Field 
              msg={this.state.messages} 
              user='User 1'
            />
            <Form  
              value={this.state.textMessage} 
              onChange={this.onTextMassageChange}
              onClick={this.onSubmit}
            />
          </div>
        </div>
    );
  }
}

export default App;

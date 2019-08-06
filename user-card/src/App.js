import React from 'react';
import axios from "axios";
import styled from "styled-components";
import {Card, Image} from 'semantic-ui-react';

import './App.css';

//https://api.github.com/users/

const StyleCard = styled.div`
width: 25%; 
height: 30%; 
background: grey; 
color: black;
border: 3px solid blue; 
border-radius: 2%; 
text-align: left;
font-weight: 600; 
font-size: 1rem; 
margin-left: 1rem;
margin-top: 2rem;

`
const StyleAnswer = styled.p`
color: white;
font-size: 1rem; 
margin-top: 1rem;  
`

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      user: []
    }
    
  }

  componentDidMount(){
    this.fetchUser();
  };

  
  

  fetchUser = () => {
    axios.get(`https://api.github.com/users/Obaida-Albaroudi`)
      .then( data => {
        console.log("data", data.data)
        this.setState ({user: data.data})
      })
      .catch (err => {return "error"});
  }

  render(){
    console.log(this.state.user);
  return (
    <StyleCard /*onClick={}*/>
                      

        <Card>
          
            <Image width="200" src={this.state.user.avatar_url}/>
            <Card.Header>Name: <StyleAnswer>{this.state.user.name}</StyleAnswer></Card.Header>
            <Card.Content> Bio: <StyleAnswer>{this.state.user.bio}</StyleAnswer></Card.Content> 
            <Card.Content>Followers: <StyleAnswer>{this.state.user.followers}</StyleAnswer> </Card.Content> 
            <Card.Content>Following: <StyleAnswer>{this.state.user.following}</StyleAnswer> </Card.Content>
        
        </Card>

    </StyleCard>
  );
  }
}

export default App;

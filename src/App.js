import './App.css';
import Login from "./components/Login";
import Home from "./components/Home";
import Header from "./components/Header";
import styled from 'styled-components';

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { useEffect } from 'react';
import { getUserAuth } from './actions';
import { connect } from 'react-redux';
import Work from './components/Work';
import Jobs from './components/Jobs';
import Message from './components/Message';
import Notifications from './components/Notifications';
import MyNetworkLeft from './components/MyNetworkLeft';
import MyNetworkRight from './components/MyNetworkRight';

function App(props) {
  useEffect(() => {
    props.getUserAuth();
  }, []);


  return (
    <div className="App">
      <Router>
        <Work/>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/home">
            <Header/>
            <Home/>

          </Route>
          <Route path="/mynetwork">
            <Header/>
            <Network>
              <MyNetworkLeft/>
              <MyNetworkRight/>
            </Network>

          </Route>
          <Route path="/jobs">
            <Header/>
            <Jobs/>
          </Route>
          <Route path="/messaging">
            <Header/>
            <Message/>
          </Route>
          <Route path="/notifications">
            <Header/>
            <Notifications/>
          </Route>

          {/* Make it a model */}
          <Route path="/work">
              <Header />  
              <Work/>  
          </Route>
        </Switch>
      </Router>


      
    </div>
  );
}
const Network = styled.div`
    display: flex;
    padding: 93px 380px;
    // background-color: red;
    justify-content: space-between;
    @media(max-width: 768px){
      flex-direction: column;
      padding: 0;
      align-items: center;
    }
`;

const mapStateToProps = (state) =>{
  return {};
}

const mapDispatchToProps = (dispatch) => ({
  getUserAuth: () => dispatch(getUserAuth()),
});



export default connect(mapStateToProps, mapDispatchToProps)(App);

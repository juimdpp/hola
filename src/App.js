// React imports
import React from 'react';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';

// Local imports
import Header from './components/Header/Header';
import MainPage from './containers/MainPage/MainPage';
import Signup from './containers/Authentication/Signup/Signup';
import Login from './containers/Authentication/Login/Login';
import Introduction from './containers/Introduction/Introduction';
import Matching from './containers/Matching/Matching';
import Notices from './containers/Notice/Notices';
import Help from './containers/Help/Help';
import Mypage from './containers/Profile/Mypage';
import MatchingList from './containers/Profile/MatchingList';
import './App.scss';
import PDFExample from './containers/pdfUpload';

// TODO: handle logout button
function App(props) {
  return(
    <BrowserRouter history={props.history}>
      <div className="App">
        <div id="hola-header">
          <Header history={props.history} />
        </div>
        <Switch>
          <Route path='/main-page/' exact render={() => <MainPage history={props.history}/>} />
          <Route path='/signup/' exact render={() => <Signup history={props.history}/>} />
          <Route path='/login/' exact render={() => <Login history={props.history}/>} />
          <Route path='/introduction/' exact render={() => <Introduction history={props.history}/>} />
          <Route path='/matching/' exact render={() => <Matching history={props.history}/>} />
          <Route path='/notice/' exact render={() => <Notices history={props.history}/>} />
          <Route path='/help/' exact render={() => <Help history={props.history}/>} />
          <Route path='/matching-list/' exact render={() => <MatchingList history={props.history}/>} />
          <Route path='/mypage/' exact render={() => <Mypage history={props.history}/>} />
          <Route path='/pdf/' exact render={() => <PDFExample />} />
          <Redirect from='/' exact to='/main-page'/>
          <Route render = {() => <h1>Not Found</h1>} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default (App);

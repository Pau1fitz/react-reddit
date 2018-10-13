import * as React from 'react';
import './App.css';
// import $ from 'jquery';
import { connect } from 'react-redux';
import { fetchUser } from './actions/userActions';
import { fetchTokenSuccess, fetchTokenError } from './actions/tokenActions';
import { getBestRequest } from './actions/listingActions';
import { bindActionCreators } from 'redux';
import Nav from './components/Nav';

class App extends React.Component {

  // componentDidMount() {

  //   const urlString = window.location.href
  //   const url = new URL(urlString)
  //   const code = url.searchParams.get('code')
  //   let token = localStorage.getItem('token')
  //   token = JSON.parse(token);

  //   if(!code && !token) {
  //     window.location.href = 'https://www.reddit.com/api/v1/authorize?client_id=6c4Q-RcA-_QACA&response_type=code&state=RANDOM_STRING&redirect_uri=http://localhost:3000/&duration=permanent&scope=identity, edit, flair, history, modconfig, modflair, modlog, modposts, modwiki, mysubreddits, privatemessages, read, report, save, submit, subscribe, vote, wikiedit, wikiread'
  //   } else if(!token) {
  //     $.ajax({ 
  //       url: 'https://www.reddit.com/api/v1/access_token', 
  //       type: 'POST', 
  //       dataType: 'json', 
  //       data: { 
  //         code: code, 
  //         client_id: '6c4Q-RcA-_QACA', 
  //         client_secret: 'Pp8IVdOkyIs5c4ZyAcXy9iIeEKc', 
  //         redirect_uri: 'http://localhost:3000/', 
  //         grant_type: 'authorization_code' 
  //       }, 
  //       error: function(err) { 
  //         this.props.fetchTokenError(err)
  //       }, 
  //       success: (resp)  => {
  //         this.props.fetchTokenSuccess(resp);
  //         this.props.fetchUser(resp.access_token);
  //         if(resp.access_token) {
  //           localStorage.setItem('token', JSON.stringify(resp));
  //           this.props.getBestRequest(resp.access_token);  
  //         }
  //       }, 
  //       beforeSend: function(xhr) { 
  //         xhr.setRequestHeader("Authorization", "Basic " + btoa("6c4Q-RcA-_QACA:Pp8IVdOkyIs5c4ZyAcXy9iIeEKc")); // I used my client_id and client_secret 
  //       } 
  //     });
  //   } else {
  //     this.props.fetchUser(token.access_token)
  //     this.props.getBestRequest(token.access_token)
  //     this.props.fetchTokenSuccess(token)
  //   }
   
  // }
  
  public render() {
    return (
      <div className="App">
        <Nav />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.tokenReducer.access_token,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchUser,
    fetchTokenSuccess,
    fetchTokenError,
    getBestRequest
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

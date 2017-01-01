import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, IndexRedirect, hashHistory } from 'react-router';
import App from './app.jsx';
import HomeContainer from './home/home_container';
import AddPostContainer from './add_post/add_post_container';
import ShowPostContainer from './show_post/show_post_container';
import EditPostContainer from './edit_post/edit_post_container';

const Root = ({ store }) => {

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory} onUpdate={() => window.scrollTo(0, 0)}>
        <Route path="/" component={App} >
          <IndexRedirect to="/blog" />
          <Route path="/blog" component={HomeContainer}/>
          <Route path="/blog/:id" component={ShowPostContainer}/>
          <Route path="/blog/:id/edit" component={EditPostContainer}/>
          <Route path="/add-a-post" component={AddPostContainer}/>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;

import React from 'react';
import { Link } from 'react-router';
import { withRouter } from 'react-router';
import UserButtons from './user_buttons';

const TopBar = ({router, currentUser, logout, clearErrors}) => {

  const redirectToHome = () => {
    router.push('/');
  };

  return (
    <div className={"top-bar"}>
      <img
        onClick={redirectToHome}
        src="https://res.cloudinary.com/dsguwnfdw/image/upload/v1482869074/ml-logo-220x220_oihs1a.png"
        className={"logo"}
      />
      <UserButtons currentUser={currentUser} logout={logout} clearErrors={clearErrors}/>
    </div>
  );
};

export default withRouter(TopBar);

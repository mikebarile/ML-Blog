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
        src="https://res.cloudinary.com/dsguwnfdw/image/upload/v1482872640/Screen_Shot_2016-12-27_at_4.01.34_PM_bbjqzs.png"
        className={"logo"}
      />
    <UserButtons currentUser={currentUser} logout={logout} clearErrors={clearErrors} router={router}/>
    </div>
  );
};

export default withRouter(TopBar);

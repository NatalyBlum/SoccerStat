import React from 'react';
import Header from "../header/header";
import Main from "../main/main";

function PageLayout() {

  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Main />
      </div>
    </div>
  );
}

export default PageLayout;

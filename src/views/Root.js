import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainTemplate from 'components/templates/MainTemplate';
import Home from 'views/Home';
import Contact from 'views/Contact';

function Root() {
  return (
    <MainTemplate>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </BrowserRouter>
    </MainTemplate>
  );
}

export default Root;

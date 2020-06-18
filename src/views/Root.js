import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainTemplate from 'components/templates/MainTemplate';
import Home from 'views/Home';
import Contact from 'views/Contact';
import Specialists from 'views/Specialists';
import NotAvailable from 'views/NotAvailable';

function Root() {
  return (
    <BrowserRouter basename={`${process.env.PUBLIC_URL}/`}>
      <MainTemplate>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/services" component={NotAvailable} />
          <Route exact path="/specialists" component={Specialists} />
          <Route exact path="/prices" component={NotAvailable} />
          <Route exact path="/about" component={NotAvailable} />
          <Route exact path="/news" component={NotAvailable} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/reservations" component={NotAvailable} />
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  );
}

export default Root;

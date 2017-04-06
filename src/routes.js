import React from 'react';
import { Route, IndexRoute } from 'react-router';
import FixedContainer from './components/layouts/FixedContainer';
import Homepage from './components/Homepage';
import EventsListContainer from './containers/EventsListContainer';
import EventDetailContainer from './containers/EventDetailContainer';


export default (
    <Route path="/" component={FixedContainer}>
      <IndexRoute component={Homepage} />
      <Route path="/events" component={EventsListContainer} />
      <Route path="/event" component={EventDetailContainer} />
    </Route>
);

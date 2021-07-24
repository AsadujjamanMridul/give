import { createContext, useState } from 'react';
import 'antd/dist/antd.css';

import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Login from './components/Login/Login';
import AdminPanel from './components/Admin/AdminPanel/AdminPanel';
import GalleryView from './components/GalleryView/GalleryView';
import Campaigns from './components/Campaigns/Campaigns/Campaigns';
import Charity from './components/Charity/Charity/Charity';
import ToG from './components/ToG/ToG';
import CashDonation from './components/Charity/CashDonation/CashDonation';
import BecomeAVolunteer from './components/Charity/BecomeAVolunteer/BecomeAVolunteer';
import SupportACampaign from './components/Charity/SupportACampaign/SupportACampaign';
import CustomDonation from './components/Charity/CustomDonation/CustomDonation';
import CheckAdmin from './components/SharedComponents/CheckAdmin/CheckAdmin'
import Dashboard from './components/User/Dashboard/Dashboard';

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState(
    localStorage.getItem('loggedInUser') ?
      JSON.parse(localStorage.getItem('loggedInUser')) : {}
  )

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>npm
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/tog'>
            <ToG />
          </Route>
          <Route path='/campaigns'>
            <Campaigns />
          </Route>
          <Route path='/charity'>
            <Charity />
          </Route>
          <Route path='/donate-cash'>
            <CashDonation />
          </Route>
          <Route path='/custom-donation'>
            <CustomDonation />
          </Route>
          <Route path='/support-campaign'>
            <SupportACampaign />
          </Route>
          <Route path='/become-volunteer'>
            <BecomeAVolunteer />
          </Route>
          <Route path='/gallery'>
            <GalleryView />
          </Route>
          <Route path='/login/:user'>
            <Login />
          </Route>
          <PrivateRoute path='/admin'>
            <CheckAdmin />
          </PrivateRoute>
          <PrivateRoute path='/dashboard'>
            <Dashboard/>
          </PrivateRoute>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;

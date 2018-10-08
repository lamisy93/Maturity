import React, { Component } from 'react';
import './App.scss';
import FeaturesTeam from './components/FeaturesTeam/FeaturesTeam';
import Form from './components/Form/Form';
import SearchSection from './components/FeaturesTeam/FeaturesTeamSection/Sections/SearchSection';
import TestSection from './components/FeaturesTeam/FeaturesTeamSection/Sections/TestSection';
import ContactSection from './components/FeaturesTeam/FeaturesTeamSection/Sections/ContactSection';
import PubliciteSection from './components/FeaturesTeam/FeaturesTeamSection/Sections/PubliciteSection';
import AccelererSection from './components/FeaturesTeam/FeaturesTeamSection/Sections/AccelererSection';
import AnnonceSection from './components/FeaturesTeam/FeaturesTeamSection/Sections/AnnonceSection';
import IdentiteSection from './components/FeaturesTeam/FeaturesTeamSection/Sections/IdentiteSection';
import PaiementSection from './components/FeaturesTeam/FeaturesTeamSection/Sections/PaiementSection';
import ConcretisationSection from './components/FeaturesTeam/FeaturesTeamSection/Sections/ConcretisationSection';
import ToolsSection from './components/FeaturesTeam/FeaturesTeamSection/Sections/ToolsSection';
import Header from './components/Header/Header';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          
          <Route exact path="/" render={
            (props) => 
              <div className="ftWrapper">
                  <Link to="/ContactSection">
                    <FeaturesTeam ftName="Contact" campagneName="Campagne TOTO" icon="fas fa-user" theme="orange" status="En cours" />
                  </Link>
                  <Link to="/PubliciteSection">
                    <FeaturesTeam ftName="Publicité" campagneName="Campagne Lorem" icon="fas fa-bullhorn" theme="green" status="Terminée" />
                  </Link>
                  <Link to="/AccelererSection">
                    <FeaturesTeam ftName="Accélérer" campagneName="Campagne Sit" icon="fas fa-exchange-alt" theme="pink" status="En cours" />
                  </Link>
                  <Link to="/AnnonceSection">
                    <FeaturesTeam ftName="Annonce" campagneName="Campagne Ipsum" icon="far fa-newspaper" theme="skyblue" status="Terminée" />
                  </Link>
                  <Link to="/IdentiteSection">
                    <FeaturesTeam ftName="Identité" campagneName="Campagne Sit" icon="fas fa-fingerprint" theme="purple" status="En cours" />
                  </Link>
                  <Link to="/SearchSection">
                    <FeaturesTeam ftName="Search" campagneName="Campagne Ipsum" icon="fas fa-search" theme="black" status="Terminée" />
                  </Link>
                  <Link to="/PaiementSection">
                    <FeaturesTeam ftName="Paiement" campagneName="Campagne Ipsum" icon="far fa-credit-card" theme="grey" status="Terminée" />
                  </Link>
                  <Link to="/ConcretisationSection">
                    <FeaturesTeam ftName="Concrétisation" campagneName="Campagne Sit" icon="far fa-handshake" theme="blue" status="En cours" fontSize="medium" />
                  </Link>
                  <Link to="/ToolsSection">
                    <FeaturesTeam ftName="Tools" campagneName="Campagne Ipsum" icon="fas fa-sliders-h" theme="brown" status="Terminée" />
                  </Link>
                  <Link to="/TestSection">
                    <FeaturesTeam ftName="Test" campagneName="Campagne Test" icon="fas fa-vial" theme="test" status="En cours" />
                  </Link>
               </div>
              } 
           /> 
          <Route path="/ContactSection" component={ContactSection} />
          <Route path="/PubliciteSection" component={PubliciteSection} />
          <Route path="/AccelererSection" component={AccelererSection} />
          <Route path="/AnnonceSection" component={AnnonceSection} /> 
          <Route path="/IdentiteSection" component={IdentiteSection} /> 
          <Route path="/SearchSection" component={SearchSection} />
          <Route path="/PaiementSection" component={PaiementSection} />
          <Route path="/ConcretisationSection" component={ConcretisationSection} /> 
          <Route path="/ToolsSection" component={ToolsSection} />                 
          <Route path="/TestSection" component={TestSection} /> 
          <Route path="/Form" component={Form} /> 
        </div>
      </Router>
    );
  }
}

export default App;
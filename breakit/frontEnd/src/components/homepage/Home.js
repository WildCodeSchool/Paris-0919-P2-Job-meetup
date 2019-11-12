import React from 'react';

import Footer from './Footer';
import ListFilter from './ListFilter';
import Filter from './Filter';
import MenuBurger from './MenuBurger';
import SimpleExample from './SimpleExample';
import ContactList from './ContactList';

import './Home.css';

class Home extends React.Component {

    render() {
        
        return (
            <div>
                    <MenuBurger className="menuburger" />
                    <ContactList className="contact"/>
                    <SimpleExample className="simpleexample"/>
                    <Filter className="filter" />
                    <ListFilter className="listfilter"/>
                    <Footer className="footer" />
            </div>
        );
    }
}

export default Home;
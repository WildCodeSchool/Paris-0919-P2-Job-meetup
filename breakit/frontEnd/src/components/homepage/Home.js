import React from 'react';

import Footer from './Footer';
import ListFilter from './ListFilter';
import Filter from './Filter';
import MenuBurger from './MenuBurger';
import SimpleExample from './SimpleExample';

class Home extends React.Component {
    render() {
        return (
            <div>
                <MenuBurger className="menuburger"/>
                <SimpleExample clasName="simpleexample"/>
                <Filter className="filter"/>
                <ListFilter className="listfilter"/>
                <Footer className="footer"/>
            </div>
        );
    }
}

export default Home;

import React from 'react';
// import Footer from './components/homepage/Footer';
// import ListFilter from './components/homepage/ListFilter';
// import Filter from './components/homepage/Filter';
// import MenuBurger from './components/homepage/MenuBurger';
// import SimpleExample from './components/homepage/SimpleExample';
// import { Provider } from 'react-redux';
// import store from './Store/store';
// import ContactList from './components/homepage/ContactList';
import SearchLanguages from './components/profil/profilLanguages/SearchLanguages'
import Languages from './components/profil/profilLanguages/Languages'
import './App.css';


class App extends React.Component {
 render() {
   return (
     <div>
       <SearchLanguages languages={Languages}/>
     </div>
     

     /* <Provider store={store}>
       <div>
         <MenuBurger className="menuburger"/>
         <ContactList className="contact"/>
         <SimpleExample clasName="simpleexample"/>
         <Filter className="filter"/>
         <ListFilter className="listfilter"/>
         <Footer className="footer"/>
       </div>
     </Provider> */
   );
 }
}
export default App;
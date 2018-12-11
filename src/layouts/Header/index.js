import React, { Component } from 'react'; 
import ItemList from '../../components/ItemList';

const navigationItems = [
    {
        css : "header__navigation-item", 
        name: "Nav 1",
    }, 
    {
        css : "header__navigation-item", 
        name: "Nav 2",
    },    
    {
        css : "header__navigation-item", 
        name: "Nav 3",
    }
];
class Header extends Component {
    
    render(){
        return (
            <section className="header">
                <ItemList items={navigationItems} css="header__navigation"/>
            </section>
        );
    }
}

export default Header; 
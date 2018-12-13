import React, { Component } from 'react'; 
import ItemList from '../../components/ItemList';

class Header extends Component {
    
    render(){
        let items = this.props.navigationItems && this.props.navigationItems.length > 0 ? 
                    this.props.navigationItems.map(item => {
                        return {
                                content : (
                                            <span>
                                                <a href={item.link}>{item.name}</a>
                                            </span>
                                        )
                        };
                    }): [];
        return (
            <section className="header">
                <div className="header__top-row">
                    <div className="header__logo">LOGO</div>
                    <ItemList items={items} listCss="header__navigation" itemCss="header__navigation-item"/>
                </div>
                <div className="header__banner">
                    
                </div>
            </section>
        );
    }
}

export default Header; 
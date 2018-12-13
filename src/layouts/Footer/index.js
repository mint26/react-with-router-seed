import React, { Component } from 'react'; 
import ItemList from '../../components/ItemList';

class Footer extends Component {
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
            <section className="footer">
                <ItemList items={items} listCss="footer__navigation" itemCss="footer__navigation-item"/>
            </section>
        );
    }
}

export default Footer; 
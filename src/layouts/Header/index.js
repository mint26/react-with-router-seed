import React, { Component } from 'react'; 
import ItemList from '../../components/ItemList';

class Header extends Component {
    
    constructor(props){
        super(props); 
        this.state = {
            mobileNavState : false
        }
    }

    mobileNavHandler = () => {
        this.setState({ mobileNavState : !this.state.mobileNavState }); 
    }
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

        let headerNavHide = !this.state.mobileNavState ? "header__top-hide" : ""; 
        
        return (
            <section className="header">
                <div className="header__top">
                    <div className="header__top-mobile-nav">
                        <i className="fas fa-bars" onClick={this.mobileNavHandler}></i>
                    </div>
                    <div className="header__top-logo">
                        <i className="fab fa-accusoft"></i>
                    </div>
                    <ItemList items={items} listCss={`header__top-navigation ${headerNavHide}`} itemCss="header__top-navigation-item"/>
                </div>
                <div className="header__banner">
                    <div className="header__banner-text">
                        <h1>Title is here</h1>
                        <h3>Sub text is here</h3>
                        <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups</p>
                    </div>
                    <div className="header__banner-pic">
                        <img src="/assets/images/batman.png" alt="banner-batman"/>
                        <img src="/assets/images/deadpool.png" alt="banner-deadpool"/>
                    </div>
                </div>
            </section>
        );
    }
}

export default Header; 
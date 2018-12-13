import React, { Component } from 'react'; 
import Footer from '../../layouts/Footer'; 
import Header from '../../layouts/Header'; 
import HttpService from '../../services/HttpService'; 
class Home extends Component {


    constructor(props){
        super(props); 
        this.state = {
            headerNavigations : [], 
            footerNavigations : []
        }
    }

    componentDidMount(){
        HttpService.getData().then(data => {
            if (data && !data.error && data.content){
                console.log(data); 
                this.setState({
                    headerNavigations : data.content.headerNavigations, 
                    footerNavigations : data.content.footerNavigations
                });
            }
        }); 
    }
    render(){
        console.log('HOME RENDER ::', this.state); 
        return (
            <section className="home">
                <Header navigationItems={this.state.headerNavigations}/>
                <section className="content">
                
                </section>
                <Footer navigationItems={this.state.footerNavigations}/>
            </section>
        );
    }
}

export default Home; 
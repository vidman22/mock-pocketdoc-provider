import React, { Component } from 'react';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';



class LandingPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <div>New Page</div>
                <Footer version={20200420.12}/>
            </div>
        );
    }
}

export default LandingPage;

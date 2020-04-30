import React, { Component } from 'react';

import Modal from '../../components/Modal/Modal';
import BackDrop from '../../components/BackDrop/BackDrop';

export default class Auth extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email: '',
             password: '',
             error: '',
             openModal: false,
        }
    }
    
    handleChange = (e) => {

        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleSubmit = () => {
        console.log("submitted");
    }

    toggleModal = () => {
        this.setState( prevState =>
            {
                return { openModal: !prevState.openModal}
            });
    }
    
    render() {
        return (
            <div className="login-container relative">

            	<div className="login-form-container">
            		<form onSubmit={this.handleSubmit}>
            			<div className="form-title txt-center">
            				<h1 className="txt-dark">Welcome back!</h1>
            				<h3>Sign into your account here</h3>
            			</div>

            			<div className="m20bottom">
            				<input id="emailInput" value={this.state.email}  placeholder="Email address" className="form-control input-md" name="email" onChange={this.handleChange}/>
            			</div>

            			<div className="m10bottom relative">
            				<input placeholder="Password" value={this.state.password} className="form-control input-md" name="password" onChange={this.handleChange} type="password"/>
            				<button onClick={this.toggleModal} type="button" className="forgot-link center-y">Forgot?</button>
            			</div>

            			<div className="m30top submit-container">
            				<p className="txt-error txt-center">{this.state.error}</p>
            				<button className="btn btn-theme btn-lg form-control" type="submit">Sign In</button>
            			</div>
            		</form>
            	</div>
                {this.state.openModal ? <Modal show={this.state.openModal}/> : null }
                {this.state.openModal ? <BackDrop togglemodal={this.toggleModal} show={this.state.openModal}/> : null }
            </div>
        )
    }
}

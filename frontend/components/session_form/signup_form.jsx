import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    update(field){
        return e => this.setState({[field]: e.currentTarget.value});
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.processForm(this.state).then(() => this.props.history.push('/'))
    }

    componentWillUnmount(){
        this.props.receiveErrors([]);
    }

    renderErrors(){
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return(
            <div>
                <div className="session-form">
                    <div className="session-form-top">
                        <Link to="/"><img className="yelp-clone-logo" src="https://i.ibb.co/G37QPsf/yelp-clone-logo-removebg-preview.png"/></Link>
                    </div>
                    <div className="session-errors-container">
                        <div className={this.props.errors.length === 0 ? "" : "session-errors-box-signup"}>
                            {this.renderErrors()}  
                        </div>
                    </div>
                    <div className="session-form-main">
                        <div className="session-form-fillout">
                            <form onSubmit={this.handleSubmit}>
                                <p className="session-form-header">Sign Up for yulp</p>
                                <p className="session-form-header-2">Connect with great local businesses</p>
                                <p className="session-form-header-3">By continuing, you agree to yulp’s <a href='https://terms.yelp.com/tos/en_us/20200101_en_us/' className="session-text">Terms of Service</a> and</p>
                                <p className="session-form-header-3">and acknowledge yulp’s <a href='https://terms.yelp.com/privacy/en_us/20200101_en_us/' className="session-text">Privacy Policy</a></p>
                                <br />
                                <div className="first-last-name">
                                    <input 
                                        type="text" 
                                        className="sign-up-name"
                                        value={this.state.first_name}
                                        placeholder="First Name" 
                                        onChange={this.update('first_name')} />
                                    <input 
                                        type="text" 
                                        className="sign-up-name"
                                        value={this.state.lname} 
                                        placeholder="Last Name"
                                        onChange={this.update('last_name')} /> 
                                </div>
                                <input 
                                    type="text" 
                                    value={this.state.email}
                                    placeholder="Email" 
                                    onChange={this.update('email')}
                                    className="session-form-input" />
                                <br/>
                                <input 
                                    type="password" 
                                    value={this.state.password}
                                    placeholder="Password" 
                                    onChange={this.update('password')}
                                    className="session-form-input" />
                                    <br/>
                                <input type="submit" value="Sign Up" className="submit"/>
                                <p className="session-form-bottom">Already on yulp? <Link to='/login' className="session-text">Log in</Link></p>
                            </form>
                        </div>
                        <img className="graphics" src="https://s3-media0.fl.yelpcdn.com/assets/2/www/img/7922e77f338d/signup/signup_illustration.png" />
                    </div>
                </div>
            </div>
        )
    }
}

export default SignupForm;
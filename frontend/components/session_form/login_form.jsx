import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demo = {
            email: "longchen@email.com",
            password: "longchen"
        };
    }

    update(field){
        return e => this.setState({[field]: e.currentTarget.value});
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.processForm(this.state).then(() => this.props.history.push(`/`))
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

    render(){
        return(
            <div>
                <div className="session-form">
                    <div className="session-form-top">
                        <Link to="/"><img className="yelp-clone-logo" src="https://i.ibb.co/ydJ6Mvg/yelp-clone-logo-removebg-preview.png"/></Link>
                    </div>
                    <div className="session-errors-container">
                        <div className={this.props.errors.length === 0 ? "" : "session-errors-box-login"}>
                            {this.renderErrors()}
                        </div>
                    </div>
                    <div className="session-form-main">
                            <div className="session-form-fillout">
                                <form onSubmit={this.handleSubmit}>
                                    <p className="session-form-header">Log in to Yelp_Clone</p>
                                    <p className="session-form-header-2">New to Yelp_Clone? &nbsp; <Link to='/signup' className="session-text">Sign up</Link></p>
                                    <p className="session-form-header-3">By logging in,</p>
                                    <p className="session-form-header-3">you agree to Yelp_Clone’s <a href='https://terms.yelp.com/tos/en_us/20200101_en_us/' className="session-text">Terms of Service</a></p>
                                    <p className="session-form-header-3">and acknowledge Yelp_Clone’s <a href='https://terms.yelp.com/privacy/en_us/20200101_en_us/' className="session-text">Privacy Policy</a></p>
                                    <br />
                                    <input 
                                        type="text" 
                                        value={this.state.email} 
                                        placeholder="Email" 
                                        onChange={this.update("email")} 
                                        className="session-form-input"/>
                                    <br/>
                                    <input 
                                        type="password" 
                                        value={this.state.password} 
                                        placeholder="Password" 
                                        onChange={this.update("password")} 
                                        className="session-form-input"/>
                                    <br />
                                    <p className="session-form-bottom">Forgot password?</p>
                                    <br />
                                    <input type="submit" value="Log In" className="submit"/>
                                </form>
                                <button className="demo-user-submit"onClick={() => this.props.processForm(this.demo).then(() => this.props.history.push(`/`))}>Demo User</button>
                                <p className="session-form-bottom">New to Yelp_Clone? <Link to='/signup' className="session-text">Sign up</Link></p>
                            </div>
                            <img className="graphics" src="https://s3-media0.fl.yelpcdn.com/assets/2/www/img/7922e77f338d/signup/signup_illustration.png" />
                    </div>
                </div>
            </div>  
        )
    }
}

export default LoginForm;
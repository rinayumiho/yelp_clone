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

    reviewModal1(){
        const regulation = document.getElementById("term");
        return(
            regulation.style.display = "block"
        )
    }

    removeModal1(){
        const regulation = document.getElementById("term");
        return(
            regulation.style.display = "none"
        )
    }

    reviewModal2(){
        const regulation = document.getElementById("policy");
        return(
            regulation.style.display = "block"
        )
    }

    removeModal2(){
        const regulation = document.getElementById("policy");
        return(
            regulation.style.display = "none"
        )
    }

    render(){
        return(
            <div>
                <div className="session-form">
                    <div className="session-form-top">
                        <Link to="/"><img className="yelp-clone-logo" src="https://i.ibb.co/G37QPsf/yelp-clone-logo-removebg-preview.png"/></Link>
                    </div>
                    <div className="session-errors-container">
                        <div className={this.props.errors.length === 0 ? "" : "session-errors-box-login"}>
                            {this.renderErrors()}
                        </div>
                    </div>
                    <div className="session-form-main">
                            <div className="session-form-fillout">
                                <form onSubmit={this.handleSubmit}>
                                    <p className="session-form-header">Log in to yulp</p>
                                    <p className="session-form-header-2">New to yulp? &nbsp; <Link to='/signup' className="session-text">Sign up</Link></p>
                                    {/* <p className="session-form-header-3">By logging in, you agree to yulp’s <a href='https://terms.yelp.com/tos/en_us/20200101_en_us/' className="session-text">Terms of Service</a> and</p> */}
                                    <p className="session-form-header-3">By logging in, you agree to yulp’s <span className="session-form-term" onClick={() => this.reviewModal1()}>Terms of Service</span> and</p>
                                    <div id="term"className="regulation-background" onClick={this.removeModal1}>
                                        <div className="regulation-container-top" onClick={e => e.stopPropagation()}>
                                            <div className="regulation-text">
                                                <div className="content-guidelines">
                                                    <p>Terms of Service</p>
                                                    <p className="x" onClick={this.removeModal1}>
                                                        <i className="fas fa-times"></i>
                                                    </p>
                                                </div>
                                                <div className="regulation-scrollable">
                                                    <p className="gen-guide">General Guidelines</p>
                                                    <br/>
                                                    <p>
                                                        Last Updated on December 13, 2019. These Terms of Service (which, together with the Business Terms below, are the “Terms”) are effective immediately for users accessing or using the Service without an Account or those registering Accounts on or after December 13, 2019, and will become effective January 31, 2020 for users with pre-existing Accounts.
                                                    </p>
                                                    <br/>
                                                    <p>
                                                        These Terms govern your access to and use of our products and services, including those offered through our websites, events, communications (e.g., emails, phone calls, and texts) and mobile applications (collectively, the “Service”). By accessing or using the Service, you are agreeing to these Terms, which form a legally binding contract with: (i) Yelp Inc., a Delaware corporation with its headquarters in San Francisco, California, unless you are a resident of a country in the European Economic Area (the “EEA”) or Switzerland; or (ii) Yelp Ireland Ltd., a limited liability company established and resident under the laws of the Republic of Ireland, if you are a resident of a country in the EEA or Switzerland. “Yelp” means Yelp Inc. or Yelp Ireland Ltd., as applicable. Do not access or use the Service if you are unwilling or unable to be bound by the Terms.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <p className="session-form-header-3">acknowledge yulp’s <a href='https://terms.yelp.com/privacy/en_us/20200101_en_us/' className="session-text">Privacy Policy</a></p> */}
                                    <p className="session-form-header-3">acknowledge yulp’s <span className="session-form-term" onClick={() => this.reviewModal2()}>Privacy Policy</span></p>
                                    <div id="policy"className="regulation-background" onClick={this.removeModal2}>
                                        <div className="regulation-container-top" onClick={e => e.stopPropagation()}>
                                            <div className="regulation-text">
                                                <div className="content-guidelines">
                                                    <p>Privacy Policy</p>
                                                    <p className="x" onClick={this.removeModal2}>
                                                        <i className="fas fa-times"></i>
                                                    </p>
                                                </div>
                                                <div className="regulation-scrollable">
                                                    <p className="gen-guide">General Guidelines</p>
                                                    <br/>
                                                    <p>
                                                        This Privacy Policy describes our policies on the collection, use, and disclosure of information about you in connection with your use of our services, including those offered through our websites, communications (e.g., emails, phone calls, and texts), and mobile applications (collectively, the “Service”). The terms “we”, “us”, and “Yelp” refer to: (i) Yelp Inc., a Delaware corporation with its headquarters in San Francisco, California, unless you are a European Resident; or (ii) Yelp Ireland Ltd., a limited liability company established and resident under the laws of the Republic of Ireland, if you are a European Resident. “European Resident” means a resident of a country in the European Economic Area (“EEA”) or Switzerland.
                                                    </p>
                                                    <br/>
                                                    <p>
                                                        When you use the Service, you consent to our collection, use, and disclosure of information about you as described in this Privacy Policy. We may translate this Privacy Policy into other languages for your convenience. Nevertheless, the English version governs your relationship with Yelp, and any inconsistencies among the different versions will be resolved in favor of the English version available here.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
                                    <input type="submit" value="Log In" className="submit"/>
                                </form>
                                <button className="demo-user-submit"onClick={() => this.props.processForm(this.demo).then(() => this.props.history.push(`/`))}>Demo User</button>
                                <p className="session-form-bottom">New to yulp? <Link to='/signup' className="session-text">Sign up</Link></p>
                            </div>
                            <img className="graphics" src="https://s3-media0.fl.yelpcdn.com/assets/2/www/img/7922e77f338d/signup/signup_illustration.png" />
                    </div>
                </div>
            </div>  
        )
    }
}

export default LoginForm;
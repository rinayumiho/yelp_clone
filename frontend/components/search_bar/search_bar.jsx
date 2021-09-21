import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux'

class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state = { query: '' };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    update(type){
        // debugger
        return e => this.setState({ [type]: e.currentTarget.value });
    }

    handleSubmit(e){
        e.preventDefault();
        // debugger
        this.props.searchBusinesses(this.state.query).then(() => this.props.history.push(`/businesses?query=${this.state.query}`));
    }

    render(){
        return(
            <div className={`search-bar-container-${this.props.formType}`}>
                <form onSubmit={this.handleSubmit}>
                    <div className={`search-bar-${this.props.formType}`}>
                        <label className={`search-tag1-${this.props.formType}`}>Find
                            <input className={`search-text-${this.props.formType}`} type="text" placeholder="nail salons, plumbers, takeout..." onChange={this.update('query')}/>
                        </label>
                        <label className={`search-tag2-${this.props.formType}`}>Near
                            <input className={`search-text-${this.props.formType}`} type="text" placeholder="Philadelphia, PA" />
                        </label>
                        <button type="submit" className="search-icon-buttonsplash">
                            <img src="http://d5yem10y0aabn.cloudfront.net/search_icon.png" alt="search icon"/>
                        </button>
                    </div>
                </form>
                <div className="search-categories">
                    <p>Plumbers</p>
                    <p>Restaurants</p>
                    <p>Home Services</p>
                    <p>Delivery</p>
                    <p>Black Owned</p>
                </div>
            </div>
        )
    }
}

export default withRouter(SearchBar);

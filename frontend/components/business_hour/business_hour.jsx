import React from 'react';

class BusinessHour extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchBusinessHours(this.props.business.id);
    }

    render(){
        let businessHour = this.props.business.business_hours[0];
        return(
            <div className="business-hour-only-container">
                <div className="business-hour-left">
                    <div class="each-business-hour-left">Mon</div>
                    <div class="each-business-hour-left">Tue</div>
                    <div class="each-business-hour-left">Wed</div>
                    <div class="each-business-hour-left">Thu</div>
                    <div class="each-business-hour-left">Fir</div>
                    <div class="each-business-hour-left">Sat</div>
                    <div class="each-business-hour-left">Sun</div>
                </div>
                <div>
                    <div class="each-business-hour-right">{businessHour.monday_hour}</div>
                    <div class="each-business-hour-right">{businessHour.tuesday_hour}</div>
                    <div class="each-business-hour-right">{businessHour.wednesday_hour}</div>
                    <div class="each-business-hour-right">{businessHour.thursday_hour}</div>
                    <div class="each-business-hour-right">{businessHour.friday_hour}</div>
                    <div class="each-business-hour-right">{businessHour.saturday_hour}</div>
                    <div class="each-business-hour-right">{businessHour.sunday_hour}</div>
                </div>
            </div>
        )
    }
}

export default BusinessHour;
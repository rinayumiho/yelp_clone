import React from 'react';

class BusinessHour extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchBusinessHours(this.props.business.id);
    }

    openState(timeRange){
        let firstColon = timeRange.indexOf(":");
        let startHour = parseInt(timeRange.slice(1, firstColon));
        let startMin = parseInt(timeRange.slice(firstColon + 1, firstColon + 3));
        if(startHour != 12 && timeRange.charAt(firstColon + 4) === "P"){
            startHour += 12;
        }
        let dash = timeRange.indexOf("-");
        let lastColon = timeRange.lastIndexOf(":");
        let endHour = parseInt(timeRange.slice(dash + 2, lastColon));
        let endMin = parseInt(timeRange.slice(lastColon + 1, lastColon + 3));
        if(endHour != 12 && timeRange.charAt(lastColon + 4) === "P"){
            endHour += 12;
        }
        
        let date = new Date();
        let day = date.getDay();
        let curHour = date.getHours();
        let curMin = date.getMinutes();

        if(day != parseInt(timeRange.charAt(0))){
            return "";
        }
        if(curHour < startHour || curHour === startHour && curMin < startMin){
            // return "Closed";
            return <span className="closed-tag">Closed Now</span>;
        }
        if(curHour > endHour || curHour === endHour && curMin > endMin){
            // return "Closed";
            return <span className="closed-tag">Closed Now</span>;
        }
        // return "Open"
        return <span className="open-tag">Open Now</span>;
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
                    <div class="each-business-hour-right">{businessHour.monday_hour.slice(1)}    <span>&nbsp;&nbsp;&nbsp;{this.openState(businessHour.monday_hour)}</span></div>
                    <div class="each-business-hour-right">{businessHour.tuesday_hour.slice(1)}    <span>&nbsp;&nbsp;&nbsp;{this.openState(businessHour.tuesday_hour)}</span></div>
                    <div class="each-business-hour-right">{businessHour.wednesday_hour.slice(1)}    <span>&nbsp;&nbsp;&nbsp;{this.openState(businessHour.wednesday_hour)}</span></div>
                    <div class="each-business-hour-right">{businessHour.thursday_hour.slice(1)}    <span>&nbsp;&nbsp;&nbsp;{this.openState(businessHour.thursday_hour)}</span></div>
                    <div class="each-business-hour-right">{businessHour.friday_hour.slice(1)}    <span>&nbsp;&nbsp;&nbsp;{this.openState(businessHour.friday_hour)}</span></div>
                    <div class="each-business-hour-right">{businessHour.saturday_hour.slice(1)}    <span>&nbsp;&nbsp;&nbsp;{this.openState(businessHour.saturday_hour)}</span></div>
                    <div class="each-business-hour-right">{businessHour.sunday_hour.slice(1)}    <span>&nbsp;&nbsp;&nbsp;{this.openState(businessHour.sunday_hour)}</span></div>
                </div>
            </div>
        )
    }
}

export default BusinessHour;
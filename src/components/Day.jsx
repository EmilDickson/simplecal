import React from "react";
import Popup from 'reactjs-popup';

class Day extends React.Component {

    getEventTime() {
        if (this.props.dayContent !== "") {
            return this.props.dayContent.date.substring(11);
        } else {
            return this.props.dayContent;
        }
    }

    renderHours() {
        const hours = [];
        let eventTime = this.getEventTime();
        let eventHour = 0;
        let newTime = "";
        if (eventTime !== "") {
            eventHour = parseInt(eventTime.substring(0,2), 0);
        }
        for (let i = 0; i < 24; i++) {
            if (eventHour === i && eventHour !== 0 && this.props.dayContent.title != null) {
                hours.push(
                    <Popup trigger={this.renderBigAppointment()} key={this.props.dayContent.database_id * 1000} modal closeOnDocumentClick>
                        {this.renderAppointmentContent()}
                    </Popup>
                );
                if (i < 10) {
                    newTime = "0" + i.toString() + ":00";
                } else {
                    newTime = i.toString() + ":00";
                }
                hours.push(
                    <div className="hourCell" key={i}>{newTime}</div>
                )
            } else {
                if (i < 10) {
                    newTime = "0" + i.toString() + ":00";
                } else {
                    newTime = i.toString() + ":00";
                }
                hours.push(
                    <div className="hourCell" key={i}>{newTime}</div>
                )
            }
        }
        return hours;
    }

    handleAppointmentDescription(inDescription) {
        return (
            <div>
                {inDescription}
            </div>
        );
    }

    handleAppointmentLocation(inLocation) {
        let mapBaseUrl = "https://www.google.com/maps/place/" + inLocation.lat + "," + inLocation.lng;
        return (
            <p>
                <a href={mapBaseUrl} target="_blank" rel="noopener noreferrer">Link to map!</a>
            </p>
        );
    }

    handleAppointmentAttendents(inAttendents) {
        let attKey = this.props.dayContent.database_id * 100;
        let outAttendents = [<h3 key={attKey}> Attendents:</h3>];
        let attendentLink = "";
        for (let i = 0; i < inAttendents.length; i++) {
            attendentLink = "mailto:" + inAttendents[i];
            outAttendents.push(
                <p key={i}><a href={attendentLink} target="_top">{inAttendents[i]}</a></p>
            );
        }
        return(
            <div>
                {outAttendents}
            </div>
        );
    }

    renderSmallAppointment() {
        return  (
            <div className={(this.getEventTime() === "") ? "monthContent" : "monthContent appointment"} >
                <div>
                    {this.getEventTime()}<br />
                    {this.props.dayContent.title}
                </div>
            </div>
            );
    }

    renderBigAppointment() {
        let descriptionDisplay = this.props.dayContent.description;
        if (descriptionDisplay.length > 13) {
            descriptionDisplay = this.props.dayContent.description + "...";
        }
        return (
            <div className={(this.getEventTime() === "") ? "bigContent" : "bigContent appointment"} >
                <div>
                    <p>{this.getEventTime()}</p>
                    <p><b>{this.props.dayContent.title}</b></p>
                    <p style={{fontStyle: 'italic'}}>{descriptionDisplay}</p>
                </div>
            </div>
        );
    }

    renderAppointmentContent() {
        if (this.getEventTime() === "") {
            return "";
        } else {
            return(
                <div className="appointmentContent">
                    <h2>{this.props.dayContent.title}</h2>
                    {this.handleAppointmentDescription(this.props.dayContent.description)}
                    {this.handleAppointmentLocation(this.props.dayContent.location)}
                    {this.handleAppointmentAttendents(this.props.dayContent.attendents)}
                </div>
            );
        }
    }

    renderMonthContent() {
        if (this.props.dayContent.title != null) {
            return (
                <Popup
                trigger={this.renderSmallAppointment()}
                modal
                closeOnDocumentClick
                >
                    {this.renderAppointmentContent()}
                </Popup>
            );
        } else {
            return "";
        }
    }

    renderFullContent() {
        return this.renderHours();
    }

    render() {
        return(
            <div className="day">
                {(this.props.currentView === 'month') ? this.renderMonthContent() : this.renderFullContent()}
            </div>
        );
    }
}

export default Day;
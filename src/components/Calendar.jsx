import React from "react";
import dateFns from "date-fns";
import Day from './Day';

class Calendar extends React.Component {
    state = {
        currentMonth: new Date(),
        currentWeek: new Date(),
        selectedDate: new Date(),
        currentView: 'month'
    }

    checkIfSameDate(datesFromInput, dateForComponent) {
        let contentOut = "";
        let inDate = "";
        let compDate = dateFns.format(dateForComponent, 'YYYY-MM-DD');
        if (datesFromInput != null) {
            for (let i = 0; i < datesFromInput.length; i++) {
                inDate = datesFromInput[i].date.substring(0,10);
                if (inDate === compDate) {
                    contentOut = datesFromInput[i];
                }
            }
        }
        return contentOut;
    }

    checkCurrentView(viewToBeChecked) {
        if (viewToBeChecked === this.state.currentView) {
            return true;
        } else {
            return false;
        }
    }

    changeView(newView) {
        this.setState({
            currentView: newView
        });
    }

    weekDayName(dayIn) {
        const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        return dayNames[dayIn];
    }

    renderViewSelector() {
        return (
            <div className="viewSelector row row-middle">
                    <div className="col col-start"><strong>View:</strong></div>
                    <div className="col col-center viewOption" onClick={() => this.changeView('month')}>Month</div>
                    <div className="col col-end viewOption" onClick={() => this.changeView('week')}>Week</div>
            </div>
        )
    }

    renderPrevSwitches(viewIn) {
        if (this.checkCurrentView('month')) {
            return (
                <div className="icon" onClick={this.prevMonth}>
                    chevron_left
                </div>
            );
        } else if (this.checkCurrentView('week')) {
            return (
                <div className="icon" onClick={this.prevWeek}>
                    chevron_left
                </div>
            );
        }
    }

    renderNextSwitches(viewIn) {
        if (this.checkCurrentView('month')) {
            return (
                <div className="icon" onClick={this.nextMonth}>
                    chevron_right
                </div>
            );
        } else if (this.checkCurrentView('week')) {
            return (
                <div className="icon" onClick={this.nextWeek}>
                    chevron_right
                </div>
            );
        }
    }

    renderHeader() {
        const dateFormat = "MMMM YYYY";

        return (
            <div className="header row flex-middle">
                <div className="col col-start">
                    {this.renderPrevSwitches(this.state.currentView)}
                </div>
                <div className="col col-center">
                    <span>
                        {dateFns.format(this.state.currentMonth, dateFormat)}
                    </span>
                </div>
                <div className="col col-end">
                    {this.renderNextSwitches(this.state.currentView)}
                </div>
            </div>
        );
    }

    renderDays() {
        const dateFormat = "dddd";
        const days = [];

        let startDate = dateFns.startOfISOWeek(this.state.currentMonth);

        for (let i = 0; i < 7; i++) {
            days.push(
                <div className="col col-center" key={i}>
                    {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
                </div>
            );
        }
        return <div className="days row">{days}</div>;
    }

    renderOverviewCells(day, monthStart, selectedDate, cloneDay, formattedDate) {
        let dayThings = "";
        if (this.checkCurrentView('week')) {
            dayThings = <Day currentView={this.state.currentView} dayContent={this.checkIfSameDate(this.props.calendarEvents, cloneDay)} />;
        } else {
            dayThings = <Day currentView={this.state.currentView} dayContent={this.checkIfSameDate(this.props.calendarEvents, cloneDay)} />;
        }
        return(
            <div
                className={`col cell ${
                    !dateFns.isSameMonth(day, monthStart)
                        ? "disabled "
                        : dateFns.isSameDay(day, selectedDate) ? "selected " : " "
                    }` + this.state.currentView}
                key={day}
                onClick={() => this.onDateClick(dateFns.parse(cloneDay))}
            >
                {dayThings}
                <span className="bg">{formattedDate}</span>
                <span className="number">{formattedDate}</span>
            </div>
        );
    }

    renderCells() {
        const { currentMonth, selectedDate } = this.state;
        const monthStart = dateFns.startOfMonth(currentMonth);
        const monthEnd = dateFns.endOfMonth(monthStart);
        let startDate = dateFns.startOfISOWeek(monthStart);
        let endDate = dateFns.endOfISOWeek(monthEnd);

        const dateFormat = "D";
        const rows = [];

        if (this.checkCurrentView('week')) {
            startDate = dateFns.startOfISOWeek(selectedDate);
            endDate = dateFns.endOfISOWeek(selectedDate);
        }

        let days = [];
        let day = startDate;
        let formattedDate = "";

        while (day <= endDate) {
            for (let i = 0; i < 7; i++) {
                formattedDate = dateFns.format(day, dateFormat);
                const cloneDay = day;
                days.push(
                    this.renderOverviewCells(day, monthStart, selectedDate, cloneDay, formattedDate)
                );
                day = dateFns.addDays(day, 1);
            }
            rows.push(
                <div className="row" key={day}>
                    {days}
                </div>
            );
            days = [];
        }
        if (this.checkCurrentView('month')) {
            return <div className="body">{rows}</div>
        } else if (this.checkCurrentView('week')) {
            return <div className="body">{rows}</div>
        }
    }

    onDateClick = day => {
        this.setState({
            selectedDate: day
        });
    };

    nextMonth = () => {
        this.setState({
            currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
        });
    }

    prevMonth = () => {
        this.setState({
            currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
        });
    }

    nextWeek = () => {
        this.setState({
            selectedDate: dateFns.addDays(this.state.selectedDate, 7),
            currentWeek: dateFns.addWeeks(this.state.currentWeek, 1),
            currentMonth: dateFns.addDays(this.state.selectedDate, 7)
        });
    }

    prevWeek = () => {
        this.setState({
            selectedDate: dateFns.subDays(this.state.selectedDate, 7),
            currentWeek: dateFns.subWeeks(this.state.currentWeek, 1),
            currentMonth: dateFns.subDays(this.state.selectedDate, 7)
        });
    }

    render () {
        return (
            <div className="calendar">
                {this.renderViewSelector()}
                {this.renderHeader()}
                {this.renderDays()}
                {this.renderCells()}
            </div>
        );
    }
}

export default Calendar;
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{195:function(e,t,n){},238:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(26),c=n.n(i),o=(n(92),n(12)),s=n(13),l=n(15),u=n(14),d=n(16),h=n(3),m=n.n(h),p=n(40),v=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"getEventTime",value:function(){return""!==this.props.dayContent?this.props.dayContent.date.substring(11):this.props.dayContent}},{key:"renderHours",value:function(){var e=[],t=this.getEventTime(),n=0,a="";""!==t&&(n=parseInt(t.substring(0,2),0));for(var i=0;i<24;i++)n===i&&0!==n&&null!=this.props.dayContent.title?(e.push(r.a.createElement(p.a,{trigger:this.renderBigAppointment(),key:1e3*this.props.dayContent.database_id,modal:!0,closeOnDocumentClick:!0},this.renderAppointmentContent())),a=i<10?"0"+i.toString()+":00":i.toString()+":00",e.push(r.a.createElement("div",{className:"hourCell",key:i},a))):(a=i<10?"0"+i.toString()+":00":i.toString()+":00",e.push(r.a.createElement("div",{className:"hourCell",key:i},a)));return e}},{key:"handleAppointmentDescription",value:function(e){return r.a.createElement("div",null,e)}},{key:"handleAppointmentLocation",value:function(e){var t="https://www.google.com/maps/place/"+e.lat+","+e.lng;return r.a.createElement("p",null,r.a.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer"},"Link to map!"))}},{key:"handleAppointmentAttendents",value:function(e){for(var t=100*this.props.dayContent.database_id,n=[r.a.createElement("h3",{key:t}," Attendents:")],a="",i=0;i<e.length;i++)a="mailto:"+e[i],n.push(r.a.createElement("p",{key:i},r.a.createElement("a",{href:a,target:"_top"},e[i])));return r.a.createElement("div",null,n)}},{key:"renderSmallAppointment",value:function(){return r.a.createElement("div",{className:""===this.getEventTime()?"monthContent":"monthContent appointment"},r.a.createElement("div",null,this.getEventTime(),r.a.createElement("br",null),this.props.dayContent.title))}},{key:"renderBigAppointment",value:function(){var e=this.props.dayContent.description;return e.length>13&&(e=this.props.dayContent.description+"..."),r.a.createElement("div",{className:""===this.getEventTime()?"bigContent":"bigContent appointment"},r.a.createElement("div",null,r.a.createElement("p",null,this.getEventTime()),r.a.createElement("p",null,r.a.createElement("b",null,this.props.dayContent.title)),r.a.createElement("p",{style:{fontStyle:"italic"}},e)))}},{key:"renderAppointmentContent",value:function(){return""===this.getEventTime()?"":r.a.createElement("div",{className:"appointmentContent"},r.a.createElement("h2",null,this.props.dayContent.title),this.handleAppointmentDescription(this.props.dayContent.description),this.handleAppointmentLocation(this.props.dayContent.location),this.handleAppointmentAttendents(this.props.dayContent.attendents))}},{key:"renderMonthContent",value:function(){return null!=this.props.dayContent.title?r.a.createElement(p.a,{trigger:this.renderSmallAppointment(),modal:!0,closeOnDocumentClick:!0},this.renderAppointmentContent()):""}},{key:"renderFullContent",value:function(){return this.renderHours()}},{key:"render",value:function(){return r.a.createElement("div",{className:"day"},"month"===this.props.currentView?this.renderMonthContent():this.renderFullContent())}}]),t}(r.a.Component),y=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={currentMonth:new Date,currentWeek:new Date,selectedDate:new Date,currentView:"month"},n.onDateClick=function(e){n.setState({selectedDate:e})},n.nextMonth=function(){n.setState({currentMonth:m.a.addMonths(n.state.currentMonth,1)})},n.prevMonth=function(){n.setState({currentMonth:m.a.subMonths(n.state.currentMonth,1)})},n.nextWeek=function(){n.setState({selectedDate:m.a.addDays(n.state.selectedDate,7),currentWeek:m.a.addWeeks(n.state.currentWeek,1),currentMonth:m.a.addDays(n.state.selectedDate,7)})},n.prevWeek=function(){n.setState({selectedDate:m.a.subDays(n.state.selectedDate,7),currentWeek:m.a.subWeeks(n.state.currentWeek,1),currentMonth:m.a.subDays(n.state.selectedDate,7)})},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"checkIfSameDate",value:function(e,t){var n="",a=m.a.format(t,"YYYY-MM-DD");if(null!=e)for(var r=0;r<e.length;r++)e[r].date.substring(0,10)===a&&(n=e[r]);return n}},{key:"checkCurrentView",value:function(e){return e===this.state.currentView}},{key:"changeView",value:function(e){this.setState({currentView:e})}},{key:"weekDayName",value:function(e){return["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e]}},{key:"renderViewSelector",value:function(){var e=this;return r.a.createElement("div",{className:"viewSelector row row-middle"},r.a.createElement("div",{className:"col col-start"},r.a.createElement("strong",null,"View:")),r.a.createElement("div",{className:"col col-center viewOption",onClick:function(){return e.changeView("month")}},"Month"),r.a.createElement("div",{className:"col col-end viewOption",onClick:function(){return e.changeView("week")}},"Week"))}},{key:"renderPrevSwitches",value:function(e){return this.checkCurrentView("month")?r.a.createElement("div",{className:"icon",onClick:this.prevMonth},"chevron_left"):this.checkCurrentView("week")?r.a.createElement("div",{className:"icon",onClick:this.prevWeek},"chevron_left"):void 0}},{key:"renderNextSwitches",value:function(e){return this.checkCurrentView("month")?r.a.createElement("div",{className:"icon",onClick:this.nextMonth},"chevron_right"):this.checkCurrentView("week")?r.a.createElement("div",{className:"icon",onClick:this.nextWeek},"chevron_right"):void 0}},{key:"renderHeader",value:function(){return r.a.createElement("div",{className:"header row flex-middle"},r.a.createElement("div",{className:"col col-start"},this.renderPrevSwitches(this.state.currentView)),r.a.createElement("div",{className:"col col-center"},r.a.createElement("span",null,m.a.format(this.state.currentMonth,"MMMM YYYY"))),r.a.createElement("div",{className:"col col-end"},this.renderNextSwitches(this.state.currentView)))}},{key:"renderDays",value:function(){for(var e=[],t=m.a.startOfISOWeek(this.state.currentMonth),n=0;n<7;n++)e.push(r.a.createElement("div",{className:"col col-center",key:n},m.a.format(m.a.addDays(t,n),"dddd")));return r.a.createElement("div",{className:"days row"},e)}},{key:"renderOverviewCells",value:function(e,t,n,a,i){var c=this,o="";return o=(this.checkCurrentView("week"),r.a.createElement(v,{currentView:this.state.currentView,dayContent:this.checkIfSameDate(this.props.calendarEvents,a)})),r.a.createElement("div",{className:"col cell ".concat(m.a.isSameMonth(e,t)?m.a.isSameDay(e,n)?"selected ":" ":"disabled ")+this.state.currentView,key:e,onClick:function(){return c.onDateClick(m.a.parse(a))}},o,r.a.createElement("span",{className:"bg"},i),r.a.createElement("span",{className:"number"},i))}},{key:"renderCells",value:function(){var e=this.state,t=e.currentMonth,n=e.selectedDate,a=m.a.startOfMonth(t),i=m.a.endOfMonth(a),c=m.a.startOfISOWeek(a),o=m.a.endOfISOWeek(i),s=[];this.checkCurrentView("week")&&(c=m.a.startOfISOWeek(n),o=m.a.endOfISOWeek(n));for(var l=[],u=c,d="";u<=o;){for(var h=0;h<7;h++){d=m.a.format(u,"D");var p=u;l.push(this.renderOverviewCells(u,a,n,p,d)),u=m.a.addDays(u,1)}s.push(r.a.createElement("div",{className:"row",key:u},l)),l=[]}return this.checkCurrentView("month")?r.a.createElement("div",{className:"body"},s):this.checkCurrentView("week")?r.a.createElement("div",{className:"body"},s):void 0}},{key:"render",value:function(){return r.a.createElement("div",{className:"calendar"},this.renderViewSelector(),this.renderHeader(),this.renderDays(),this.renderCells())}}]),t}(r.a.Component),k=(n(195),n(85)),f=n.n(k),E=n(41),w=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={calendarEvents:[{database_id:0,date:"",title:"",description:"",location:{lat:"",lng:""},attendents:["","",""]}],decryptionKey:""},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"getData",value:function(){var e=this;f.a.get("https://projects.teamengine.com/calendar/events",{headers:{"x-teamengine-test":"YfKFyOBnLBvudfn"}}).then(function(t){var n=E.AES.decrypt(t.data,e.state.decryptionKey),a=JSON.parse(n.toString(E.enc.Utf8));e.setState({calendarEvents:a.events})}).catch(function(e){console.log(e)})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({decryptionKey:e.target.decryptInputField.value})}},{key:"renderDecryptBox",value:function(){var e=this;return""===this.state.decryptionKey?r.a.createElement("div",{id:"decryptInputBox"},r.a.createElement("label",null,"Input your decryption key:",r.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement("input",{id:"decryptInputField",type:"text",name:"decryptionKey"})))):""}},{key:"componentDidUpdate",value:function(){this.getData()}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("div",{id:"logo"},r.a.createElement("span",{className:"icon"},"calendar_today"),r.a.createElement("span",null,"simple",r.a.createElement("b",null,"cal"))),this.renderDecryptBox()),r.a.createElement("main",null,r.a.createElement(y,{calendarEvents:this.state.calendarEvents})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},86:function(e,t,n){e.exports=n(238)},92:function(e,t,n){}},[[86,1,2]]]);
//# sourceMappingURL=main.7da7ec53.chunk.js.map
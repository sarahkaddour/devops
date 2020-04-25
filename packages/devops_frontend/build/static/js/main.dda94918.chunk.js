(this.webpackJsonpdevops_frontend=this.webpackJsonpdevops_frontend||[]).push([[0],{138:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(17),s=a.n(l),o=(a(70),a(11)),c=a(12),i=a(13),u=a(14),m=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Footer"},r.a.createElement("p",null,"C\xe9line BENIDDIR & Sarah KADDOUR \u2665 "))}}]),a}(n.Component),h=a(15),d=a.n(h),p=a(19),f=a(16),g=a(21),v=a.n(g),y=a(143),b=a(63),E=a(146),O=a(56),C=a.n(O),j=(a(50),a(57)),k=a(144),P=a(60),w=a(62),S=a(61),R=a(145),x=a(140),D=a(141),q=a(142),F=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={username:"",firstname:"",lastname:"",team:""},n.onChange=n.onChange.bind(Object(f.a)(n)),n.onSubmit=n.onSubmit.bind(Object(f.a)(n)),n}return Object(c.a)(a,[{key:"postRequest",value:function(){var e=Object(p.a)(d.a.mark((function e(t,a,n,r){var l,s=this;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l={method:"post",url:"http://localhost:8000/user/",data:{username:t,firstname:a,lastname:n,team:r}},e.next=3,v()(l).then((function(e){200===e.status&&console.log("Player added")})).catch((function(e){console.log("error Player"),s.setState({error:e.message})}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t,a,n,r){return e.apply(this,arguments)}}()},{key:"onSubmit",value:function(){var e=Object(p.a)(d.a.mark((function e(t){var a,n,r,l,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),a=this.state,n=a.username,r=a.firstname,l=a.lastname,s=a.team,console.log(n,r,l,s),this.postRequest(n,r,l,s),this.props.toggle();case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onChange",value:function(e){this.setState(Object(j.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this.state,t=e.username,a=e.firstname,n=e.lastname,l=e.team,s=!t||!a||!n||!l;return r.a.createElement(R.a,{isOpen:!0,toggle:this.props.toggle,backdrop:!0},r.a.createElement(x.a,{toggle:this.props.toggle}," Add a new player "),r.a.createElement(D.a,null,r.a.createElement(k.a,{className:"sign-up-form",onSubmit:this.onSubmit},r.a.createElement(P.a,null,r.a.createElement(w.a,{htmlFor:"username"},"Username"),r.a.createElement(S.a,{name:"username",id:"username",placeholder:"johnd75",value:this.state.username,onChange:this.onChange})),r.a.createElement(P.a,null,r.a.createElement(w.a,{htmlFor:"firstname"},"Firstname"),r.a.createElement(S.a,{name:"firstname",id:"firstname",placeholder:"John",value:this.state.firstname,onChange:this.onChange})),r.a.createElement(P.a,null,r.a.createElement(w.a,{htmlFor:"lastname"},"Lastname"),r.a.createElement(S.a,{name:"lastname",id:"lastname",placeholder:"Doe",value:this.state.lastname,onChange:this.onChange})),r.a.createElement(P.a,null,r.a.createElement(w.a,{htmlFor:"team"},"Team"),r.a.createElement(S.a,{as:"select",id:"team",name:"team",value:this.state.team,onChange:this.onChange},r.a.createElement("option",{value:"Blue"},"Blue"),r.a.createElement("option",{value:"Red"},"Red"),r.a.createElement("option",{value:"Green"},"Green"),r.a.createElement("option",{value:"Yellow"},"Yellox"))))),r.a.createElement(q.a,{style:{textAlign:"center"}},r.a.createElement(E.a,{variant:"danger",onClick:this.props.toggle},"Cancel"),r.a.createElement(E.a,{variant:"success",disabled:s,onClick:this.onSubmit},"Save")))}}]),a}(n.Component),A=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).closeCreatePlayerDialog=function(){n.setState({shouldOpenCreatePlayerModal:!1}),console.log("create request"),n.handleAfterRequest(),console.log("create request")},n.state={loggedIn:!0,players:[],selected:null,shouldOpenCreatePlayerModal:!1},n.handleOnSelect=n.handleOnSelect.bind(Object(f.a)(n)),n.openCreatePlayerDialog=n.openCreatePlayerDialog.bind(Object(f.a)(n)),n.deletePlayerRequest=n.deletePlayerRequest.bind(Object(f.a)(n)),n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.getPlayersRequest()}},{key:"getPlayersRequest",value:function(){var e=Object(p.a)(d.a.mark((function e(){var t,a=this;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"get",url:"http://localhost:8000/"},e.next=3,v()(t).then((function(e){a.getAllPlayers(e.data)})).catch((function(e){console.log(e.message)}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"deletePlayerRequest",value:function(){var e=Object(p.a)(d.a.mark((function e(){var t,a,n=this;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state.selected.username,a={method:"delete",url:"http://localhost:8000/user/".concat(t),headers:{"Content-Type":"application/json"}},e.next=4,v()(a).then((function(e){console.log("Player deleted"),n.handleAfterRequest()})).catch((function(e){console.log(e.message)}));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getAllPlayers",value:function(e){this.setState({players:e})}},{key:"handleOnSelect",value:function(e){this.setState({selected:e})}},{key:"handleAfterRequest",value:function(){this.getPlayersRequest()}},{key:"openCreatePlayerDialog",value:function(){this.setState({shouldOpenCreatePlayerModal:!0})}},{key:"render",value:function(){var e=this.state.players,t=this.state,a=t.shouldOpenCreatePlayerModal,l=t.selected,s={mode:"radio",clickToSelect:!0,onSelect:this.handleOnSelect,style:{backgroundColor:"#dc3545"}},o=!l;return r.a.createElement(n.Fragment,null,a?r.a.createElement(F,{toggle:this.closeCreatePlayerDialog}):null,r.a.createElement("div",{className:"homepage"},r.a.createElement("h1",null,"Players"),r.a.createElement(C.a,{className:"table",keyField:"id",remote:!0,data:e,columns:[{dataField:"username",text:"Username"},{dataField:"firstname",text:"Firstname"},{dataField:"lastname",text:"Lastname"},{dataField:"team",text:"Team"}],striped:!0,hover:!0,selectRow:s,deleteRow:!0,noDataIndication:"No players"}),r.a.createElement(y.a,{style:{margin:"5px"}},r.a.createElement(b.a,null,r.a.createElement(E.a,{style:{width:300},variant:"success",onClick:this.openCreatePlayerDialog},r.a.createElement("i",{className:"fa fa-plus","aria-hidden":"true"})," Add a new player ")),r.a.createElement(b.a,null,r.a.createElement(E.a,{style:{width:300},variant:"danger",disabled:o,onClick:this.deletePlayerRequest},r.a.createElement("i",{className:"fa fa-trash","aria-hidden":"true"})," Delete a player ")))))}}]),a}(n.PureComponent),N=(a(55),function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"parent"},r.a.createElement(A,null),r.a.createElement(m,null))}}]),a}(n.Component)),B=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(N,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},55:function(e,t,a){},65:function(e,t,a){e.exports=a(138)},70:function(e,t,a){}},[[65,1,2]]]);
//# sourceMappingURL=main.dda94918.chunk.js.map
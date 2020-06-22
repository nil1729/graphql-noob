(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{34:function(e,t,a){e.exports=a.p+"static/media/logo.d1fe1dbd.png"},35:function(e,t,a){e.exports=a.p+"static/media/loader.1e355476.gif"},42:function(e,t,a){e.exports=a(56)},47:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),l=a(33),r=a.n(l),s=(a(47),a(17)),m=a(5),i=a(34),u=a.n(i),o=a(22),h=a(35),d=a.n(h),p=function(){return c.a.createElement("div",{className:"row text-center"},c.a.createElement("img",{src:d.a,alt:"Spinner",style:{margin:"auto"}}))},E=a(36),g=a.n(E),b=function(e){var t=e.launch;return c.a.createElement("li",{key:t.flight_number,className:"list-group-item d-flex justify-content-between align-items-center"},c.a.createElement("div",null,c.a.createElement("h5",{style:{fontWeight:"100",letterSpacing:"0.5px"}},"Mission:"," ",c.a.createElement("span",{style:{color:t.launch_success?"green":"red",fontWeight:"400"}},t.mission_name)),c.a.createElement("p",{className:"text-secondary"},"Date: ",g()(t.launch_date_local).format("MMMM Do YYYY h:mm a"))),c.a.createElement(s.b,{to:"/launch/".concat(t.flight_number),type:"button",className:"btn btn-secondary"},"Launch Detail"))},f=a(18),N=a(20);function y(){var e=Object(o.a)(["\n\t{\n\t\tlaunches {\n\t\t\tmission_name\n\t\t\tflight_number\n\t\t\tlaunch_date_local\n\t\t\tlaunch_success\n\t\t}\n\t}\n"]);return y=function(){return e},e}var _=Object(f.b)(y()),v=function(){var e=Object(N.a)(_),t=e.loading,a=e.error,n=e.data;return a?c.a.createElement("div",{style:{fontSize:"1.5em",textAlign:"center"},className:"mt-4"},c.a.createElement("p",{className:"font-weght-bold text-danger"},"Server Error"),c.a.createElement("p",null,"Please Try Again Later")):c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"display-4 my-3 text-center"},"SpaceX Launches"),c.a.createElement("p",{className:"lead"},c.a.createElement("span",{className:"badge badge-success"},"Success")," - Success"),c.a.createElement("p",{className:"lead"},c.a.createElement("span",{className:"badge badge-danger"},"Failure")," - Fail"),t?c.a.createElement(p,null):c.a.createElement("div",{className:"list-group mb-4"},n.launches.map((function(e){return c.a.createElement(b,{key:e.flight_number,launch:e})}))))};function k(){var e=Object(o.a)(["\n\tquery Launch($flight_number: Int!) {\n\t\tlaunch(flight_number: $flight_number) {\n\t\t\tlaunch_year\n\t\t\tlaunch_success\n\t\t\tflight_number\n\t\t\tmission_name\n\t\t\trocket {\n\t\t\t\trocket_id\n\t\t\t\trocket_name\n\t\t\t\trocket_type\n\t\t\t}\n\t\t}\n\t}\n"]);return k=function(){return e},e}var x=Object(f.b)(k()),w=function(){var e=Object(m.f)().id,t=Object(N.a)(x,{variables:{flight_number:parseInt(e)}}),a=t.loading,n=t.error,l=t.data;return n?c.a.createElement("div",{style:{fontSize:"1.5em",textAlign:"center"},className:"mt-4"},c.a.createElement("p",{className:"font-weght-bold text-danger"},"Server Error"),c.a.createElement("p",null,"Please Try Again Later")):c.a.createElement("div",{className:"container mb-4"},a?c.a.createElement(p,null):c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",{className:"display-4 text-center"},c.a.createElement("span",{className:"text-secondary"},"Mission:")," ",l.launch.mission_name),c.a.createElement("hr",{className:"bg-white"}),c.a.createElement("h4",{className:"text-white text-center",style:{fontWeight:"300"}},"Launch Details"),c.a.createElement("div",{className:"continer bg-light p-3"},c.a.createElement("p",{className:"lead"},"Flight Number: ",l.launch.flight_number),c.a.createElement("p",{className:"lead"},"Launch Year: ",l.launch.launch_year),c.a.createElement("p",{className:"lead"},"Launch Sucessful:"," ",c.a.createElement("span",{style:{color:l.launch.launch_success?"green":"red"}},l.launch.launch_success?"Yes":"No"))),c.a.createElement("h4",{className:"text-white text-center mt-3",style:{fontWeight:"300"}},"Rocket Details"),c.a.createElement("div",{className:"continer bg-light p-3"},c.a.createElement("p",{className:"lead"},"Rocket ID: ",l.launch.rocket.rocket_id),c.a.createElement("p",{className:"lead"},"Rocket Name: ",l.launch.rocket.rocket_name),c.a.createElement("p",{className:"lead"},"Rocket Type: ",l.launch.rocket.rocket_type)),c.a.createElement(s.b,{to:"/",type:"button",className:"btn btn-sm btn-secondary mt-4"},"Go Back")))},S=a(10),L=new f.a({uri:"/graphql"}),j=function(){return c.a.createElement(S.a,{client:L},c.a.createElement(s.a,null,c.a.createElement("div",{className:"container"},c.a.createElement("img",{src:u.a,alt:"GraphQL",style:{width:300,display:"block",margin:"auto"}}),c.a.createElement(m.c,null,c.a.createElement(m.a,{path:"/",exact:!0,component:v}),c.a.createElement(m.a,{path:"/launch/:id",exact:!0,component:w})))))};r.a.render(c.a.createElement(j,null),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.704d07ed.chunk.js.map
(this.webpackJsonpcloudp=this.webpackJsonpcloudp||[]).push([[0],{26:function(e,t,a){e.exports=a(34)},33:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(19),o=a.n(r),c=a(12),i=a(5),m=a(9),s=a(20),u=a(23);const d=Object(s.a)({apiKey:"AIzaSyASQGxmHPAnOuqogJ-GshsKxZs7z_rVFhc",authDomain:"cloud-pro-salma.firebaseapp.com",projectId:"cloud-pro-salma",storageBucket:"cloud-pro-salma.firebasestorage.app",messagingSenderId:"270378042783",appId:"1:270378042783:web:7d23dc50345ca548b329aa",measurementId:"G-HCN9MZ9RYX"}),p=Object(m.c)(d);Object(u.a)(d);var g=e=>{let{onLoginSuccess:t}=e;const[a,r]=Object(n.useState)(""),[o,c]=Object(n.useState)(""),s=Object(i.p)(),u=new m.a;return l.a.createElement("div",null,l.a.createElement("h1",null,"Login"),l.a.createElement("form",{onSubmit:async e=>{e.preventDefault();try{await Object(m.d)(p,a,o),alert("Login successful!"),"function"===typeof t&&t(),s("/reserve")}catch(n){alert(n.message)}}},l.a.createElement("input",{type:"email",placeholder:"Email",value:a,onChange:e=>r(e.target.value)}),l.a.createElement("input",{type:"password",placeholder:"Password",value:o,onChange:e=>c(e.target.value)}),l.a.createElement("button",{type:"submit"},"Login")),l.a.createElement("div",{style:{marginTop:"1rem"}},l.a.createElement("button",{onClick:async()=>{try{const e=(await Object(m.e)(p,u)).user;alert("Welcome, ".concat(e.displayName||e.email,"! Google login successful.")),"function"===typeof t&&t(e.email),s("/reserve")}catch(e){alert("Google login failed: ".concat(e.message))}},style:{padding:"0.5rem 1rem"}},"Login with Google")))};var E=()=>{const[e,t]=Object(n.useState)(""),[a,r]=Object(n.useState)("");return l.a.createElement("div",null,l.a.createElement("h1",null,"Register"),l.a.createElement("form",{onSubmit:async t=>{t.preventDefault();try{await Object(m.b)(p,e,a),alert("Registration successful!"),window.location.href="/login"}catch(n){alert(n.message)}}},l.a.createElement("input",{type:"email",placeholder:"Email",value:e,onChange:e=>t(e.target.value)}),l.a.createElement("input",{type:"password",placeholder:"Password",value:a,onChange:e=>r(e.target.value)}),l.a.createElement("button",{type:"submit"},"Register")),l.a.createElement("button",{onClick:async()=>{const e=new m.a;try{await Object(m.e)(p,e),alert("Registered with Google successfully!"),window.location.href="/login"}catch(t){alert(t.message)}}},"Register with Google"))},v=a(10),b=a(21),h=a(24),y=a(22);const f="16844726883-nktuvt7v0fvoua9h948nvvl5ljddau9p.apps.googleusercontent.com",w="https://www.googleapis.com/auth/calendar.events https://www.googleapis.com/auth/calendar";var j=function(){const[e,t]=Object(n.useState)([]),[a,r]=Object(n.useState)(null),[o,c]=Object(n.useState)(null),[i,m]=Object(n.useState)(""),[s,u]=Object(n.useState)([]),[d,p]=Object(n.useState)({date:"",time:"",email:""}),g=[{id:"room1",name:"Room 1",times:["09:00","10:00","11:00"]},{id:"room2",name:"Room 2",times:["12:00","13:00","14:00"]}];Object(n.useEffect)(()=>{const e=()=>{"undefined"===typeof google?setTimeout(e,100):google.accounts.oauth2.initTokenClient({client_id:f,scope:w,callback:e=>{e.access_token?(c(e.access_token),E(e.access_token)):r("Error obtaining Google token.")}}).requestAccessToken()};e()},[]);const E=e=>{gapi.load("client",()=>{gapi.client.init({apiKey:"",clientId:f,scope:w}).then(()=>gapi.client.request({path:"https://www.googleapis.com/calendar/v3/calendars/primary/events"})).then(e=>{const a=e.result.items.map(e=>({title:e.summary,start:e.start.dateTime,end:e.end.dateTime}));t(a)}).catch(e=>{console.error("Error loading events from Google Calendar:",e),r("Failed to load events. Please try again.")})})};return l.a.createElement("div",null,l.a.createElement("h1",null,"Room Reservations"),a&&l.a.createElement("p",{style:{color:"red"}},a),l.a.createElement("form",{onSubmit:e=>{if(e.preventDefault(),!o)return void r("You must be logged in to add a reservation.");const a={room_id:i,email:d.email,start_time:"".concat(d.date,"T").concat(d.time,":00"),end_time:"".concat(d.date,"T").concat(parseInt(d.time.split(":")[0])+1,":00:00")};var n;n=a,gapi.client.calendar.events.insert({calendarId:"primary",resource:{summary:"Room ".concat(n.room_id," - Reserved by ").concat(n.email),start:{dateTime:n.start_time,timeZone:"UTC"},end:{dateTime:n.end_time,timeZone:"UTC"}}}).then(e=>{t(e=>[...e,{title:"Room ".concat(n.room_id," - Reserved by ").concat(n.email),start:n.start_time,end:n.end_time}]),alert("Reservation confirmed and added to Google Calendar.")}).catch(e=>{console.error("Error adding reservation to Google Calendar:",e),r("Failed to add reservation. Please try again.")}),p({date:"",time:"",email:""})}},l.a.createElement("label",null,"Room: "),l.a.createElement("select",{onChange:e=>{const t=g.find(t=>t.id===e.target.value);m(t.id),u(t.times)},value:i,required:!0},l.a.createElement("option",{value:"",disabled:!0},"Select a room"),g.map(e=>l.a.createElement("option",{key:e.id,value:e.id},e.name))),l.a.createElement("label",null,"Date: "),l.a.createElement("input",{type:"date",value:d.date,onChange:e=>p(Object(v.a)(Object(v.a)({},d),{},{date:e.target.value})),required:!0}),l.a.createElement("label",null,"Time: "),l.a.createElement("select",{value:d.time,onChange:e=>p(Object(v.a)(Object(v.a)({},d),{},{time:e.target.value})),required:!0},l.a.createElement("option",{value:"",disabled:!0},"Select a time"),s.map(e=>l.a.createElement("option",{key:e,value:e},e))),l.a.createElement("label",null,"Email: "),l.a.createElement("input",{type:"email",value:d.email,onChange:e=>p(Object(v.a)(Object(v.a)({},d),{},{email:e.target.value})),required:!0}),l.a.createElement("button",{type:"submit"},"Reserve")),l.a.createElement(b.a,{plugins:[h.a,y.a],initialView:"dayGridMonth",events:e,headerToolbar:{left:"prev,next today",center:"title",right:"dayGridMonth,dayGridWeek,dayGridDay"}}))};var O=()=>l.a.createElement("div",null,l.a.createElement("h1",null,"Welcome to Cloud Project"),l.a.createElement("nav",null,l.a.createElement(c.b,{to:"/login"},"Login"),l.a.createElement("br",null),l.a.createElement(c.b,{to:"/register"},"Register"),l.a.createElement("br",null),l.a.createElement(c.b,{to:"/reserve"},"Reserve")),l.a.createElement(i.c,null,l.a.createElement(i.a,{path:"/login",element:l.a.createElement(g,null)}),l.a.createElement(i.a,{path:"/register",element:l.a.createElement(E,null)}),l.a.createElement(i.a,{path:"/reserve",element:l.a.createElement(j,null)})));a(33);o.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(c.a,null,l.a.createElement(i.c,null,l.a.createElement(i.a,{path:"/",element:l.a.createElement(O,null)}),l.a.createElement(i.a,{path:"/login",element:l.a.createElement(g,null)}),l.a.createElement(i.a,{path:"/register",element:l.a.createElement(E,null)}),l.a.createElement(i.a,{path:"/reserve",element:l.a.createElement(j,null)})))))}},[[26,1,2]]]);
//# sourceMappingURL=main.8278ef40.chunk.js.map
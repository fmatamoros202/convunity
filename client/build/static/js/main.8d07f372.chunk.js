(this.webpackJsonpconvunity=this.webpackJsonpconvunity||[]).push([[0],{100:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),a=n(52),r=n.n(a),s=n(19),j=n(2),l=n(0);var o=function(e){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{children:"Convunity Landing Page"}),Object(l.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.history.push("dashboard")},children:[Object(l.jsx)("h2",{children:"Sign-In"}),Object(l.jsx)("label",{children:"Username"}),Object(l.jsx)("input",{}),Object(l.jsx)("label",{children:"Password"}),Object(l.jsx)("input",{}),Object(l.jsx)("button",{children:"Sign-In"})]}),Object(l.jsx)(s.b,{to:"/register",children:Object(l.jsx)("div",{children:"Register"})})]})};var b=function(e){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Welcome User"}),Object(l.jsx)(s.b,{to:"/chat",children:Object(l.jsx)("div",{children:"Lobby"})})]})},u=n(20),h=n(39),O=n(38),d=n.n(O);var x=function(e){var t=Object(h.a)("https://convunity.herokuapp.com"),n=Object(c.useState)(null),i=Object(u.a)(n,2),a=i[0],r=i[1],j=Object(c.useState)(""),o=Object(u.a)(j,2),b=o[0],O=o[1],x=Object(c.useState)({}),m=Object(u.a)(x,2),p=m[0],f=m[1],g=Object(c.useState)(!1),v=Object(u.a)(g,2),y=v[0],C=v[1],k=Object(c.useState)(!1),S=Object(u.a)(k,2),w=S[0],R=S[1],U=Object(c.useState)(""),I=Object(u.a)(U,2),P=I[0],L=I[1],D=Object(c.useState)(""),E=Object(u.a)(D,2),F=E[0],N=E[1],H=Object(c.useRef)(),M=Object(c.useRef)(),J=Object(c.useRef)();return Object(c.useEffect)((function(){var e=Object(h.a)("https://convunity.herokuapp.com");navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then((function(e){r(e),H.current.srcObject=e})),e.on("me",(function(e){O(e)})),e.on("calluser",(function(e){var t=e.from,n=e.name,c=e.signal;f({isReceivedCall:!0,from:t,name:n,signal:c})}))}),[]),console.log(b),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{children:"Video Chat"}),Object(l.jsxs)("h2",{children:["Hello ",P||"User"]}),Object(l.jsxs)("p",{children:["Your id is ",b]}),Object(l.jsxs)("div",{children:[a&&Object(l.jsx)("video",{ref:H,autoPlay:!0,muted:!0,playsInline:!0,width:"250",height:"250"}),y&&!w&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("h3",{children:["Hi! ",p.name||"User"]}),Object(l.jsx)("video",{ref:M,autoPlay:!0,playsInline:!0,width:"250",height:"250"})]}),Object(l.jsxs)("section",{children:[Object(l.jsx)("label",{children:"Name"}),Object(l.jsx)("input",{placeholder:"Please write your name",value:P,onChange:function(e){return L(e.target.value)}}),Object(l.jsx)("label",{children:"Make a Call"}),Object(l.jsx)("input",{placeholder:"Id to Call",value:F,onChange:function(e){return N(e.target.value)}}),y&&!w?Object(l.jsx)("button",{onClick:function(){R(!0),J.current.destroy()},children:"Hang Up"}):Object(l.jsx)("button",{onClick:function(){!function(e){var n=new d.a({initiator:!0,trickle:!1,stream:a});n.on("signal",(function(n){t.emit("calluser",{userToCall:e,signalData:n,from:b,name:P})})),n.on("stream",(function(e){M.current.srcObject=e})),t.on("callaccepted",(function(e){C(!0),n.signal(e)})),J.current=n}(F)},children:"Call"})]}),Object(l.jsx)(l.Fragment,{children:p.isReceivedCall&&!y&&Object(l.jsxs)("div",{children:[Object(l.jsxs)("p",{children:[p.name," is calling:"]}),Object(l.jsx)("button",{onClick:function(){C(!0);var e=new d.a({initiator:!1,trickle:!1,stream:a});e.on("signal",(function(e){t.emit("answercall",{signal:e,to:p.from})})),e.on("stream",(function(e){M.current.srcObject=e})),e.signal(p.signal),J.current=e},children:"Answer Call"})]})})]}),Object(l.jsx)(s.b,{to:"/dashboard",children:Object(l.jsx)("div",{children:"End Call"})})]})};var m=function(e){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Thank you for joining Convunity"}),Object(l.jsx)("p",{children:"Please provide the following information"}),Object(l.jsxs)("form",{onSubmit:function(t){t.preventDefault(),console.log(t),console.log(e.match.path),e.history.replace("")},children:[Object(l.jsx)("label",{children:"Name"}),Object(l.jsx)("input",{}),Object(l.jsx)("label",{children:"Username"}),Object(l.jsx)("input",{}),Object(l.jsx)("label",{children:"Email"}),Object(l.jsx)("input",{}),Object(l.jsx)("label",{children:"Nickname"}),Object(l.jsx)("input",{}),Object(l.jsx)("label",{children:"Native Language"}),Object(l.jsx)("input",{}),Object(l.jsx)("label",{children:"Learning Language"}),Object(l.jsx)("input",{}),Object(l.jsx)("button",{children:"Register"})]})]})};var p=function(){return Object(l.jsx)(s.a,{children:Object(l.jsxs)(j.c,{children:[Object(l.jsx)(j.a,{path:"/",exact:!0,component:o}),Object(l.jsx)(j.a,{path:"/register",component:m}),Object(l.jsx)(j.a,{path:"/dashboard",component:b}),Object(l.jsx)(j.a,{path:"/chat",component:x})]})})};r.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(p,{})}),document.getElementById("root"))},90:function(e,t){},92:function(e,t){}},[[100,1,2]]]);
//# sourceMappingURL=main.8d07f372.chunk.js.map
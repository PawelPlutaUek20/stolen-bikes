(this["webpackJsonpcoding-challenge-frontend-react"]=this["webpackJsonpcoding-challenge-frontend-react"]||[]).push([[0],{127:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(11),i=n.n(c),r=n(43),o=n(12),s=n(18),l=n(82),d=n(17),j=n(167),b=n(156),h=n(159),u=n(168),m=n(162),O=n(4),g=Object(b.a)({textField:{width:"31%"},inputField:{width:"22%"},buttonField:{maxHeight:36,width:"20%",marginTop:12}}),x=function(e){var t=e.loading,n=e.handleClick,c=g(),i=Object(a.useState)(""),r=Object(s.a)(i,2),o=r[0],b=r[1],x=Object(a.useState)(null),p=Object(s.a)(x,2),f=p[0],v=p[1],y=Object(a.useState)(null),N=Object(s.a)(y,2),w=N[0],k=N[1];return Object(O.jsxs)(h.a,{container:!0,spacing:2,justify:"space-between",children:[Object(O.jsx)(u.a,{value:o,className:c.textField,label:"Search case descriptions",onChange:function(e){return b(e.target.value)}}),Object(O.jsxs)(d.a,{utils:l.a,children:[Object(O.jsx)(j.a,{className:c.inputField,autoOk:!0,disableFuture:!0,variant:"inline",placeholder:"18.08.2014",format:"dd.MM.yyyy",label:"From",value:f,onChange:function(e){return v(e)}}),Object(O.jsx)(j.a,{className:c.inputField,autoOk:!0,disableFuture:!0,variant:"inline",placeholder:"18.08.2014",format:"dd.MM.yyyy",label:"To",value:w,onChange:function(e){return k(e)}})]}),Object(O.jsx)(m.a,{color:"primary",className:c.buttonField,variant:"contained",disabled:t,onClick:function(){return n(o||"",f?new Date(f).getTime()/1e3:"",w?new Date(w).getTime()/1e3:"")},children:"Find cases"})]})},p=n(40),f=n(128),v=n(161),y=n(163),N=function(e){return Object(O.jsxs)("svg",Object(p.a)(Object(p.a)({viewBox:"0 0 75.45 75.45"},e),{},{children:[Object(O.jsx)("path",{d:"M14 61.71a14 14 0 1 1 14-14 14 14 0 0 1-14 14zm0-25a11 11 0 1 0 11 11 11 11 0 0 0-11-11zM61.45 61.71a14 14 0 1 1 14-14 14 14 0 0 1-14 14zm0-25a11 11 0 1 0 11 11 11 11 0 0 0-11-11z"}),Object(O.jsx)("path",{d:"M35.22 49.22H14a1.5 1.5 0 0 1-1.13-2.48l13.35-15.4-3.59-8a1.5 1.5 0 0 1 2.74-1.23l3.44 7.65 23.35-7.15a1.5 1.5 0 0 1 1.65 2.32L36.45 48.58a1.49 1.49 0 0 1-.84.53h-.33zm-17.95-3H32.9l-5.34-11.87zM30 32.53l5.5 12.23 13.19-17.94z"}),Object(O.jsx)("path",{d:"M30.23 24.23h-10a1.5 1.5 0 0 1 0-3h10a1.5 1.5 0 0 1 0 3zM61.45 49.22a1.5 1.5 0 0 1-1.4-1l-11.24-30a1.5 1.5 0 0 1 .88-1.93h.05l7.49-2.5a1.5 1.5 0 1 1 .95 2.85l-6 2 10.69 28.5a1.5 1.5 0 0 1-1.42 2.08z"})]}))},w=Object(b.a)((function(e){return{contentContainer:{flex:"auto",display:"flex",flexDirection:"column",padding:e.spacing(2)},paper:{display:"flex",maxHeight:200},imageContainer:{width:200,height:200,flex:"none"},description:{display:"-webkit-box",boxOrient:"vertical",lineClamp:3,wordBreak:"break-all",overflow:"hidden"},title:{display:"-webkit-box",boxOrient:"vertical",lineClamp:1,wordBreak:"break-all",overflow:"hidden"},image:{width:200,height:200,padding:25},svg:{backgroundColor:e.palette.action.hover,fill:e.palette.background.paper,width:150,height:150},reported:{marginTop:"auto",alignSelf:"flex-end",fontStyle:"italic"},centerImage:{padding:25},link:{color:e.palette.info.light}}})),k=function(e){var t=e.incident,n=w();return Object(O.jsxs)(v.a,{className:n.paper,children:[Object(O.jsx)("div",{className:n.imageContainer,children:t.media.image_url_thumb?Object(O.jsx)("div",{children:Object(O.jsx)("img",{alt:"bike",src:t.media.image_url_thumb,className:n.image})}):Object(O.jsx)("div",{className:n.centerImage,children:Object(O.jsx)(N,{className:n.svg})})}),Object(O.jsxs)("div",{direction:"column",className:n.contentContainer,children:[Object(O.jsx)(f.a,{className:n.title,gutterBottom:!0,variant:"h6",children:Object(O.jsx)(y.a,{component:r.b,to:"/case/".concat(t.id),className:n.link,underline:"always",children:t.title})}),Object(O.jsx)(f.a,{className:n.description,gutterBottom:!0,variant:"body1",children:t.description||"No description"}),Object(O.jsx)(f.a,{gutterBottom:!0,variant:"body1",className:n.title,children:"".concat(new Date(1e3*t.occurred_at).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"2-digit",weekday:"short"})," - ").concat(t.address," ")}),Object(O.jsx)(f.a,{variant:"caption",className:n.reported,children:"Reported: ".concat(new Date(1e3*t.updated_at).toLocaleString("en-US"))})]})]})},B=n(169),C=n(59),S=n.n(C),F=Object(b.a)((function(e){return{total:{textAlign:"end"},pagination:{marginTop:e.spacing(2)}}})),T=function(e){var t=e.incidents,n=F(),a=Object(o.f)(),c=Object(o.g)(),i=parseInt(S.a.parse(c.search).page)||1;return Object(O.jsxs)(h.a,{container:!0,spacing:2,children:[Object(O.jsx)(h.a,{item:!0,xs:12,children:Object(O.jsxs)(f.a,{variant:"body1",className:n.total,children:["total: ",t.length]})}),Object(O.jsx)(h.a,{item:!0,xs:12,children:Object(O.jsx)(h.a,{container:!0,spacing:2,direction:"column",children:t.slice(10*(i-1),10*i).map((function(e){return Object(O.jsx)(h.a,{item:!0,children:Object(O.jsx)(k,{incident:e})},e.id)}))})}),Object(O.jsx)(h.a,{item:!0,container:!0,xs:12,justify:"center",children:Object(O.jsx)(B.a,{size:"large",onChange:function(e,t){var n=S.a.stringify(Object(p.a)(Object(p.a)({},S.a.parse(c.search)),{},{page:t}));a.push("/?".concat(n))},page:i,className:n.pagination,count:Math.ceil(t.length/10),showFirstButton:!0,showLastButton:!0})})]})},I=n.p+"static/media/logo.114a8706.svg",M=Object(b.a)((function(e){return{header:{display:"flex",alignItems:"center",padding:e.spacing(2),justifyContent:"center"},logo:{width:100,height:100,marginRight:25}}})),z=function(){var e=M();return Object(O.jsxs)("header",{className:e.header,children:[Object(O.jsx)("div",{children:Object(O.jsx)("img",{src:I,alt:"Logo",className:e.logo})}),Object(O.jsxs)("div",{children:[Object(O.jsx)(f.a,{variant:"h4",gutterBottom:!0,children:"Police Departament of Berlin"}),Object(O.jsx)(f.a,{variant:"h5",children:"Stolen bykes"})]})]})},L=n(164),_=Object(b.a)((function(e){return{container:{minWidth:640},header:{marginTop:e.spacing(2)}}})),D=function(){var e=_(),t=Object(a.useState)([]),n=Object(s.a)(t,2),c=n[0],i=n[1],r=Object(a.useState)(!0),o=Object(s.a)(r,2),l=o[0],d=o[1],j=Object(a.useState)(""),b=Object(s.a)(j,2),u=b[0],m=b[1],g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";d(!0),fetch("https://bikewise.org:443/api/v2/incidents?incident_type=theft&query=".concat(e,"&occurred_after=").concat(t,"&occurred_before=").concat(n,"&page=1&per_page=22&proximity=Berlin")).then((function(e){return e.json()})).then((function(e){d(!1),i(e.incidents)})).catch((function(e){d(!1),m("Ooops, something went wrong")}))};return Object(a.useEffect)((function(){g()}),[]),Object(O.jsx)(L.a,{maxWidth:"md",className:e.container,children:Object(O.jsxs)(h.a,{container:!0,spacing:6,children:[Object(O.jsx)(h.a,{item:!0,xs:12,className:e.header,children:Object(O.jsx)(z,{})}),Object(O.jsx)(h.a,{item:!0,xs:12,children:Object(O.jsx)(x,{loading:l,handleClick:g})}),Object(O.jsx)(h.a,{item:!0,xs:12,children:l?Object(O.jsx)(f.a,{variant:"body1",gutterBottom:!0,children:"Loading..."}):u?Object(O.jsx)(f.a,{variant:"body1",gutterBottom:!0,color:"error",children:u}):0===c.length?Object(O.jsx)(f.a,{variant:"body1",gutterBottom:!0,children:"No results"}):Object(O.jsx)(T,{incidents:c})})]})})},E=(n(126),n(60)),W=n.n(E),R={mapBoxToken:"pk.eyJ1IjoicGF3ZWw2OTM5IiwiYSI6ImNrcXNxeTdmMDE5eXkydW8xejV6dnUzMTkifQ._LdpVBYvNoHXeByxVdJsqg"};W.a.accessToken=R.mapBoxToken;var H=Object(b.a)((function(e){return{map:{height:"100%",position:"relative"},mapContainer:{height:"100%"},sideBar:{backgroundColor:"rgba(35, 55, 75, 0.9)",color:"#ffffff",padding:"6px 12px",fontFamily:"monospace",zIndex:1,position:"absolute",top:0,left:0,margin:12,borderRadius:4}}})),P=function(e){var t=e.address,n=H(),c=Object(a.useRef)(null),i=Object(a.useRef)(null),r=Object(a.useState)(13.38333),o=Object(s.a)(r,2),l=o[0],d=o[1],j=Object(a.useState)(52.51667),b=Object(s.a)(j,2),h=b[0],u=b[1],m=Object(a.useState)(14),g=Object(s.a)(m,2),x=g[0],p=g[1];return Object(a.useEffect)((function(){i.current||function(e){return fetch("https://api.mapbox.com/geocoding/v5/mapbox.places/country=de&".concat(e,".json?access_token=").concat(W.a.accessToken)).then((function(e){return e.json()})).then((function(e){return e.features})).then((function(e){return e[0].geometry}))}(t).then((function(e){i.current=new W.a.Map({container:c.current,style:"mapbox://styles/mapbox/streets-v11",center:e.coordinates,zoom:x})}))})),Object(a.useEffect)((function(){i.current&&i.current.on("move",(function(){d(i.current.getCenter().lng.toFixed(4)),u(i.current.getCenter().lat.toFixed(4)),p(i.current.getZoom().toFixed(2))}))})),Object(O.jsxs)("div",{className:n.map,children:[Object(O.jsxs)("div",{className:n.sideBar,children:["Longitude: ",l," | Latitude: ",h]}),Object(O.jsx)("div",{ref:c,className:n.mapContainer})]})},J=Object(b.a)((function(e){return{bold:{fontWeight:600},map:{width:"100%",height:"50vh",backgroundColor:e.palette.action.hover}}})),U=function(e){var t=e.incident,n=J();return Object(O.jsxs)(h.a,{container:!0,spacing:2,children:[Object(O.jsxs)(h.a,{item:!0,xs:12,children:[Object(O.jsx)(f.a,{variant:"h6",gutterBottom:!0,children:t.title}),Object(O.jsx)(f.a,{display:"inline",variant:"body1",className:n.bold,children:"Stolen"}),Object(O.jsx)(f.a,{display:"inline",variant:"body1",children:" ".concat(new Date(1e3*t.occurred_at).toLocaleString("en-US",{month:"short",day:"2-digit",hour:"numeric",timeZone:"Europe/Berlin",hour12:!0})," at ").concat(t.address," ")})]}),Object(O.jsx)(h.a,{item:!0,xs:12,children:Object(O.jsx)("div",{className:n.map,children:Object(O.jsx)(P,{address:t.address})})}),Object(O.jsxs)(h.a,{item:!0,xs:12,children:[Object(O.jsx)(f.a,{variant:"h6",gutterBottom:!0,children:"DESCRIPTION OF INCIDENT"}),Object(O.jsx)(f.a,{variant:"body1",children:t.description||"No description"})]})]})},V=Object(b.a)((function(e){return{container:{minWidth:640},header:{marginTop:e.spacing(2)}}})),X=function(e){var t=e.match,n=V(),c=Object(a.useState)([]),i=Object(s.a)(c,2),r=i[0],o=i[1],l=Object(a.useState)(!0),d=Object(s.a)(l,2),j=d[0],b=d[1],u=Object(a.useState)(""),m=Object(s.a)(u,2),g=m[0],x=m[1];return Object(a.useEffect)((function(){b(!0),fetch("https://bikewise.org:443/api/v2/incidents/".concat(t.params.id)).then((function(e){return e.json()})).then((function(e){b(!1),o(e.incident)})).catch((function(e){b(!1),x("Ooops, something went wrong")}))}),[t.params.id]),Object(O.jsx)(L.a,{maxWidth:"md",className:n.container,children:Object(O.jsxs)(h.a,{container:!0,spacing:6,children:[Object(O.jsx)(h.a,{item:!0,xs:12,className:n.header,children:Object(O.jsx)(z,{})}),Object(O.jsx)(h.a,{item:!0,xs:12,children:j?Object(O.jsx)(f.a,{variant:"body1",gutterBottom:!0,children:"Loading..."}):g?Object(O.jsx)(f.a,{variant:"body1",gutterBottom:!0,color:"error",children:g}):0===r.length?Object(O.jsx)(f.a,{variant:"body1",gutterBottom:!0,children:"No results"}):Object(O.jsx)(U,{incident:r})})]})})},Z=Object(b.a)((function(e){return{container:{minWidth:640},header:{marginTop:e.spacing(2)}}})),q=function(){var e=Z();return Object(O.jsx)(L.a,{maxWidth:"md",className:e.container,children:Object(O.jsxs)(h.a,{container:!0,spacing:6,children:[Object(O.jsx)(h.a,{item:!0,xs:12,className:e.header,children:Object(O.jsx)(z,{})}),Object(O.jsx)(h.a,{item:!0,xs:12,children:Object(O.jsx)(f.a,{variant:"h6",gutterBottom:!0,align:"center",children:"404 Page Not Found"})})]})})},Y=function(){return Object(O.jsx)(r.a,{basename:"/stolen-bikes",children:Object(O.jsxs)(o.c,{children:[Object(O.jsx)(o.a,{path:"/",exact:!0,component:D}),Object(O.jsx)(o.a,{path:"/case/:id",component:X}),Object(O.jsx)(o.a,{component:q})]})})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,173)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))},G=n(83),Q=n(165),K=n(166),$=Object(G.a)({palette:{type:"dark"}});i.a.render(Object(O.jsxs)(Q.a,{theme:$,children:[Object(O.jsx)(K.a,{}),Object(O.jsx)(Y,{})]}),document.getElementById("root")),A()}},[[127,1,2]]]);
//# sourceMappingURL=main.065642fa.chunk.js.map
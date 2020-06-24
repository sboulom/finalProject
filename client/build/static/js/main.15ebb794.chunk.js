(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{46:function(e,a,t){e.exports=t(80)},51:function(e,a,t){},73:function(e,a,t){},74:function(e,a,t){},75:function(e,a,t){},76:function(e,a,t){},77:function(e,a,t){},79:function(e,a,t){},80:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(18),c=t.n(r),s=t(92),o=t(95),m=t(94),i=t(16),u=t(22),d=t(6),E=t(83),p=t(93),g=t(84),b=t(88),f=t(85),h=(t(51),t(12)),v=t.n(h),N={getBeers:function(){return v.a.get("https://cors-anywhere.herokuapp.com/http://api.brewerydb.com/v2/beers/?key=87c960285bab5e70410f78d6662f74ad")},getBeersLocal:function(e){return v.a.get("/api/beers",{params:{q:e}})},getUser:function(){return v.a.get("/api/user")},getCurrentUserData:function(e){return v.a.get("/api/userdata",{params:{q:e}})},signup:function(e){return v.a.post("/api/register",e)},login:function(e){return v.a.post("/api/login",e)},addBeer:function(e){return v.a.put("/api/addBeer/".concat(e.name),e)},addBrowsedBeer:function(e){return v.a.put("/api/add_browsed_beer/".concat(e.username),e)}},x=function(){var e=Object(n.useState)({username:"",password:"",email:"",name:""}),a=Object(d.a)(e,2),t=a[0],r=a[1],c=function(e){var a=e.target,n=a.name,l=a.value;r(Object(u.a)({},t,Object(i.a)({},n,l)))};return l.a.createElement(E.a,{className:"registerWrapper"},l.a.createElement("div",null,l.a.createElement(p.a.Body,{className:"color"},l.a.createElement(p.a.Title,null,"Sign Up"),l.a.createElement(g.a,{className:"mb-3"},l.a.createElement(b.a.Control,{placeholder:"Name","aria-label":"Name","aria-describedby":"basic-addon1",name:"name",value:t.name,onChange:c})),l.a.createElement(g.a,{className:"mb-3"},l.a.createElement(b.a.Control,{placeholder:"Email","aria-label":"Email","aria-describedby":"basic-addon1",name:"email",value:t.email,onChange:c})),l.a.createElement(g.a,{className:"mb-3"},l.a.createElement(b.a.Control,{placeholder:"User Name","aria-label":"User Name","aria-describedby":"basic-addon1",name:"username",value:t.username,onChange:c})),l.a.createElement(g.a,{className:"mb-3"},l.a.createElement(b.a.Control,{type:"password",placeholder:"Password","aria-label":"Password","aria-describedby":"basic-addon1",name:"password",value:t.password,onChange:c})),l.a.createElement(f.a,{variant:"outline-secondary",onClick:function(e){console.log("state.name",t.name),console.log("state.email",t.email),console.log("state.username",t.username),console.log("state.password",t.password);var a={username:t.username,password:t.password,email:t.email,name:t.name};N.signup(a).then(function(e){window.location.href="/userprofile"})}},"Submit"))))},C=(t(73),function(e){var a=Object(n.useState)({username:"",password:""}),t=Object(d.a)(a,2),r=t[0],c=t[1],s=function(e){var a=e.target,t=a.name,n=a.value;c(Object(u.a)({},r,Object(i.a)({},t,n)))};return l.a.createElement(E.a,{className:"signInWrapper"},l.a.createElement("div",null,l.a.createElement(p.a,{className:"whiteSpace"},l.a.createElement(p.a.Body,{className:"cardArea"},l.a.createElement(p.a.Title,null,"Sign In"),l.a.createElement(g.a,{className:"mb-3"},l.a.createElement(b.a.Control,{placeholder:"User Name","aria-label":"User Name","aria-describedby":"basic-addon1",name:"username",value:r.username,onChange:s})),l.a.createElement(g.a,{className:"mb-3"},l.a.createElement(b.a.Control,{type:"password",placeholder:"Password","aria-label":"Password","aria-describedby":"basic-addon1",name:"password",value:r.password,onChange:s})),l.a.createElement(p.a.Text,{style:{textAlign:"right"}},"New User?",l.a.createElement(p.a.Link,{href:"/register"}," Register Here")),l.a.createElement(f.a,{variant:"outline-secondary",onClick:function(a){console.log("state.username",r.username),console.log("state.password",r.password);var t={username:r.username,password:r.password};N.login(t).then(function(a){console.log("log in success!"),console.log(a.data._doc),e.history.push("/userprofile")}).catch(function(e){console.log(e)})}},"Submit")))))}),w=t(86),y=t(87),j=t(39);var B=function(e){return l.a.createElement(j.a,{xs:6,sm:4,md:3,lg:2,xl:2,className:"my-1 px-0"},l.a.createElement(p.a,{className:"cardHeight"},l.a.createElement(p.a,{className:"cardHeight cardColor"},l.a.createElement(p.a.Title,{className:"ml-auto"},l.a.createElement("h4",null,l.a.createElement("i",{className:"mx-1"}))),l.a.createElement(p.a.Img,{variant:"top",src:"./assets/pixelMug.jpg",className:"cardImage mx-auto"}),l.a.createElement(p.a.Body,null,l.a.createElement(p.a.Title,{className:"text-center"},e.name),l.a.createElement(p.a.Title,{className:"subText"},e.beerStyle," | ",e.abv,"% ABV"),l.a.createElement(p.a.Text,{className:"subText"},e.beerCategory),l.a.createElement(p.a.Text,null,"Description: ",e.shortDesc)))))},O=(t(74),t(89)),T=t(90),S=(t(75),function(){var e=Object(n.useState)({name:""}),a=Object(d.a)(e,2),t=a[0];a[1];return l.a.createElement("div",null,l.a.createElement(O.a,{collapseOnSelect:!0,className:"navPaddingMobile",bg:"light",expand:"lg"},l.a.createElement(O.a.Brand,{href:"/userprofile",className:"mx-1"},l.a.createElement("img",{src:"./assets/beerIcon.png",width:"30",height:"30",className:"d-inline-block align-top",alt:"beerIcon logo"})),l.a.createElement(O.a.Brand,{href:"/userprofile"},"The Beer Book"),l.a.createElement(T.a.Link,{href:"/userprofile",className:"navIconPadding"},l.a.createElement("i",{className:"fas fa-house-user mx-1"}),l.a.createElement(O.a.Text,{className:"navTextMobile"},"User Profile")),l.a.createElement(T.a.Link,{href:"/browse",className:"navIconPadding"},l.a.createElement("i",{className:"fas fa-beer mx-1"}),l.a.createElement(O.a.Text,{className:"navTextMobile"},"Browse Beers")),l.a.createElement(T.a.Link,{href:"/custom",className:"navIconPadding"},l.a.createElement("i",{className:"fas fa-plus-circle mx-1"}),l.a.createElement(O.a.Text,{className:"navTextMobile"},"Add Custom Beer")),l.a.createElement(O.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement("div",{className:"ml-auto"},t.name?l.a.createElement("div",null,l.a.createElement("h3",null,"Welcome ",t.name),l.a.createElement(T.a.Link,{href:"#",onClick:function(){N.logOut().then(function(){window.location.href="/"})}},"Log Out")):l.a.createElement(O.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(T.a,{className:"ml-auto"},l.a.createElement(T.a.Link,{href:"/signin"},l.a.createElement(O.a.Text,null,"Sign In")),l.a.createElement(T.a.Link,{href:"/register"},l.a.createElement(O.a.Text,null,"Register")))))))});var I=function(){var e=Object(n.useState)({data:[]}),a=Object(d.a)(e,2),t=a[0],r=a[1];return Object(n.useEffect)(function(){N.getUser().then(function(e){r(e.data[0].beerCollection),console.log("this is res: "+JSON.stringify(e.data[0]))}).catch(function(e){console.log(e)})},[]),l.a.createElement("div",null,l.a.createElement(S,null),l.a.createElement(w.a,{fluid:!0,className:"jumboUserPage mb-1"},l.a.createElement(E.a,{className:"banner mx-0 px-0"},l.a.createElement(y.a,null,l.a.createElement(j.a,{className:"jumboTitle"},"My Beer Collection")))),l.a.createElement(E.a,{className:""},t.length?l.a.createElement(y.a,null,t.slice(0,12).map(function(e,a){return B(e)})):l.a.createElement("h1",{className:"text-center"},"No Beers to Display")))};var k=function(e){return l.a.createElement("div",{className:"input-group input-group-lg"},l.a.createElement("input",Object.assign({className:"form-control",type:"text"},e)))};var L=function(e){var a=e.type,t=void 0===a?"default":a,n=e.className,r=e.children,c=e.onClick;return l.a.createElement("button",{onClick:c,className:["btn btn-lg","btn-".concat(t),n].join(" ")},r)};var A=function(e){var a=e.style.description.split(".")[0]+".",t={picture:"",name:e.name,beerStyle:e.style.name,abv:e.abv,beerCategory:e.style.category.name,shortDesc:a};return l.a.createElement(j.a,{xs:6,sm:4,md:3,lg:2,xl:2,className:"my-1 px-0"},l.a.createElement(p.a,{className:"cardHeight"},l.a.createElement(p.a,{className:"cardHeight cardColor"},l.a.createElement(p.a.Title,{className:"ml-auto"},l.a.createElement("h4",null,l.a.createElement("i",{className:"fas fa-plus-circle mx-1",onClick:function(e){e.preventDefault(),console.log("test handlePlusButton"),N.getUser().then(function(e){console.log(e);var a=e.data[0];a.beerCollection.push(t),N.addBeer(a).catch(function(e){return console.log(e)})})}}))),l.a.createElement(p.a.Img,{variant:"top",src:"./assets/pixelMug.jpg",className:"cardImage mx-auto"}),l.a.createElement(p.a.Body,null,l.a.createElement(p.a.Title,{className:"text-center"},t.name),l.a.createElement(p.a.Title,{className:"subText"},t.beerStyle," | ",t.abv,"% ABV"),l.a.createElement(p.a.Text,{className:"subText"},t.beerCategory),l.a.createElement(p.a.Text,null,"Description: ",t.shortDesc)))))};t(76);var D=function(){var e=Object(n.useState)({data:[]}),a=Object(d.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(""),s=Object(d.a)(c,2),o=s[0],m=s[1],i=Object(n.useState)([]),u=Object(d.a)(i,2),p=u[0],g=u[1];return Object(n.useEffect)(function(){N.getBeers().then(function(e){r(e.data)}),console.log("useEffect has been called")},[]),Object(n.useEffect)(function(){var e=t.data.slice(0,6).filter(function(e){return e.name.toLowerCase().includes(o)});g(e)},[o]),l.a.createElement("div",null,l.a.createElement(S,null),l.a.createElement(w.a,{fluid:!0,className:"jumboBrowsePage mb-1"},l.a.createElement(E.a,{className:"banner mx-0 px-0"},l.a.createElement(y.a,null,l.a.createElement(j.a,{className:"jumboTitle"},"Browse Beers")))),l.a.createElement(E.a,{className:" py-0"},l.a.createElement(y.a,null,l.a.createElement(j.a,null,l.a.createElement("form",null,l.a.createElement(y.a,null,l.a.createElement(j.a,{xs:12,sm:12,md:10,lg:10,xl:10},l.a.createElement(k,{name:"SearchTerm",value:o,onChange:function(e){var a=e.target.value;m(a)},placeholder:"Search For a Beer"})),l.a.createElement(j.a,{xs:12,sm:12,md:2,lg:2,xl:2},l.a.createElement(L,{type:"success",onClick:function(e){e.preventDefault(),console.log(o),N.getBeersLocal(o).then(function(e){return g(e.data)}).catch(function(e){return console.log(e)})},className:"searchWidth my-auto"},"Search")))))),p.length?l.a.createElement(y.a,null,p.map(function(e,a){return A(e)})):l.a.createElement(y.a,null,t.data.slice(0,6).map(function(e,a){return A(e)}))))},P=(t(77),function(){var e=Object(n.useState)(""),a=Object(d.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(""),s=Object(d.a)(c,2),o=s[0],m=s[1],i=Object(n.useState)(""),u=Object(d.a)(i,2),g=u[0],h=u[1],v=Object(n.useState)(""),x=Object(d.a)(v,2),C=x[0],w=x[1],B=Object(n.useState)(""),O=Object(d.a)(B,2),T=O[0],I=O[1],k=Object(n.useState)(!1),L=Object(d.a)(k,2),A=L[0],D=L[1],P=function(){D(!0)};return l.a.createElement("div",null,l.a.createElement(S,null),l.a.createElement(E.a,null,l.a.createElement(y.a,null,l.a.createElement(j.a,{xs:8,sm:8,md:8,lg:8,xl:8,className:"my-1 px-0 addBeer"},l.a.createElement(p.a,{className:"cardHeight"},l.a.createElement(p.a,{className:"cardHeight cardColor"},l.a.createElement(p.a.Title,{className:"ml-auto"},l.a.createElement("h4",null)),l.a.createElement(p.a.Img,{variant:"top",src:"./assets/pixelMug.jpg",className:"cardImage mx-auto"}),l.a.createElement(p.a.Body,null,l.a.createElement(p.a.Title,{className:"text-center"},"Add Your Own Beer Review!"),l.a.createElement(p.a.Title,{className:"subText"},l.a.createElement(b.a,null,l.a.createElement(b.a.Group,{controlId:"exampleForm.ControlInput1"},l.a.createElement(b.a.Label,null,"Name"),l.a.createElement(b.a.Control,{type:"email",placeholder:"Enter Beer Name Here",value:t,onChange:function(e){var a=e.target.value;r(a)}}))),l.a.createElement(E.a,null,l.a.createElement(y.a,null,l.a.createElement(j.a,{xs:6,sm:6,md:6,lg:6,xl:6,className:"pl-0 pr-1"},l.a.createElement(b.a,null,l.a.createElement(b.a.Group,{controlId:"exampleForm.ControlInput1"},l.a.createElement(b.a.Label,null,"Style"),l.a.createElement(b.a.Control,{type:"email",placeholder:"Enter Beer Style Here",value:o,onChange:function(e){var a=e.target.value;m(a)}})))),l.a.createElement(j.a,{xs:6,sm:6,md:6,lg:6,xl:6,className:"pl-1 pr-0"},l.a.createElement(b.a,null,l.a.createElement(b.a.Group,{controlId:"exampleForm.ControlInput1"},l.a.createElement(b.a.Label,null,"ABV"),l.a.createElement(b.a.Control,{type:"email",placeholder:"Enter ABV Here",value:g,onChange:function(e){var a=e.target.value;h(a)}})))))),l.a.createElement(b.a.Group,{controlId:"exampleForm.ControlInput1"},l.a.createElement(b.a.Label,null,"Category"),l.a.createElement(b.a.Control,{type:"email",placeholder:"Enter Category of Beer Here",value:C,onChange:function(e){var a=e.target.value;w(a)}}))),l.a.createElement(p.a.Text,{className:"subText"}),l.a.createElement(b.a.Group,{controlId:"exampleForm.ControlTextarea1"},l.a.createElement(b.a.Label,null,"Beer Description"),l.a.createElement(b.a.Control,{as:"textarea",rows:"3",value:T,onChange:function(e){var a=e.target.value;I(a)}})),l.a.createElement("div",null,l.a.createElement(E.a,null,l.a.createElement(y.a,null,l.a.createElement(j.a,{className:"button"},l.a.createElement(f.a,{variant:"success",onClick:function(e){e.preventDefault();var a={picture:"",name:t,beerStyle:o,abv:g,beerCategory:C,shortDesc:T};N.getCurrentUserData("Alice").then(function(e){var t=e.data[0];t.beerCollection.push(a),N.addBrowsedBeer(t).catch(function(e){return console.log(e)})}),P()}},A?"Beer Added!":"Add Beer")," ")))))))))))}),U=t(44),H=t(91),M=l.a.createContext({name:"",email:"",username:"",beerCollection:[],isAuthenticated:!0}),F=function(e){var a=e.component,t=Object(U.a)(e,["component"]),r=Object(n.useContext)(M).isAuthenticated;return l.a.createElement(m.a,Object.assign({},t,{render:function(e){return r?l.a.createElement(a,e):l.a.createElement(H.a,{to:"/signin"})}}))};t(79);var W=function(){return l.a.createElement("div",{className:"wrapper"},l.a.createElement(M.Provider,{value:{isAuthenticated:!0}},l.a.createElement(s.a,null,l.a.createElement(o.a,null,l.a.createElement(m.a,{exact:!0,path:"/register",component:x}),l.a.createElement(m.a,{exact:!0,path:"/signin",render:function(e){return l.a.createElement(C,e)}}),l.a.createElement(m.a,{exact:!0,path:"/",component:C}),l.a.createElement(F,{exact:!0,path:"/browse",component:D}),l.a.createElement(F,{exact:!0,path:"/custom",component:P}),l.a.createElement(F,{exact:!0,path:"/userprofile",component:I})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}).catch(function(e){console.error(e.message)})}},[[46,1,2]]]);
//# sourceMappingURL=main.15ebb794.chunk.js.map
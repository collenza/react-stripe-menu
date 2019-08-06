(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,n,t){e.exports=t(36)},35:function(e,n,t){},36:function(e,n,t){"use strict";t.r(n);var r=t(4),a=t(5),i=t(7),o=t(6),l=t(8),c=t(2),u=t(0),m=t.n(u),d=t(15),s=t.n(d),f=t(3);function p(){var e=Object(c.a)(["\n  display: flex;\n  justify-content: center;\n  list-style: none;\n  margin: 0;\n"]);return p=function(){return e},e}function v(){var e=Object(c.a)(["\n  margin: auto;\n"]);return v=function(){return e},e}var b=f.b.nav(v()),h=f.b.ul(p()),E=function(e){function n(){return Object(r.a)(this,n),Object(i.a)(this,Object(o.a)(n).apply(this,arguments))}return Object(l.a)(n,e),Object(a.a)(n,[{key:"render",value:function(){var e=this.props,n=e.children,t=e.onMouseLeave;return m.a.createElement(b,{onMouseLeave:t},m.a.createElement(h,null,n))}}]),n}(u.Component);function g(){var e=Object(c.a)(["\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  perspective: 1500px;\n"]);return g=function(){return e},e}function O(){var e=Object(c.a)(["\n  position: relative;\n"]);return O=function(){return e},e}function y(){var e=Object(c.a)(["\n  background: transparent;\n  border: 0;\n  font-weight: bold;\n  font-family: inherit;\n  font-size: 18px;\n  padding: 2rem 1.5rem 1.2rem 1.5rem;\n  color: white;\n  display: flex;\n  justify-content: center;\n  transition: opacity 250ms;\n  cursor: pointer;\n  /* position above the dropdown, otherwise the dropdown will cover up the bottom sliver of the buttons */\n  position: relative;\n  z-index: 2;\n  &:hover, &:focus {\n    opacity: 0.7;\n    outline:none;\n  }\n"]);return y=function(){return e},e}var w=f.b.button(y()),j=f.b.li(O()),x=f.b.div(g()),k=function(e){function n(){var e,t;Object(r.a)(this,n);for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(o.a)(n)).call.apply(e,[this].concat(l)))).onMouseEnter=function(){t.props.onMouseEnter(t.props.index)},t}return Object(l.a)(n,e),Object(a.a)(n,[{key:"render",value:function(){var e=this.props,n=e.title,t=e.children;return m.a.createElement(j,{onMouseEnter:this.onMouseEnter,onFocus:this.onMouseEnter},m.a.createElement(w,null,n),m.a.createElement(x,null,t))}}]),n}(u.Component),M=t(9),S=t(10);function C(){var e=Object(c.a)(["\n  backface-visibility: none;\n  will-change: transform;\n"]);return C=function(){return e},e}var D=Object(f.a)(C());function I(){var e=Object(c.a)(["\n  ","\n  position: ",";\n  top: 0;\n  left: 0;\n  &:first-of-type {\n    z-index: 1;\n  }\n  &:not(:first-of-type) {\n    z-index: -1;\n  }\n"]);return I=function(){return e},e}function B(){var e=Object(c.a)(["\n  background-color: var(--grey);\n  width: 300%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: -100%;\n  transform-origin: 0 0;\n  z-index: 0;\n  transition: transform ","ms;\n"]);return B=function(){return e},e}function A(){var e=Object(c.a)(["\n  transform-origin: 0 0;\n  background-color: var(--white);\n  border-radius: 4px;\n  overflow: hidden;\n  position: relative;\n  box-shadow: 0 50px 100px rgba(50, 50, 93, 0.1);\n  ","\n"]);return A=function(){return e},e}function T(){var e=Object(c.a)(["\n  width: 0;\n  height: 0;\n  border-width: 10px;\n  border-style: solid;\n  border-color: transparent transparent var(--white);\n  /* make sure it's above the main dropdown container so now box-shadow bleeds over it */\n  z-index: 1;\n  position: relative;\n  /* prevent any gap in between caret and main dropdown */\n  top: 1px;\n"]);return T=function(){return e},e}function F(){var e=Object(c.a)(["\n  transform-origin: 0 0;\n  ","\n  animation-name: ",";\n  animation-duration: ","ms;\n  /* use 'forwards' to prevent flicker on leave animation */\n  animation-fill-mode: forwards;\n  /* flex styles will center the caret child component */\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n  top: -20px;\n"]);return F=function(){return e},e}function L(){var e=Object(c.a)(["\n  from {\n    transform: ",";\n    opacity: ",";\n  }\n  to {\n    transform: ",";\n    opacity: ",";\n  }\n"]);return L=function(){return e},e}var z=f.b.div(F(),D,function(e){var n=e.animatingOut,t=e.direction;return!n&&t?null:Object(f.c)(L(),n?"rotateX(0)":"rotateX(-15deg)",n?1:0,n?"rotateX(-15deg)":"rotateX(0)",n?0:1)},function(e){return e.duration}),q=f.b.div(T()),P=f.b.div(A(),D),X=f.b.div(B(),function(e){return e.duration}),R=f.b.div(I(),D,function(e){return e.absolute?"absolute":"relative"}),J=t(1),Y=t.n(J);function H(){var e=Object(c.a)(["\n  ","\n  animation-name: ",";\n  animation-duration: ","ms;\n  animation-fill-mode: forwards;\n  opacity: ",";\n  top: 0;\n  left: 0;\n"]);return H=function(){return e},e}function W(){var e=Object(c.a)(["\n  to {\n    transform: translateX(0px);\n    opacity: ",";\n  }\n"]);return W=function(){return e},e}var G=f.b.div(H(),D,function(e){var n=e.animatingOut;if(e.direction)return Object(f.c)(W(),n?0:1)},function(e){return e.duration},function(e){return e.direction&&!e.animatingOut?0:1}),K={duration:Y.a.number,direction:Y.a.oneOf(["right","left"]),animatingOut:Y.a.bool,children:Y.a.node,ref:Y.a.func},N=Object(u.forwardRef)(function(e,n){var t=e.children,r=e.duration,a=e.animatingOut,i=e.direction;return m.a.createElement(G,{"aria-hidden":a,animatingOut:a,direction:i,duration:r,ref:n},t)});N.propTypes=K;var Q=N,U=function(e){return e&&e.querySelector&&e.querySelector("*[data-first-dropdown-section]")?e.querySelector("*[data-first-dropdown-section]").offsetHeight:0},V=function(e){function n(){var e,t;Object(r.a)(this,n);for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(o.a)(n)).call.apply(e,[this].concat(l)))).currentDropdownEl=Object(u.createRef)(),t.prevDropdownEl=Object(u.createRef)(),t}return Object(l.a)(n,e),Object(a.a)(n,[{key:"componentDidMount",value:function(){!function(e){var n=e.altBackground,t=e.prevDropdown,r=e.currentDropdown,a=U(t),i=U(r),o=function(e,n){e.style.transform="translateY(".concat(n,"px)"),e.style.transition="transform 0s",requestAnimationFrame(function(){return e.style.transitionDuration=""})};a?(o(n,a),requestAnimationFrame(function(){n.style.transform="translateY(".concat(i,"px)")})):o(n,i)}({altBackground:this.altBackgroundEl,prevDropdown:this.prevDropdownEl.current,currentDropdown:this.currentDropdownEl.current,duration:this.props.duration})}},{key:"render",value:function(){var e=this,n=this.props,t=n.children,r=n.direction,a=n.animatingOut,i=n.duration,o=u.Children.toArray(t),l=Object(S.a)(o,2),c=l[0],d=l[1];return m.a.createElement(z,{direction:r,animatingOut:a,duration:i},m.a.createElement(M.a,{flipId:"dropdown-caret"},m.a.createElement(q,null)),m.a.createElement(M.a,{flipId:"dropdown"},m.a.createElement(P,null,m.a.createElement(M.a,{inverseFlipId:"dropdown"},m.a.createElement(R,null,m.a.createElement(X,{ref:function(n){return e.altBackgroundEl=n},duration:i}),m.a.createElement(Q,{direction:r,duration:i,ref:this.currentDropdownEl},c))),m.a.createElement(M.a,{inverseFlipId:"dropdown",scale:!0},m.a.createElement(R,{absolute:!0},d&&m.a.createElement(Q,{animatingOut:!0,direction:r,duration:i,ref:this.prevDropdownEl},d))))))}}]),n}(u.Component);function Z(){var e=Object(c.a)(["\n  padding: var(--spacer);\n  position: relative;\n  z-index: 1;\n"]);return Z=function(){return e},e}function $(){var e=Object(c.a)(["\n  width: 13px;\n  height: 13px;\n  margin-right: 13px;\n  background-color: var(--blue);\n  opacity: 0.8;\n  display: inline-block;\n"]);return $=function(){return e},e}function _(){var e=Object(c.a)(["\n  li {\n    margin-bottom: 1rem;\n  }\n\n  li:last-of-type {\n    margin-bottom: 0;\n  }\n  \n  margin-left: ",";\n"]);return _=function(){return e},e}function ee(){var e=Object(c.a)(["\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 1.1rem;\n  margin-top: 0;\n  margin-bottom: ",";\n  color: ",";\n"]);return ee=function(){return e},e}var ne=f.b.h3(ee(),function(e){return e.noMarginBottom?0:"1rem"},function(e){var n=e.color;return n?"var(--".concat(n,")"):"var(--blue)"}),te=ne.withComponent("li"),re=f.b.ul(_(),function(e){return e.marginLeft?e.marginLeft:0}),ae=f.b.div($()),ie=f.b.div(Z());function oe(){var e=Object(c.a)(["\n  width: 18.5rem;\n"]);return oe=function(){return e},e}var le=f.b.div(oe()),ce=function(){return m.a.createElement(le,null,m.a.createElement(ie,{"data-first-dropdown-section":!0},m.a.createElement("ul",null,m.a.createElement(te,null,m.a.createElement("a",{href:"/"},m.a.createElement(ae,null)," About Stripe")),m.a.createElement(te,null,m.a.createElement("a",{href:"/"},m.a.createElement(ae,null),"Customers")),m.a.createElement(te,null,m.a.createElement("a",{href:"/"},m.a.createElement(ae,null),"Jobs")),m.a.createElement(te,{noMarginBottom:!0},m.a.createElement("a",{href:"/"},m.a.createElement(ae,null),"Environment")))),m.a.createElement(ie,null,m.a.createElement("div",null,m.a.createElement(ne,null,m.a.createElement(ae,null),"From the Blog"),m.a.createElement(re,{marginLeft:"25px"},m.a.createElement("li",null,m.a.createElement("a",{href:"/"},"Stripe Atlas \u203a")),m.a.createElement("li",null,m.a.createElement("a",{href:"/"},"Stripe Home \u203a")),m.a.createElement("li",null,m.a.createElement("a",{href:"/"},"Improved Fraud Detection \u203a"))))))};function ue(){var e=Object(c.a)(["\n  display: flex;\n  > div:first-of-type {\n    margin-right: 48px;\n  }\n"]);return ue=function(){return e},e}function me(){var e=Object(c.a)(["\n  width: 25rem;\n"]);return me=function(){return e},e}var de=f.b.div(me()),se=f.b.div(ue()),fe=function(){return m.a.createElement(de,null,m.a.createElement(ie,{"data-first-dropdown-section":!0},m.a.createElement("div",null,m.a.createElement(ne,null,"Documentation"),m.a.createElement("p",null,"Start integrating Stripe\u2019s products and tools"),m.a.createElement(se,null,m.a.createElement("div",null,m.a.createElement("h4",null,"Get Started"),m.a.createElement(re,null,m.a.createElement("li",null,m.a.createElement("a",{href:"/"},"Elements")),m.a.createElement("li",null,m.a.createElement("a",{href:"/"},"Checkout")),m.a.createElement("li",null,m.a.createElement("a",{href:"/"},"Mobile apps")))),m.a.createElement("div",null,m.a.createElement("h4",null,"Popular Topics"),m.a.createElement(re,null,m.a.createElement("li",null,m.a.createElement("a",{href:"/"},"Apple Pay")),m.a.createElement("li",null,m.a.createElement("a",{href:"/"},"Testing")),m.a.createElement("li",null,m.a.createElement("a",{href:"/"},"Launch Checklist"))))))),m.a.createElement(ie,null,m.a.createElement("ul",null,m.a.createElement(te,null,m.a.createElement("a",{href:"/"},m.a.createElement(ae,null)," Full API Reference")),m.a.createElement(te,null,m.a.createElement("a",{href:"/"},m.a.createElement(ae,null)," API Status")),m.a.createElement(te,{noMarginBottom:!0},m.a.createElement("a",{href:"/"},m.a.createElement(ae,null)," Open Source")))))};function pe(){var e=Object(c.a)(["\n border-top: 2px solid #fff;\n  display:flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: var(--spacer);\n  padding-top: var(--spacer);\n}\nh3 {\n  margin-bottom: 0;\n}\n"]);return pe=function(){return e},e}function ve(){var e=Object(c.a)(["\n  li {\n    display: flex;\n  }\n"]);return ve=function(){return e},e}function be(){var e=Object(c.a)(["\n  li {\n    display: flex;\n    margin-bottom: 1rem;\n  }\n  h3 {\n    margin-right: 1rem;\n    width: 3.2rem;\n    display: block;\n  }\n  a {\n    color: var(--dark-grey);\n  }\n"]);return be=function(){return e},e}function he(){var e=Object(c.a)(["\n  width: 38px;\n  height: 38px;\n  margin-right: 16px;\n  border-radius: 100%;\n  opacity: 0.6;\n  background-color: ",";\n"]);return he=function(){return e},e}function Ee(){var e=Object(c.a)(["\n  width: 30rem;\n"]);return Ee=function(){return e},e}var ge=f.b.div(Ee()),Oe=f.b.div(he(),function(e){var n=e.color;return"var(--".concat(n,")")}),ye=f.b.ul(be()),we=f.b.ul(ve()),je=f.b.div(pe()),xe=[{title:"Products",dropdown:function(){return m.a.createElement(ge,null,m.a.createElement(ie,{"data-first-dropdown-section":!0},m.a.createElement(we,null,m.a.createElement("li",null,m.a.createElement("div",null,m.a.createElement(Oe,{color:"blue"})),m.a.createElement("div",null,m.a.createElement(ne,{color:"blue"},"Payments"),m.a.createElement("p",null,"A complete payments platform"))),m.a.createElement("li",null,m.a.createElement("div",null,m.a.createElement(Oe,{color:"green"})),m.a.createElement("div",null,m.a.createElement(ne,{color:"green"},"Billing"),m.a.createElement("p",null,"Build and scale your recurring business model"))),m.a.createElement("li",null,m.a.createElement("div",null,m.a.createElement(Oe,{color:"teal"})),m.a.createElement("div",null,m.a.createElement(ne,{color:"teal"},"Connect"),m.a.createElement("p",{style:{marginBottom:0}},"Everything platforms need to get sellers paid"))))),m.a.createElement(ie,null,m.a.createElement(ye,null,m.a.createElement("li",null,m.a.createElement(ne,{noMarginBottom:!0},"Sigma"),m.a.createElement("div",null,"Your business data at your fingertips.")),m.a.createElement("li",null,m.a.createElement(ne,{noMarginBottom:!0},"Atlas"),m.a.createElement("div",null,"The best way to start an internet business.")),m.a.createElement("li",null,m.a.createElement(ne,{noMarginBottom:!0},"Radar"),m.a.createElement("div",null,"Fight fraud with machine learning."))),m.a.createElement(je,null,m.a.createElement(ne,{noMarginBottom:!0},m.a.createElement("a",{href:"/"},m.a.createElement(ae,null)," Works with Stripe")))))}},{title:"Developers",dropdown:fe},{title:"Company",dropdown:ce}],ke=function(e){function n(){var e,t;Object(r.a)(this,n);for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(o.a)(n)).call.apply(e,[this].concat(l)))).state={activeIndices:[]},t.resetDropdownState=function(e){t.setState({activeIndices:"number"===typeof e?[e]:[],animatingOut:!1}),delete t.animatingOutTimeout},t.onMouseEnter=function(e){if(t.animatingOutTimeout)return clearTimeout(t.animatingOutTimeout),void t.resetDropdownState(e);t.state.activeIndices[t.state.activeIndices.length-1]!==e&&t.setState(function(n){return{activeIndices:n.activeIndices.concat(e),animatingOut:!1}})},t.onMouseLeave=function(){t.setState({animatingOut:!0}),t.animatingOutTimeout=setTimeout(t.resetDropdownState,t.props.duration)},t}return Object(l.a)(n,e),Object(a.a)(n,[{key:"render",value:function(){var e,n,t,r=this,a=this.props.duration,i=this.state.activeIndices[this.state.activeIndices.length-1],o=this.state.activeIndices.length>1&&this.state.activeIndices[this.state.activeIndices.length-2];return"number"===typeof i&&(e=xe[i].dropdown),"number"===typeof o&&(n=xe[o].dropdown,t=i>o?"right":"left"),m.a.createElement(M.b,{flipKey:i,spring:300===a?"noWobble":{stiffness:10,damping:10}},m.a.createElement(E,{onMouseLeave:this.onMouseLeave},xe.map(function(o,l){return m.a.createElement(k,{key:o.title,title:o.title,index:l,onMouseEnter:r.onMouseEnter},i===l&&m.a.createElement(V,{direction:t,animatingOut:r.state.animatingOut,duration:a},m.a.createElement(e,null),n&&m.a.createElement(n,null)))})))}}]),n}(u.Component);function Me(){var e=Object(c.a)(["\n  padding: 2rem 0 1rem 0;\n  background-color: #fff;\n  display: flex;\n  justify-content: center;\n\n  > div {\n    border: 0;\n    padding: 1rem 0 1rem 0;\n    margin-right: 3rem;\n    display: flex;\n  }\n\n  input {\n    margin-right: 0.5rem;\n  }\n  label + label input {\n    margin-left: 1.5rem;\n  }\n  b {\n    margin-right: 1.5rem;\n  }\n"]);return Me=function(){return e},e}var Se=f.b.form(Me()),Ce=function(e){function n(){return Object(r.a)(this,n),Object(i.a)(this,Object(o.a)(n).apply(this,arguments))}return Object(l.a)(n,e),Object(a.a)(n,[{key:"render",value:function(){var e=this,n=this.props.duration;return m.a.createElement(Se,{ref:function(n){return e.el=n}},m.a.createElement("div",null,m.a.createElement("b",null,"Speed"),[["normal",300],["slow (for debugging)",1e3]].map(function(t){var r=Object(S.a)(t,2),a=r[0],i=r[1];return m.a.createElement("label",{key:i},m.a.createElement("input",{type:"radio",name:"duration",value:i,checked:n===i,onChange:function(n){n.target.checked&&e.props.onChange({duration:i})}}),a)})))}}]),n}(u.Component);t(35);function De(){var e=Object(c.a)(["\n  background: linear-gradient(150deg, #53f 15%, #05d5ff);\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n\n  > div:first-of-type {\n    flex: 1 0 70vh;\n  }\n"]);return De=function(){return e},e}var Ie=f.b.div(De()),Be=function(e){function n(){var e,t;Object(r.a)(this,n);for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(o.a)(n)).call.apply(e,[this].concat(l)))).state={duration:300},t.onChange=function(e){t.setState(e)},t}return Object(l.a)(n,e),Object(a.a)(n,[{key:"render",value:function(){return m.a.createElement(Ie,null,m.a.createElement(ke,{duration:this.state.duration}),m.a.createElement(Ce,{duration:this.state.duration,onChange:this.onChange}))}}]),n}(u.Component);s.a.render(m.a.createElement(Be,null),document.querySelector("#root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.998a85f3.chunk.js.map
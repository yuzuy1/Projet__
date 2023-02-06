!function(e){"function"==typeof define&&define.amd&&define.amd.jQuery?define(["jquery"],e):e("undefined"!=typeof module&&module.exports?require("jquery"):jQuery)}(function(e){"use strict";function n(n){return!n||void 0!==n.allowPageScroll||void 0===n.swipe&&void 0===n.swipeStatus||(n.allowPageScroll=s),void 0!==n.click&&void 0===n.tap&&(n.tap=n.click),n||(n={}),n=e.extend({},e.fn.swipe.defaults,n),this.each(function(){var r=e(this),i=r.data(P);i||(i=new t(this,n),r.data(P,i))})}function t(n,t){function r(n){if(!(ce()||e(n.target).closest(t.excludedElements,Ve).length>0)){var r=n.originalEvent?n.originalEvent:n;if(!r.pointerType||"mouse"!=r.pointerType||0!=t.fallbackToMouseEvents){var i,l=r.touches,o=l?l[0]:r;return We=E,l?ze=l.length:!1!==t.preventDefaultEvents&&n.preventDefault(),je=0,Ne=null,He=null,Xe=null,_e=0,qe=0,Qe=0,Ce=1,Fe=0,Ye=ve(),ue(),pe(0,o),!l||ze===t.fingers||t.fingers===b||X()?(Ze=Oe(),2==ze&&(pe(1,l[1]),qe=Qe=be(Ge[0].start,Ge[1].start)),(t.swipeStatus||t.pinchStatus)&&(i=j(r,We))):i=!1,!1===i?(We=S,j(r,We),i):(t.hold&&(nn=setTimeout(e.proxy(function(){Ve.trigger("hold",[r.target]),t.hold&&(i=t.hold.call(Ve,r,r.target))},this),t.longTapThreshold)),se(!0),null)}}}function L(e){var n=e.originalEvent?e.originalEvent:e;if(We!==x&&We!==S&&!ae()){var r,i=n.touches,l=i?i[0]:n,o=fe(l);if(Be=Oe(),i&&(ze=i.length),t.hold&&clearTimeout(nn),We=m,2==ze&&(0==qe?(pe(1,i[1]),qe=Qe=be(Ge[0].start,Ge[1].start)):(fe(i[1]),Qe=be(Ge[0].end,Ge[1].end),Xe=Ee(Ge[0].end,Ge[1].end)),Ce=ye(qe,Qe),Fe=Math.abs(qe-Qe)),ze===t.fingers||t.fingers===b||!i||X()){if(Ne=Se(o.start,o.end),He=Se(o.last,o.end),C(e,He),je=me(o.start,o.end),_e=Te(),de(Ne,je),r=j(n,We),!t.triggerOnTouchEnd||t.triggerOnTouchLeave){var u=!0;if(t.triggerOnTouchLeave){var a=Me(this);u=De(o.end,a)}!t.triggerOnTouchEnd&&u?We=U(m):t.triggerOnTouchLeave&&!u&&(We=U(x)),We!=S&&We!=x||j(n,We)}}else We=S,j(n,We);!1===r&&(We=S,j(n,We))}}function R(e){var n=e.originalEvent?e.originalEvent:e,r=n.touches;if(r){if(r.length&&!ae())return oe(n),!0;if(r.length&&ae())return!0}return ae()&&(ze=Ke),Be=Oe(),_e=Te(),_()||!H()?(We=S,j(n,We)):t.triggerOnTouchEnd||!1===t.triggerOnTouchEnd&&We===m?(!1!==t.preventDefaultEvents&&!1!==e.cancelable&&e.preventDefault(),We=x,j(n,We)):!t.triggerOnTouchEnd&&B()?(We=x,N(n,We,d)):We===m&&(We=S,j(n,We)),se(!1),null}function k(){ze=0,Be=0,Ze=0,qe=0,Qe=0,Ce=1,ue(),se(!1)}function A(e){var n=e.originalEvent?e.originalEvent:e;t.triggerOnTouchLeave&&(We=U(x),j(n,We))}function I(){Ve.unbind(Re,r),Ve.unbind(Ue,k),Ve.unbind(ke,L),Ve.unbind(Ae,R),Ie&&Ve.unbind(Ie,A),se(!1)}function U(e){var n=e,r=Q(),i=H(),l=_();return!r||l?n=S:!i||e!=m||t.triggerOnTouchEnd&&!t.triggerOnTouchLeave?!i&&e==x&&t.triggerOnTouchLeave&&(n=S):n=x,n}function j(e,n){var t,r=e.touches;return(z()||W())&&(t=N(e,n,f)),(Y()||X())&&!1!==t&&(t=N(e,n,h)),ie()&&!1!==t?t=N(e,n,g):le()&&!1!==t?t=N(e,n,v):re()&&!1!==t&&(t=N(e,n,d)),n===S&&k(e),n===x&&(r&&r.length||k(e)),t}function N(n,r,s){var p;if(s==f){if(Ve.trigger("swipeStatus",[r,Ne||null,je||0,_e||0,ze,Ge,He]),t.swipeStatus&&(p=t.swipeStatus.call(Ve,n,r,Ne||null,je||0,_e||0,ze,Ge,He),!1===p))return!1;if(r==x&&V()){if(clearTimeout(en),clearTimeout(nn),Ve.trigger("swipe",[Ne,je,_e,ze,Ge,He]),t.swipe&&(p=t.swipe.call(Ve,n,Ne,je,_e,ze,Ge,He),!1===p))return!1;switch(Ne){case i:Ve.trigger("swipeLeft",[Ne,je,_e,ze,Ge,He]),t.swipeLeft&&(p=t.swipeLeft.call(Ve,n,Ne,je,_e,ze,Ge,He));break;case l:Ve.trigger("swipeRight",[Ne,je,_e,ze,Ge,He]),t.swipeRight&&(p=t.swipeRight.call(Ve,n,Ne,je,_e,ze,Ge,He));break;case o:Ve.trigger("swipeUp",[Ne,je,_e,ze,Ge,He]),t.swipeUp&&(p=t.swipeUp.call(Ve,n,Ne,je,_e,ze,Ge,He));break;case u:Ve.trigger("swipeDown",[Ne,je,_e,ze,Ge,He]),t.swipeDown&&(p=t.swipeDown.call(Ve,n,Ne,je,_e,ze,Ge,He))}}}if(s==h){if(Ve.trigger("pinchStatus",[r,Xe||null,Fe||0,_e||0,ze,Ce,Ge]),t.pinchStatus&&(p=t.pinchStatus.call(Ve,n,r,Xe||null,Fe||0,_e||0,ze,Ce,Ge),!1===p))return!1;if(r==x&&F())switch(Xe){case a:Ve.trigger("pinchIn",[Xe||null,Fe||0,_e||0,ze,Ce,Ge]),t.pinchIn&&(p=t.pinchIn.call(Ve,n,Xe||null,Fe||0,_e||0,ze,Ce,Ge));break;case c:Ve.trigger("pinchOut",[Xe||null,Fe||0,_e||0,ze,Ce,Ge]),t.pinchOut&&(p=t.pinchOut.call(Ve,n,Xe||null,Fe||0,_e||0,ze,Ce,Ge))}}return s==d?r!==S&&r!==x||(clearTimeout(en),clearTimeout(nn),J()&&!ee()?($e=Oe(),en=setTimeout(e.proxy(function(){$e=null,Ve.trigger("tap",[n.target]),t.tap&&(p=t.tap.call(Ve,n,n.target))},this),t.doubleTapThreshold)):($e=null,Ve.trigger("tap",[n.target]),t.tap&&(p=t.tap.call(Ve,n,n.target)))):s==g?r!==S&&r!==x||(clearTimeout(en),clearTimeout(nn),$e=null,Ve.trigger("doubletap",[n.target]),t.doubleTap&&(p=t.doubleTap.call(Ve,n,n.target))):s==v&&(r!==S&&r!==x||(clearTimeout(en),$e=null,Ve.trigger("longtap",[n.target]),t.longTap&&(p=t.longTap.call(Ve,n,n.target)))),p}function H(){var e=!0;return null!==t.threshold&&(e=je>=t.threshold),e}function _(){var e=!1;return null!==t.cancelThreshold&&null!==Ne&&(e=ge(Ne)-je>=t.cancelThreshold),e}function q(){return null===t.pinchThreshold||Fe>=t.pinchThreshold}function Q(){return!(t.maxTimeThreshold&&_e>=t.maxTimeThreshold)}function C(e,n){if(!1!==t.preventDefaultEvents)if(t.allowPageScroll===s)e.preventDefault();else{var r=t.allowPageScroll===p;switch(n){case i:(t.swipeLeft&&r||!r&&t.allowPageScroll!=w)&&e.preventDefault();break;case l:(t.swipeRight&&r||!r&&t.allowPageScroll!=w)&&e.preventDefault();break;case o:(t.swipeUp&&r||!r&&t.allowPageScroll!=T)&&e.preventDefault();break;case u:(t.swipeDown&&r||!r&&t.allowPageScroll!=T)&&e.preventDefault()}}}function F(){var e=G(),n=Z(),t=q();return e&&n&&t}function X(){return!!(t.pinchStatus||t.pinchIn||t.pinchOut)}function Y(){return!(!F()||!X())}function V(){var e=Q(),n=H(),t=G(),r=Z(),i=_(),l=!i&&r&&t&&n&&e;return l}function W(){return!!(t.swipe||t.swipeStatus||t.swipeLeft||t.swipeRight||t.swipeUp||t.swipeDown)}function z(){return!(!V()||!W())}function G(){return ze===t.fingers||t.fingers===b||!O}function Z(){return 0!==Ge[0].end.x}function B(){return!!t.tap}function J(){return!!t.doubleTap}function K(){return!!t.longTap}function $(){if(null==$e)return!1;var e=Oe();return J()&&e-$e<=t.doubleTapThreshold}function ee(){return $()}function ne(){return(1===ze||!O)&&(isNaN(je)||je<t.threshold)}function te(){return _e>t.longTapThreshold&&je<y}function re(){return!(!ne()||!B())}function ie(){return!(!$()||!J())}function le(){return!(!te()||!K())}function oe(e){Je=Oe(),Ke=e.touches.length+1}function ue(){Je=0,Ke=0}function ae(){var e=!1;if(Je){var n=Oe()-Je;n<=t.fingerReleaseThreshold&&(e=!0)}return e}function ce(){return!(!0!==Ve.data(P+"_intouch"))}function se(e){Ve&&(!0===e?(Ve.bind(ke,L),Ve.bind(Ae,R),Ie&&Ve.bind(Ie,A)):(Ve.unbind(ke,L,!1),Ve.unbind(Ae,R,!1),Ie&&Ve.unbind(Ie,A,!1)),Ve.data(P+"_intouch",!0===e))}function pe(e,n){var t={start:{x:0,y:0},last:{x:0,y:0},end:{x:0,y:0}};return t.start.x=t.last.x=t.end.x=n.pageX||n.clientX,t.start.y=t.last.y=t.end.y=n.pageY||n.clientY,Ge[e]=t,t}function fe(e){var n=void 0!==e.identifier?e.identifier:0,t=he(n);return null===t&&(t=pe(n,e)),t.last.x=t.end.x,t.last.y=t.end.y,t.end.x=e.pageX||e.clientX,t.end.y=e.pageY||e.clientY,t}function he(e){return Ge[e]||null}function de(e,n){e!=s&&(n=Math.max(n,ge(e)),Ye[e].distance=n)}function ge(e){if(Ye[e])return Ye[e].distance}function ve(){var e={};return e[i]=we(i),e[l]=we(l),e[o]=we(o),e[u]=we(u),e}function we(e){return{direction:e,distance:0}}function Te(){return Be-Ze}function be(e,n){var t=Math.abs(e.x-n.x),r=Math.abs(e.y-n.y);return Math.round(Math.sqrt(t*t+r*r))}function ye(e,n){var t=n/e*1;return t.toFixed(2)}function Ee(){return Ce<1?c:a}function me(e,n){return Math.round(Math.sqrt(Math.pow(n.x-e.x,2)+Math.pow(n.y-e.y,2)))}function xe(e,n){var t=e.x-n.x,r=n.y-e.y,i=Math.atan2(r,t),l=Math.round(180*i/Math.PI);return l<0&&(l=360-Math.abs(l)),l}function Se(e,n){if(Pe(e,n))return s;var t=xe(e,n);return t<=45&&t>=0?i:t<=360&&t>=315?i:t>=135&&t<=225?l:t>45&&t<135?u:o}function Oe(){var e=new Date;return e.getTime()}function Me(n){n=e(n);var t=n.offset(),r={left:t.left,right:t.left+n.outerWidth(),top:t.top,bottom:t.top+n.outerHeight()};return r}function De(e,n){return e.x>n.left&&e.x<n.right&&e.y>n.top&&e.y<n.bottom}function Pe(e,n){return e.x==n.x&&e.y==n.y}t=e.extend({},t);var Le=O||D||!t.fallbackToMouseEvents,Re=Le?D?M?"MSPointerDown":"pointerdown":"touchstart":"mousedown",ke=Le?D?M?"MSPointerMove":"pointermove":"touchmove":"mousemove",Ae=Le?D?M?"MSPointerUp":"pointerup":"touchend":"mouseup",Ie=Le?D?"mouseleave":null:"mouseleave",Ue=D?M?"MSPointerCancel":"pointercancel":"touchcancel",je=0,Ne=null,He=null,_e=0,qe=0,Qe=0,Ce=1,Fe=0,Xe=0,Ye=null,Ve=e(n),We="start",ze=0,Ge={},Ze=0,Be=0,Je=0,Ke=0,$e=0,en=null,nn=null;try{Ve.bind(Re,r),Ve.bind(Ue,k)}catch(n){e.error("events not supported "+Re+","+Ue+" on jQuery.swipe")}this.enable=function(){return this.disable(),Ve.bind(Re,r),Ve.bind(Ue,k),Ve},this.disable=function(){return I(),Ve},this.destroy=function(){I(),Ve.data(P,null),Ve=null},this.option=function(n,r){if("object"==typeof n)t=e.extend(t,n);else if(void 0!==t[n]){if(void 0===r)return t[n];t[n]=r}else{if(!n)return t;e.error("Option "+n+" does not exist on jQuery.swipe.options")}return null}}var r="1.6.18",i="left",l="right",o="up",u="down",a="in",c="out",s="none",p="auto",f="swipe",h="pinch",d="tap",g="doubletap",v="longtap",w="horizontal",T="vertical",b="all",y=10,E="start",m="move",x="end",S="cancel",O="ontouchstart"in window,M=window.navigator.msPointerEnabled&&!window.navigator.pointerEnabled&&!O,D=(window.navigator.pointerEnabled||window.navigator.msPointerEnabled)&&!O,P="TouchSwipe",L={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,hold:null,triggerOnTouchEnd:!0,triggerOnTouchLeave:!1,allowPageScroll:"auto",fallbackToMouseEvents:!0,excludedElements:".noSwipe",preventDefaultEvents:!0};e.fn.swipe=function(t){var r=e(this),i=r.data(P);if(i&&"string"==typeof t){if(i[t])return i[t].apply(i,Array.prototype.slice.call(arguments,1));e.error("Method "+t+" does not exist on jQuery.swipe")}else if(i&&"object"==typeof t)i.option.apply(i,arguments);else if(!(i||"object"!=typeof t&&t))return n.apply(this,arguments);return r},e.fn.swipe.version=r,e.fn.swipe.defaults=L,e.fn.swipe.phases={PHASE_START:E,PHASE_MOVE:m,PHASE_END:x,PHASE_CANCEL:S},e.fn.swipe.directions={LEFT:i,RIGHT:l,UP:o,DOWN:u,IN:a,OUT:c},e.fn.swipe.pageScroll={NONE:s,HORIZONTAL:w,VERTICAL:T,AUTO:p},e.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,FOUR:4,FIVE:5,ALL:b}});

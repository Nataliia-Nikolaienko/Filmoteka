function t(t){return t&&t.__esModule?t.default:t}function e(t,e,n,i){Object.defineProperty(t,e,{get:n,set:i,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},o={},s=n.parcelRequired7c6;null==s&&((s=function(t){if(t in i)return i[t].exports;if(t in o){var e=o[t];delete o[t];var n={id:t,exports:{}};return i[t]=n,e.call(n.exports,n,n.exports),n.exports}var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(t,e){o[t]=e},n.parcelRequired7c6=s),s.register("8sSZi",(function(n,i){e(n.exports,"fetchFilmsAPI",(function(){return p})),e(n.exports,"fetchGenresAPI",(function(){return d})),e(n.exports,"fetchMovieInfoAPI",(function(){return f})),e(n.exports,"trendingFilms",(function(){return u}));var o=s("fb9GJ"),a=s("8izSm");s("ioBS9");const r="cf961b1b89f4c4a28558be2b04fdd59a",l={pagination:document.querySelector(".tui-pagination"),movieList:document.querySelector(".card-list"),filmModalList:document.querySelector(".backdrop")},c=new(t(o))(l.pagination,{totalItems:0,itemsPerPage:20,visiblePages:5,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}});c.getCurrentPage();async function u(){return await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${r}&page=1`).then((t=>{if(!t.ok)throw new Error("Network response was not OK");return t.json()})).then((t=>t.results)).catch((t=>{console.error("There has been a problem with your fetch operation:",t)}))}async function p(t){return await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${r}&page=${t}`).then((t=>{if(!t.ok)throw new Error("Network response was not OK");return t.json()})).then((t=>(c.reset(t.total_results),l.pagination.classList.remove("pagination-is-hidden"),t.results))).catch((t=>{console.error("There has been a problem with your fetch operation:",t)}))}async function d(){return await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=cf961b1b89f4c4a28558be2b04fdd59a").then((t=>{if(!t.ok)throw new Error("Network response was not OK");return t.json()})).then((t=>t.genres)).catch((t=>{console.error("There has been a problem with your fetch operation:",t)}))}async function f(t){return await fetch(`https://api.themoviedb.org/3/movie/${t}?api_key=${r}`).then((t=>{if(!t.ok)throw new Error("Network response was not OK");return t.json()})).then((t=>t)).catch((t=>{console.error("There has been a problem with your fetch operation:",t)}))}c.on("afterMove",(async function(t){const e=t.page;d().then((t=>{(async function(t){return await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${r}&page=${t}`).then((t=>{if(!t.ok)throw new Error("Network response was not OK");return t.json()})).then((t=>(window.scrollTo({top:0,behavior:"smooth"}),t.results))).catch((t=>{console.error("There has been a problem with your fetch operation:",t)}))})(e).then((e=>{let n=(0,a.createCardMarkup)(e,t);l.movieList.innerHTML="",l.movieList.insertAdjacentHTML("beforeend",n)}))}))}))})),s.register("fb9GJ",(function(t,e){
/*!
 * TOAST UI Pagination
 * @version 3.4.1
 * @author NHN FE Development Team <dl_javascript@nhn.com>
 * @license MIT
 */
var n;window,n=function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="dist",n(n.s=10)}([function(t,e,n){t.exports=function(t,e){var n,i,o,s,a=Object.prototype.hasOwnProperty;for(o=1,s=arguments.length;o<s;o+=1)for(i in n=arguments[o])a.call(n,i)&&(t[i]=n[i]);return t}},function(t,e,n){t.exports=function(t){return void 0===t}},function(t,e,n){t.exports=function(t){return t instanceof Array}},function(t,e,n){var i=n(2),o=n(17),s=n(6);t.exports=function(t,e,n){i(t)?o(t,e,n):s(t,e,n)}},function(t,e,n){t.exports=function(t){return"string"==typeof t||t instanceof String}},function(t,e,n){t.exports=function(t){return t instanceof Function}},function(t,e,n){t.exports=function(t,e,n){var i;for(i in n=n||null,t)if(t.hasOwnProperty(i)&&!1===e.call(n,t[i],i,t))break}},function(t,e,n){var i=n(18),o=n(0);t.exports=function(t,e){var n;return e||(e=t,t=null),n=e.init||function(){},t&&i(n,t),e.hasOwnProperty("static")&&(o(n,e.static),delete e.static),o(n.prototype,e),n}},function(t,e,n){var i=n(2);t.exports=function(t,e,n){var o,s;if(n=n||0,!i(e))return-1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(e,t,n);for(s=e.length,o=n;n>=0&&o<s;o+=1)if(e[o]===t)return o;return-1}},function(t,e,n){var i=n(29),o=n(30),s=n(5),a={capitalizeFirstLetter:function(t){return t.substring(0,1).toUpperCase()+t.substring(1,t.length)},isContained:function(t,e){return!!e&&(t===e||e.contains(t))},createElementByTemplate:function(t,e){var n=document.createElement("div"),o=s(t)?t(e):i(t,e);return n.innerHTML=o,n.firstChild},bind:function(t,e){var n,i=Array.prototype.slice;return t.bind?t.bind.apply(t,i.call(arguments,1)):(n=i.call(arguments,2),function(){return t.apply(e,n.length?n.concat(i.call(arguments)):arguments)})},sendHostName:function(){o("pagination","UA-129987462-1")}};t.exports=a},function(t,e,n){n(11),t.exports=n(12)},function(t,e,n){},function(t,e,n){var i=n(13),o=n(7),s=n(0),a=n(1),r=n(20),l=n(9),c={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},u=o({init:function(t,e){this._options=s({},c,e),this._currentPage=0,this._view=new r(t,this._options,l.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&l.sendHostName()},_setCurrentPage:function(t){this._currentPage=t||this._options.page},_getLastPage:function(){var t=Math.ceil(this._options.totalItems/this._options.itemsPerPage);return t||1},_getPageIndex:function(t){var e;return this._options.centerAlign?(e=t-Math.floor(this._options.visiblePages/2),e=Math.max(e,1),e=Math.min(e,this._getLastPage()-this._options.visiblePages+1)):Math.ceil(t/this._options.visiblePages)},_getRelativePage:function(t){var e="prev"===t,n=this.getCurrentPage();return e?n-1:n+1},_getMorePageIndex:function(t){var e=this._getPageIndex(this.getCurrentPage()),n=this._options.visiblePages,i="prev"===t;return this._options.centerAlign?i?e-1:e+n:i?(e-1)*n:e*n+1},_convertToValidPage:function(t){var e=this._getLastPage();return t=Math.max(t,1),t=Math.min(t,e)},_paginate:function(t){var e=this._makeViewData(t||this._options.page);this._setCurrentPage(t),this._view.update(e)},_makeViewData:function(t){var e={},n=this._getLastPage(),i=this._getPageIndex(t),o=this._getPageIndex(n),s=this._getEdge(t);return e.leftPageNumber=s.left,e.rightPageNumber=s.right,e.prevMore=i>1,e.nextMore=i<o,e.page=t,e.currentPageIndex=t,e.lastPage=n,e.lastPageListIndex=n,e},_getEdge:function(t){var e,n,i,o=this._getLastPage(),s=this._options.visiblePages,a=this._getPageIndex(t);return this._options.centerAlign?(i=Math.floor(s/2),(n=(e=Math.max(t-i,1))+s-1)>o&&(e=Math.max(o-s+1,1),n=o)):(e=(a-1)*s+1,n=a*s,n=Math.min(n,o)),{left:e,right:n}},_onClickHandler:function(t,e){switch(t){case"first":e=1;break;case"prev":e=this._getRelativePage("prev");break;case"next":e=this._getRelativePage("next");break;case"prevMore":e=this._getMorePageIndex("prev");break;case"nextMore":e=this._getMorePageIndex("next");break;case"last":e=this._getLastPage();break;default:if(!e)return}this.movePageTo(e)},reset:function(t){a(t)&&(t=this._options.totalItems),this._options.totalItems=t,this._paginate(1)},movePageTo:function(t){t=this._convertToValidPage(t),this.invoke("beforeMove",{page:t})&&(this._paginate(t),this.fire("afterMove",{page:t}))},setTotalItems:function(t){this._options.totalItems=t},setItemsPerPage:function(t){this._options.itemsPerPage=t},getCurrentPage:function(){return this._currentPage||this._options.page}});i.mixin(u),t.exports=u},function(t,e,n){var i=n(0),o=n(14),s=n(4),a=n(16),r=n(2),l=n(5),c=n(3),u=/\s+/g;function p(){this.events=null,this.contexts=null}p.mixin=function(t){i(t.prototype,p.prototype)},p.prototype._getHandlerItem=function(t,e){var n={handler:t};return e&&(n.context=e),n},p.prototype._safeEvent=function(t){var e,n=this.events;return n||(n=this.events={}),t&&((e=n[t])||(e=[],n[t]=e),n=e),n},p.prototype._safeContext=function(){var t=this.contexts;return t||(t=this.contexts=[]),t},p.prototype._indexOfContext=function(t){for(var e=this._safeContext(),n=0;e[n];){if(t===e[n][0])return n;n+=1}return-1},p.prototype._memorizeContext=function(t){var e,n;o(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1?e[n][1]+=1:e.push([t,1]))},p.prototype._forgetContext=function(t){var e,n;o(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1&&(e[n][1]-=1,e[n][1]<=0&&e.splice(n,1)))},p.prototype._bindEvent=function(t,e,n){var i=this._safeEvent(t);this._memorizeContext(n),i.push(this._getHandlerItem(e,n))},p.prototype.on=function(t,e,n){var i=this;s(t)?(t=t.split(u),c(t,(function(t){i._bindEvent(t,e,n)}))):a(t)&&(n=e,c(t,(function(t,e){i.on(e,t,n)})))},p.prototype.once=function(t,e,n){var i=this;if(a(t))return n=e,void c(t,(function(t,e){i.once(e,t,n)}));this.on(t,(function o(){e.apply(n,arguments),i.off(t,o,n)}),n)},p.prototype._spliceMatches=function(t,e){var n,i=0;if(r(t))for(n=t.length;i<n;i+=1)!0===e(t[i])&&(t.splice(i,1),n-=1,i-=1)},p.prototype._matchHandler=function(t){var e=this;return function(n){var i=t===n.handler;return i&&e._forgetContext(n.context),i}},p.prototype._matchContext=function(t){var e=this;return function(n){var i=t===n.context;return i&&e._forgetContext(n.context),i}},p.prototype._matchHandlerAndContext=function(t,e){var n=this;return function(i){var o=t===i.handler,s=e===i.context,a=o&&s;return a&&n._forgetContext(i.context),a}},p.prototype._offByEventName=function(t,e){var n=this,i=l(e),o=n._matchHandler(e);t=t.split(u),c(t,(function(t){var e=n._safeEvent(t);i?n._spliceMatches(e,o):(c(e,(function(t){n._forgetContext(t.context)})),n.events[t]=[])}))},p.prototype._offByHandler=function(t){var e=this,n=this._matchHandler(t);c(this._safeEvent(),(function(t){e._spliceMatches(t,n)}))},p.prototype._offByObject=function(t,e){var n,i=this;this._indexOfContext(t)<0?c(t,(function(t,e){i.off(e,t)})):s(e)?(n=this._matchContext(t),i._spliceMatches(this._safeEvent(e),n)):l(e)?(n=this._matchHandlerAndContext(e,t),c(this._safeEvent(),(function(t){i._spliceMatches(t,n)}))):(n=this._matchContext(t),c(this._safeEvent(),(function(t){i._spliceMatches(t,n)})))},p.prototype.off=function(t,e){s(t)?this._offByEventName(t,e):arguments.length?l(t)?this._offByHandler(t):a(t)&&this._offByObject(t,e):(this.events={},this.contexts=[])},p.prototype.fire=function(t){this.invoke.apply(this,arguments)},p.prototype.invoke=function(t){var e,n,i,o;if(!this.hasListener(t))return!0;for(e=this._safeEvent(t),n=Array.prototype.slice.call(arguments,1),i=0;e[i];){if(!1===(o=e[i]).handler.apply(o.context,n))return!1;i+=1}return!0},p.prototype.hasListener=function(t){return this.getListenerLength(t)>0},p.prototype.getListenerLength=function(t){return this._safeEvent(t).length},t.exports=p},function(t,e,n){var i=n(1),o=n(15);t.exports=function(t){return!i(t)&&!o(t)}},function(t,e,n){t.exports=function(t){return null===t}},function(t,e,n){t.exports=function(t){return t===Object(t)}},function(t,e,n){t.exports=function(t,e,n){var i=0,o=t.length;for(n=n||null;i<o&&!1!==e.call(n,t[i],i,t);i+=1);}},function(t,e,n){var i=n(19);t.exports=function(t,e){var n=i(e.prototype);n.constructor=t,t.prototype=n}},function(t,e,n){t.exports=function(t){function e(){}return e.prototype=t,new e}},function(t,e,n){var i=n(3),o=n(7),s=n(21),a=n(22),r=n(24),l=n(25),c=n(0),u=n(4),p=n(28),d=n(9),f={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},h=["first","prev","next","last"],m=["prev","next"],g=o({init:function(t,e,n){this._containerElement=null,this._firstItemClassName=e.firstItemClassName,this._lastItemClassName=e.lastItemClassName,this._template=c({},f,e.template),this._buttons={},this._enabledPageElements=[],this._setRootElement(t),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(n)},_setRootElement:function(t){if(u(t)?t=document.getElementById(t)||document.querySelector(t):t.jquery&&(t=t[0]),!p(t))throw new Error("The container element is invalid.");this._containerElement=t},_setMoveButtons:function(){i(h,(function(t){this._buttons[t]=d.createElementByTemplate(this._template.moveButton,{type:t})}),this)},_setDisabledMoveButtons:function(){i(h,(function(t){var e="disabled"+d.capitalizeFirstLetter(t);this._buttons[e]=d.createElementByTemplate(this._template.disabledMoveButton,{type:t})}),this)},_setMoreButtons:function(){i(m,(function(t){var e=t+"More";this._buttons[e]=d.createElementByTemplate(this._template.moreButton,{type:t})}),this)},_getContainerElement:function(){return this._containerElement},_appendFirstButton:function(t){var e;e=t.page>1?this._buttons.first:this._buttons.disabledFirst,this._getContainerElement().appendChild(e)},_appendPrevButton:function(t){var e;e=t.currentPageIndex>1?this._buttons.prev:this._buttons.disabledPrev,this._getContainerElement().appendChild(e)},_appendNextButton:function(t){var e;e=t.currentPageIndex<t.lastPageListIndex?this._buttons.next:this._buttons.disabledNext,this._getContainerElement().appendChild(e)},_appendLastButton:function(t){var e;e=t.page<t.lastPage?this._buttons.last:this._buttons.disabledLast,this._getContainerElement().appendChild(e)},_appendPrevMoreButton:function(t){var e;t.prevMore&&(e=this._buttons.prevMore,l(e,this._firstItemClassName),this._getContainerElement().appendChild(e))},_appendNextMoreButton:function(t){var e;t.nextMore&&(e=this._buttons.nextMore,l(e,this._lastItemClassName),this._getContainerElement().appendChild(e))},_appendPages:function(t){var e,n,i=t.leftPageNumber,o=t.rightPageNumber;for(n=i;n<=o;n+=1)n===t.page?e=d.createElementByTemplate(this._template.currentPage,{page:n}):(e=d.createElementByTemplate(this._template.page,{page:n}),this._enabledPageElements.push(e)),n!==i||t.prevMore||l(e,this._firstItemClassName),n!==o||t.nextMore||l(e,this._lastItemClassName),this._getContainerElement().appendChild(e)},_attachClickEvent:function(t){var e=this._getContainerElement();a(e,"click",(function(e){var n,i,o=s(e);r(e),(i=this._getButtonType(o))||(n=this._getPageNumber(o)),t(i,n)}),this)},_getButtonType:function(t){var e,n=this._buttons;return i(n,(function(n,i){return!d.isContained(t,n)||(e=i,!1)}),this),e},_getPageNumber:function(t){var e,n=this._findPageElement(t);return n&&(e=parseInt(n.innerText,10)),e},_findPageElement:function(t){for(var e,n=0,i=this._enabledPageElements.length;n<i;n+=1)if(e=this._enabledPageElements[n],d.isContained(t,e))return e;return null},_empty:function(){this._enabledPageElements=[],i(this._buttons,(function(t,e){this._buttons[e]=t.cloneNode(!0)}),this),this._getContainerElement().innerHTML=""},update:function(t){this._empty(),this._appendFirstButton(t),this._appendPrevButton(t),this._appendPrevMoreButton(t),this._appendPages(t),this._appendNextMoreButton(t),this._appendNextButton(t),this._appendLastButton(t)}});t.exports=g},function(t,e,n){t.exports=function(t){return t.target||t.srcElement}},function(t,e,n){var i=n(4),o=n(3),s=n(23);function a(t,e,n,i){function a(e){n.call(i||t,e||window.event)}"addEventListener"in t?t.addEventListener(e,a):"attachEvent"in t&&t.attachEvent("on"+e,a),function(t,e,n,i){var a=s(t,e),r=!1;o(a,(function(t){return t.handler!==n||(r=!0,!1)})),r||a.push({handler:n,wrappedHandler:i})}(t,e,n,a)}t.exports=function(t,e,n,s){i(e)?o(e.split(/\s+/g),(function(e){a(t,e,n,s)})):o(e,(function(e,i){a(t,i,e,n)}))}},function(t,e,n){var i="_feEventKey";t.exports=function(t,e){var n,o=t[i];return o||(o=t[i]={}),(n=o[e])||(n=o[e]=[]),n}},function(t,e,n){t.exports=function(t){t.preventDefault?t.preventDefault():t.returnValue=!1}},function(t,e,n){var i=n(3),o=n(8),s=n(26),a=n(27);t.exports=function(t){var e,n=Array.prototype.slice.call(arguments,1),r=t.classList,l=[];r?i(n,(function(e){t.classList.add(e)})):((e=s(t))&&(n=[].concat(e.split(/\s+/),n)),i(n,(function(t){o(t,l)<0&&l.push(t)})),a(t,l))}},function(t,e,n){var i=n(1);t.exports=function(t){return t&&t.className?i(t.className.baseVal)?t.className:t.className.baseVal:""}},function(t,e,n){var i=n(2),o=n(1);t.exports=function(t,e){e=(e=i(e)?e.join(" "):e).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),o(t.className.baseVal)?t.className=e:t.className.baseVal=e}},function(t,e,n){t.exports=function(t){return"object"==typeof HTMLElement?t&&(t instanceof HTMLElement||!!t.nodeType):!(!t||!t.nodeType)}},function(t,e,n){var i=n(8),o=n(3),s=n(2),a=n(4),r=n(0),l=/{{\s?|\s?}}/g,c=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,u=/\[\s?|\s?\]/,p=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,d=/\./,f=/^["']\w+["']$/,h=/"|'/g,m=/^-?\d+\.?\d*$/,g={if:function(t,e,n){var i=function(t,e){var n=[t],i=[],s=0,a=0;return o(e,(function(t,o){0===t.indexOf("if")?s+=1:"/if"===t?s-=1:s||0!==t.indexOf("elseif")&&"else"!==t||(n.push("else"===t?["true"]:t.split(" ").slice(1)),i.push(e.slice(a,o)),a=o+1)})),i.push(e.slice(a)),{exps:n,sourcesInsideIf:i}}(t,e),s=!1,a="";return o(i.exps,(function(t,e){return(s=y(t,n))&&(a=x(i.sourcesInsideIf[e],n)),!s})),a},each:function(t,e,n){var i=y(t,n),a=s(i)?"@index":"@key",l={},c="";return o(i,(function(t,i){l[a]=i,l["@this"]=t,r(n,l),c+=x(e.slice(),n)})),c},with:function(t,e,n){var o=i("as",t),s=t[o+1],a=y(t.slice(0,o),n),l={};return l[s]=a,x(e,r(n,l))||""}},v=3==="a".split(/a/).length?function(t,e){return t.split(e)}:function(t,e){var n,i,o=[],s=0;for(e.global||(e=new RegExp(e,"g")),n=e.exec(t);null!==n;)i=n.index,o.push(t.slice(s,i)),s=i+n[0].length,n=e.exec(t);return o.push(t.slice(s)),o};function _(t,e){var n,i=e[t];return"true"===t?i=!0:"false"===t?i=!1:f.test(t)?i=t.replace(h,""):c.test(t)?i=_((n=t.split(u))[0],e)[_(n[1],e)]:p.test(t)?i=_((n=t.split(d))[0],e)[n[1]]:m.test(t)&&(i=parseFloat(t)),i}function b(t,e,n){for(var i,o,s,r,l=g[t],c=1,u=2,p=e[u];c&&a(p);)0===p.indexOf(t)?c+=1:0===p.indexOf("/"+t)&&(c-=1,i=u),p=e[u+=2];if(c)throw Error(t+" needs {{/"+t+"}} expression.");return e[0]=l(e[0].split(" ").slice(1),(o=0,s=i,(r=e.splice(o+1,s-o)).pop(),r),n),e}function y(t,e){var n=_(t[0],e);return n instanceof Function?function(t,e,n){var i=[];return o(e,(function(t){i.push(_(t,n))})),t.apply(null,i)}(n,t.slice(1),e):n}function x(t,e){for(var n,i,o,s=1,r=t[s];a(r);)i=(n=r.split(" "))[0],g[i]?(o=b(i,t.splice(s,t.length-s),e),t=t.concat(o)):t[s]=y(n,e),r=t[s+=2];return t.join("")}t.exports=function(t,e){return x(v(t,l),e)}},function(t,e,n){var i=n(1),o=n(31);t.exports=function(t,e){var n=location.hostname,s="TOAST UI "+t+" for "+n+": Statistics",a=window.localStorage.getItem(s);(i(window.tui)||!1!==window.tui.usageStatistics)&&(a&&!function(t){return(new Date).getTime()-t>6048e5}(a)||(window.localStorage.setItem(s,(new Date).getTime()),setTimeout((function(){"interactive"!==document.readyState&&"complete"!==document.readyState||o("https://www.google-analytics.com/collect",{v:1,t:"event",tid:e,cid:n,dp:n,dh:t,el:t,ec:"use"})}),1e3)))}},function(t,e,n){var i=n(6);t.exports=function(t,e){var n=document.createElement("img"),o="";return i(e,(function(t,e){o+="&"+e+"="+t})),o=o.substring(1),n.src=t+"?"+o,n.style.display="none",document.body.appendChild(n),document.body.removeChild(n),n}}])},t.exports=n()})),s.register("8izSm",(function(n,i){e(n.exports,"createCardMarkup",(function(){return c}));var o=s("fb9GJ"),a=s("8sSZi");const r={movieList:document.querySelector(".home"),pagination:document.querySelector(".tui-pagination"),filmModalList:document.querySelector(".backdrop")},l=new(t(o))(r.pagination,{totalItems:0,itemsPerPage:20,visiblePages:5,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}}).getCurrentPage();function c(t,e){if(0!==t.length)return t.map((({id:t,title:n,poster_path:i,release_date:o,genre_ids:s})=>{let a=o.slice(0,4),r=[];for(let t of s){let n=e.find((({id:e})=>e===t));r.push(n.name)}r.length>=3&&(r=[r[0],r[1],"Other"]);let l=r.join(", ");return`<li class="card">\n  <a href="" class="card-link link" data-id="${t}">\n   <div class="card-box">\n    <img class="card-img" src="${c=i,null===c?"https://freedesignfile.com/upload/2018/11/Characters-in-film-design-elements-background-vector-graphic-715.jpg":`https://image.tmdb.org/t/p/w500${c}`}" alt="${n}">\n    </div>\n    <h3 class="card-name">${n}</h3>\n    <div class="card-item">\n      <p class="card-genres">${l}</p>\n      <p class="card-year"><span class="card-line">|</span>${a}</p>\n    </div>\n  </a>\n</li>`;var c})).join("")}(0,a.fetchGenresAPI)().then((t=>{(0,a.fetchFilmsAPI)(l).then((e=>{let n=c(e,t);r.movieList&&r.movieList.insertAdjacentHTML("beforeend",n)}))}))})),s.register("ioBS9",(function(t,e){window.addEventListener("load",(()=>{document.querySelector(".preloader").classList.add("loaded_hiding"),setTimeout((()=>{document.body.removeChild(document.querySelector(".preloader"))}),200)}))})),s.register("k9bNO",(function(t,e){const n={filmModalList:document.querySelector(".backdrop"),openModalFilm:document.querySelector(".card-list")};n.openModalFilm.addEventListener("click",(function(t){if(t.target!==t.currentTarget){t.preventDefault();const a=t.target.closest(".card-link").getAttribute("data-id");(e=a,fetch(`https://api.themoviedb.org/3/movie/${e}?api_key=cf961b1b89f4c4a28558be2b04fdd59a`).then((t=>{if(!t.ok)throw new Error("Network response was not OK");return t.json()})).then((t=>t)).catch((t=>{console.error("There has been a problem with your fetch operation:",t)}))).then((t=>{n.filmModalList.classList.remove("is-hidden"),n.filmModalList.innerHTML=function(t){const{id:e,title:n,overview:i,poster_path:o,release_date:s,genres:a,original_title:r,popularity:l,vote_average:c,vote_count:u,homepage:p}=t,d="https://image.tmdb.org/t/p/w500",f=t.genres.map((t=>t.name)).join(", ");return`<div class="film-modal">\n        <button type="submit" class="film-modal-close-button" data-film-modal-close> \n          <svg class='film-modal-close-icon' width='30' height='30' viewBox='0 0 30 30'>\n            <path class='film-modal-close-icon' d='M8 8L22 22' stroke='black' stroke-width='2'></path>\n            <path class='film-modal-close-icon' d='M8 22L22 8' stroke='black' stroke-width='2'></path>\n          </svg>\n        </button>\n    \n        <div class='film-modal-poster-wrap'>\n          <img\n            class='film-modal-poster-img'\n            src="${d}${o}" alt="film"\n          />\n          <a class='link link-watch film-modal-btn film-modal-btn-trailer js-film-trailer' href="${p}" data-id="${e}">official page</a>\n          </div>\n        <div class="film-modal-info-wrap">\n        <h2 class="film-modal-title">${n}</h2>\n        <ul class="film-modal-info-list">\n          <li class="film-modal-item ">\n            <p class="film-modal-item-title">Vote / Votes</p>\n            <p class="film-modal-item-description">\n          <span class="film-modal-item-vote color">${c}</span>\n          <span>/</span>\n          <span class="film-modal-item-vote">${u}</span>\n        </p>\n        </li>\n        <li class="film-modal-item ">\n          <p class="film-modal-item-title">Popularity</p>\n          <p class='film-modal-item-description'>${l}</p>\n        </li>\n        <li class="film-modal-item ">\n          <p class="film-modal-item-title">Original Title</p>\n          <p class="film-modal-item-description film-modal-item-original-title">${r}</p>\n        </li>\n        <li class="film-modal-item ">\n          <p class="film-modal-item-title">Genre</p>\n          <p class='film-modal-item-description'>${f}</p>\n        </li>\n      </ul>\n      <h3 class="film-modal-about">ABOUT</h3>\n      <p class="film-modal-description">${i}\n      </p>\n      <div class="film-modal-btn-wrap">\n        <button class="film-modal-btn film-modal-btn-watched add-to-watched-btn" data-id="${e}" type="button">add to Watched</button>\n        <button class="film-modal-btn add-to-queue-btn" type="button" data-id="${e}">add to queue</button>\n      </div>\n      </div>`}(t);document.querySelector(".film-modal-close-button").addEventListener("click",o),n.filmModalList.addEventListener("click",s),i.disabledScroll();const e=document.querySelector(".add-to-watched-btn");const a=(JSON.parse(localStorage.getItem("Watched movies"))||[]).includes(t.id);e.textContent=a?"Remove from watched":"Add to watched",e.addEventListener("click",(function(e){let n=JSON.parse(localStorage.getItem("Watched movies"))||[];if(n.includes(t.id)){const i=n.indexOf(t.id);n.splice(i,1),e.target.textContent="Add to watched"}else n.push(t.id),e.target.textContent="Remove from watched";localStorage.setItem("Watched movies",JSON.stringify(n))}));const r=document.querySelector(".add-to-queue-btn");const l=(JSON.parse(localStorage.getItem("Queue movies"))||[]).includes(t.id);r.textContent=l?"Remove from queue":"Add to queue",r.addEventListener("click",(function(e){let n=JSON.parse(localStorage.getItem("Queue movies"))||[];if(n.includes(t.id)){const i=n.indexOf(t.id);n.splice(i,1),e.target.textContent="Add to queue"}else n.push(t.id),e.target.textContent="Remove from queue";localStorage.setItem("Queue movies",JSON.stringify(n))}))}))}var e}));const i={disabledScroll(){document.body.style.cssText="\n    overflow: hidden;\n    "},enabledScroll(){document.body.style.cssText=""}};function o(){n.filmModalList.classList.add("is-hidden"),n.filmModalList.removeEventListener("click",s),i.enabledScroll()}function s(t){t.target.classList.contains("backdrop")&&o()}window.addEventListener("keydown",(t=>{"Escape"===t.code&&o()}))})),s.register("bN1BJ",(function(t,e){const n=document.querySelector(".open-mdl-win"),i=document.querySelector(".backdrop-team"),o=(document.querySelector(".mdl-win-team"),document.querySelector(".close-btn-mdl")),s={disabledScroll(){document.body.style.cssText="\n    overflow: hidden;\n    "},enabledScroll(){document.body.style.cssText=""}};n.addEventListener("click",(t=>{t.preventDefault(),s.disabledScroll(),i.classList.remove("is-hidden")}));const a=t=>{i.classList.add("is-hidden"),s.enabledScroll()};o.addEventListener("click",a);i.addEventListener("click",(function(t){t.target.classList.contains("backdrop-team")&&a()})),window.addEventListener("keydown",(t=>{"Escape"===t.code&&a()}))})),s.register("7tzR7",(function(t,e){$(".slider-single").slick({slidesToShow:1,slidesToScroll:1,arrows:!0,fade:!1,adaptiveHeight:!0,infinite:!1,useTransform:!0,speed:400,cssEase:"cubic-bezier(0.77, 0, 0.18, 1)"}),$(".slider-nav").on("init",(function(t,e){$(".slider-nav .slick-slide.slick-current").addClass("is-active")})).slick({slidesToShow:3,slidesToScroll:3,dots:!1,focusOnSelect:!1,infinite:!1}),$(".slider-single").on("afterChange",(function(t,e,n){$(".slider-nav").slick("slickGoTo",n);var i='.slider-nav .slick-slide[data-slick-index="'+n+'"]';$(".slider-nav .slick-slide.is-active").removeClass("is-active"),$(i).addClass("is-active")})),$(".slider-nav").on("click",".slick-slide",(function(t){t.preventDefault();var e=$(this).data("slick-index");$(".slider-single").slick("slickGoTo",e)}))}));
//# sourceMappingURL=library-page.b30fc878.js.map

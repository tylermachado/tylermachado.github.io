(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"0nhh":function(e,t,n){},"8+s/":function(e,t,n){"use strict";n("V+eJ"),n("bWfx"),n("f3/d"),n("hHhE"),n("HAE/");var r,a=n("q1tI"),o=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c,l=[];function u(){c=e(l.map((function(e){return e.props}))),d.canUseDOM?t(c):n&&(c=n(c))}var d=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return c},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,l=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){l.push(this),u()},i.componentDidUpdate=function(){u()},i.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),u()},i.render=function(){return o.createElement(r,this.props)},a}(a.PureComponent);return i(d,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(d,"canUseDOM",s),d}}},Gju4:function(e){e.exports=JSON.parse('[{"link":"https://etherpad.opennews.org/p/SRCCONWORK2017-boosting-careers","title":"Building Careers Without the Ladder","source":"SRCCON:WORK, December 2017"},{"link":"https://medium.com/@tylermachado/a-data-analysis-of-my-drinking-habits-a7a626bf17ed","title":"A Data Analysis of My Drinking Habits","source":"written for a statistics class in December 2015 and repurposed for a SRCCON lightning talk in July 2016"},{"link":"http://www.bu.edu/com/data-storytelling/","title":"Free, Easy Web Tools for Dataviz","source":"Boston University\'s Storytelling With Data workshops, June 2016"},{"link":"http://www.tylermachado.com/slides-responsive-dataviz/#/","title":"Responsive Design and Dataviz","source":"CASCADE BOS, April 2016"},{"link":"https://source.opennews.org/en-US/articles/lonely-newsroom-coder/","title":"Big Ambition, Small Staff, How the F*** Do I Prioritize?","source":"SRCCON, June 2015"},{"link":"http://thoughtfaucet.com/event/web-analytics-wednesday/","title":"An untitled talk about email analytics that\'s not on the web","source":"Burlington Web Analytics Wednesday, December 2012"},{"link":"http://www.sevendaysvt.com/vermont/how-to-hack-it-in-a-hackathon/Content?oid=2241933","title":"How to Hack It in a Hackathon","source":"Seven Days, October 2012"},{"link":"http://thoughtfaucet.com/making-things/examples/social-media-and-government-a-mind-map-of-a-panel-discussion/","title":"How Social Media is Redefining Politics","source":"Burlington NetSquared, May 2012"}]')},"HAE/":function(e,t,n){var r=n("XKFU");r(r.S+r.F*!n("nh4g"),"Object",{defineProperty:n("hswa").f})},OGtf:function(e,t,n){var r=n("XKFU"),a=n("eeVq"),o=n("vhPU"),i=/"/g,s=function(e,t,n,r){var a=String(o(e)),s="<"+t;return""!==n&&(s+=" "+n+'="'+String(r).replace(i,"&quot;")+'"'),s+">"+a+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(s),r(r.P+r.F*a((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}},Oyvg:function(e,t,n){var r=n("dyZX"),a=n("Xbzi"),o=n("hswa").f,i=n("kJMx").f,s=n("quPj"),c=n("C/va"),l=r.RegExp,u=l,d=l.prototype,h=/a/g,p=/a/g,f=new l(h)!==h;if(n("nh4g")&&(!f||n("eeVq")((function(){return p[n("K0xU")("match")]=!1,l(h)!=h||l(p)==p||"/a/i"!=l(h,"i")})))){l=function(e,t){var n=this instanceof l,r=s(e),o=void 0===t;return!n&&r&&e.constructor===l&&o?e:a(f?new u(r&&!o?e.source:e,t):u((r=e instanceof l)?e.source:e,r&&o?c.call(e):t),n?this:d,l)};for(var m=function(e){e in l||o(l,e,{configurable:!0,get:function(){return u[e]},set:function(t){u[e]=t}})},g=i(u),y=0;g.length>y;)m(g[y++]);d.constructor=l,l.prototype=d,n("KroJ")(r,"RegExp",l)}n("elZq")("RegExp")},RXBc:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=n("qhky"),i=(n("tUrg"),n("Rqf5"),n("yL6s")),s=function(e){return a.a.createElement("div",{class:"container narrow"},a.a.createElement("div",{class:"section-top-border"}),a.a.createElement("h2",null,e.words))},c=function(){return a.a.createElement("div",{class:"container"},a.a.createElement("div",{id:"work"},a.a.createElement(s,{words:"Selected Work"}),a.a.createElement("div",{id:"colsContainer",className:"cols"},i.filter((function(e){return 1===e.show})).map((function(e,t){return a.a.createElement("div",{key:"content_item_"+t,className:"portfolio-card"},a.a.createElement("a",{href:e.link},a.a.createElement("div",null,a.a.createElement("img",{alt:e.title,src:"../../static/screenshots/"+e.screenshot}),a.a.createElement("div",null,e.title),"personal"===e.publication?"":a.a.createElement("div",{className:"subhed"},e.publication))))})))))},l=n("Gju4"),u=function(){return a.a.createElement("div",{id:"talks"},a.a.createElement("div",{class:"container narrow"},a.a.createElement(s,{words:"Talks and Writing"}),a.a.createElement("ul",null,l.map((function(e,t){return a.a.createElement("li",{key:"content_item_"+t,className:""},a.a.createElement("a",{href:e.link,alt:e.title},e.title),", ",e.source)})))))},d=(n("goLZ"),new Date),h=function(e){return a.a.createElement("div",null,a.a.createElement("div",{class:"triangle-top"}),a.a.createElement("footer",null,a.a.createElement("div",{class:"container"},a.a.createElement("div",null,"© ",d.getFullYear()," Tyler Machado."),a.a.createElement("div",null,"This site was built with: HTML, CSS, ",a.a.createElement("a",{href:"https://gatsbyjs.org/"},"Gatsby"),", ",a.a.createElement("a",{href:"//sheets.google.com/"},"Google Sheets"),", and ",a.a.createElement("a",{href:"//fonts.google.com/"},"Google Fonts"),"."))))},p=(n("rlrg"),function(e){return a.a.createElement("section",{id:"hero"},a.a.createElement("div",{class:"container"},a.a.createElement("div",null,a.a.createElement("img",{src:"../../static/headshot-gradient-circle.png",alt:"Tyler Machado",className:"hero-img"})),a.a.createElement("div",{className:"herotext"},a.a.createElement("h1",null,"Hi, I'm Tyler Machado."),a.a.createElement("p",null,"I'm a front-end web developer, designer and editor with a decade of experience in digital news. I use technology and design to build creative, illuminating experiences and tools. I'm data-literate, process-oriented, and highly organized (in that spreadsheet-for-",a.a.createElement("em",null,"everything")," type of way)."))),a.a.createElement("div",{class:"triangle-bottom"}))}),f=(n("YKNG"),function(e){return a.a.createElement("section",{id:"facts"},a.a.createElement("div",{class:"container narrow"},a.a.createElement("div",{id:"facts-container"},a.a.createElement("div",null,a.a.createElement("h3",null,"Location"),a.a.createElement("span",null,"Boston, MA")),a.a.createElement("div",null,a.a.createElement("h3",null,"Pronouns"),a.a.createElement("span",null,"he/him/his")),a.a.createElement("div",null,a.a.createElement("h3",null,"Github"),a.a.createElement("span",null,a.a.createElement("a",{href:"//github.com/tylermachado",title:"Tyler's Github"},"tylermachado"))),a.a.createElement("div",null,a.a.createElement("h3",null,"Email"),a.a.createElement("span",null,"tyler.machado [at] gmail")))))}),m=(n("0nhh"),function(e){return a.a.createElement("header",{id:"nav"},a.a.createElement("div",{className:"backdrop"},a.a.createElement("div",{className:"container"},a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("a",{href:"/#work"},"Projects")),a.a.createElement("li",null,a.a.createElement("a",{href:"/#resume"},"Resume")),a.a.createElement("li",null,a.a.createElement("a",{href:"/#talks"},"Talks"))))),a.a.createElement("div",{class:"triangle-bottom-nav"}))});n("+ZDr"),n("lw3w"),n("emEt").default.enqueue,a.a.createContext({});var g=n("TmQi"),y=(n("k6Cu"),function(){return a.a.createElement("div",{id:"resume"},a.a.createElement("div",{class:"container narrow"},a.a.createElement(s,{words:"Resume"}),a.a.createElement("p",null,"This resume is also available ",a.a.createElement("a",{href:"../../static/tyler_machado_resume.pdf",title:"Tyler Machado's resume as a PDF"},"in PDF format"),"."),g.map((function(e,t){return a.a.createElement("div",{key:"content_item_"+t,className:"job-listing"},a.a.createElement("h3",null,a.a.createElement("a",{href:e.url,alt:e.workplace},e.workplace)),a.a.createElement("span",{className:"location"},"(",e.location,")"),a.a.createElement("div",{className:"titles"},e.titles.map((function(e,t){return a.a.createElement("h4",{key:"content_item_"+t},e)}))),a.a.createElement("ul",null,e.duties.map((function(e,t){return a.a.createElement("li",{key:"content_item_"+t},e)}))))}))))});n("t+Ps"),t.default=function(){return a.a.createElement("div",{id:"bodyContainer"},a.a.createElement(o.a,null,a.a.createElement("meta",{charSet:"utf-8"}),a.a.createElement("meta",{name:"description",content:"A web developer/designer specializing in data visualization, working from Boston, Massachusetts."}),a.a.createElement("title",null,"Tyler Machado: web developer and data visualization specialist in Boston, MA"),a.a.createElement("link",{rel:"canonical",href:"//tylermachado.com"})),a.a.createElement(m,null),a.a.createElement(p,null),a.a.createElement(f,null),a.a.createElement(c,null),a.a.createElement(y,null),a.a.createElement(u,null),a.a.createElement(h,null))}},Rqf5:function(e,t,n){},TmQi:function(e){e.exports=JSON.parse('[{"workplace":"Northeastern University","location":"Boston, MA","url":"https://news.northeastern.edu/author/tmachado/","titles":["Front-end and Data Developer, April 2019-present"],"duties":["designed, built and maintained the university\'s public-facing coronavirus testing dashboard","updated digital project templates to use modern JavaScript technologies and simplify deployment","created custom data visualizations for news stories","built mini-sites and performed maintenance on custom WordPress (Timber) theme"]},{"workplace":"Journalist\'s Resource","location":"Cambridge, MA","url":"https://journalistsresource.org/author/tylermachado1/","titles":["Developer (Counting for Dollars Project), January 2020-March 2020"],"duties":["built interactive, sharable graphics and maps on Census and federal funding data, using a template built on React, Mapbox and D3.js","evaluated options for readers to embed graphics and download data"]},{"workplace":"Institute for Nonprofit News","location":"remote","url":"https://labs.inn.org/","titles":["Front-end Developer/Designer, February 2018-April 2019"],"duties":["built modern WordPress websites for nonprofit news organizations using our WordPress theme, Largo","created wireframes, prototypes and visual systems to guide project decisions and communicate concepts to collaborators","updated INN branding guidelines and assets for print and digital"]},{"workplace":"Harvard Business Review","location":"Boston, MA","url":"https://hbr.org/reading-list/31473e26-871d-44e2-ab42-0ef16608f6a4","titles":["Editorial Developer, March 2014-January 2018"],"duties":["created interactive tools, data visualizations, and new digital storytelling experiences on HBR.org","collaborated with colleagues across design, tech and editorial departments while self-directing projects","built and maintained messaging bots, both user-facing and internal, on Slack and Facebook"]},{"workplace":"Seven Days","location":"Burlington, VT","url":"//sevendaysvt.com","titles":["Digital Media Manager, August 2012-March 2014","Deputy Web Editor, June 2010-August 2012"],"duties":["created WordPress websites for sub-brands and special events","designed, curated and managed production of six email newsletters","enhanced news articles for digital presentation with special layouts, embedded media and photography","led new digital content and social media strategies in the newsroom"]}]')},YKNG:function(e,t,n){},bmMU:function(e,t,n){n("SRfc"),n("RW0V"),n("a1Th"),n("h7Nl"),n("OEbY"),n("Oyvg"),n("LK8F"),n("T39b"),n("rGqo"),n("yt8O"),n("Btvt"),n("XfO3"),n("9AAn");var r="undefined"!=typeof Element,a="function"==typeof Map,o="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;var s,c,l,u;if(Array.isArray(t)){if((s=t.length)!=n.length)return!1;for(c=s;0!=c--;)if(!e(t[c],n[c]))return!1;return!0}if(a&&t instanceof Map&&n instanceof Map){if(t.size!==n.size)return!1;for(u=t.entries();!(c=u.next()).done;)if(!n.has(c.value[0]))return!1;for(u=t.entries();!(c=u.next()).done;)if(!e(c.value[1],n.get(c.value[0])))return!1;return!0}if(o&&t instanceof Set&&n instanceof Set){if(t.size!==n.size)return!1;for(u=t.entries();!(c=u.next()).done;)if(!n.has(c.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(n)){if((s=t.length)!=n.length)return!1;for(c=s;0!=c--;)if(t[c]!==n[c])return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((s=(l=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(c=s;0!=c--;)if(!Object.prototype.hasOwnProperty.call(n,l[c]))return!1;if(r&&t instanceof Element)return!1;for(c=s;0!=c--;)if(("_owner"!==l[c]&&"__v"!==l[c]&&"__o"!==l[c]||!t.$$typeof)&&!e(t[l[c]],n[l[c]]))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},goLZ:function(e,t,n){},h7Nl:function(e,t,n){var r=Date.prototype,a=r.toString,o=r.getTime;new Date(NaN)+""!="Invalid Date"&&n("KroJ")(r,"toString",(function(){var e=o.call(this);return e==e?a.call(this):"Invalid Date"}))},k6Cu:function(e,t,n){},lw3w:function(e,t,n){var r;e.exports=(r=n("rzlk"))&&r.default||r},qhky:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return me}));n("dZ+Y"),n("KKXr"),n("2Spj"),n("eM6i"),n("8+KV"),n("0l/t"),n("LK8F"),n("pIFo"),n("V+eJ"),n("/SS/"),n("hHhE"),n("91GP"),n("HAE/"),n("rE2o"),n("ioFf"),n("DNiP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("bWfx");var r,a,o,i,s=n("17x9"),c=n.n(s),l=n("8+s/"),u=n.n(l),d=n("bmMU"),h=n.n(d),p=n("q1tI"),f=n.n(p),m=n("MgzW"),g=n.n(m),y="bodyAttributes",v="htmlAttributes",w="titleAttributes",b={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},E=(Object.keys(b).map((function(e){return b[e]})),"charset"),k="cssText",T="href",C="http-equiv",A="innerHTML",S="itemprop",O="name",N="property",j="rel",I="src",M="target",P={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},R="defaultTitle",D="defer",x="encodeSpecialCharacters",U="onChangeClientState",z="titleTemplate",L=Object.keys(P).reduce((function(e,t){return e[P[t]]=t,e}),{}),H=[b.NOSCRIPT,b.SCRIPT,b.STYLE],B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},q=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},W=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},V=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},K=function(e){var t=Q(e,b.TITLE),n=Q(e,z);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=Q(e,R);return t||r||void 0},Y=function(e){return Q(e,U)||function(){}},G=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return J({},e,t)}),{})},X=function(e,t){return t.filter((function(e){return void 0!==e[b.BASE]})).map((function(e){return e[b.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},Z=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+B(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var s=o[i],c=s.toLowerCase();-1===t.indexOf(c)||n===j&&"canonical"===e[n].toLowerCase()||c===j&&"stylesheet"===e[c].toLowerCase()||(n=c),-1===t.indexOf(s)||s!==A&&s!==k&&s!==S||(n=s)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][l]&&(a[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var s=o[i],c=g()({},r[s],a[s]);r[s]=c}return e}),[]).reverse()},Q=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},$=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:e.requestAnimationFrame||$,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,oe=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,s=e.noscriptTags,c=e.onChangeClientState,l=e.scriptTags,u=e.styleTags,d=e.title,h=e.titleAttributes;ce(b.BODY,r),ce(b.HTML,a),se(d,h);var p={baseTag:le(b.BASE,n),linkTags:le(b.LINK,o),metaTags:le(b.META,i),noscriptTags:le(b.NOSCRIPT,s),scriptTags:le(b.SCRIPT,l),styleTags:le(b.STYLE,u)},f={},m={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(f[e]=n),r.length&&(m[e]=p[e].oldTags)})),t&&t(),c(e,f,m)},ie=function(e){return Array.isArray(e)?e.join(""):e},se=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),ce(b.TITLE,t)},ce=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),s=0;s<i.length;s++){var c=i[s],l=t[c]||"";n.getAttribute(c)!==l&&n.setAttribute(c,l),-1===a.indexOf(c)&&a.push(c);var u=o.indexOf(c);-1!==u&&o.splice(u,1)}for(var d=o.length-1;d>=0;d--)n.removeAttribute(o[d]);a.length===o.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==i.join(",")&&n.setAttribute("data-react-helmet",i.join(","))}},le=function(e,t){var n=document.head||document.querySelector(b.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===A)n.innerHTML=t.innerHTML;else if(r===k)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var s=void 0===t[r]?"":t[r];n.setAttribute(r,s)}n.setAttribute("data-react-helmet","true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},ue=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},de=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[P[n]||n]=e[n],t}),t)},he=function(e,t,n){switch(e){case b.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,a=de(n,r),[f.a.createElement(b.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=ue(n),o=ie(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+V(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+V(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case y:case v:return{toComponent:function(){return de(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach((function(e){var n=P[e]||e;if(n===A||n===k){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),f.a.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===A||e===k)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+V(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",i=-1===H.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},pe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,s=e.noscriptTags,c=e.scriptTags,l=e.styleTags,u=e.title,d=void 0===u?"":u,h=e.titleAttributes;return{base:he(b.BASE,t,r),bodyAttributes:he(y,n,r),htmlAttributes:he(v,a,r),link:he(b.LINK,o,r),meta:he(b.META,i,r),noscript:he(b.NOSCRIPT,s,r),script:he(b.SCRIPT,c,r),style:he(b.STYLE,l,r),title:he(b.TITLE,{title:d,titleAttributes:h},r)}},fe=u()((function(e){return{baseTag:X([T,M],e),bodyAttributes:G(y,e),defer:Q(e,D),encode:Q(e,x),htmlAttributes:G(v,e),linkTags:Z(b.LINK,[j,T],e),metaTags:Z(b.META,[O,E,C,N,S],e),noscriptTags:Z(b.NOSCRIPT,[A],e),onChangeClientState:Y(e),scriptTags:Z(b.SCRIPT,[I,A],e),styleTags:Z(b.STYLE,[k],e),title:K(e),titleAttributes:G(w,e)}}),(function(e){ae&&ne(ae),e.defer?ae=te((function(){oe(e,(function(){ae=null}))})):(oe(e),ae=null)}),pe)((function(){return null})),me=(a=fe,i=o=function(e){function t(){return F(this,t),W(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!h()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case b.SCRIPT:case b.NOSCRIPT:return{innerHTML:t};case b.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return J({},r,((t={})[n.type]=[].concat(r[n.type]||[],[J({},a,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(r.type){case b.TITLE:return J({},a,((t={})[r.type]=i,t.titleAttributes=J({},o),t));case b.BODY:return J({},a,{bodyAttributes:J({},o)});case b.HTML:return J({},a,{htmlAttributes:J({},o)})}return J({},a,((n={})[r.type]=J({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=J({},t);return Object.keys(e).forEach((function(t){var r;n=J({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return f.a.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[L[n]||n]=e[n],t}),t)}(_(a,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case b.LINK:case b.META:case b.NOSCRIPT:case b.SCRIPT:case b.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=_(e,["children"]),r=J({},n);return t&&(r=this.mapChildrenToProps(t,r)),f.a.createElement(a,r)},q(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(f.a.Component),o.propTypes={base:c.a.object,bodyAttributes:c.a.object,children:c.a.oneOfType([c.a.arrayOf(c.a.node),c.a.node]),defaultTitle:c.a.string,defer:c.a.bool,encodeSpecialCharacters:c.a.bool,htmlAttributes:c.a.object,link:c.a.arrayOf(c.a.object),meta:c.a.arrayOf(c.a.object),noscript:c.a.arrayOf(c.a.object),onChangeClientState:c.a.func,script:c.a.arrayOf(c.a.object),style:c.a.arrayOf(c.a.object),title:c.a.string,titleAttributes:c.a.object,titleTemplate:c.a.string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);me.renderStatic=me.rewind}).call(this,n("yLpj"))},rlrg:function(e,t,n){},rzlk:function(e,t,n){"use strict";n.r(t);n("91GP");var r=n("q1tI"),a=n.n(r),o=n("IOVJ");t.default=function(e){var t=e.location,n=e.pageResources;return n?a.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json)):null}},tUrg:function(e,t,n){"use strict";n("OGtf")("link",(function(e){return function(t){return e(this,"a","href",t)}}))},yL6s:function(e){e.exports=JSON.parse('[{"title":"The recovery of the US economy after COVID-19 hinges on federal support","publication":"Northeastern University","date":"Dec 2020","link":"https://news.northeastern.edu/2020/12/18/the-recovery-of-the-us-economy-after-the-covid-19-pandemic-hinges-on-federal-support/","category":"dataviz, design","show":1,"screenshot":"unemployment.png"},{"title":"Many Republicans don’t believe the election results, a new survey says","publication":"Northeastern University","date":"Dec 2020","link":"https://news.northeastern.edu/2020/12/11/who-won-the-2020-presidential-election-joe-biden-or-donald-trump-depends-whom-you-ask/","category":"dataviz","show":0,"screenshot":""},{"title":"Wearing masks is on the rise across the US but distancing measures aren’t","publication":"Northeastern University","date":"Nov 2020","link":"https://news.northeastern.edu/2020/12/01/wearing-masks-is-on-the-rise-across-the-us-but-social-distancing-measures-arent/","category":"dataviz, design","show":0,"screenshot":""},{"title":"Interactive exploration template with Mapbox","publication":"Northeastern University","date":"Nov 2020","link":"https://news.northeastern.edu/2020/11/05/heres-a-look-at-all-the-new-construction-on-northeasterns-campus-this-year/","category":"development, design","show":1,"screenshot":"constmap.png"},{"title":"Here’s how the US ranks COVID-19 and other issues ahead of Election Day","publication":"Northeastern University","date":"Nov 2020","link":"https://news.northeastern.edu/2020/11/02/heres-how-voters-rank-covid-19-and-other-issues-facing-the-us-ahead-of-election-day/#interactive","category":"dataviz","show":0,"screenshot":"issues.png"},{"title":"COVID-19 testing dashboard","publication":"Northeastern University","date":"Aug 2020","link":"https://news.northeastern.edu/coronavirus/reopening/testing-dashboard/","category":"dataviz","show":1,"screenshot":"testdashboard.png"},{"title":"Fewer people are using public transportation. Here’s why that’s trouble in the long run.","publication":"Northeastern University","date":"Aug 2020","link":"https://news.northeastern.edu/2020/08/13/fewer-people-are-using-public-transportation-in-the-us-heres-why-thats-trouble-in-the-long-run/","category":"dataviz, design","show":1,"screenshot":"covidsubway.png"},{"title":"There’s been a 23,000 percent jump in fireworks complaints in some parts of the US this summer. You read that right.","publication":"Northeastern University","date":"Jul 2020","link":"https://news.northeastern.edu/2020/07/01/theres-been-a-23000-percent-jump-in-fireworks-complaints-in-some-parts-of-the-us-this-summer-you-read-that-right/","category":"dataviz, design","show":1,"screenshot":"fireworks.png"},{"title":"How many city dwellers across the US have access to parks and green space?","publication":"Northeastern University","date":"Jun 2020","link":"https://news.northeastern.edu/2020/06/15/how-many-city-dwellers-across-the-us-have-access-to-parks-and-green-space/","category":"dataviz","show":1,"screenshot":"parks.png"},{"title":"The 2020 census and Title I funding for schools: Interactive maps to localize your state’s stakes","publication":"Journalist\'s Resource","date":"May 2020","link":"https://journalistsresource.org/studies/society/education/2020-census-title-i-maps/","category":"dataviz, development","show":1,"screenshot":"jr2.png"},{"title":"To fight the COVID-19 outbreak, first we have to track it","publication":"Northeastern University","date":"Apr 2020","link":"https://news.northeastern.edu/2020/04/09/to-fight-the-covid-19-outbreak-first-we-have-to-track-it/","category":"dataviz","show":0,"screenshot":"covidtrack.png"},{"title":"Here’s how COVID-19 brought the world to a standstill","publication":"Northeastern University","date":"Apr 2020","link":"https://news.northeastern.edu/2020/04/29/apple-maps-data-shows-how-covid-19-brought-the-world-to-a-standstill/","category":"dataviz, design, development","show":1,"screenshot":"covidmobility.png"},{"title":"Do women publish less than men in scientific fields? Turns out, scientists have been asking the wrong question.","publication":"Northeastern University","date":"Mar 2020","link":"https://news.northeastern.edu/2020/03/05/do-women-publish-less-than-men-in-scientific-fields-turns-out-scientists-have-been-asking-the-wrong-question/","category":"dataviz","show":1,"screenshot":"sciwomen.png"},{"title":"NU COVID-19 updates site","publication":"Northeastern University","date":"Mar 2020","link":"https://news.northeastern.edu/coronavirus/","category":"development, design","show":0,"screenshot":"covid.jpg"},{"title":"Around the world, people stopped going to restaurants—before governments told them to stay home","publication":"Northeastern University","date":"Mar 2020","link":"https://news.northeastern.edu/2020/03/18/around-the-world-people-stopped-going-to-restaurants-before-governments-told-them-to-stay-home/","category":"dataviz","show":1,"screenshot":"opentable.png"},{"title":"Is a recession necessary to fight COVID-19?","publication":"Northeastern University","date":"Mar 2020","link":"https://news.northeastern.edu/2020/03/26/us-unemployment-has-soared-is-a-recession-necessary-to-fight-covid-19/","category":"dataviz","show":0,"screenshot":""},{"title":"Interactive graphics show how the 2020 census guides federal program funding in each state","publication":"Journalist\'s Resource","date":"Mar 2020","link":"https://journalistsresource.org/studies/government/2020-census-federal-state-funding-medicare/","category":"dataviz","show":1,"screenshot":"jr1.png"},{"title":"Can gun violence be traced back to its root causes?","publication":"Northeastern University","date":"Jan 2020","link":"https://news.northeastern.edu/2020/01/06/can-gun-violence-be-traced-back-to-socioeconomic-root-causes/","category":"dataviz, development","show":0,"screenshot":""},{"title":"President Trump’s impeachment trial is underway. Here’s how we got here","publication":"Northeastern University","date":"Jan 2020","link":"https://news.northeastern.edu/2020/01/22/president-trumps-impeachment-trial-is-underway-heres-how-we-got-here/","category":"development","show":0,"screenshot":""},{"title":"Here\'s every result ever from Boston\'s Beanpot hockey tournament","publication":"Northeastern University","date":"Jan 2020","link":"https://news.northeastern.edu/2020/01/31/heres-every-result-ever-from-bostons-beanpot-hockey-tournament/","category":"development","show":0,"screenshot":"beanpot.png"},{"title":"Race, gender, shape high school students’ support for First Amendment protections","publication":"Northeastern University","date":"Dec 2019","link":"https://news.northeastern.edu/2019/12/16/has-cyberbullying-changed-how-high-school-students-think-about-the-first-amendment/","category":"dataviz","show":0,"screenshot":""},{"title":"This is the course 11,000 athletes will row for the Head of the Charles Regatta","publication":"Northeastern University","date":"Oct 2019","link":"https://news.northeastern.edu/2019/10/16/this-is-the-course-11000-athletes-will-row-for-bostons-head-of-the-charles-regatta/","category":"development, design","show":1,"screenshot":"hocr.jpg"},{"title":"A Century of Women\'s Right to Vote","publication":"Northeastern University","date":"Jun 2019","link":"https://news.northeastern.edu/2019/06/03/the-boston-globe-photo-archive-helps-show-journey-of-womens-suffrage-and-100-years-of-the-19th-amendment/","category":"development","show":0,"screenshot":""},{"title":"Facing the Future","publication":"Northeastern University","date":"Jun 2019","link":"https://www.northeastern.edu/gallup/","category":"dataviz","show":0,"screenshot":""},{"title":"Here are the 147 flags you’ll see students waving at Commencement this year","publication":"Northeastern University","date":"May 2019","link":"https://news.northeastern.edu/2019/05/01/here-are-the-147-flags-youll-see-waving-at-northeastern-commencement-2019/","category":"dataviz","show":0,"screenshot":""},{"title":"2019 soccer tournament iCal","publication":"personal","date":"May 2019","link":"https://github.com/tylermachado/soccer-tournament-icalendar","category":"development","show":0,"screenshot":"soccer.jpg"},{"title":"Fitness trackers need to go beyond counting steps. Here’s why.","publication":"Northeastern University","date":"May 2019","link":"https://news.northeastern.edu/2019/05/22/fitness-trackers-need-to-offer-more-support-to-help-low-income-families-to-improve-their-health-says-northeastern-university-professor/","category":"dataviz","show":0,"screenshot":""},{"title":"Shining a light on bias against women in the 2020 presidential campaign","publication":"Northeastern University","date":"Apr 2019","link":"https://news.northeastern.edu/2019/04/23/northeastern-journalism-student-earns-national-attention-for-revealing-media-bias-against-female-presidential-candidates/","category":"dataviz","show":0,"screenshot":""},{"title":"Beyond Columbine","publication":"Institute for Nonprofit News","date":"Mar 2019","link":"https://projects.rmpbs.org/beyond-columbine/interactive.html","category":"dataviz, design","show":0,"screenshot":""},{"title":"Institute for Nonprofit News style guide","publication":"Institute for Nonprofit News","date":"Feb 2019","link":"https://1l9nh32zekco14afdq2plfsw-wpengine.netdna-ssl.com/wp-content/uploads/2019/03/INN-Standards-Manual-2019-03-20.pdf","category":"design","show":1,"screenshot":"innstyle.png"},{"title":"City Limits CommunityWire","publication":"Institute for Nonprofit News","date":"Dec 2018","link":"https://citylimits.org/communitywire-home/","category":"development","show":0,"screenshot":""},{"title":"Tikkun website rebuild","publication":"Institute for Nonprofit News","date":"Nov 2018","link":"http://tikkun.org","category":"development","show":0,"screenshot":""},{"title":"UNC-OurChatham rebuild","publication":"Institute for Nonprofit News","date":"Nov 2018","link":"https://ourchatham.com/","category":"development","show":0,"screenshot":""},{"title":"Montana Free Press website redesign and rebuild","publication":"Institute for Nonprofit News","date":"Aug 2018","link":"https://montanafreepress.org/","category":"development, design","show":0,"screenshot":""},{"title":"The most and least digital jobs -- and how well they pay","publication":"Harvard Business Review","date":"Dec 2017","link":"https://hbr.org/2017/12/the-most-and-least-digital-jobs-and-how-well-they-pay","category":"dataviz","show":1,"screenshot":"digitaljobs.png"},{"title":"Last.fm Classics","publication":"personal","date":"Nov 2017","link":"https://github.com/tylermachado/lastfm-classics","category":"development","show":1,"screenshot":"slackbot.png"},{"title":"School Leaders Affect Test Scores and Budgets Even After They Leave","publication":"Harvard Business Review","date":"Oct 2016","link":"https://hbr.org/2016/10/the-one-type-of-leader-who-can-turn-around-a-failing-school","category":"dataviz","show":0,"screenshot":""},{"title":"HBR Bots","publication":"Harvard Business Review","date":"Sep 2016","link":"http://digiday.com/publishers/harvard-business-review-launched-slackbot-delivers-workplace-advice/","category":"development","show":0,"screenshot":""},{"title":"Matchday poster","publication":"New England Revolution","date":"Jul 2016","link":"https://twitter.com/tylermachado/status/751944653616939008","category":"dataviz, design","show":1,"screenshot":"revs.jpg"},{"title":"The decline of Yahoo in its own words","publication":"Harvard Business Review","date":"Jun 2016","link":"https://hbr.org/2016/06/the-decline-of-yahoo-in-its-own-words","category":"dataviz, design, development","show":1,"screenshot":"yahoo.png"},{"title":"How corporate boards connect, in charts","publication":"Harvard Business Review","date":"Apr 2016","link":"https://hbr.org/2016/04/how-corporate-boards-connect-in-charts","category":"dataviz, design","show":1,"screenshot":"interlocks.png"},{"title":"Meeting Cost Calculator","publication":"Harvard Business Review","date":"Jan 2016","link":"https://hbr.org/resources/html/infographics/2015/11/meeting-cost-calculator/index.html","category":"development","show":1,"screenshot":"meetings.png"},{"title":"The Best-Performing CEOs in the World","publication":"Harvard Business Review","date":"Nov 2015","link":"https://hbr.org/2015/11/the-best-performing-ceos-in-the-world","category":"development, design, dataviz","show":0,"screenshot":""},{"title":"Vermont Restaurant Week","publication":"Seven Days","date":"Feb 2013","link":"http://www.vermontrestaurantweek.com/","category":"development","show":1,"screenshot":"vtrw.jpg"}]')},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=component---src-pages-index-js-d687e4a1f686733a62c8.js.map
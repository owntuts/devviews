"use strict";(self.webpackChunkinterviewdev=self.webpackChunkinterviewdev||[]).push([[3550],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=i,k=p["".concat(c,".").concat(d)]||p[d]||m[d]||a;return n?r.createElement(k,o(o({ref:t},u),{},{components:n})):r.createElement(k,o({ref:t},u))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},54312:function(e,t,n){n.d(t,{ZP:function(){return s}});var r=n(83117),i=(n(67294),n(3905));const a={toc:[]},o="wrapper";function s(e){let{components:t,...n}=e;return(0,i.kt)(o,(0,r.Z)({},a,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"interview"},n.level&&(0,i.kt)("span",{className:"level"},n.level),n.children))}s.isMDXComponent=!0},82589:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return l}});var r=n(83117),i=(n(67294),n(3905));n(54312);const a={sidebar_position:3,id:"security",sidebar_label:"security",title:"security"},o=void 0,s={unversionedId:"system-design/security",id:"system-design/security",title:"security",description:"XSS",source:"@site/docs/system-design/70.security.md",sourceDirName:"system-design",slug:"/system-design/security",permalink:"/devviews/interviews/system-design/security",draft:!1,editUrl:"https://github.com/owntuts/devviews/edit/main/docs/system-design/70.security.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,id:"security",sidebar_label:"security",title:"security"},sidebar:"designSystemInterviewSidebar",previous:{title:"Network Design",permalink:"/devviews/interviews/system-design/network-design"},next:{title:"CICD",permalink:"/devviews/interviews/system-design/CICD"}},c={},l=[{value:"XSS",id:"xss",level:3},{value:"CSRF",id:"csrf",level:3}],u={toc:l},p="wrapper";function m(e){let{components:t,...a}=e;return(0,i.kt)(p,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"security"},"Security"),(0,i.kt)("h3",{id:"xss"},"XSS"),(0,i.kt)("details",{open:!0},(0,i.kt)("summary",null,(0,i.kt)("h5",null,"XSS")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"XSS stands for cross-site scripting"),", which is a web security vulnerability that allows an attacker to ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"inject malicious scripts into web pages viewed by other users")),". XSS can compromise the interactions that users have with a vulnerable application, such as ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"stealing their credentials (cookies, session tokens, and other sensitive information)")),", performing actions on their behalf, or displaying fake content."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"xss",src:n(78766).Z,width:"709",height:"448"})),(0,i.kt)("p",null,"There are three main types of XSS attacks:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Reflected XSS"),": This type of XSS occurs when the malicious script comes from the current HTTP request, such as a query parameter or a form input. The attacker needs to ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"trick the user into clicking"))," a specially crafted link or submitting a malicious form that ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"reflects the script back (displayed back) to the user's browser")),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Stored XSS"),": This type of XSS occurs when the malicious script ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"comes from the website's database")),", such as a comment, a post, or a profile. The attacker needs to inject the script into the database, and then wait for the user to view the page that displays the script."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"DOM-based XSS"),": This type of XSS occurs when the vulnerability ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"exists in client-side code"))," rather than server-side code. The attacker needs to ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"manipulate the DOM"))," (Document Object Model) of the web page using JavaScript, such as changing the URL or the HTML elements. ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"The malicious script is then executed by the user's browser")),".")),(0,i.kt)("p",null,"There are a number of ways to prevent XSS attacks. Some of the most common methods include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Sanitizing user input"),": This involves removing any malicious code from user input before it is displayed or stored."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Using input filters"),": This involves using filters to block certain types of malicious code from being entered into forms."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Educating users"),": This involves educating users about XSS attacks and how to avoid them."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Using appropriate response headers and content security policies"),". For example, the ",(0,i.kt)("inlineCode",{parentName:"li"},"X-XSS-Protection")," header can enable the browser\u2019s built-in XSS filter, which can block some types of XSS attacks. The ",(0,i.kt)("inlineCode",{parentName:"li"},"Content-Type")," header can specify the MIME type of the web page content, such as ",(0,i.kt)("inlineCode",{parentName:"li"},"text/html")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"application/json"),", which can prevent the browser from executing unexpected content as scripts. The ",(0,i.kt)("inlineCode",{parentName:"li"},"Content-Security-Policy")," header can define a whitelist of sources and directives for loading scripts, stylesheets, images, and other resources, which can prevent the browser from executing malicious scripts from untrusted sources. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"HTTPS & HttpOnly"),": Such as, ",(0,i.kt)("inlineCode",{parentName:"li"},"Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT; Secure; HttpOnly"),". Hacker can't interfere to the get-response proccess between client and server because TSL certificate won't allow that & ",(0,i.kt)("inlineCode",{parentName:"li"},"HttpOnly")," not allows hackers to access cookies via js."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Using a web application firewall (WAF)")," to block malicious requests. A web application firewall (WAF) is a security solution that monitors and filters the HTTP traffic between a web application and the internet. A WAF can detect and block malicious requests that contain XSS payloads or exploit XSS vulnerabilities."))),(0,i.kt)("h3",{id:"csrf"},"CSRF"),(0,i.kt)("details",{open:!0},(0,i.kt)("summary",null,(0,i.kt)("h5",null,"CSRF")),(0,i.kt)("p",null,"Cross-site request forgery (CSRF) is a type of security vulnerability that allows an ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"attacker to trick a victim into performing an unwanted action on a website they are already authenticated to")),"."),(0,i.kt)("p",null,"For example, an attacker could send a malicious link to a victim that, when clicked, would submit a form on the victim's behalf. The form could be used to change the victim's password, transfer money out of their account, or perform other unauthorized actions."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"How they work:")),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("img",{alt:"csrf",src:n(43118).Z,width:"774",height:"457"})),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Visitor access hacker's website"),(0,i.kt)("li",{parentName:"ol"},"Visitor clicks a form, it sends to bank website"),(0,i.kt)("li",{parentName:"ol"},"Bank website check cookies, auto login and send money to hacker"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"How to prevent them:")," There are a number of ways to prevent CSRF attacks. Some of the most common methods include:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Using CSRF tokens:")," The bank server will send the CSRF token in the response of each request. The token will be a random value that will expire after a certain amount of time. The hacker will not be able to guess the token value, and they will not be able to include it in their malicious form."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Same Site Cookies:")," The Bank server check Origin from cookies if it's from other sites (not bank site), it will be rejected. Or if you click on a link that points to a Facebook profile page, and if Facebook.com has set its cookie as ",(0,i.kt)("inlineCode",{parentName:"li"},"SameSite=Strict"),", you cannot continue navigation on Facebook.",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"Set-Cookie: CookieName=CookieValue; SameSite=Lax;\nSet-Cookie: CookieName=CookieValue; SameSite=Strict;\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Disabling client-side redirects:")," Redirects are often used to send users to other pages on a website. However, redirects can also be used by attackers to trick victims into performing unwanted actions. By disabling client-side redirects, you can make it more difficult for attackers to carry out CSRF attacks."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Educating users:")," Educating users about CSRF attacks and how to avoid them can help to reduce the risk of attacks. Users should be aware of the dangers of clicking on links from unknown sources and should be careful about what information they enter into forms."))))))}m.isMDXComponent=!0},43118:function(e,t,n){t.Z=n.p+"assets/images/csrf-56beb670224d47177d4d8e32de1fc43b.png"},78766:function(e,t,n){t.Z=n.p+"assets/images/xss-b9e3f9e9103925f790402328f72d01f0.png"}}]);
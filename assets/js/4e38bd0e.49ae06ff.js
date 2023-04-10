"use strict";(self.webpackChunkinterviewdev=self.webpackChunkinterviewdev||[]).push([[5149],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9286:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s}});var r=n(3117),a=(n(7294),n(3905));const i={sidebar_position:1e3,sidebar_label:"Django Project Structure",title:"Django Project Structure",slug:"/django-project-structure",tags:["Basic Django Interviews"]},o=void 0,l={unversionedId:"django/basic/project-structure",id:"django/basic/project-structure",title:"Django Project Structure",description:"\\*\u0ca0_\u0ca0\\* :",source:"@site/docs/django/basic/project-structure.md",sourceDirName:"django/basic",slug:"/django-project-structure",permalink:"/devviews/interviews/django-project-structure",draft:!1,editUrl:"https://github.com/owntuts/devviews/edit/main/docs/django/basic/project-structure.md",tags:[{label:"Basic Django Interviews",permalink:"/devviews/interviews/tags/basic-django-interviews"}],version:"current",sidebarPosition:1e3,frontMatter:{sidebar_position:1e3,sidebar_label:"Django Project Structure",title:"Django Project Structure",slug:"/django-project-structure",tags:["Basic Django Interviews"]},sidebar:"djangoInterviewSidebar",previous:{title:"Django Middlewares",permalink:"/devviews/interviews/django-middlewares"},next:{title:"Django Interviews",permalink:"/devviews/interviews/django/django-interview-questions-answers-junior"}},p={},s=[],c={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"Question:",type:"quest"},(0,a.kt)("p",{parentName:"admonition"},"*",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"\u0ca0_\u0ca0")),"*"," :\nExplain the file structure of a typical Django project?")),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h5",null,"ANSWER:")),(0,a.kt)("p",null,"  ","*",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"\u25d4\u032f\u25d4")),"*"," :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"project_name/\n\u2502\n\u251c\u2500\u2500 app_name/\n\u2502   \u251c\u2500\u2500 migrations/\n\u2502   \u251c\u2500\u2500 static/\n\u2502   \u251c\u2500\u2500 templates/\n\u2502   \u251c\u2500\u2500 __init__.py\n\u2502   \u251c\u2500\u2500 admin.py\n\u2502   \u251c\u2500\u2500 apps.py\n\u2502   \u251c\u2500\u2500 models.py\n\u2502   \u251c\u2500\u2500 tests.py\n\u2502   \u2514\u2500\u2500 views.py\n\u2502\n\u251c\u2500\u2500 project_name/\n\u2502   \u251c\u2500\u2500 settings.py\n\u2502   \u251c\u2500\u2500 urls.py\n\u2502   \u251c\u2500\u2500 wsgi.py\n\u2502   \u2514\u2500\u2500 __init__.py\n\u2502\n\u251c\u2500\u2500 static/\n\u2502\n\u251c\u2500\u2500 templates/\n\u2502\n\u251c\u2500\u2500 manage.py\n\u2502\n\u2514\u2500\u2500 requirements.txt\n\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"project_name"),": The root directory of the Django project. It includes the project name, which is the same as the name of the directory itself."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"app_name"),": A directory for each Django app created in the project.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"migrations"),": A directory that contains database migration files."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"static"),": A directory that contains static files such as CSS, JavaScript, and images."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"templates"),": A directory that contains HTML templates."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"__init__.py"),": An empty file that tells Python that this directory should be considered as a Python package."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"admin.py"),": A file that includes Django admin configurations."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"apps.py"),": A file to configure your app."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"models.py"),": A file that includes the creation of your database models."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tests.py"),": A file to write tests for your app."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"views.py"),": A file that includes the logic that controls the presentation of the app."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"project_name"),": The directory that encapsulates the project-level files.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"settings.py"),": A file that includes project settings."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"urls.py"),": A file that includes URL routing configurations."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"wsgi.py"),": A file for running the project in a production environment."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"__init__.py"),": An empty file that tells Python that this directory should be considered as a Python package."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"static"),": A directory that contains project-level static files."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"templates"),": A directory that contains project-level HTML templates."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"manage.py"),": A file for performing management commands."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"requirements.txt"),": A file that lists all the packages required to run the project."))))}m.isMDXComponent=!0}}]);
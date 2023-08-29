"use strict";(self.webpackChunkinterviewdev=self.webpackChunkinterviewdev||[]).push([[4490],{3905:function(e,n,t){t.d(n,{Zo:function(){return A},kt:function(){return k}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var m=r.createContext({}),s=function(e){var n=r.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},A=function(e){var n=s(e.components);return r.createElement(m.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,m=e.parentName,A=o(e,["components","mdxType","originalType","parentName"]),u=s(t),p=a,k=u["".concat(m,".").concat(p)]||u[p]||c[p]||i;return t?r.createElement(k,l(l({ref:n},A),{},{components:t})):r.createElement(k,l({ref:n},A))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=p;var o={};for(var m in n)hasOwnProperty.call(n,m)&&(o[m]=n[m]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},637:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return s}});var r=t(83117),a=(t(67294),t(3905));const i={sidebar_position:1e3,sidebar_label:"Django Architecture",title:"Django Architecture",slug:"/django-architecture",tags:["Basic Django Interviews"]},l=void 0,o={unversionedId:"django/basic/django-architecture",id:"django/basic/django-architecture",title:"Django Architecture",description:"\\*\u0ca0_\u0ca0\\* :",source:"@site/docs/django/basic/django-architecture.md",sourceDirName:"django/basic",slug:"/django-architecture",permalink:"/devviews/interviews/django-architecture",draft:!1,editUrl:"https://github.com/owntuts/devviews/edit/main/docs/django/basic/django-architecture.md",tags:[{label:"Basic Django Interviews",permalink:"/devviews/interviews/tags/basic-django-interviews"}],version:"current",sidebarPosition:1e3,frontMatter:{sidebar_position:1e3,sidebar_label:"Django Architecture",title:"Django Architecture",slug:"/django-architecture",tags:["Basic Django Interviews"]},sidebar:"djangoInterviewSidebar",previous:{title:"Django Admin",permalink:"/devviews/interviews/django-admin"},next:{title:"Django Main Features",permalink:"/devviews/interviews/django-main-features"}},m={},s=[],A={toc:s},u="wrapper";function c(e){let{components:n,...i}=e;return(0,a.kt)(u,(0,r.Z)({},A,i,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"Question:",type:"quest"},(0,a.kt)("p",{parentName:"admonition"},"*",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"\u0ca0_\u0ca0")),"*"," :\nExplain Django Architecture?")),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h5",null,"ANSWER:")),(0,a.kt)("p",null,"  ","*",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"\u25d4\u032f\u25d4")),"*"," :"),(0,a.kt)("p",null,"  Django follows MVT architecture - Model, Template, View.\n",(0,a.kt)("img",{alt:"django architecture",src:t(31074).Z,width:"713",height:"503"})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Sending the request to the right view (urls.py)"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"urlpatterns = [\n    path('admin/', admin.site.urls),\n    path('book/<int:id>/', views.book_detail, name='book_detail'),\n    path('catalog/', include('catalog.urls')),\n    re_path(r'^([0-9]+)/$', views.best),\n]\n\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Handling the request (views.py)"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# filename: views.py (Django view functions)\n\nfrom django.http import HttpResponse\n\ndef index(request):\n    # Get an HttpRequest - the request parameter\n    # perform operations using information from the request.\n    # Return HttpResponse\n    return HttpResponse('Hello from Django!')\n\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Defining data models (models.py)"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# filename: models.py\n\nfrom django.db import models\n\nclass Team(models.Model):\n    team_name = models.CharField(max_length=40)\n\n    TEAM_LEVELS = (\n        ('U09', 'Under 09s'),\n        ('U10', 'Under 10s'),\n        ('U11', 'Under 11s'),\n        # \u2026\n        # list other team levels\n    )\n    team_level = models.CharField(max_length=3, choices=TEAM_LEVELS, default='U11')\n\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Querying data (views.py)"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"## filename: views.py\n\nfrom django.shortcuts import render\nfrom .models import Team\n\ndef index(request):\n    list_teams = Team.objects.filter(team_level__exact=\"U09\")\n    context = {'youngest_teams': list_teams}\n    return render(request, '/best/index.html', context)\n\n")),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Rendering data (HTML templates)"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},'## filename: best/templates/best/index.html\n\n<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="utf-8">\n  <title>Home page</title>\n</head>\n<body>\n  {% if youngest_teams %}\n    <ul>\n      {% for team in youngest_teams %}\n        <li>{{ team.team_name }}</li>\n      {% endfor %}\n    </ul>\n  {% else %}\n    <p>No teams are available.</p>\n  {% endif %}\n</body>\n</html>\n\n'))))}c.isMDXComponent=!0},31074:function(e,n){n.Z="data:image/png;base64,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"}}]);
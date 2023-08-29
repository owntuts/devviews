"use strict";(self.webpackChunkinterviewdev=self.webpackChunkinterviewdev||[]).push([[5015],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),s=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(m.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,m=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,f=u["".concat(m,".").concat(d)]||u[d]||c[d]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},21796:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s}});var r=n(83117),a=(n(67294),n(3905));const o={sidebar_position:1e3,sidebar_label:"Angular Form",title:"Template-driven Form vs Reactive Forms In Angular?",slug:"/template-driven-vs-reactive-forms-angular",tags:["Middle Angular Interviews"]},i=void 0,l={unversionedId:"js/angular-interviews/middle/angular-form",id:"js/angular-interviews/middle/angular-form",title:"Template-driven Form vs Reactive Forms In Angular?",description:"\\*\u0ca0_\u0ca0\\* :",source:"@site/docs/js/angular-interviews/middle/angular-form.md",sourceDirName:"js/angular-interviews/middle",slug:"/template-driven-vs-reactive-forms-angular",permalink:"/devviews/interviews/template-driven-vs-reactive-forms-angular",draft:!1,editUrl:"https://github.com/owntuts/devviews/edit/main/docs/js/angular-interviews/middle/angular-form.md",tags:[{label:"Middle Angular Interviews",permalink:"/devviews/interviews/tags/middle-angular-interviews"}],version:"current",sidebarPosition:1e3,frontMatter:{sidebar_position:1e3,sidebar_label:"Angular Form",title:"Template-driven Form vs Reactive Forms In Angular?",slug:"/template-driven-vs-reactive-forms-angular",tags:["Middle Angular Interviews"]},sidebar:"jsInterviewSidebar",previous:{title:"providedIn Type",permalink:"/devviews/interviews/providedin-eagerlyimportedmodule-vs-lazyloadedmodule-vs-root"},next:{title:"Change Detection Strategy",permalink:"/devviews/interviews/change-detection-strategy"}},m={},s=[{value:"Example of Template-driven Form",id:"example-of-template-driven-form",level:3},{value:"Example of Reactive Form",id:"example-of-reactive-form",level:3}],p={toc:s},u="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"Question:",type:"quest"},(0,a.kt)("p",{parentName:"admonition"},"*",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"\u0ca0_\u0ca0")),"*"," :\nCould you please tell the difference between ",(0,a.kt)("strong",{parentName:"p"},"Template-driven")," vs ",(0,a.kt)("strong",{parentName:"p"},"Reactive Forms")," In Angular?")),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h5",null,"ANSWER:")),(0,a.kt)("p",null,"  ","*",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"\u25d4\u032f\u25d4")),"*"," : "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Template-driven Form"),(0,a.kt)("th",{parentName:"tr",align:null},"Reactive Form"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Handle form in template first"),(0,a.kt)("td",{parentName:"tr",align:null},"Handle form in typescript first")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"contact with JS via ref"),(0,a.kt)("td",{parentName:"tr",align:null},"contact with JS via Input")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},'make use of the "FormsModule"'),(0,a.kt)("td",{parentName:"tr",align:null},'based on "ReactiveFormsModule"')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"asynchronous in nature"),(0,a.kt)("td",{parentName:"tr",align:null},"mostly synchronous")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"ng generate component template-forms")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"ng generate component reactive-forms"))))),(0,a.kt)("h3",{id:"example-of-template-driven-form"},"Example of Template-driven Form"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Template-driven")," means focusing on ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"template first")),". Denote the form as ",(0,a.kt)("inlineCode",{parentName:"p"},"#f"),", denote input as ",(0,a.kt)("inlineCode",{parentName:"p"},'id="courseName"')," & ",(0,a.kt)("inlineCode",{parentName:"p"},"[ngModel]")," and let Javascript reference to interact with them later."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{3,4}","{3,4}":!0},'@Component({\n  template: `\n  <form (ngSubmit)="onSubmit(f)" #f="ngForm">\n      <input type="text" id="courseName" name="courseName" [ngModel]="\'default course name\'">\n      <p *ngIf="courseName.errors.required">\n          Course Name is required\n      </p>\n  </form>\n  `\n})\nexport class TemplateFormComponent {\n    // reference to the form #f in template\n    @ViewChild(\'f\') courseForm: NgForm;\n    onSubmit(form: NgForm) {\n        console.log("Course Name is : " + form.value.courseName); \n    }\n    onClear() {\n        // interact with the referenced form\n        this.courseForm.reset();\n    }\n}\n')),(0,a.kt)("h3",{id:"example-of-reactive-form"},"Example of Reactive Form"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Reactive")," means focusing on Javascript first. Denote form as a variable ",(0,a.kt)("inlineCode",{parentName:"p"},"this.courseForm")," and then, let form reference to it by using input",(0,a.kt)("inlineCode",{parentName:"p"},'[formGroup]="courseForm"'),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{13}","{13}":!0},'@Component({\n  template: `\n    <form [formGroup]="courseForm" (ngSubmit)="onSubmit()">\n        <input type="text" id="courseName" class="form-control" formControlName="courseName">\n        <div *ngIf="courseForm.get(\'courseName\').valid && courseForm.get(\'courseName\').touched">\n            Please enter valid course name !\n        </div>\n    </form>\n  `\n})\nexport class ReactiveFormComponent {\n  ngOnInit() {\n    this.courseForm = new FormGroup({\n      \'courseName\': new FormControl(null, Validators.required),\n    });\n  }\n}\n'))))}c.isMDXComponent=!0}}]);
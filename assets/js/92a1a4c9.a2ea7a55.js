"use strict";(self.webpackChunkinterviewdev=self.webpackChunkinterviewdev||[]).push([[5397],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},54312:function(e,t,n){n.d(t,{ZP:function(){return l}});var r=n(83117),a=(n(67294),n(3905));const i={toc:[]},o="wrapper";function l(e){let{components:t,...n}=e;return(0,a.kt)(o,(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"interview"},n.level&&(0,a.kt)("span",{className:"level"},n.level),n.children))}l.isMDXComponent=!0},35831:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return m}});var r=n(83117),a=(n(67294),n(3905)),i=n(54312);const o={toc:[{value:"Example",id:"example",level:4},{value:"You can also write a facade for accessing <code>Logger</code> service insteads",id:"you-can-also-write-a-facade-for-accessing-logger-service-insteads",level:4}]},l="wrapper";function s(e){let{components:t,...i}=e;return(0,a.kt)(l,(0,r.Z)({},o,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("details",{open:!0},(0,a.kt)("summary",null,(0,a.kt)("h5",null,"IOC Architecture In Laravel")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"IOC",src:n(87113).Z,width:"1018",height:"447"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"The service container")," is responsible for restoring & resolving dependencies when they are requested.."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Service providers")," are responsible for registering dependencies with the service container."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Facades provide")," a simple way to access services in the service container.")),(0,a.kt)("h4",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"// Register the dependency with the service container.\napp()->bind('Logger', function ($app) {\n    return new Monolog\\Logger('app');\n});\n\n// Resolve the dependency from the service container.\n$logger = app()->make('Logger');\n\n// Use the dependency.\n$logger->info('This is an info message.');\n\n")),(0,a.kt)("h4",{id:"you-can-also-write-a-facade-for-accessing-logger-service-insteads"},"You can also write a facade for accessing ",(0,a.kt)("inlineCode",{parentName:"h4"},"Logger")," service insteads"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="App\\Facades\\Logger.php"',title:'"App\\Facades\\Logger.php"'},"namespace App\\Facades;\n\nuse Illuminate\\Support\\Facades\\Facade;\n\nclass Logger extends Facade\n{\n    protected static function getFacadeAccessor()\n    {\n        return 'logger';\n    }\n}\n")),(0,a.kt)("p",null,"and use it"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"use App\\Facades\\Logger;\n\n// Use the facade.\nLogger::info('This is an info message.');\n\n"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h5",null,"Types of binding in service container")),(0,a.kt)("p",null,"There are different types of binding in service container in Laravel, such as:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Binding Basics"),": This is the simplest way of binding a class or an interface to an implementation. You can use the ",(0,a.kt)("strong",{parentName:"li"},"bind")," method of the container to define a new binding. For example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$this->app->bind(Connection::class, function (Application $app) {\n    return new Connection(config('riak'));\n});\n")),(0,a.kt)("p",null,"This code binds the Connection class to an implementation that returns a new Connection instance with the config('riak') parameter."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Binding Interfaces To Implementations"),": This is a way of binding an interface to a concrete implementation that should be resolved when the interface is type-hinted. For example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$this->app->bind(\n    ServerProvider::class,\n    DigitalOceanServerProvider::class\n);\n")),(0,a.kt)("p",null,"This code binds the ServerProvider interface to the DigitalOceanServerProvider implementation. ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Whenever the ServerProvider interface is type-hinted")),", the container will resolve and inject an instance of DigitalOceanServerProvider."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Contextual Binding"),": This is a way of binding different implementations of an interface depending on the context where it is resolved. For example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$this->app->when(PhotoController::class)\n          ->needs(Filesystem::class)\n          ->give(function () {\n              return Storage::disk('local');\n          });\n\n$this->app->when(VideoController::class)\n          ->needs(Filesystem::class)\n          ->give(function () {\n              return Storage::disk('s3');\n          });\n")),(0,a.kt)("p",null,"This code binds different implementations of the Filesystem interface ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"depending on whether it is resolved by the PhotoController or the VideoController")),". The PhotoController will receive a local disk instance, while the VideoController will receive an S3 disk instance."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Binding Primitives"),": This is a way of binding primitive values such as strings or integers to specific arguments of a class constructor or method. For example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$this->app->when('App\\\\Http\\\\Controllers\\\\UserController')\n          ->needs('$variableName')\n          ->give($value);\n")),(0,a.kt)("p",null,"This code binds a value to the $variableName argument of the UserController constructor or methods\xb2."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Binding Typed Variadics"),": This is a way of binding multiple implementations of an interface to a variadic argument of a class constructor or method. For example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$this->app->tag([SpeedReport::class, MemoryReport::class], 'reports');\n\n$this->app->bind(ReportAggregator::class, function ($app) {\n    return new ReportAggregator($app->tagged('reports'));\n});\n")),(0,a.kt)("p",null,"This code binds two implementations of the Report interface (SpeedReport and MemoryReport) to the variadic argument $reports of the ReportAggregator constructor."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Tagging"),": This is a way of assigning tags to multiple bindings so that they can be resolved later as an array. For example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$this->app->bind('SpeedReport', function () {\n    //\n});\n\n$this->app->bind('MemoryReport', function () {\n    //\n});\n\n$this->app->tag(['SpeedReport', 'MemoryReport'], 'reports');\n")),(0,a.kt)("p",null,"This code assigns the 'reports' tag to two bindings: SpeedReport and MemoryReport. Later, you can resolve all bindings with this tag as an array using the tagged method of the container."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Extending Bindings"),": This is a way of modifying or extending an existing binding in the container. For example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$this->app->extend(Service::class, function ($service, $app) {\n    return new DecoratedService($service);\n});\n"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h5",null,"Using Service Providers")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"php artisan make:provider RiakServiceProvider\n")),(0,a.kt)("p",null,"To write a service provider, you need to create a class that extends the ",(0,a.kt)("inlineCode",{parentName:"p"},"Illuminate\\Support\\ServiceProvider")," class. The ",(0,a.kt)("inlineCode",{parentName:"p"},"ServiceProvider")," class provides a number of methods that make it easy to write service providers."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"register()")," method is used to register the services that are used by your application. ")),(0,a.kt)("p",null,"For example, the following code registers a ",(0,a.kt)("inlineCode",{parentName:"p"},"Logger")," service:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"public function register()\n{\n    app()->bind('Logger', function ($app) {\n        return new Monolog\\Logger('app');\n    });\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"boot()")," method is used to bootstrap the services that are registered in the ",(0,a.kt)("inlineCode",{parentName:"li"},"register()")," method. This method is ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"called after all other service providers"))," have been registered.")),(0,a.kt)("p",null,"For example, the following code bootstraps a ",(0,a.kt)("inlineCode",{parentName:"p"},"UserRepository")," service:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"public function boot()\n{\n    $userRepository = app()->make('UserRepository');\n    $userRepository->createNewUser();\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Once you have written a service provider, you need to ",(0,a.kt)("strong",{parentName:"li"},"register")," it with the Laravel framework. You can do this by adding the service provider to the ",(0,a.kt)("inlineCode",{parentName:"li"},"providers")," array in the ",(0,a.kt)("inlineCode",{parentName:"li"},"config/app.php")," file.")),(0,a.kt)("p",null,"For example, the following code registers the ",(0,a.kt)("inlineCode",{parentName:"p"},"AppServiceProvider")," with the Laravel framework:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"'providers' => [\n    AppServiceProvider::class,\n],\n")),(0,a.kt)("p",null,"Laravel will automatically load and register all of the service providers that are listed in the ",(0,a.kt)("inlineCode",{parentName:"p"},"providers")," array."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Deferred providers")," are service providers that are not loaded until they are needed. This can be useful for service providers that only need to be loaded when a specific feature is used.")),(0,a.kt)("p",null,"To register a deferred provider, you need to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"defer()")," method of the service container. The ",(0,a.kt)("inlineCode",{parentName:"p"},"defer()")," method takes one argument: the name of the service provider."),(0,a.kt)("p",null,"For example, the following code registers a deferred ",(0,a.kt)("inlineCode",{parentName:"p"},"UserRepository")," service provider:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"lass RiakServiceProvider extends ServiceProvider implements DeferrableProvider\n{\n  // ...\n}\n")),(0,a.kt)("p",null,"Laravel will not load the ",(0,a.kt)("inlineCode",{parentName:"p"},"RiakServiceProvider")," until it is needed. This can improve the performance of your application.")))}s.isMDXComponent=!0;const p={sidebar_position:3,id:"laravel",sidebar_label:"Laravel Zero To Hero",title:"Laravel Zero To Hero"},c=void 0,d={unversionedId:"php/laravel",id:"php/laravel",title:"Laravel Zero To Hero",description:"",source:"@site/docs/php/10.laravel.md",sourceDirName:"php",slug:"/php/laravel",permalink:"/devviews/interviews/php/laravel",draft:!1,editUrl:"https://github.com/owntuts/devviews/edit/main/docs/php/10.laravel.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,id:"laravel",sidebar_label:"Laravel Zero To Hero",title:"Laravel Zero To Hero"},sidebar:"phpInterviewSidebar",previous:{title:"PHP Interviews",permalink:"/devviews/interviews/php/php-interview-questions-answers"},next:{title:"intro",permalink:"/devviews/interviews/php/intro"}},u={},m=[],g={toc:m},h="wrapper";function v(e){let{components:t,...n}=e;return(0,a.kt)(h,(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.ZP,{mdxType:"Interview"},(0,a.kt)(s,{mdxType:"IOC"})))}v.isMDXComponent=!0},87113:function(e,t,n){t.Z=n.p+"assets/images/IOC-c08ca7377fc930307d8489f02a6bebbc.png"}}]);
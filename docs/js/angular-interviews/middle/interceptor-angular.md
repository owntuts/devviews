---
sidebar_position: 1000
sidebar_label: Interceptor
title: What Is Interceptor In Angular?
slug: /interceptor-angular
tags:
  - Middle Angular Interviews
---

:::quest Question:

\***`ಠ_ಠ`**\* : 
What Is **Interceptor** In Angular? And how to use Interceptor?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* : 
  **Interceptor** is a function (middleware) that receives and adjusts requests/responses before they are processed/sent to the server.

  ```ts title="request-interceptor.service.ts"
  @Injectable()
  export class ReqInterceptor implements HttpInterceptor {
    public intercept(req: HttpRequest<any>, res: HttpHandler): Observable<HttpEvent<any>> {
      req = req.clone({
        setHeaders: {
          // ...
        }
      });
      next.handle(req);
    }

  }
  ```

  ```ts title="app-module.Module.ts"
  @NgModule({
    // ...
    providers: [
      {
        provide: HTTP_INTERCEPTORS,
        useClass: ReqInterceptor,
        multi: true // can register multiple interceptors
      }
    ]
  })
  ```

</details>
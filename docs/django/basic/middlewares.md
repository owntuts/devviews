---
sidebar_position: 1000
sidebar_label: Django Middlewares
title: Django Middlewares
slug: /django-middlewares
tags:
  - Basic Django Interviews
---

:::quest Question:

\***`ಠ_ಠ`**\* : 
What is the use of Middlewares in Django? example about custom middlewares?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* :

Middleware in Django is a way to add extra functionality to the HTTP request/response processing.

**Built-in Middlewares**: These are the default middlewares that come with Django.

Cache middleware
Common middleware
GZip middleware
Message middleware
Security middleware
Session middleware
Site middleware
Authentication middleware
CSRF protection middleware

Some default middleware from settings.py.

```py
MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]
```
#### Example about Custom Middleware in Django

1. #### Define as a function
```py
def simple_middleware(get_response):
    # One-time configuration and initialization.

    def middleware(request):
        # Code to be executed for each request before
        # the view (and later middleware) are called.
        print("before response")
        response = get_response(request)
        print("After response")
        # Code to be executed for each request/response after
        # the view is called.

        return response

    return middleware
```

2. #### Define as a class
```py
class SimpleMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response
        # One-time configuration and initialization.

    def __call__(self, request):
        # Code to be executed for each request before
        # the view (and later middleware) are called.

        print("before response")
        response = self.get_response(request)
        print("After response")
        # Code to be executed for each request/response after
        # the view is called.

        return response
```

#### Activating Custom Middleware
```py
MIDDLEWARE = [
  'custom_middleware.middleware.SimpleMiddleware', # Class based custom Middleware
  'custom_middleware.middleware.simple_middleware', # Function based custom Middleware
]
```

</details>
---
sidebar_position: 1000
sidebar_label: Django Project Structure
title: Django Project Structure
slug: /django-project-structure
tags:
  - Basic Django Interviews
---

:::quest Question:

\***`ಠ_ಠ`**\* : 
Explain the file structure of a typical Django project?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* :

```py
project_name/
│
├── app_name/
│   ├── migrations/
│   ├── static/
│   ├── templates/
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── models.py
│   ├── tests.py
│   └── views.py
│
├── project_name/
│   ├── settings.py
│   ├── urls.py
│   ├── wsgi.py
│   └── __init__.py
│
├── static/
│
├── templates/
│
├── manage.py
│
└── requirements.txt

```

*   ``project_name``: The root directory of the Django project. It includes the project name, which is the same as the name of the directory itself.
*   ``app_name``: A directory for each Django app created in the project.
    *   ``migrations``: A directory that contains database migration files.
    *   ``static``: A directory that contains static files such as CSS, JavaScript, and images.
    *   ``templates``: A directory that contains HTML templates.
    *   ``__init__.py``: An empty file that tells Python that this directory should be considered as a Python package.
    *   ``admin.py``: A file that includes Django admin configurations.
    *   ``apps.py``: A file to configure your app.
    *   ``models.py``: A file that includes the creation of your database models.
    *   ``tests.py``: A file to write tests for your app.
    *   ``views.py``: A file that includes the logic that controls the presentation of the app.
*   ``project_name``: The directory that encapsulates the project-level files.
    *   ``settings.py``: A file that includes project settings.
    *   ``urls.py``: A file that includes URL routing configurations.
    *   ``wsgi.py``: A file for running the project in a production environment.
    *   ``__init__.py``: An empty file that tells Python that this directory should be considered as a Python package.
*   ``static``: A directory that contains project-level static files.
*   ``templates``: A directory that contains project-level HTML templates.
*   ``manage.py``: A file for performing management commands.
*   ``requirements.txt``: A file that lists all the packages required to run the project.

</details>
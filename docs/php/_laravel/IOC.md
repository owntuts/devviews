
<!-- ![for root](/img/interviews/angular/forroot.png) -->

<details open>
  <summary><h5>IOC Architecture In Laravel</h5></summary>

![IOC](/img/interviews/laravel/IOC.png)

- **The service container** is responsible for restoring & resolving dependencies when they are requested..
- **Service providers** are responsible for registering dependencies with the service container.
- **Facades provide** a simple way to access services in the service container.

#### Example 
```php
// Register the dependency with the service container.
app()->bind('Logger', function ($app) {
    return new Monolog\Logger('app');
});

// Resolve the dependency from the service container.
$logger = app()->make('Logger');

// Use the dependency.
$logger->info('This is an info message.');

```
#### You can also write a facade for accessing `Logger` service insteads

```php title="App\Facades\Logger.php"
namespace App\Facades;

use Illuminate\Support\Facades\Facade;

class Logger extends Facade
{
    protected static function getFacadeAccessor()
    {
        return 'logger';
    }
}
```

and use it

```php
use App\Facades\Logger;

// Use the facade.
Logger::info('This is an info message.');

```

</details>

<details>
  <summary><h5>Types of binding in service container</h5></summary>

There are different types of binding in service container in Laravel, such as:

- **Binding Basics**: This is the simplest way of binding a class or an interface to an implementation. You can use the **bind** method of the container to define a new binding. For example:

```php
$this->app->bind(Connection::class, function (Application $app) {
    return new Connection(config('riak'));
});
```

This code binds the Connection class to an implementation that returns a new Connection instance with the config('riak') parameter.

- **Binding Interfaces To Implementations**: This is a way of binding an interface to a concrete implementation that should be resolved when the interface is type-hinted. For example:

```php
$this->app->bind(
    ServerProvider::class,
    DigitalOceanServerProvider::class
);
```

This code binds the ServerProvider interface to the DigitalOceanServerProvider implementation. ***Whenever the ServerProvider interface is type-hinted***, the container will resolve and inject an instance of DigitalOceanServerProvider.

- **Contextual Binding**: This is a way of binding different implementations of an interface depending on the context where it is resolved. For example:

```php
$this->app->when(PhotoController::class)
          ->needs(Filesystem::class)
          ->give(function () {
              return Storage::disk('local');
          });

$this->app->when(VideoController::class)
          ->needs(Filesystem::class)
          ->give(function () {
              return Storage::disk('s3');
          });
```

This code binds different implementations of the Filesystem interface ***depending on whether it is resolved by the PhotoController or the VideoController***. The PhotoController will receive a local disk instance, while the VideoController will receive an S3 disk instance.

- **Binding Primitives**: This is a way of binding primitive values such as strings or integers to specific arguments of a class constructor or method. For example:

```php
$this->app->when('App\\Http\\Controllers\\UserController')
          ->needs('$variableName')
          ->give($value);
```

This code binds a value to the $variableName argument of the UserController constructor or methods².

- **Binding Typed Variadics**: This is a way of binding multiple implementations of an interface to a variadic argument of a class constructor or method. For example:

```php
$this->app->tag([SpeedReport::class, MemoryReport::class], 'reports');

$this->app->bind(ReportAggregator::class, function ($app) {
    return new ReportAggregator($app->tagged('reports'));
});
```

This code binds two implementations of the Report interface (SpeedReport and MemoryReport) to the variadic argument $reports of the ReportAggregator constructor.

- **Tagging**: This is a way of assigning tags to multiple bindings so that they can be resolved later as an array. For example:

```php
$this->app->bind('SpeedReport', function () {
    //
});

$this->app->bind('MemoryReport', function () {
    //
});

$this->app->tag(['SpeedReport', 'MemoryReport'], 'reports');
```

This code assigns the 'reports' tag to two bindings: SpeedReport and MemoryReport. Later, you can resolve all bindings with this tag as an array using the tagged method of the container.

- **Extending Bindings**: This is a way of modifying or extending an existing binding in the container. For example:

```php
$this->app->extend(Service::class, function ($service, $app) {
    return new DecoratedService($service);
});
```

</details>

<details>
  <summary><h5>Using Service Providers</h5></summary>

```sh
php artisan make:provider RiakServiceProvider
```

To write a service provider, you need to create a class that extends the `Illuminate\Support\ServiceProvider` class. The `ServiceProvider` class provides a number of methods that make it easy to write service providers.

- The `register()` method is used to register the services that are used by your application. 

For example, the following code registers a `Logger` service:

```php
public function register()
{
    app()->bind('Logger', function ($app) {
        return new Monolog\Logger('app');
    });
}
```

- The `boot()` method is used to bootstrap the services that are registered in the `register()` method. This method is ***called after all other service providers*** have been registered.

For example, the following code bootstraps a `UserRepository` service:

```php
public function boot()
{
    $userRepository = app()->make('UserRepository');
    $userRepository->createNewUser();
}
```

- Once you have written a service provider, you need to **register** it with the Laravel framework. You can do this by adding the service provider to the `providers` array in the `config/app.php` file.

For example, the following code registers the `AppServiceProvider` with the Laravel framework:

```php
'providers' => [
    AppServiceProvider::class,
],
```

Laravel will automatically load and register all of the service providers that are listed in the `providers` array.

- **Deferred providers** are service providers that are not loaded until they are needed. This can be useful for service providers that only need to be loaded when a specific feature is used.

To register a deferred provider, you need to use the `defer()` method of the service container. The `defer()` method takes one argument: the name of the service provider.

For example, the following code registers a deferred `UserRepository` service provider:

```php
lass RiakServiceProvider extends ServiceProvider implements DeferrableProvider
{
  // ...
}
```

Laravel will not load the `RiakServiceProvider` until it is needed. This can improve the performance of your application.

</details>

## Service Locator Design Pattern

The service locator pattern is a design pattern that is used to decouple a class from its dependencies. Rather than the dependant class instantiating its dependencies directly, they are requested from a centralised service locator object.

### Why to use Service Locator?

Object-oriented design can lead to the development of complex class structures with components that are dependant upon other types. If the dependant classes instantiate their dependencies directly they are said to be tightly coupled. This decreases the flexibility of the components and increases the effort required to change functionality and substitute types.


The service locator design pattern relies on the creation of a class, called the service locator, that knows how to create the dependencies of other types. Often the service locator acts as a repository for pre-initialised service objects. When one of these is required it is requested using a method of the class. In other situations the service locator methods instantiate objects as they are required, possibly using configuration information passed to the method's parameters.

*Dependency injection patterns*

The Dependency injection pattern is strictly related to SOLID principles.
The main purpose of the DI is the maintainability through the loose coupling technique by passing dependencies to an object.
The Dependency injection patterns describe different ways to implement the Dependency injection inside our application. The most important is the Constructor injection pattern.

*Constructor injection*

The class that uses the dependency exposes a public constructor that takes an instance of the required dependency as a constructor argument. It is good practice to mark the field holding the dependency as readonly, this guarantees that once the initialization logic of the constructor has executed: the field can’t be modified.
Constructor injection should be your default choice for DI. It addresses the most common scenario where a class requires one or more dependencies, and no reasonable local defaults are available.

*Property injection pattern*

When a dependency is optional we can expose a writable property that allows a client to supply a different implementation of the class’s dependency than the default.
Property injection should only be used when the class you’re developing has a good local default and you still want to enable callers to provide different implementations of the class’s dependency.

*Method injection*

The caller supplies the dependency as a method parameter in each method call.
Method injection is best used when the dependency can vary with each method call. This can be the case when the dependency itself represents a value, but is often seen when the caller wishes to provide the consumer with information about the context in which the operation is being invoked.

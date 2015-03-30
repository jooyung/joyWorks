# Introduction
[W] anachronism (ə-năk′rə-nĭz′əm) 시대착오(한 사람)
- The representation of someone as existing or something as happening in other than chronological, proper, or historical order.

It inherits manyof the best features of C++ and Microsoft Visual Basic, but few of the inconsistencies
and `anachronisms`, resulting in a cleaner and more logical language.

[T] **TPL**: Task Parallel Library
>An important addition in the .NET Framework released concurrently with C# 4.0 was the classes and types that constitute the Task Parallel Library (TPL). Using the TPL, you can build highly scalable applications that can take full advantage of multicore processors quickly and easily. C# 5.0 adds native support for asynchronous task-based processing through the async method modifir and the await operator

#  I. Introducing Microsoft Visual C# and Microsoft Visual Studio 2013 
## 1. Welcome to C#
### Beginning programming with the Visual Studio 2013 environment
### Writing your first program
[W] Alternatively, after you have typed Cons, the IntelliSense list automatically `homes in on` the Console item, and you can press the Tab or Enter key to select it.

You should also notice that Visual Studio displays **a wavy red line** under any lines of code that will not compile when you enter them.
### Using namespaces
A **using** directive brings a namespace into scope.
#### Namespaces and Assemblies
You should note that there is not necessarily a **1:1 equivalence** between an assembly and a namespace: A single assembly can contain classes defined in many namespaces, and a single namespace can span multiple assemblies. For example, the classes and items in the **System namespace** are actually implemented by several assemblies, including *mscorlib.dll*, *System.dll*, and *System.Core.dll*, among others. This all sounds very confusing at fist, but you will soon get used to it
### Creating a graphical application
In Windows 7 and Windows 8, Visual Studio 2013 provides two templates for building graphical applications: the Windows Forms Application template and the WPF Application template. **Windows Forms** is a technology that fist appeared with the .NET Framework version 1.0. **WPF, or Windows Presentation Foundation**, is an enhanced technology that fist appeared with the .NET Framework version 3.0. It provides many additional features and capabilities over Windows Forms, and you should consider using WPF instead of Windows Forms for all new Windows 7 development.

Windows 8 and Windows 8.1 provide a new flvor of UI, referred to as the “Windows Store” style. Applications that use this style of UI are called **Windows Store applications (or apps)**.

 These computers enable users to interact with applications by using touch-based gestures—for example, users can swipe applications with their figers to move them around the screen and rotate them, or **“pinch”** and **“stretch”** applications to **zoom out** and **back in** again.

 However, these templates are dependent on features provided by **Windows 8.1**, so if you are running Windows 8, the Windows Store templates are not available.
#### Examining the Windows Store app
#### Examining the WPF application
[W] This difference is not just `cosmetic`.
#### Adding code to the graphical application
### Summary
### Quick Reference
## 2. Working with variables, operators, and expressions
### Understanding statements
### Using identifiers
#### Identifying keywords
[W] These identifirs are not reserved by C#, which means that you can use these names as identifirs for your own methods, variables, and classes, but you should avoid doing so `if at all possible`.
### Using variables
#### Naming variables
#### Declaring variables
### Working with primitive data types
#### Unassigned local variables
#### Displaying primitive data type values
### Using arithmetic operators
#### Operators and types
##### Numeric Types and infinite values
[W] However, C# `relaxes` this rule. The remainder operator is valid with all numeric types, and the result is not necessarily an integer.

**NaN** and **Infinity** `propagate` through expressinos. If you evaluate 10 + NaN, the result is NaN, and if you evaluate 10 + Infinity, the result is Infinity. The one exception to this rule is the case when you multiply Infinity by 0. The value of the expression** Infinity * 0 is 0**, although the value of **NaN * 0 is NaN**.
#### Examining arithmetic operators
If you expand the Grid node in the Document Outline window, the other controls appear, starting with another Grid (**the outer Grid acts as a frame**, and **the inner Grid contains the controls** that you see on the form).

[W] When dealing with integers, the remainder after dividing 54 by 13 is 2; (54 - ((54/13)*13)) is 2. This is because the calculation `rounds down to` an integer at each stage. (My high school math teacher would be horrified to be told that (54/13)*13 does not equal 54!)
#### Controlling precedence
The term parentheses or **round brackets** refers to (). The term braces or **curly brackets** refers to { }. The term **square brackets** refers to [ ]. The term **angle brackets** refers to <>.
#### Using associativity to evaluate expressions
[W] Operator precedence is `only half the story`.
#### Associativity and the assignment operator
[W] esoteric (ĕs′ə-tĕr′ĭk) 소수만 이해하는, 비전(秘傳)의
- Intended for or understood by only a small group, especially one with specialized knowledge or interests: *an esoteric philosophical doctrine.* See Synonyms at **mysterious**.

At this point, you might be thinking that this is all very nice and `esoteric`, but so what?

All operators return a value based on their operands. The value of the assignment operator is the value that was assigned to the left operand.

From this discussion, you can probably deduce that the assignment operator **associates from right to left**. The rightmost assignment occurs first, and the value assigned `propagates` through the variables from right to left.
### Incrementing and decrementing variables
#### Prefix and postfix
### Declaring implicitly typed local variables
If you are a `purist`, you are probably `gritting your teeth` at this point and wondering why on earth the designers of a neat language such as C# should allow a feature such as var to `creep in`. After all, it sounds like an excuse for extreme laziness on the part of programmers and can make it more diffiult to understand what a program is doing or track down bugs (and it can even easily introduce new bugs into your code). However, trust me that **var** has a very valid place in C#, as you will see when you work through many of the following chapters.
### Summary
### Quick Reference
## 3. Writing methods and applying scope
### Creating methods
#### Declaring a method
#### Returning data from a method
#### Calling methods
### Applying scope
#### Defining local scope
#### Defining class scope
#### Overloading methods
### Writing methods
### Using optional parameters and named arguments
#### Defining optional parameters
#### Passing named arguments
#### Resolving ambiguities with optional parameters and named arguments
### Summary
### Quick reference
## 4. Using decision statements
### Declaring Boolean variables
### Using Boolean operators
#### Understanding equality and relational operators
#### Understanding conditional logical operators
#### Short-circuiting
#### Summarizing operator precedence and associativity
### Using if statements to make decisions
#### Understanding if statement syntax
#### Using blocks to group statements
#### Cascading if statements
### Using switch statements
#### Understanding switch statement syntax
#### Following the switch statement rules
### Summary
### Quick reference
## 5. Using compound assignment and iteration statements
### Using compound assignment operators
### Writing while statements
### Writing for Statements
#### Understanding for statement scope
### Writing do statements
### Summary
### Quick reference
## 6. Managing errors and exceptions
### Coping with errors
### Trying code and catching exceptions
#### Unhandled Exceptions
#### Using multiple catch handlers
#### Catching multiple exceptions
#### Propagating exceptions
### Using checked and unchecked integer arithmetic
#### Writing checked statements
#### Writing checked expressions
### Throwing exceptions
### Using a finally block
### Summary
### Quick reference
#  II. Understanding the C# object model 
## 7. Creating and managing classes and objects
### Understanding classification
### The purpose of encapsulation
### Defining and using a class
### Controlling accessibility
#### Working with constructors
#### Overloading constructors
### Understanding static methods and data
#### Creating a shared field
#### Creating a static field by using the const keyword
#### Understanding static classes
#### Anonymous classes
### Summary
### Quick reference
## 8. Understanding values and references
### Copying value type variables and classes
### Understanding null values and nullable types
#### Using nullable types
#### Understanding the properties of nullable types
### Using ref and out parameters
#### Creating ref parameters
#### Creating out parameters
### How computer memory is organized
#### Using the stack and the heap
### The System.Object class
### Boxing
### Unboxing
### Casting data safely
#### The is operator
#### The as operator
### Summary
### Quick reference
## 9. Creating value types with enumerations and structures
### Working with enumerations
#### Declaring an enumeration
#### Using an enumeration
#### Choosing enumeration literal values
#### Choosing an enumeration’s underlying type
### Working with structures
#### Declaring a structure
#### Understanding structure and class differences
#### Declaring structure variables
#### Understanding structure initialization
#### Copying structure variables
### Summary
### Quick reference
## 10. Using arrays
### Declaring and creating an array
#### Declaring array variables
#### Creating an array instance
### Populating and using an array
#### Creating an implicitly typed array
#### Accessing an individual array element
#### Iterating through an array
#### Passing arrays as parameters and return values for a method
### Copying arrays
### Using multidimensional arrays
#### Creating jagged arrays
### Summary
### Quick reference
## 11. Understanding parameter arrays
### Overloading—a recap
### Using array arguments
#### Declaring a params Array
#### Using params object[ ]
#### Using a params array
### Comparing parameter arrays and optional parameters
### Summary
### Quick reference
## 12. Working with inheritance
### What is inheritance?
### Using inheritance
#### The System.Object class revisited
#### Calling base class constructors
#### Assigning classes
#### Declaring new methods
#### Declaring virtual methods
#### Declaring override methods
#### Understanding protected access
### Understanding extension methods
### Summary
### Quick reference
## 13. Creating interfaces and defining abstract classes
### Understanding interfaces
#### Defining an interface
#### Implementing an interface
#### Referencing a class through its interface
#### Working with multiple interfaces
#### Explicitly implementing an interface
#### Interface restrictions
#### Defining and using interfaces
### Abstract classes
#### Abstract methods
### Sealed classes
#### Sealed methods
#### Implementing and using an abstract class
### Summary
### Quick reference
## 14. Using garbage collection and resource management
### The life and times of an object
#### Writing destructors
#### Why use the garbage collector?
#### How does the garbage collector work?
#### Recommendations
### Resource management
#### Disposal methods
#### Exception-safe disposal
#### The using statement and the IDisposable interface
#### Calling the Dispose method from a destructor
### Implementing exception-safe disposal
### Summary
### Quick reference
#  III. Defining extensible types with C# 
## 15. Implementing properties to  access fields
### Implementing encapsulation by using methods
### What are properties?
#### Using properties
#### Read-only properties
#### Write-only properties
#### Property accessibility
### Understanding the property restrictions
### Declaring interface properties
#### Replacing methods with properties
### Generating automatic properties
### Initializing objects by using properties
### Summary
### Quick reference
## 16. Using indexers
### What is an indexer?
#### An example that doesn’t use indexers
#### The same example using indexers
#### Understanding indexer accessors
#### Comparing indexers and arrays
### Indexers in interfaces
### Using indexers in a Windows application
### Summary
### Quick reference
## 17. Introducing generics
### The problem with the object type
### The generics solution
#### Generics vs. generalized classes
#### Generics and constraints
### Creating a generic class
#### The theory of binary trees
#### Building a binary tree class by using generics
### Creating a generic method
#### Defining a generic method to build a binary tree
### Variance and generic interfaces
#### Covariant interfaces
#### Contravariant interfaces
### Summary
### Quick reference
## 18. Using collections
### What are collection classes?
#### The List<T> collection class
#### The LinkedList<T> collection class
#### The Queue<T> collection class
#### The Stack<T> collection class
#### The Dictionary<TKey, TValue> collection class
#### The SortedList<TKey, TValue> collection class
#### The HashSet<T> collection class
### Using collection initializers
### The Find methods, predicates, and lambda expressions
### Comparing arrays and collections
#### Using collection classes to play cards
### Summary
### Quick reference
## 19. Enumerating collections
### Enumerating the elements in a collection
#### Manually implementing an enumerator
#### Implementing the IEnumerable interface
### Implementing an enumerator by using an iterator
#### A simple iterator
#### Defining an enumerator for the Tree<TItem> class by using an iterator
### Summary
### Quick reference
## 20. Decoupling application logic and handling events
### Understanding delegates
#### Examples of delegates in the .NET Framework class library
#### The automated factory scenario
#### Implementing the factory control system without using delegates
#### Implementing the factory by using a delegate
#### Declaring and using delegates
### Lambda expressions and delegates
#### Creating a method adapter
#### The forms of lambda expressions
### Enabling notifications by using events
#### Declaring an event
#### Subscribing to an event
#### Unsubscribing from an event
#### Raising an event
### Understanding user interface events
#### Using events
### Summary
### Quick reference
## 21. Querying in-memory data by using query expressions
### What is Language-Integrated Query?
### Using LINQ in a C# application
#### Selecting data
#### Filtering data
#### Ordering, grouping, and aggregating data
#### Joining data
#### Using query operators
#### Querying data in Tree<TItem> objects
#### LINQ and deferred evaluation
### Summary
### Quick reference
## 22. Operator overloading
### Understanding operators
#### Operator constraints
#### Overloaded operators
#### Creating symmetric operators
### Understanding compound assignment evaluation
### Declaring increment and decrement operators
### Comparing operators in structures and classes
### Defining operator pairs
### Implementing operators
### Understanding conversion operators
#### Providing built-in conversions
#### Implementing user-defined conversion operators
#### Creating symmetric operators, revisited
#### Writing conversion operators
### Summary
### Quick reference
#  IV. Building professional Windows 8.1 applications with C# 
## 23. Improving throughput by using tasks
### Why perform multitasking by using parallel processing?
#### The rise of the multicore processor
### Implementing multitasking by using the Microsoft .NET Framework
#### Tasks, threads, and the ThreadPool
#### Creating, running, and controlling tasks
#### Using the Task class to implement parallelism
#### Abstracting tasks by using the Parallel class
#### When not to use the Parallel class
### Canceling tasks and handling exceptions
#### The mechanics of cooperative cancellation
#### Using continuations with canceled and faulted tasks
### Summary
### Quick reference
## 24. Improving response time by performing asynchronous operations
### Implementing asynchronous methods
#### Defining asynchronous methods: the problem
#### Defining asynchronous methods: the solution
#### Defining asynchronous methods that return values
#### Asynchronous methods and the Windows Runtime APIs
### Using PLINQ to parallelize declarative data access
#### Using PLINQ to improve performance while iterating through a collection
#### Canceling a PLINQ query
### Synchronizing concurrent access to data
#### Locking data
#### Synchronization primitives for coordinating tasks
#### Cancelling synchronization
#### The concurrent collection classes
#### Using a concurrent collection and a lock to implement 
thread-safe data access
### Summary
### Quick reference
## 25. Implementing the user interface for a Windows Store app
### What is a Windows Store app?
### Using the Blank App template to build a Windows Store app
#### Implementing a scalable user interface
#### Applying styles to a UI
### Summary
### Quick reference
## 26. Displaying and searching for data in a Windows Store app
### Implementing the Model-View-ViewModel pattern
#### Windows 8.1 contracts
### Summary
### Quick reference
## 27. Accessing a remote database from a Windows Store app
### Retrieving data from a database
#### Inserting, updating, and deleting data through a REST web service
### Summary
### Quick reference
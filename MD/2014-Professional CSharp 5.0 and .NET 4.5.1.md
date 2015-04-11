# Introduction
## The Significance of .NET and C#
## Advantages of .NET
## What’s New in the .NET Framework 4.5 and .NET 4.5.1
### Asynchronous Programming
### Windows Store Apps and the Windows Runtime
### Enhancements with Data Access
### Enhancements with WPF
## AS P.NET MVC
## Where C# Fits In
## What You Need to Write and Run C# Code
## What This Book Covers
### I. The C# Language
### II. Visual Studio
### III. Foundation
### IV. Data
### V. Presentation
### VI. Communication
## Conventions
## Source Code
## Errata
## P2P.Wrox.Com
---
# I. The C# Language
___
## 1. .NET Architecture
### The Relationship of C#  to .NET
### The Common Language Runtime
#### Platform Independence
#### Performance Improvement
#### Language Interoperability
### A Closer Look at Intermediate Language
#### Support for Object Orientation and Interfaces
#### Distinct Value and Reference Types
#### Strong Data Typing
#### Error Handling with Exceptions
#### Use of Attributes
### Assemblies
#### Private Assemblies
#### Shared Assemblies
#### Reflection
#### Parallel Programming
#### Asynchronous Programming
### .NET Framework Classes
### Namespaces
### Creating .NET Applications Using C#
#### Creating ASP.NET Applications
#### Windows Presentation Foundation (WPF)
#### Windows Store Apps
#### Windows Services
#### Windows Communication Foundation
#### Windows Workflow Foundation
### The Role of C# in the .NET Enterprise Architecture
### Summary
___
## 2. Core C#
### Fundamental C#
### Your First C# Program
#### The Code
#### Compiling and Running the Program
You can compile this program by simply running the C# command-line compiler (csc.exe) `against` the source file, like this:
```
csc First.cs
```

```
<>run vsvars32.bat
    (c:\Program Files (x86)\Microsoft Visual Studio 12.0\Common7\Tools\vsvars32.bat)

<>run Visual Studio 2013 command prompt
    %comspec% /k ""C:\Program Files (x86)\Microsoft Visual Studio 12.0\Common7\Tools\VsDevCmd.bat""

    Change "Start In" : D:\Testing\csharp\
```

```
Sublime Text 3 build for C#
    {
    "shell_cmd": "csc /nologo \"${file}\" && \"${file_path}/${file_base_name}\""
    , "encoding": "cp949"
    }

<>nologo
    Suppress compiler copyright message
```
#### A Closer Look
### Variables
#### Initialization of Variables
[W] ever (ĕv′ər)

- ever - (intensifier for adjectives) very; "she was ever so friendly"
- =ever so
- <.>intensifier, intensive - a modifier that has little meaning except to intensify the meaning it modifies; "`up` in 'finished up' is an intensifier"; "`honestly` in 'I honestly don't know' is an intensifier"

Most modern compilers will flag violations of this as a warning, but the `ever-vigilant` C# compiler treats such violations as errors.
#### Type Inference
#### Variable Scope
#### Constants
### Predefined Data Types
#### Value Types and Reference Types
If you want to define your own type as a *value type*, you should declare it as a **struct**.
#### CTS Types
#### Predefined Value Types
#### Predefined Reference Types
### Flow Control
#### Conditional Statements
##### The switch Statement
This is one example for which you don't need to use *curly braces* to join statements into blocks; instead, you mark the end of the code for each case using the *break* statement.

Isn't it better to code for the norm rather than for the exception?

However, if you _**find yourself really wanting to**_, you probably should reconsider your approach.
#### Loops
C# provides four different loops (*for*, *while*, *do...while*, and *foreach*) that enable you to execute a block of code repeatedly until a certain condition is met.

[W] Actually, the way the preceding loop is writen `isn't quite how` you would normally write it.

[W] Technically, to `count as` a collection, it must support an interface called IEnumerable.
#### Jump Statements
goto, break, continue, return

[W] The reputation of the *goto* statement probably `precedes` it, and in most circumstances, its use is sternly `frowned upon`.
### Enumerations
[W] `Not only that, but` you can also give the values user-friendly names.

Creating an enumeration can save you a lot of time and headaches in the long run. At least three benefits exist to using enumerations instead of plain integers:
### Namespaces
#### The using Directive
#### Namespace Aliases
### The Main() Method
#### Multiple Main() Methods
#### Passing Arguments to Main()
### More on Compiling C# Files
To answer the first question, you can specify *what type of file you want to create using the /target switch*, oftwn abbreviated as **/t**.

Note that the */out* and */t*, or */target*, options must precede the name of the file you want to compile.

To make a library
```
namespace ArBaGo {
    public class MathLib {
        public int Add(int x, int y) {
            return x + y;
        }
    }
}

> csc /target:library Mathlibrary.cs 
```

To use the library
```
using System;

namespace ArBaGo {

    class Program {
        static void Main() {
            MathLib mathObj = new MathLib();
            Console.WriteLine (mathObj.Add(7, 8));
        }

    }
}

> csc Test.cs /r:MathLibrary.dll
```
### Console I/O
### Using Comments
It is possible to put multiline comments within a line of code.
#### Internal Comments within the Source Files
#### XML Documentation
```
csc /t:library /doc:MathLibrary.xml MathLibrary.cs
```
### The C# Preprocessor Directives
#### #define and #undef
You need to place any *#define* and *#undef* directives at the beginning of the C# source file, before any code that declares any objects to be compiled.
#### #if, #elif, #else, and #endif
conditional compilation
#### #warning and #error
#### #region and #endregion
#### #line
#### #pragma
### C# Programming Guidelines
#### Rules for Identifiers
If you need to use one of these words as an identifier (for example, if you are accessing a class written in a different language), you can prefix the identifier with the **<span style="color:#ff2929;">@</span>** symbol to indicate to the compiler that what follows should be treated as <u>an identifier</u>, not as C# keyword (so *abstract* is not a valid identifier, but _**@abstract**_ is).
#### Usage Conventions
##### Casing of Names
This is not advised in C# because such names are harder to read - the convention is to use Pascal casing <u>`throughout`</u>.

Hence, if you do use names that differ only by case, it is important to do so only in situations in which both names will never be seen outside your assembly.

However, because of the possibility that your classes will be accessed by code written in other languages, it is also important that you don't use names that are keywords in other .NET languages.

##### Use of Properties and Methods
Otherwise, you should use a method.

##### Use of Fields
Fields should almost always be private, although in some cases it may be acceptable for constant or read-only fields to be public.

Consistency between the base classes and your classes will facilitate readability and maintainability.
### Summary
___
## 3. Objects and Types
### Creating and Using Classes
### Classes and Structs
### Classes
#### Data Members
#### Function Members
#### readonly Fields
### Anonymous Types
### Structs
#### Structs Are Value Types
#### Structs and Inheritance
#### Constructors for Structs
### Weak References
### .ial Classes
### Static Classes
### The Object Class
#### System.Object Methods
#### The ToString() Method
### Extension Methods
### Summary
___
## 4. Inheritance
### Inheritance
### Types of Inheritance
#### Implementation Versus Interface Inheritance
#### Multiple Inheritance
#### Structs and Classes
### Implementation Inheritance
#### Virtual Methods
#### Hiding Methods
#### Calling Base Versions of Functions
#### Abstract Classes and Functions
#### Sealed Classes and Methods
#### Constructors of Derived Classes
### Modifiers
#### Visibility Modifiers
#### Other Modifiers
### Interfaces
#### Defining and Implementing Interfaces
#### Derived Interfaces
### Summary
___
## 5. Generics
### Generics Overview
#### Performance
#### Type Safety
#### Binary Code Reuse
#### Code Bloat
#### Naming Guidelines
### Creating Generic Classes
### Generics Features
#### Default Values
#### Constraints
#### Inheritance
#### Static Members
### Generic Interfaces
#### Covariance and Contra-variance
#### Covariance with Generic Interfaces
#### Contra-Variance with Generic Interfaces
### Generic Structs
### Generic Methods
#### Generic Methods Example
#### Generic Methods with Constraints
#### Generic Methods with Delegates
#### Generic Methods Specialization
### Summary
___
## 6. Arrays and Tuples
### Multiple Objects of the Same and Different Types
### Simple Arrays
#### Array Declaration
#### Array Initialization
#### Accessing Array Elements
#### Using Reference Types
### Multidimensional Arrays
### Jagged Arrays
### Array Class
#### Creating Arrays
#### Copying Arrays
#### Sorting
### Arrays as Parameters
#### Array Covariance
#### ArraySegment<T>
### Enumerations
#### IEnumerator Interface
#### foreach Statement
#### yield Statement
### Tuples
### Structural Comparison
### Summary
___
## 7. Operators and Casts
### Operators and Casts
### Operators
#### Operator Shortcuts
#### Operator Precedence
### Type Safety
#### Type Conversions
#### Boxing and Unboxing
### Comparing Objects for Equality
#### Comparing Reference Types for Equality
#### Comparing Value Types for Equality
### Operator Overloading
#### How Operators Work
#### Operator Overloading Example: The Vector Struct
#### Which Operators Can You Overload?
### User-Defined Casts
#### Implementing User-Defined Casts
#### Multiple Casting
### Summary
___
## 8. Delegates, Lambdas, and Events
### Referencing Methods
### Delegates
#### Declaring Delegates
#### Using Delegates
#### Simple Delegate Example
#### Action<T> and Func<T> Delegates
#### BubbleSorter Example
#### Multicast Delegates
#### Anonymous Methods
### Lambda Expressions
#### Parameters
#### Multiple Code Lines
#### Closures
#### Closures with Foreach Statements
### Events
#### Event Publisher
#### Event Listener
#### Weak Events
### Summary
___
## 9. Strings and Regular Expressions
### Examining System.String
#### Building Strings
Normally, you want to use *StringBuilder* to perform any manipulation of strings, and *String* to store or display the final result.
#### StringBuilder Members
Basically, the *StringBuilder* class should be used when you are manipulating multiple strings. However, if you are just doing something as simple as concatenating two strings, you will find that *System.String* performs better.
#### Format Strings

### Regular Expressions
#### Introduction to Regular Expressions
#### The RegularExpressionsPlayaround Example
#### Displaying Results
#### Matches, Groups, and Captures
### Summary
___
## 10. Collections
### Overview
### Collection Interfaces and Types
### Lists
#### Creating Lists
#### Read-only Collections
### Queues
### Stacks
### Linked Lists
### Sorted List
### Dictionaries
#### Key Type
#### Dictionary Example
#### Lookups
#### Sorted Dictionaries
### Sets
### Observable Collections
### Bit Arrays
#### BitArray
#### BitVector32
### Immutable Collections
### Concurrent Collections
#### Creating Pipelines
#### Using a BlockingCollection
#### Using a ConcurrentDictionary
#### Completing the Pipeline
### Performance
### Summary
___
## 11. Language Integrated Query
### Linq Overview
#### Lists and Entities
#### LINQ Query
#### Extension Methods
#### Deferred Query Execution
### Standard Query Operatrs
#### Filtering
#### Filtering with Index
#### Type Filtering
#### Compound from
#### Sorting
#### Grouping
#### Grouping with Nested Objects
#### Inner Join
#### Left Outer Join
#### Group Join
#### Set Operations
#### Zip
#### .itioning
#### Aggregate Operators
#### Conversion Operators
#### Generation Operators
### Parallel LINQ
#### Parallel Queries
#### .itioners
#### Cancellation
### Expression Trees
### LINQ Providers
### Summary
___
## 12. Dynamic Language Extensions
### Dynamic Language Runtime
### The Dynamic Type
#### Dynamic Behind the Scenes
### Hosting the DLR Script Runtime
### Dynamicobject and Expandoobject
#### DynamicObject
#### ExpandoObject
### Summary
___
## 13. Asynchronous Programming
### Why Asynchronous Programming is Important
### Asynchronous Patterns
#### Synchronous Call
#### Asynchronous Pattern
#### Event-Based Asynchronous Pattern
#### Task-Based Asynchronous Pattern
### Foundation of Asynchronous Programming
#### Creating Tasks
#### Calling an Asynchronous Method
#### Continuation with Tasks
#### Synchronization Context
#### Using Multiple Asynchronous Methods
#### Converting the Asynchronous Pattern
### Error Handling
#### Handling Exceptions with Asynchronous Methods
#### Exceptions with Multiple Asynchronous Methods
#### Using AggregateException Information
### Cancellation
#### Starting a Cancellation
#### Cancellation with Framework Features
#### Cancellation with Custom Tasks
### Summary
___
## 14. Memory Management and Pointers
### Memory Management
### Memory Management Under the Hood
#### Value Data Types
#### Reference Data Types
#### Garbage Collection
### Freeing Unmanaged Resources
#### Destructors
#### The IDisposable Interface
#### Implementing IDisposable and a Destructor
### Unsafe Code
#### Accessing Memory Directly with Pointers
#### Pointer Example: PointerPlayground
#### Using Pointers to Optimize Performance
### Summary
___
## 15. Reflection
### Manipulating and Inspecting Code at Runtime
### Custom Attributes
#### Writing Custom Attributes
#### Custom Attribute Example: WhatsNewAttributes
### Using Reflection
#### The System.Type Class
#### The TypeView Example
#### The Assembly Class
#### Completing the WhatsNewAttributes Example
### Summary
___
## 16. Errors and Exceptions
### Introduction
### Exception Classes
### Catching Exceptions
#### Implementing Multiple Catch Blocks
#### Catching Exceptions from Other Code
#### System.Exception Properties
#### What Happens If an Exception Isn’t Handled?
#### Nested try Blocks
### User-Defined Exception Classes
#### Catching the User-Defined Exceptions
#### Throwing the User-Defined Exceptions
#### Defining the User-Defined Exception Classes
### Caller Information
### Summary
---
# II. Visual Studio
___
## 17. Visual Studio 2013
### Working with Visual Studio 2013
#### Project File Changes
#### Visual Studio Editions
#### Visual Studio Settings
### Creating a Project
#### Multi-targeting the .NET Framework
#### Selecting a Project Type
### Exploring and Coding a Project
#### Solution Explorer
#### Working with the Code Editor
#### Learning and Understanding Other Windows
#### Arranging Windows
### Building a Project
#### Building, Compiling, and Making Code
#### Debugging and Release Builds
#### Selecting a Configuration
#### Editing Configurations
### Debugging Your Code
#### Setting Breakpoints
#### Using Data Tips and Debugger Visualizers
#### Monitoring and Changing Variables
#### Exceptions
#### Multithreading
#### IntelliTrace
### Refactoring Tools
### Architecture Tools
#### Dependency Graph
#### Layer Diagram
### Analyzing Applications
#### Code Map
#### Sequence Diagram
#### Profiler
#### Concurrency Visualizer
#### Code Analysis
#### Code Metrics
### Unit Tests
#### Creating Unit Tests
#### Running Unit Tests
#### Expecting Exceptions
#### Testing All Code Paths
#### External Dependencies
#### Fakes Framework
### Windows Store Apps, WCF, WF, and More
#### Building WCF Applications with Visual Studio
#### Building WF Applications with Visual Studio
#### Building Windows Store Apps with Visual Studio 2013
### Summary
___
## 18. Deployment
### Deployment as Part of the Application Life Cycle
### Planning for Deployment
#### Overview of Deployment Options
#### Deployment Requirements
#### Deploying the .NET Runtime
### Traditional Deployment
#### xcopy Deployment
#### xcopy and Web Applications
#### Windows Installer
### ClickOnce
#### ClickOnce Operation
#### Publishing a ClickOnce Application
#### ClickOnce Settings
#### Application Cache for ClickOnce Files
#### Application Installation
#### ClickOnce Deployment API
### Web Deployment
#### Web Application
#### Configuration Files
#### Creating a Web Deploy Package
### Windows Store Apps
#### Creating an App Package
#### Windows App Certification Kit
#### Sideloading
#### Windows Deployment API
### Summary
---
# III. Foundation
___
## 19. Assemblies
### What are Assemblies?
#### Assembly Features
#### Assembly Structure
#### Assembly Manifests
#### Namespaces, Assemblies, and Components
#### Private and Shared Assemblies
#### Satellite Assemblies
#### Viewing Assemblies
#### Creating Assemblies
#### Creating Modules and Assemblies
#### Assembly Attributes
#### Creating and Loading Assemblies Dynamically
### Application Domains
### Shared Assemblies
#### Strong Names
#### Integrity Using Strong Names
#### Global Assembly Cache
#### Creating a Shared Assembly
#### Creating a Strong Name
#### Installing the Shared Assembly
#### Using the Shared Assembly
#### Delayed Signing of Assemblies
#### References
#### Native Image Generator
### Configuring .NET Applications
#### Configuration Categories
#### Binding to Assemblies
### Versioning
#### Version Numbers
#### Getting the Version Programmatically
#### Binding to Assembly Versions
#### Publisher Policy Files
#### Runtime Version
### Sharing Assemblies Between Different Technologies
#### Sharing Source Code
#### Portable Class Library
### Summary
___
## 20. Diagnostics
### Diagnostics Overview
### Code Contracts
#### Preconditions
#### Postconditions
#### Invariants
#### Purity
#### Contracts for Interfaces
#### Abbreviations
#### Contracts and Legacy Code
### Tracing
#### Trace Sources
#### Trace Switches
#### Trace Listeners
#### Filters
#### Correlation
#### Tracing with ETW
#### Using EventSource
#### Advanced Tracing with EventSource
### Event Logging
#### Event-logging Architecture
#### Event-logging Classes
#### Creating an Event Source
#### Writing Event Logs
#### Resource Files
### Performance Monitoring
#### Performance-monitoring Classes
#### Performance Counter Builder
#### Adding PerformanceCounter Components
#### perfmon.exe
### Summary
___
## 21. Tasks, Threads, and Synchronization
### Overview
### Parallel Class
#### Looping with the Parallel.For Method
#### Looping with the Parallel.ForEach Method
#### Invoking Multiple Methods with the Parallel.Invoke Method
### Tasks
#### Starting Tasks
#### Futures—Results from Tasks
#### Continuation Tasks
#### Task Hierarchies
### Cancellation Framework
#### Cancellation of Parallel.For
#### Cancellation of Tasks
### Thread Pools
### The Thread Class
#### Passing Data to Threads
#### Background Threads
#### Thread Priority
#### Controlling Threads
### Threading Issues
#### Race Conditions
#### Deadlocks
### Synchronization
#### The lock Statement and Thread Safety
#### Interlocked
#### Monitor
#### SpinLock
#### WaitHandle
#### Mutex
#### Semaphore
#### Events
#### Barrier
#### ReaderWriterLockSlim
### Timers
### Data Flow
#### Using an Action Block
#### Source and Target Blocks
#### Connecting Blocks
### Summary
___
## 22. Security
### Introduction
### Authentication and Authorization
#### Identity and Principal
#### Roles
#### Declarative Role-Based Security
#### Claims
#### Client Application Services
### Encryption
#### Signature
#### Key Exchange and Secure Transfer
### Access Control to Resources
### Code Access Security
#### Security Transparency Level 2
#### Permissions
### Distributing Code Using Certificates
### Summary
___
## 23. Interop
### .NET and COM
#### Metadata
#### Freeing Memory
#### Interfaces
#### Method Binding
#### Data Types
#### Registration
#### Threading
#### Error Handling
#### Events
#### Marshaling
### Using a COM Component from a .NET Client
#### Creating a COM Component
#### Creating a Runtime Callable Wrapper
#### Using the RCW
#### Using the COM Server with Dynamic Language Extensions
#### Threading Issues
#### Adding Connection Points
### Using a .NET Component from a COM Client
#### COM Callable Wrapper
#### Creating a .NET Component
#### Creating a Type Library
#### COM Interop Attributes
#### COM Registration
#### Creating a COM Client Application
#### Adding Connection Points
#### Creating a Client with a Sink Object
### Platform Invoke
### Summary
___
## 24. Manipulating Files and the Registry
### File and the Registry
### Managing the File System
#### .NET Classes That Represent Files and Folders
#### The Path Class
#### A FileProperties Sample
### Moving, Copying, and Deleting Files
#### FilePropertiesAndMovement Sample
#### Looking at the Code for FilePropertiesAndMovement
### Reading and Writing to Files
#### Reading a File
#### Writing to a File
#### Streams
#### Buffered Streams
#### Reading and Writing to Binary Files Using FileStream
#### Reading and Writing to Text Files
### Mapped Memory Files
### Reading Drive Information
### File Security
#### Reading ACLs from a File
#### Reading ACLs from a Directory
#### Adding and Removing ACLs from a File
### Reading and Writing to the Registry
#### The Registry
#### The .NET Registry Classes
### Reading and Writing to Isolated Storage
### Summary
___
## 25. Transactions
### Introduction
### Overview
#### Transaction Phases
#### ACID Properties
### Database and Entity Classes
### Traditional Transactions
#### ADO.NET Transactions
#### System.EnterpriseServices
### System.Transactions
#### Committable Transactions
#### Transaction Promotion
### Dependent Transactions
#### Ambient Transactions
### Isolation Level
### Custom Resource Managers
#### Transactional Resources
### File System Transactions
### Summary
___
## 26. Networking
### Networking
### The Httpclient Class
### Displaying Output as an HTML Page
#### Allowing Simple Web Browsing from Your Applications
#### Launching Internet Explorer Instances
#### Giving Your Application More IE-Type Features
#### Printing Using the WebBrowser Control
#### Displaying the Code of a Requested Page
#### The WebRequest and WebResponse Classes Hierarchy
### Utility Classes
#### URIs
#### IP Addresses and DNS Names
### Lower-level Protocols
#### Using SmtpClient
#### Using the TCP Classes
#### The TcpSend and TcpReceive Examples
#### TCP Versus UDP
#### The UDP Class
#### The Socket Class
#### WebSockets
### Summary
___
## 27. Windows Services
### What is a Windows Service?
### Windows Services Architecture
#### Service Program
#### Service Control Program
#### Service Configuration Program
#### Classes for Windows Services
### Creating a Windows Service Program
#### Creating Core Functionality for the Service
#### QuoteClient Example
#### Windows Service Program
#### Threading and Services
#### Service Installation
#### Installation Program
### Monitoring and Controlling Windows Services
#### MMC Snap-in
#### net.exe Utility
#### sc.exe Utility
#### Visual Studio Server Explorer
#### Writing a Custom Service Controller
### Troubleshooting and Event Logging
### Summary
___
## 28. Localization
### Global Markets
### Namespace System.Globalization
#### Unicode Issues
#### Cultures and Regions
#### Cultures in Action
#### Sorting
### Resources
#### Creating Resource Files
#### Resource File Generator
#### ResourceWriter
#### Using Resource Files
#### The System.Resources Namespace
### Windows Forms Localization Using Visual Studio
#### Changing the Culture Programmatically
#### Using Custom Resource Messages
#### Automatic Fallback for Resources
#### Outsourcing Translations
### Localization with ASP.NET Web Forms
### Localization with WPF
#### .NET Resources with WPF
#### XAML Resource Dictionaries
### A Custom Resource Reader
#### Creating a DatabaseResourceReader
#### Creating a DatabaseResourceSet
#### Creating a DatabaseResourceManager
#### Client Application for DatabaseResourceReader
### Creating Custom Cultures
### Localization with Windows Store Apps
#### Using Resources
#### Localization with the Multilingual App Toolkit
### Summary
___
## 29. Core XAML
### Uses of XAML
### XAML Foundation
#### How Elements Map to .NET Objects
#### Using Custom .NET Classes
#### Properties as Attributes
#### Properties as Elements
#### Essential .NET Types
#### Using Collections with XAML
#### Calling Constructors with XAML Code
### Dependency Properties
#### Creating a Dependency Property
#### Coerce Value Callback
#### Value Changed Callbacks and Events
### Bubbling and Tunneling Events
### Attached Properties
### Markup Extensions
#### Creating Custom Markup Extensions
#### XAML-Defined Markup Extensions
### Reading and Writing XAML
### Summary
___
## 30. Managed Extensibility Framework
### Introduction
### MEF Architecture
#### MEF Using Attributes
#### Convention-Based Part Registration
### Defining Contracts
### Exporting Parts
#### Creating Parts
#### Exporting Properties and Methods
#### Exporting Metadata
#### Using Metadata for Lazy Loading
### Importing Parts
#### Importing Collections
#### Lazy Loading of Parts
#### Reading Metadata with Lazyily Instantiated Parts
### Containers and Export Providers
### Catalogs
### Summary
___
## 31. Windows Runtime
### Overview
#### Comparing .NET and Windows Runtime
#### Namespaces
#### Metadata
#### Language Projections
#### Windows Runtime Types
### Windows Runtime Components
#### Collections
#### Streams
#### Delegates and Events
#### Async
### Windows Store Apps
### The Life Cycle of Applications
#### Application Execution States
#### Suspension Manager
#### Navigation State
#### Testing Suspension
#### Page State
### Application Settings
### Summary
---
# IV. Data
___
## 32. Core ADO.NET
### ADO.NET Overview
#### Namespaces
#### Shared Classes
#### Database-Specific Classes
### Using Database Connections
#### Managing Connection Strings
#### Using Connections Efficiently
#### Transactions
### Commands
#### Executing Commands
#### Calling Stored Procedures
### Fast Data Access: The Data Reader
### Asynchronous Data Access: Using Task and Await
### Managing Data and Relationships: The DataSet Class
#### Data Tables
#### Data Relationships
#### Data Constraints
### XML Schemas: Generating Code with XSD
### Populating a DataSet
#### Populating a DataSet Class with a Data Adapter
#### Populating a DataSet from XML
### Persisting DataSet Changes
#### Updating with Data Adapters
#### Writing XML Output
### Working with ADO.NET
#### Tiered Development
#### Key Generation with SQL Server
#### Naming Conventions
### Summary
___
## 33. ADO.NET Entity Framework
### Programming with the Entity Framework
### Entity Framework Mapping
#### Logical Layer
#### Conceptual Layer
#### Mapping Layer
#### Connection String
### Entities
### Data Context
### Relationships
#### Table-per-Hierarchy
#### Table-per-Type
#### Lazy, Explicit, and Eager Loading
### Querying Data
#### Entity SQL
#### Using DbSqlQuery
#### LINQ to Entities
### Writing Data to the Database
#### Object Tracking
#### Change Information
#### Attaching and Detaching Entities
#### Writing Entity Changes with Last One Wins
#### Writing Entity Changes with First One Wins
#### Writing Entity Changes with Conflict Handling
### Using the Code First Programming Model
#### Defining Entity Types
#### Creating the Data Context
#### Creating the Database and Storing Entities
#### The Database
#### Query Data
#### Customizing Database Generation
#### Automatic Filling of a Database
#### Connection Resiliency
#### Schema Migrations
### Summary
___
## 34. Manipulating XML
### XML
### XML Standards Support in .NET
### Introducing the System .Xml Namespace
### Using System .Xml Classes
### Reading and Writing Streamed XML
#### Using the XmlReader Class
#### Validating with XmlReader
#### Using the XmlWriter Class
### Using the DOM in .NET
#### Using the XmlDocument Class
### Using XPathNavigators
#### The System.Xml.XPath Namespace
#### The System.Xml.Xsl Namespace
### XML and ADO.NET
#### Converting ADO.NET Data to XML
#### Converting XML to ADO.NET Data
### Serializing Objects in XML
#### Serialization without Source Code Access
### LINQ to XML and .NET
### Working with Different XML Objects
#### XDocument
#### XElement
#### XNamespace
#### XComment
#### XAttribute
### Using LINQ to Query XML Documents
#### Querying Static XML Documents
#### Querying Dynamic XML Documents
### More Query Techniques for XML Documents
#### Reading from an XML Document
#### Writing to an XML Document
### Summary
---
# V. Presentation
___
## 35. Core WPF
### Understanding WPF
#### Namespaces
#### Class Hierarchy
### Shapes
### Geometry
### Transformation
### Brushes
#### SolidColorBrush
#### LinearGradientBrush
#### RadialGradientBrush
#### DrawingBrush
#### ImageBrush
#### VisualBrush
### Controls
#### Simple Controls
#### Content Controls
#### Headered Content Controls
#### Items Controls
#### Headered Items Controls
#### Decoration
### Layout
#### StackPanel
#### WrapPanel
#### Canvas
#### DockPanel
#### Grid
### Styles and Resources
#### Styles
#### Resources
#### System Resources
#### Accessing Resources from Code
#### Dynamic Resources
#### Resource Dictionaries
### Triggers
#### Property Triggers
#### MultiTrigger
#### Data Triggers
### Templates
#### Control Templates
#### Data Templates
#### Styling a ListBox
#### ItemTemplate
#### Control Templates for ListBox Elements
### Animations
#### Timeline
#### Nonlinear Animations
#### Event Triggers
#### Keyframe Animations
### Visual State Manager
#### Visual States
#### Transitions
### 3-D
#### Model
#### Cameras
#### Lights
#### Rotation
### Summary
___
## 36. Business Applications with WPF
### Introduction
### Menu and Ribbon Controls
#### Menu Controls
#### Ribbon Controls
### Commanding
#### Defining Commands
#### Defining Command Sources
#### Command Bindings
### Data Binding
#### BooksDemo Application Content
#### Binding with XAML
#### Simple Object Binding
#### Change Notification
#### Object Data Provider
#### List Binding
#### Master Details Binding
#### MultiBinding
#### Priority Binding
#### Value Conversion
#### Adding List Items Dynamically
#### Adding Tab Items Dynamically
#### Data Template Selector
#### Binding to XML
#### Binding Validation and Error Handling
### TreeView
### DataGrid
#### Custom Columns
#### Row Details
#### Grouping with the DataGrid
#### Live Shaping
### Summary
___
## 37. Creating Documents with WPF
### Introduction
### Text Elements
#### Fonts
#### TextEffect
#### Inline
#### Block
#### Lists
#### Tables
#### Anchor to Blocks
### Flow Documents
### Fixed Documents
### XPS Documents
### Printing
#### Printing with the PrintDialog
#### Printing Visuals
### Summary
___
## 38. Windows Store Apps: User Interface
### Overview
### Microsoft Modern Design
#### Content, Not Chrome
#### Fast and Fluid
#### Readability
### Sample Application Core Functionality
#### Files and Directories
#### Application Pages
### App Bars
### Launching and Navigation
### Layout Changes
#### Application Data
### Storage
#### Defining a Data Contract
#### Writing Roaming Data
#### Reading Data
#### Writing Images
#### Reading Images
### Pickers
### Live Tiles
### Summary
___
## 39. Windows Store Apps: Contracts and Devices
### Overview
### Searching
### Sharing Contract
#### Sharing Source
#### Sharing Target
### Camera
### Geolocation
### Sensors
#### Light
#### Compass
#### Accelerometer
#### Inclinometer
#### Gyrometer
#### Orientation
#### Rolling Marble Sample
### Summary
___
## 40. Core ASP.NET
### .NET Frameworks for Web Applications
#### ASP.NET Web Forms
#### ASP.NET Web Pages
#### ASP.NET MVC
### Web Technologies
#### HTML
#### CSS
#### JavaScript and jQuery
### Hosting and Configuration
### Handlers and Modules
#### Creating a Custom Handler
#### ASP.NET Handlers
#### Creating a Custom Module
#### Common Modules
### Global Application Class
### Request and Response
#### Using the HttpRequest Object
#### Using the HttpResponse Object
### State Management
#### View State
#### Cookies
#### Session
#### Application
#### Cache
#### Profiles
### ASP.NET Identity System
#### Foundation
#### Storing and Retrieving User Information
#### Security Startup
#### User Registration and Authentication
### Summary
___
## 41. ASP.NET Web Forms
### Overview
### ASPX Page Model
#### Adding Controls
#### Using Events
#### Working with Postbacks
#### Using Auto-postbacks
#### Doing Postbacks to Other Pages
#### Defining Strongly Typed Cross-page Postbacks
#### Using Page Events
#### ASPX Code
#### Server-side Controls
### Master Pages
#### Creating a Master Page
#### Using Master Pages
#### Defining Master Page Content from Content Pages
### Navigation
#### Site Map
#### Menu Control
#### Menu Path
### Validating User Input
#### Using Validation Controls
#### Using a Validation Summary
#### Validation Groups
### Accessing Data
#### Using the Entity Framework
#### Creating a Repository
#### Using the Object Data Source
#### Editing
#### Customizing Columns
#### Using Templates with the Grid
### Security
#### Setting Up the ASP.NET Identity
#### User Registration
#### User Authentication
#### User Authorization
### Ajax
#### What Is ASP.NET AJAX?
#### ASP.NET AJAX Website Example
#### ASP.NET AJAX-enabled Website Configuration
#### Adding ASP.NET AJAX Functionality
### Summary
___
## 42. ASP.NET MVC
### ASP.NET MVC Overview
### Defining Routes
#### Adding Routes
#### Route Constraints
### Creating Controllers
#### Action Methods
#### Parameters
#### Returning Data
### Creating Views
#### Passing Data to Views
#### Razor Syntax
#### Strongly Typed Views
#### Layout
#### .ial Views
### Submitting Data from the Client
#### Model Binder
#### Annotations and Validation
### HTML Helpers
#### Simple Helpers
#### Using Model Data
#### Define HTML Attributes
#### Create Lists
#### Strongly Typed Helpers
#### Editor Extensions
#### Creating Custom Helpers
#### Templates
### Creating a Data-Driven Application
#### Defining a Model
#### Creating Controllers and Views
### Action Filters
### Authentication and Authorization
#### Model for Login
#### Controller for Login
#### Login View
### Summary
---
# VI Communication
___
## 43. Windows Communication Foundation
### WCF Overview
#### SOAP
#### WSDL
#### REST
#### JSON
### Creating a Simple Service and Client
#### Defining Service and Data Contracts
#### Data Access
#### Service Implementation
#### WCF Service Host and WCF Test Client
#### Custom Service Host
#### WCF Client
#### Diagnostics
#### Sharing Contract Assemblies with the Client
### Contracts
#### Data Contract
#### Versioning
#### Service and Operation Contracts
#### Message Contract
#### Fault Contract
### Service Behaviors
### Binding
#### Standard Bindings
#### Features of Standard Bindings
#### Web Socket
### Hosting
#### Custom Hosting
#### WAS Hosting
#### Preconfigured Host Classes
### Clients
#### Using Metadata
#### Sharing Types
### Duplex Communication
#### Contract for Duplex Communication
#### Service for Duplex Communication
#### Client Application for Duplex Communication
### Routing
#### Sample Application
#### Routing Interfaces
#### WCF Routing Service
#### Using a Router for Failover
#### Bridging for Protocol Changes
#### Filter Types
### Summary
___
## 44. ASP.NET Web API
### Overview
### Creating Services
#### Defining a Model
#### Creating a Controller
#### Error Handling
### Creating a .NET Client
#### Sending GET Requests
#### Sending POST Requests
#### Sending PUT Requests
#### Sending DELETE Requests
### Web API Routing and Actions
#### Adding HTTP Methods to Actions
#### Attribute-based Routing
### Using OData
#### Creating a Data Model
#### Creating a Service
#### OData Query
#### WCF Data Services Client
### Security with the Web API
#### Create an Account
#### Create an Authentication Token
#### Sending an Authenticated Call
#### Getting User Information
### Self-Hosting
### Summary
___
## 45. Windows Workflow Foundation
### A Workflow Overview
### Hello World
### Activities
#### If Activity
#### InvokeMethod Activity
#### Parallel Activity
#### Delay Activity
#### Pick Activity
### Custom Activities
#### Activity Validation
#### Designers
#### Custom Composite Activities
### Workflows
#### Arguments and Variables
#### WorkflowApplication
#### Hosting WCF Workflows
#### Workflow Versioning
#### Hosting the Designer
### Summary
___
## 46. Peer-to-Peer Networking
### Peer-to-Peer Networking Overview
#### Client-Server Architecture
#### P2P Architecture
#### P2P Architectural Challenges
#### P2P Terminology
#### P2P Solutions
### Peer Name Resolution Protocol (PNRP)
#### PNRP IDs
#### PNRP Clouds
#### PNRP Since Windows 7
### Building P2P Applications
#### Registering Peer Names
#### Resolving Peer Names
#### Code Access Security in System.Net.PeerToPeer
#### Sample Application
### Summary
___
## 47. Message Queuing
### Overview
#### When to Use Message Queuing
#### Message Queuing Features
### Message Queuing Products
### Message Queuing Architecture
#### Messages
#### Message Queue
### Message Queuing Administrative Tools
#### Creating Message Queues
#### Message Queue Properties
### Programming Message Queuing
#### Creating a Message Queue
#### Finding a Queue
#### Opening Known Queues
#### Sending a Message
#### Receiving Messages
### Course Order Application
#### Course Order Class Library
#### Course Order Message Sender
#### Sending Priority and Recoverable Messages
#### Course Order Message Receiver
### Receiving Results
#### Acknowledgment Queues
#### Response Queues
### Transactional Queues
### Message Queuing with WCF
#### Entity Classes with a Data Contract
#### WCF Service Contract
#### WCF Message Receiver Application
#### WCF Message Sender Application
### Message Queue Installation
### Summary
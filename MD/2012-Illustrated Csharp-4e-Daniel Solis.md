#Cover
##Contents at a Glance
##Contents
##About the Author
##About the Technical Reviewer
##Acknowledgments
##Introduction
# 1. C# and the .NET Framework
##Before .NET
###Windows Programming in the Late 1990s
###Goals for the Next-Generation Platform Services
##Enter Microsoft .NET
###Components of the .NET Framework
###An Improved Programming Environment
####Object-Oriented Development Environment
####Automatic Garbage Collection
####Interoperability
####No COM Required
####Simplified Deployment
####Type Safety
####The Base Class Library
##Compiling to the Common Intermediate Language
##Compiling to Native Code and Execution
###Overview of Compilation and Execution
##The Common Language Runtime
##The Common Language Infrastructure
###Important Parts of the CLI
####The Common Type System
####The Common Language Specification
##Review of the Acronyms
##The Evolution of C#
# 2. Overview of C# Programming
##A Simple C# Program
###More About SimpleProgram
##Identifiers
##Keywords
##Main: The Starting Point of a Program
##Whitespace
##Statements
###Blocks
##Text Output from a Program
###Write
###WriteLine
###The Format String
###Multiple Markers and Values
###Formatting Numeric Strings
####The Alignment Specifier
####The Format Field
####Standard Numeric Format Specifiers
##Comments: Annotating the Code
###More About Comments
###Documentation Comments
###Summary of Comment Types
# 3. Types, Storage, and Variables
##A C# Program Is a Set of Type Declarations
##A Type Is a Template
##Instantiating a Type
##Data Members and Function Members
###Types of Members
##Predefined Types
###More About the Predefined Types
##User-Defined Types
##The Stack and the Heap
###The Stack
####Facts About Stacks
###The Heap
##Value Types and Reference Types
###Storing Members of a Reference Type Object
###Categorizing the C# Types
##Variables
###Variable Declarations
####Variable Initializers
####Automatic Initialization
###Multiple-Variable Declarations
###Using the Value of a Variable
##Static Typing and the dynamic Keyword
##Nullable Types
# 4. Classes: The Basics
##Overview of Classes
###A Class Is an Active Data Structure
##Programs and Classes: A Quick Example
##Declaring a Class
Class members can be declared in any order inside the class body. This means it's perfectly fine for the declaration of a member to refer to another member that is not yet defined until further down in the class declaration.
##Class Members
###Fields
Unlike C and C++, in C# there are **_no global variables_** declared outside of a type.
####Explicit and Implicit Field Initialization
The default value for each type is _**0**_, and false for _**bool**_. The default for reference types is _**null**_.
####Declarations with Multiple Fields
###Methods
Unlike C and C++, in C# there are _**no global functions**_ declared outside of type declaration. Also unlike C and C++, in C# there is no **"default"** return type for a method. All methods must include a return type of list it as void.
##Creating Variables and Instances of a Class
##Allocating Memory for the Data
###Combining the Steps
##Instance Members
##Access Modifiers
###Private and Public Access
####Depicting Public and Private Access
####Example of Member Access
##Accessing Members from Inside the Class
##Accessing Members from Outside the Class
##Putting It All Together
# 5. Methods
##The Structure of a Method
##Code Execution in the Method Body
##Local Variables
###Type Inference and the var Keyword
###Local Variables Inside Nested Blocks
[W] Blocks can be nested `to any level`.

In C# you cannot declare another local variable with the same name within the scope of the first name, regardless of the level of nesting.
##Local Constants
The mandatory initializer. The initializer value must be determinable at compile time and is usually one of the predefined simple types or an expression made up of them. It can also be _**null reference**_, but it cannot be a reference to an object, because references to objects are determined at run time.
##Flow of Control
Methods contain most of the code that _**comprise**_ a program.
##Method Invocations
##Return Values
##The Return Statement and Void Methods
##Parameters
###Formal Parameters
###Actual Parameters
####An Example of Methods with Positional Parameters
##Value Parameters
##Reference Parameters
##Reference Types As Value and Reference Parameters
##Output Parameters
##Parameter Arrays
###Method Invocation
####Expanded Form
###Arrays As Actual Parameters
##Summary of Parameter Types
##Method Overloading
##Named Parameters
##Optional Parameters
##Stack Frames
##Recursion
# 6. More About Classes
##Class Members
##Order of Member Modifiers
##Instance Class Members
##Static Fields
##Accessing Static Members from Outside the Class
###Example of a Static Field
###Lifetimes of Static Members
##Static Function Members
##Other Static Class Member Types
##Member Constants
##Constants Are Like Statics
##Properties
###Property Declarations and Accessors
###A Property Example
###Using a Property
###Properties and Associated Fields
###Performing Other Calculations
###Read-Only and Write-Only Properties
###Properties vs. Public Fields
###An Example of a Computed, Read-Only Property
[W] hypotenuse  (hī-pŏt′n-o͞os′, -yo͞os′)  also hy·poth·e·nuse (-pŏth′ə-no͞os′, -nyo͞os′)
###Automatically Implemented Properties
###Static Properties
##Instance Constructors
###Constructors with Parameters
###Default Constructors
##Static Constructors
###Example of a Static Constructor
##Object Initializers
##Destructors
##The readonly Modifier
##The this Keyword
##Indexers
###What Is an Indexer?
###Indexers and Properties
###Declaring an Indexer
###The Indexer set Accessor
###The Indexer get Accessor
###More About Indexers
###Declaring the Indexer for the Employee Example
###Another Indexer Example
###Indexer Overloading
##Access Modifiers on Accessors
[W] By default, `both a member's accessors` have the same access level as the member itself. That is, if a property has an access level of public, then `both its accessors` have that same access level. The same is true of indexers.
##Partial Classes and Partial Types
##Partial Methods
# 7. Classes and Inheritance
##Class Inheritance
##Accessing the Inherited Members
##All Classes Are Derived from Class object
##Masking Members of a Base Class
##Base Access
[W] Generally there are mmore elegant designs-`but the feature is there` if there's a situation where nothing else will do.
##Using References to a Base Class
###Virtual and Override Methods
###Overriding a Method Marked override
[W] Overriding methods can occur `between any levels of inheritance`.
####Case 1: Declaring Print with override
####Case 2: Declaring Print with new
###Overriding Other Member Types
##Constructor Execution
###Constructor Initializers
###Class Access Modifiers
##Inheritance Between Assemblies
##Member Access Modifiers
###Regions Accessing a Member
###Public Member Accessibility
###Private Member Accessibility
###Protected Member Accessibility
###Internal Member Accessibility
###Protected Internal Member Accessibility
###Summary of Member Access Modifiers
##Abstract Members
##Abstract Classes
###Example of an Abstract Class and an Abstract Method
###Another Example of an Abstract Class
##Sealed Classes
##Static Classes
##Extension Methods
##Naming Conventions
[W] Writing programs requires `coming up with` lots of names; names for classes, variables, methods, properties, and lots of things I haven't covered yet.
# 8. Expressions and Operators
##Expressions
##Literals
###Integer Literals
###Real Literals
###Character Literals
###String Literals
##Order of Evaluation
[W] `You know from your grade school days` that in the preceding example, the multiplication must be performed before the addition because multiplication has a higher precedence than addition. `But unlike grade-school days`, where you had four operators and two levels of precedence, `things are a bit more complex with` C#, which has more than 45 operators and 14 levels of precedence.
###Precedence
###Associativity
##Simple Arithmetic Operators
##The Remainder Operator
##Relational and Equality Comparison Operators
###Comparison and Equality Operations
##Increment and Decrement Operators
##Conditional Logical Operators
##Logical Operators
##Shift Operators
##Assignment Operators
###Compound Assignment
##The Conditional Operator
##Unary Arithmetic Operators
##User-Defined Type Conversions
###Explicit Conversion and the Cast Operator
##Operator Overloading
###Restrictions on Operator Overloading
###Example of Operator Overloading
##The typeof Operator
##Other Operators
# 9. Statements
##What Are Statements?
A block counts syntactically as a single embedded statement. Anywhere that an embedded statement is required syntactically, you can use a block.
##Expression Statements
##Flow-of-Control Statements
Unlike C and C++, in C# test expressions must return a value of type _bool_. Numbers do not have a Boolean interpretation in C#.
##The if Statement
##The if...else Statement
##The while Loop
##The do Loop
##The for Loop
###The Scope of Variables in a for Statement
###Multiple Expressions in the Initializer and Iteration Expression
##The switch Statement
###A Switch Example
###More on the switch Statement
###Switch Labels
##Jump Statements
##The break Statement
##The continue Statement
##Labeled Statements
###Labels
###The Scope of Labeled Statements
##The goto Statement
###The goto Statement Inside a switch Statement
##The using Statement
###Packaging the Use of a Resource
###Example of the using Statement
###Multiple Resources and Nesting
###Another Form of the using Statement
##Other Statements
# 10. Structs
##What Are Structs?
##Structs Are Value Types
##Assigning to a Struct
##Constructors and Destructors
###Instance Constructors
###Static Constructors
###Summary of Constructors and Destructors
##Field Initializers Are Not Allowed
##Structs Are Sealed
##Boxing and Unboxing
##Structs As Return Values and Parameters
##Additional Information About Structs
# 11. Enumerations
##Enumerations
###Setting the Underlying Type and Explicit Values
###Implicit Member Numbering
##Bit Flags
###The Flags Attribute
###Example Using Bit Flags
##More About Enums
# 12. Arrays
##Arrays
###Definitions
###Important Details
##Types of Arrays
##An Array As an Object
##One-Dimensional and Rectangular Arrays
###Declaring a One-Dimensional or Rectangular Array
Unlike C/C++, in C# the **brackets follow the base type**, not the variable name.
##Instantiating a One-Dimensional or Rectangular Array
##Accessing Array Elements
##Initializing an Array
###Explicit Initialization of One-Dimensional Arrays
###Explicit Initialization of Rectangular Arrays
###Syntax Points for Initializing Rectangular Arrays
###Shortcut Syntax
###Implicitly Typed Arrays
###Putting It All Together
##Jagged Arrays
###Declaring a Jagged Array
###Shortcut Instantiation
###Instantiating a Jagged Array
###Subarrays in Jagged Arrays
##Comparing Rectangular and Jagged Arrays
**One-dimensional arrays** have specific instructions in the CIL that allow them to be **optimized** for performance. Rectangular arrays do not have these instructions and are not optimized to the same level.
##The foreach Statement
###The Iteration Variable Is Read-Only
###The foreach Statement with Multidimensional Arrays
####Example with a Rectangular Array
####Example with a Jagged Array
##Array Covariance
##Useful Inherited Array Members
###The Clone Method
##Comparing Array Types
# 13. Delegates
##What Is a Delegate?
You can think of a **delegate** as an object that holds one or methods. Normally, of course, you wouldn't think of "executing" an object, but a delegate is different from a typical object. **You can execute a delegate**, and when you do so, it executes the method or methods that it "holds."

[W] on steroids (stĕr′oid′, stîr′-)
- In a very large, enhanced, or exaggerated form: *"a weapon one observer had called an M16 on steroids" (Stephen Coonts).*
- When something is on steroids, it is more powerful than it could naturally become, because of some trigger. *That gym-trainer is on anabolic steroids.* *The CLK-GTR is a mercedes-Benz on steroids.*

If you're coming from a C++ background, the fastest way for you to understand **delegates** is to think of them as type-safe, object-oriented C++ function pointers `on steroids`.
##An Overview of Delegates
##Declaring the Delegate Type
##Creating the Delegate Object
##Assigning Delegates
##Combining Delegates
##Adding Methods to Delegates
##Removing Methods from a Delegate
##Invoking a Delegate
##Delegate Example
##Invoking Delegates with Return Values
##Invoking Delegates with Reference Parameters
##Anonymous Methods
###Using Anonymous Methods
###Syntax of Anonymous Methods
####Return Type
[W] The implementation code of the anonymous method must therefore return an int `on all pathways` through the code.
####Parameters
####The params Parameters
###Scope of Variables and Parameters
####Outer Variables
####Extension of a Captured Variable’s Lifetime
##Lambda Expressions
[W] **pare down** - decrease gradually or bit by bit
- Rather than requiring you to include this redundant information, C# 3.0 introduced lambda expressions, which `pare down` the syntax of anonymous methods. In fact, if lambda expressions had been introduced first, there never would have been anonymous methods.
# 14. Events
##Publishers and Subscribers
The methods supplied by the subscribers are called **callback methods**, because the publisher calls the subscribers back by executing their methods. They are also called **event handlers**, because they are the code that is called to handle the event.

[W] Event handler: A method that is registered `with the publisher`, `by the subscriber`, and is executed when the publisher raises the event.
##Overview of Source Code Components
##Declaring an Event
###An Event Is a Member
[W] ramification (răm′ə-fĭ-kā′shən)
- A development or consequence growing out of and sometimes complicating a problem, plan, or statement: the ramifications of a court decision.

A common error is to think of an event as a type - `which` it's not. Like a method, or a property, an event is a member of a class or a struct, and there are several important `ramifications` to this.
##Subscribing to an Event
##Raising an Event
##Standard Event Usage
###Passing Data by Extending EventArgs
###Removing Event Handlers
##Event Accessors
# 15. Interfaces
##What Is an Interface?
[W] But `even if we could get around that hurdle` and somehow pass in an object of type CB, we would still have a problem, because CB's structure is different from that of CA.
###Example Using the IComparable Interface
##Declaring an Interface
##Implementing an Interface
###Example with a Simple Interface
##An Interface Is a Reference Type
##Using the as Operator with Interfaces
##Implementing Multiple Interfaces
##Implementing Interfaces with Duplicate Members
##References to Multiple Interfaces
##An Inherited Member As an Implementation
##Explicit Interface Member Implementations
###Accessing Explicit Interface Member Implementations
##Interfaces Can Inherit Interfaces
##Example of Different Classes Implementing an Interface
# 16. Conversions
##What Are Conversions?
##Implicit Conversions
##Explicit Conversions and Casting
###Casting
##Types of Conversions
##Numeric Conversions
###Implicit Numeric Conversions
###Overflow Checking Context
####The checked and unchecked Operators
####The checked and unchecked Statements
###Explicit Numeric Conversions
####Integer Type to Integer Type
####float or double to Integer Type
####decimal to Integer Type
####double to float
####float or double to decimal
####decimal to float or double
##Reference Conversions
###Implicit Reference Conversions
###Explicit Reference Conversions
###Valid Explicit Reference Conversions
##Boxing Conversions
###Boxing Creates a Copy
###The Boxing Conversions
##Unboxing Conversions
###The Unboxing Conversions
##User-Defined Conversions
###Constraints on User-Defined Conversions
###Example of a User-Defined Conversion
###Evaluating User-Defined Conversions
###Example of a Multistep User-Defined Conversion
##The is Operator
##The as Operator
# 17. Generics
##What Are Generics?
###A Stack Example
##Generics in C#
###Continuing with the Stack Example
##Generic Classes
##Declaring a Generic Class
##Creating a Constructed Type
##Creating Variables and Instances
###The Stack Example Using Generics
###Comparing the Generic and Nongeneric Stack
##Constraints on Type Parameters
###Where Clauses
###Constraint Types and Order
##Generic Methods
###Declaring a Generic Method
###Invoking a Generic Method
####Inferring Types
###Example of a Generic Method
##Extension Methods with Generic Classes
##Generic Structs
##Generic Delegates
###Another Generic Delegate Example
##Generic Interfaces
###An Example Using Generic Interfaces
###Generic Interface Implementations Must Be Unique
##Covariance
##Contravariance
###Covariance and Contravariance in Interfaces
###More About Variance
# 18. Enumerators and Iterators
##Enumerators and Enumerable Types
###Using the foreach Statement
##The IEnumerator Interface
###The IEnumerable Interface
###Example Using IEnumerable and IEnumerator
##The Generic Enumeration Interfaces
##Iterators
###Iterator Blocks
###Using an Iterator to Create an Enumerator
###Using an Iterator to Create an Enumerable
##Common Iterator Patterns
##Producing Multiple Enumerables
##Iterators As Properties
##Behind the Scenes with Iterators
# 19. Introduction to LINQ
##What Is LINQ?
##LINQ Providers
###Anonymous Types
##Method Syntax and Query Syntax
##Query Variables
##The Structure of Query Expressions
###The from Clause
###The join Clause
###What Is a Join?
###The from . . . let . . . where Section in the Query Body
####The from Clause
####The let Clause
####The where Clause
###The orderby Clause
###The select . . . group Clause
###Anonymous Types in Queries
###The group Clause
###Query Continuation: The into Clause
##The Standard Query Operators
###Signatures of the Standard Query Operators
###Query Expressions and the Standard Query Operators
###Delegates As Parameters
###The LINQ Predefined Delegate Types
###Example Using a Delegate Parameter
###Example Using a Lambda Expression Parameter
##LINQ to XML
###Markup Languages
###XML Basics
###The XML Classes
####Creating, Saving, Loading, and Displaying an XML Document
####Creating an XML Tree
####Using Values from the XML Tree
####Adding Nodes and Manipulating XML
###Working with XML Attributes
###Other Types of Nodes
####XComment
####XDeclaration
####XProcessingInstruction
###Using LINQ Queries with LINQ to XML
# 20. Introduction to Asynchronous Programming
##What Is Asynchrony?
###A Starting Example
##The Structure of the async/await Feature
##What Is An async Method?
###The Flow of Control in an Async Method
###The await Expression
###Cancelling an async Operation
###Exception Handling and the await Expression
###Waiting Synchronously for Tasks in the Calling Method
###Waiting Asynchronously for Tasks in the async Method
###The Task.Delay Method
##Async Operations in GUI Programs
###Task.Yield
##Using an async Lambda Expression
##A Full GUI Example
##The BackgroundWorker Class
###Example of the BackgroundWorker Class in a WPF Program
##Parallel Loops
##Other Asynchronous Programming Patterns
##BeginInvoke and EndInvoke
###The Wait-Until-Done Pattern
###The AsyncResult Class
###The Polling Pattern
###The Callback Pattern
####The Callback Method
####Calling EndInvoke Inside the Callback Method
##Timers
# 21. Namespaces and Assemblies
##Referencing Other Assemblies
###The mscorlib Library
##Namespaces
###Namespace Names
###More About Namespaces
###Namespaces Spread Across Files
###Nesting Namespaces
##The using Directives
###The using Namespace Directive
###The using Alias Directive
##The Structure of an Assembly
##The Identity of an Assembly
##Strongly Named Assemblies
###Creating a Strongly Named Assembly
##Private Deployment of an Assembly
##Shared Assemblies and the GAC
###Installing Assemblies into the GAC
###Side-by-Side Execution in the GAC
##Configuration Files
##Delayed Signing
# 22. Exceptions
##What Are Exceptions?
##The try Statement
###Handling the Exception
##The Exception Classes
##The catch Clause
##Examples Using Specific catch Clauses
##The catch Clauses Section
##The finally Block
##Finding a Handler for an Exception
##Searching Further
###General Algorithm
###Example of Searching Down the Call Stack
##Throwing Exceptions
##Throwing Without an Exception Object
# 23. Preprocessor Directives
##What Are Preprocessor Directives?
##General Rules
##The #define and #undef Directives
##Conditional Compilation
##The Conditional Compilation Constructs
##Diagnostic Directives
##Line Number Directives
##Region Directives
##The #pragma warning Directive
# 24. Reflection and Attributes
##Metadata and Reflection
##The Type Class
##Getting a Type Object
##What Is an Attribute?
##Applying an Attribute
##Predefined, Reserved Attributes
###The Obsolete Attribute
###The Conditional Attribute
####Example of the Conditional Attribute
###The Caller Information Attributes
###The DebuggerStepThrough Attribute
###Other Predefined Attributes
##More About Applying Attributes
###Multiple Attributes
###Other Types of Targets
###Global Attributes
##Custom Attributes
###Declaring a Custom Attribute
###Using Attribute Constructors
###Specifying the Constructor
###Using the Constructor
###Positional and Named Parameters in Constructors
###Restricting the Usage of an Attribute
####The Constructor for AttributeUsage
###Suggested Practices for Custom Attributes
##Accessing an Attribute
###Using the IsDefined Method
###Using the GetCustomAttributes Method
# 25. Other Topics
##Overview
##Strings
##The StringBuilder Class
##Parsing Strings to Data Values
##More About the Nullable Types
###Assigning to a Nullable Type
###The Null Coalescing Operator
###Using Nullable User-Defined Types
####Nullable<T>
##Method Main
###Accessibility of Main
##Documentation Comments
###Inserting Documentation Comments
###Using Other XML Tags
##Nested Types
###Example of a Nested Class
###Visibility and Nested Types
##Destructors and the Dispose Pattern
###The Standard Dispose Pattern
###Comparing Constructors and Destructors
##Interoperating with COM
#Index

#Cover
##Contents at a Glance
##Contents
##About the Author
##About the Technical Reviewer
##Acknowledgments
##Introduction
___
#1. C# and the .NET Framework
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
___
#2. Overview of C# Programming
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

- parameters are separated by commas
- format string: the first parameter
- substitution markers
- substitution values

###Multiple Markers and Values

- any number of markers
- any number of values
- in any order
- any number of times

- not produce a compile error but a runtime error (called an exception)

###Formatting Numeric Strings

format specifier: { index, alignment :format }

####The Alignment Specifier

- minimum width: minimum number of character to use for the field
- the sign: represents either right or left alignment

[W] The format items are between two vertical bars, `just so that` in the output you can see the limits of the string on each side.

padded with spaces, or the alignment specifier is ignored

####The Format Field

the colon character
- with no intervening spaces

format specifier
- a single alphabetic character
- nine built-in character formats
- the case is *significant* for some specifiers but not for others

precision specifier
- one or two digits

####Standard Numeric Format Specifiers

nine standard numeric format specifiers

Name            | Character       | Meaning
---             | ---             | ---
Currency        | C, c            | the number of decimal places        
Decimal         | D, d            | padded with 0s on the left
Fixed-point     | F, f            | the number of decimal places
General         | G, g            | default
Hexadecimal     | X, x            | padded with 0s on the left. case sensitive
Number          | N, n            | comma or period separators. the number of decimal places
Percent         | P, p            | multipled by 100. the number of decimal places
Round-trip      | R, r            | Parse method. Precision specifier is ignored.
Scientific      | E, e            | mantissa, exponent. The exponent is preceded by the letter E. case sensitive

##Comments: Annotating the Code
###More About Comments
###Documentation Comments

- XML text
- three contiguous slashes

###Summary of Comment Types

- Single-line: //
- Delimited: /* */
- Documentation: ///

___
#3. Types, Storage, and Variables
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
___
#4. Classes: The Basics
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
___
#5. Methods
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

[W] Inside the method, `every possible path through the code` must assign a value to every output parameter before the method can exit.

##Parameter Arrays

Parameter arrays are different `in that` they allow *zero or more actual parameter* of a particular type for a particular formal parameter.

- only one parameter array
- the last parameter in the list
- of the same type

- *params* modifier before the data type
- empty square brackets

###Method Invocation

- A comma-separated list: ListInts(10,20,30);
- A one-dimensional array: int[] intArray = {10,20,30}; ListInts(intArray);

Do not use the **params** modifier in the *invocation*.

The usage of the modifier in parameter arrays doesn't fit the pattern of the other parameter types.

####Expanded Form

It takes the list of actual parameters and uses them to *create and initialize an array* in the heap.

the values of the actual parameters are **copied** to the array.

###Arrays As Actual Parameters
##Summary of Parameter Types
##Method Overloading
##Named Parameters
##Optional Parameters
##Stack Frames
##Recursion
___
#6. More About Classes
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
>The side of a right triangle opposite the right angle.

[1565–75; < Latin hypotēnūsa < Greek hypoteínousa (grámmē) **subtending (line)**, feminine present participle of hypoteínein to **subtend** =hypo- hypo- + teínein to stretch (see thin)]

>hypotenuse - the side of a right triangle opposite the right angle
- <>right triangle, right-angled triangle - a triangle with one right angle
- <>flank - a subfigure consisting of a side of something

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
___
#7. Classes and Inheritance
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

A static class is a class `where` all the members are static. Static classes are used to group data and functions that are not affected by instance data.

- a static constructor
- implicitly sealed

##Extension Methods
##Naming Conventions
[W] Writing programs requires `coming up with` lots of names; names for classes, variables, methods, properties, and lots of things I haven't covered yet.
___
#8. Expressions and Operators
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
___
#9. Statements
##What Are Statements?
A *statement* is a source code instruction describing a type or telling the program to perform an action.

- Declaration statements
- Embedded statements: Statements that perform actions or manage flow of control
- Labeled statements

Embedded statements

- Simple statement
- block
- empty statement: You can use an empty statement at any position where the syntax of the language requires an embedded statement but your program logic does not require any action.

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
___
#10. Structs
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
___
#11. Enumerations
##Enumerations
###Setting the Underlying Type and Explicit Values
###Implicit Member Numbering
##Bit Flags
###The Flags Attribute
###Example Using Bit Flags
##More About Enums
___
#12. Arrays
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
___
#13. Delegates
##What Is a Delegate?
You can think of a **delegate** as an object that holds one or more methods. Normally, of course, you wouldn't think of "executing" an object, but a delegate is different from a typical object. **You can execute a delegate**, and when you do so, it executes the method or methods that it "holds."

[W] on steroids (stĕr′oid′, stîr′-)
- In a very large, enhanced, or exaggerated form: *"a weapon one observer had called an M16 on steroids" (Stephen Coonts).*
- When something is on steroids, it is more powerful than it could naturally become, because of some trigger. *That gym-trainer is on anabolic steroids.* *The CLK-GTR is a mercedes-Benz on steroids.*

If you're coming from a C++ background, the fastest way for you to understand **delegates** is to think of them as type-safe, object-oriented C++ function pointers `on steroids`.
##An Overview of Delegates
You can think of a delegate as an object that contains an ordered list of methods *with the same signature and return type*, as illustrated in Figure 13-2.
##Declaring the Delegate Type
[W] The declaration of a delegate type `looks much like` the declaration of a method, `in that` it has both a return type and a signature.

The return type and signature specify the form of the methods that the delegate will accept.
##Creating the Delegate Object

- object-creation expression
- shortcut syntax

##Assigning Delegates

The old delegate object will be disposed of by the garbage collector (GC) when it gets around to it.
##Combining Delegates

Delegates are immutable

##Adding Methods to Delegates

C# provides syntax for making it appear that you can add a method to a delegate, using the += operator

What is actually happening, of course, is that *when the += operator is used, a new delegate is created*, with an invocation list that is the combination of the delegate on the left and the method listed on the right.

You can add a method to a delegate more than once. Each time you add it, it creates a new element in the invocation list.

##Removing Methods from a Delegate

If the invocation list is empty, the delegate is null.

##Invoking a Delegate

unless one of the parameters is an *output parameter*, which I'll cover shortly.

##Delegate Example

The value returned by the last method in the invocation list is the value returned from the delegate invocation.

##Invoking Delegates with Return Values
##Invoking Delegates with Reference Parameters
##Anonymous Methods
###Using Anonymous Methods
###Syntax of Anonymous Methods
####Return Type
[W] The implementation code of the anonymous method must therefore return an int `on all pathways` through the code.
####Parameters

but only if both of the following are true:
- The delegate's parameter list does not contain any **out** parameters.
- The anonymous method does not use any parameters.

####The params Parameters

then the *params keyword* is omitted

###Scope of Variables and Parameters
####Outer Variables

captured: An outer variable used in the implementation code of an anonymous method is said to be *captured* by the method.

####Extension of a Captured Variable’s Lifetime
##Lambda Expressions
[W] **pare down** - decrease gradually or bit by bit
- Rather than requiring you to include this redundant information, C# 3.0 introduced lambda expressions, which `pare down` the syntax of anonymous methods. In fact, if lambda expressions had been introduced first, there never would have been anonymous methods.

- The delegate keyword is redundant
- Place the *lambda operator*, **=>**, between the parameter list and the body of the anonymous method
- The lambda operator is read as **"goes to"**.

[W] `There's more, however, that` the compiler can infer, allowing you to simplify the lambda expression further, as shown in the following code.

- explicitly typed
- implicitly typed

If there's only a single implicitly typed parameter, you can `leave off` the parentheses surrounding it, as shown in the assignment to le3.

If the statement block contains *a single return statement*, you can replace the statement block with just the expression that follows the return keyword, as shown in the assignment to le4.

```
MyDel del = delegate(int x) { return x + 1; }; //- Anonymous method
MyDel le4 = x => x + 1; //- Lambda expression
```

- implicitly typed
- neither *ref* nor *out* parameters: if there are, they're explicitly typed
- parentheses: a single parameter implicitly typed
- empty parentheses: if there are no parameters
___
#14. Events
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
___
#15. Interfaces
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
[W] ramification (răm′ə-fĭ-kā′shən) 파문, 여파, 영향(어떤 행동・결정에 따라 생기는, 예상 밖의 복잡한 여러 결과・영향들 중 하나)

- *ramification* - a development that complicates a situation; "the court's decision had many unforeseen ramifications"
- =*complication*
- -*development* - a recent event that has some relevance for the present situation; "recent developments in Iraq"; "what a revolting development!"

This restriction has an important `ramification` for inheritance.
##Interfaces Can Inherit Interfaces
[W] The interfaces in the list can `themselves` have inherited interfaces.
##Example of Different Classes Implementing an Interface

"new Cat()" has the following meaning

    The instantiation of Cat creates Cat(),
        which hierarchically instantiates Animal and LiveBirth as Animal() and LiveBirth() respectively.

    The "()" means a reference to a point in the heap memory.

the syntax of "animalArray[0] = new Cat();" has the following meaning.
 
    get the 1st reference to Cat(),
        and then further get the 2nd reference to Animal(),
        and finally saves the 2nd reference to Animal() into animalArray[0]

animalArray[0] gets the final reference to Animal() through Dog(),
    and saves the final reference to Animal() in the array.

The syntax of "Animal a = animalArray[0];" has the following meaning.
 
    annimalArray[0] has a reference to Animal() in Cat()
        which has a reference to ILiveBirth()
        that has a reference to BabyCalled()    
___
#16. Conversions
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
As you well know by now, reference objects comprise two parts in memory: **the reference** and **the data**.

- Part of the information held by the reference is the *type of the data it is pointing at*.
- A reference conversion takes a source reference (srcRef) and returns a reference (targetRef) pointing at the same place in the heap but "labels" the reference as a different type.
###Implicit Reference Conversions
###Explicit Reference Conversions
###Valid Explicit Reference Conversions

- Cast is unnecessary; A is the base class of B.
- Allowed because myVAr1 is null.
- This cast is fine because the data is of type B.
##Boxing Conversions
All C# types, including the *value types*, are derived from type *object*. *<u>Value types</u>*, however, are efficient, lightweight types that do not, by default, include their object component in the *heap*.

When the object component is needed, however, you can use **boxing**, which is an implicit conversion that takes a value type value, creates from it a full reference type object in the heap, and returns a reference to the object.
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
___
#17. Generics
##What Are Generics?

[W] `There are times`, however, when a class would be more useful if you could "distill" or "refactor" out its actions and apply them not just to the data types for which they are coded, but for other types as well. Generics allow you to do `just that`.

[W] This is particularly designed `for cases in which` there are multiple sections of code performing the same instructions, but on different data types.
##A Stack Example
##Generics in C# 
[W] `By this point in the text`, you should be very familiar with the concept that a **type** is not an object but a **template** for an object. `In the same way`, <u>a **generic type** is not a type but a **template for a type**</u>.

C# provides five kinds of generics: *classes, structs, interfaces, delegates, and methods*. Notice that the first four are types, and methods are members.

User-Defined Types: *[A]rray, [C]lass, [D]elegate, [E]num, [I]nterface, [S]truct*

Generic Types: *[C]lass, [D]elegate, [I]nterface, [S]truct*
###Continuing with the Stack Example
##Generic Classes
Regular classes: declaring the class and creating instances of the class

Generic classes: construct actual class types, and then create references and instances
##Declaring a Generic Class
type parameters

[W] demarcate (dĭ-mär′kāt′, dē′mär-kāt′)
>demarcate - set, mark, or draw the boundaries of something
- =delimitate, delimit
- <>circumscribe, confine, limit - restrict or confine, "I limit you to two visits to the pub a day"

There is no special keyword that `flags` a generic class declaration. Instead, the presence of the *type parameter list*, `demarcated` with *angle brackets*, distinguishes a generic class declaration from a regular class declaration.
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
```
int myInt = 5;
MyMethod<int> (myInt);
MyMethod(myInt);
```
###Example of a Generic Method
##Extension Methods with Generic Classes
##Generic Structs
##Generic Delegates
###Another Generic Delegate Example
##Generic Interfaces
###An Example Using Generic Interfaces
###Generic Interface Implementations Must Be Unique
##Covariance
There are three types of *variance* - **covariance**, **contravariance**, and **invariance**.

**assignment compatibility**: every variable has a type assigned to it, and you can assign an object of a more derived type to a variable of one of its base types.

**Assignment compatibility** means that you can assign a reference of a more derived type to a variable of a less derived type.

This constant *relation* between the use of a derived type only as an output value and the validity of the constructed delegate is called **covariance**.
##Contravariance
This relation, allowing a more derived object where a less derived object is exprected, is called **contravariance**.
###Covariance and Contravariance in Interfaces
###More About Variance
___
#18. Enumerators and Iterators
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
___
#19. Introduction to LINQ
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
[W] peruse (pə-ro͞oz′)
>To look at carefully or critically:

- =check (out), con, examine, go over, inspect, scrutinize, study, survey, traverse, view.
- =Informal: case.
- Idiom: give a going-over.

You should `peruse` the list and become familiar with these powerful tools that can save you lots of time and effort. Then when you need to use them, you can look up the full documentation online.

###Signatures of the Standard Query Operators
[W] The standard query operators are methods declared in class *System.Linq.Enumerable*. These methods, however, `aren't just any methods` - they're extension methods that extend generic class IEnumerable<T>.
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
___
#20. Introduction to Asynchronous Programming

[W] asynchronism (ā-sĭng′krə-nĭz′əm), asynchrony (-krə-nē)
>Lack of temporal concurrence; absence of synchronism.

>asynchronism - the relation that exists when things occur at unrelated times; "the stimulus produced a desynchronizing of the brain waves"
- =asynchrony, desynchronisation, desynchronization, desynchronizing
- <>temporal relation - a relation involving time
- !=synchroneity, synchronicity, synchronisation, synchronism, synchronization, synchronizing, synchrony - the relation that exists when things occur at the same time; "the drug produces an increased synchrony of the brain waves"


##What Is Asynchrony?

When you start a program, the system creates a new **process** in memory. A **process** is the set of resources that comprise a running program. These include the virtual address space, file handlers, and a host of other things required for the program to run.

Inside the process, the system creates a *kernel object*, called a **thred**, which represents the actual excuting program. (*Thread* is short for **"thread of execution"**.) Once the process is set up, the system starts the thread executing at the first statement in method **Main**.

Other times, however, no new thread id created, but instead, *the execution of the code is reordered* to make better use of the single thread's capacity.

- C# 5.0
- async/await feature
- BackgroundWorker class
- .NET Task Parallel Library

###A Starting Example

using System.Threading.Tasks;

##The Structure of the async/await Feature

- synchronous
- asynchronous

aync/await feature: three components
- the calling method
- the async method
- the await expression

##What Is An async Method?

- method header: async
- await expressions
- three return types: void, Task, Task\<T>
- No out, no ref parameters
- lambda expressions, anonymous methods

async
- before the return type
- signal that the method contains await expressions
- contextual keyword (async can be an identifier)

[W] We can `generalize` this observation `to the following`, which we will `look at in more detail` shortly.

return types
- Task\<T>: read the *Task's Result* property
- Task: check on the *async* method's state
- void: fire and forget

- Task\<T> must return a value of type *T*

###The Flow of Control in an Async Method

In the meantime, the code in the calling method continues on its course, having received the *Task* object back from the *async* method. When it needs the actual result value, it references the *Result* property of the *Task* object. If, by that point, the *async* method has set that property, the calling method retrieves the value and continues on. <u>**Otherwise, it halts and waits for the property to be set before continuing on.**</u>

two confusing things
- return type: *await* returns the return type of the *async* method
- return: *async* method just exits without returning to anything

###The await Expression
###Cancelling an async Operation
###Exception Handling and the await Expression
###Waiting Synchronously for Tasks in the Calling Method
###Waiting Asynchronously for Tasks in the async Method
###The Task.Delay Method
##Async Operations in GUI Programs
###Task.Yield
##Using an async Lambda Expression

[W] backlog (băk′lŏg′, -lôg′)
>backlog - an accumulation of jobs not done or materials not processed that are yet to be dealt with (especially unfilled customer orders for products or services)
- <>aggregation, collection, accumulation, assemblage - several things grouped together or considered as a whole

If the handler code for a particular message takes a long time, a message `backlog` builds up in the message queue, and the program becomes unresponsive because none of the messages can be handled until the long-running handler is finished.

[W] lurch (lûrch)
>lurch - move abruptly; "The ship suddenly lurched to the left"

- =pitch, shift
- <>move - move so as to change position, perform a nontranslational motion; "He moved his hand slightly to the right"

When the programmer clicked the button, nothing appeared to happen at all, and when he tried to move the window around on the screen several seconds after clicking the button, the window was frozen on the screen and wouldn't move - until after the 4 seconds were done, when the window all of a sudden `lurched` to the new position.

[W] When you run the program, you'll find that its behavior matches the preceding description, `which is that` the button isn't disabled and the status label doesn't change, and if you try to move the window, it won't move until the 4 seconds have passed.

##A Full GUI Example
##The BackgroundWorker Class
###Example of the BackgroundWorker Class in a WPF Program
##Parallel Loops

[W] So, unfortunately, I've had to `settle for` `whetting your appetite` by introducing just two of its very simple constructs that you can learn and use quickly and easily.

##Other Asynchronous Programming Patterns

[W] There might still be occasions, however, `where` you'll need to use the older patters for producing asynchronous code.

[W] After learning these older patterns, `you'll have a greater appreciation for` how much simpler life is with the *async/await* feature.

##BeginInvoke and EndInvoke
###The Wait-Until-Done Pattern
###The AsyncResult Class
###The Polling Pattern
###The Callback Pattern
####The Callback Method
####Calling EndInvoke Inside the Callback Method
##Timers
___
#21. Namespaces and Assemblies
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
___
#22. Exceptions
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
___
#23. Preprocessor Directives
##What Are Preprocessor Directives?
##General Rules
##The #define and #undef Directives
##Conditional Compilation
##The Conditional Compilation Constructs
##Diagnostic Directives
##Line Number Directives
##Region Directives
##The #pragma warning Directive
___
#24. Reflection and Attributes
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
___
#25. Other Topics
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

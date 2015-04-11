# 1. An Introduction to Collections, Generics, and the Timing Class
## COLLECTIONS DEFINED

A collection is a *structured data type* that *stores data* and *provides operations* for *adding* data to the collection, *removing* data from the collection, *updating* data in the collection, as well as operations for setting and returning the values of *different attributes* of the collection.

#### two types

- linear
- nonlinear

#### properties

- Count

#### operations

- Add
- Insert
- Remove
- Clear
- Contains
- IndexOf

## COLLECTIONS DESCRIBED

#### linear collections

- direct access collections
- sequential access collections

#### nonlinear collections

- hierarchical collections
- grouped collections

### Direct Access Collections

#### array

- built-in data type
- class
- ArrayList

#### string

- immutable
- StringBuilder

#### struct (structure, records)

- methods
- Int32

### Sequential Access Collections

#### linear list

- two methods of traversing a list
- grocery list
- ordered
- unordered
- stack
- queue

#### stack

- push
- pop

#### queue

- EnQueue
- DeQueue
- priority queue

#### generalized indexed collections

- hash table
- dictionary

#### hash table

- hash function
- integer index
- HashTable

#### dictionary

- association
- associative array

### Hierarchical Collections

- level
- tree
- binary tree
- heap

#### tree

- node
- node's children
- file system

#### binary tree

- binary search tree

#### heap
- heap sort
### Group Collections

- nonlinear
- unordered
- set
- graph
- network

#### set

- unordered
- unique
- students in a class
- integers
- union
- intersection

#### graph

- nodes
- edges
- logistics
- job scheduling
- "Traveling Salesman" problem
- NP-complete problem (nondeterministic polynomial time)

#### network

- weight

## THE COLLECTIONBASE CLASS

[W] The class implicitly implements two interfaces necessary for building a Collection class, *ICollection* and *IEnumerable*, `leaving the programmer with having to` implement just those methods that are typically part of a Collection class.

### A Collection Class Implementation Using ArrayLists

> As *Don Knuth* (one of the pioneers of computer science) says, to paraphrase, _**you haven't really learned something well until you've taught it to a computer**_.
### Defining a Collection Class

[W] underlying (ŭn′dər-lī′ĭng) (겉으로 잘 드러나지는 않지만) 근본적인[근원적인]

1. underlying - in the nature of something though not readily apparent; "shortcomings inherent in our approach"; "an underlying meaning"
    - =implicit in, inherent
    - <->implicit, inexplicit - implied though not directly expressed; inherent in the nature of something; "an implicit agreement not to raise the subject"; "there was implicit criticism in his voice"; "anger was implicit in the argument"; "the oak is implicit in the acorn"
2.  underlying - located beneath or belowunderlying - located beneath or below            
    - <->subjacent - lying nearby but lower; "hills and subjacent valleys"
3.  underlying - being or involving basic facts or principles; "the fundamental laws of the universe"; "a fundamental incomatibility between them"; "these rudimentary truths"; "underlying principles"
    - =rudimentary, fundamental
    - <->basic - pertaining to or constituting a base or basis; "a basic fact"; "the basic ingredients"; "basic changes in public opinion occur because of changes in priorities"

The CollectionBase class provides an `underlying` data structure, **InnerList (an ArrayList)**, which you can use as a base for your class.
### Implementing the Collection Class
### Generic Programming
[T] Generic Programming: One solution to *code bloat* is the ability of **one value to take on multiple data types**, while **only providing one definition** of that value.
### Timing Tests
### An Oversimplified Timing Test
### Timing Tests for the .NET Environment
### A Timing Test Class
## SUMMARY
## EXERCISES
# 2. Arrays and ArrayLists
## ARRAY BASICS
### Declaring and Initializing Arrays
### Setting and Accessing Array Elements
### Methods and Properties for Retrieving Array Metadata
### Multidimensional Arrays
### Parameter Arrays
### Jagged Arrays
### The ArrayList Class
### Members of the ArrayList Class
### Using the ArrayList Class
## SUMMARY
# 3. Basic Sorting Algorithms
## SORTING ALGORITHMS
### An Array Class Test Bed
### Bubble Sort
### Examining the Sorting Process
### Selection Sort
### Insertion Sort
## TIMING COMPARISONS OF THE BASIC SORTINGALGORITHMS
## SUMMARY
## EXERCISES
# 4. Basic Searching Algorithms
## SEQUENTIAL SEARCHING
### Searching for Minimum and Maximum Values
### Making Sequential Search Faster: Self-Organizing Data
### Binary Search
### A Recursive Binary Search Algorithm
## SUMMARY
## EXERCISES
# 5. Stacks and Queues
## STACKS, A STACK IMPLEMENTATION AND THE STACK CLASS
### Stack Operations
### A Stack Class Implementation
## THE STACK CLASS
### The Stack Constructor Methods
### The Primary Stack Operations
### The Peek Method
### The Clear Method
### The Contains Method
### The CopyTo and ToArray Methods
### A Stack Class Example: Decimal toMultiple-Bases Conversion
## QUEUES, THE QUEUE CLASS AND A QUEUE CLASS IMPLEMENTATION
### Queue Operations
### A Queue Implementation
### The Queue Class: A Sample Application
### Sorting Data With Queues
### Priority Queues: Deriving From the Queue Class
## SUMMARY
## EXERCISES
# 6. The BitArray Class
## A MOTIVATING PROBLEM
## BITS AND BIT MANIPULATION
### The Binary Number System
### Manipulating Binary Numbers: The Bitwiseand Bit-shift Operators
## A BITWISE OPERATOR APPLICATION
### The BitShift Operators
## AN INTEGER-TO-BINARY CONVERTER APPLICATION
## A BIT SHIFT DEMONSTRATION APPLICATION
## THE BITARRAY CLASS
### Using the BitArray Class
### More BitArray Class Methods and Properties
## USING A BITARRAY TO WRITE THE SIEVE OF ERATOSTHENES
## COMPARISON OF BITARRAY VERSUS ARRAYFOR SIEVE OF ERATOSTHENES
## SUMMARY
## EXERCISES
# 7. Strings, the String Class, and the StringBuilder Class
## WORKING WITH THE STRING CLASS
### Creating String Objects
### Frequently Used String Class Methods
### The Split and Join Methods
### Methods for Comparing Strings
### Methods for Manipulating Strings
## THE STRINGBUILDER CLASS
### Constructing StringBuilder Objects
### Obtaining and Setting Informationabout StringBuilder Objects
### Modifying StringBuffer Objects
## COMPARING THE EFFICIENCY OF THE STRING CLASSTO STRINGBUILDER
## SUMMARY
## EXERCISES
# 8. Pattern Matching and Text Processing
## AN INTRODUCTION TO REGULAR EXPRESSIONS
### Working With Regular Expressions: An Overview
## QUANTIFIERS
## USING CHARACTER CLASSES
## MODIFYING REGULAR EXPRESSIONS USING ASSERTIONS
## USING GROUPING CONSTRUCTS
### Anonymous Groups
### Named Groups
### Zero-Width Lookahead and Lookbehind Assertions
## THE CAPTURESCOLLECTION CLASS
## REGULAR EXPRESSION OPTIONS
## SUMMARY
## EXERCISES
# 9. Building Dictionaries: The DictionaryBase Class and the SortedList Class
## THE DICTIONARYBASE CLASS
### Fundamental DictionaryBase ClassMethods and Properties
### Other DictionaryBase Methods
## THE GENERIC KEYVALUEPAIR CLASS
## THE SORTEDLIST CLASS
### Using the SortedList Class
## SUMMARY
## EXERCISES
# 10. Hashing and the Hashtable Class
## AN OVERVIEW OF HASHING
## CHOOSING A HASH FUNCTION
## SEARCHING FOR DATA IN A HASH TABLE
## HANDLING COLLISIONS
### Bucket Hashing
### Open Addressing
### Double Hashing
## THE HASHTABLE CLASS
### Instantiating and Adding Data to a Hashtable Object
### Retrieving the Keys and the Values SeparatelyFrom a Hash Table
### Retrieving a Value Based on the Key
### Utility Methods of the Hashtable Class
## A HASHTABLE APPLICATION: COMPUTER TERMS GLOSSARY
## SUMMARY
## EXERCISES
# 11. Linked Lists
## THE PROBLEM WITH ARRAYS
## LINKED LISTS DEFINED
## AN OBJECT-ORIENTED LINKED LIST DESIGN
### The Node Class
### The LinkedList Class
## LINKED LIST DESIGN MODIFICATIONS
### The Doubly Linked List
### The Circularly Linked List
## USING AN ITERATOR CLASS
### The New LinkedList Class
### Demonstrating the Iterator Class
## THE GENERIC LINKED LIST CLASS AND THE GENERIC NODE CLASS
### A Generic Linked List Example
## SUMMARY
## EXERCISES
# 12. Binary Trees and Binary Search Trees
## THE DEFINITION OF A TREE
### BINARY TREES
### Building a Binary Search Tree
### Traversing a Binary Search Tree
### Finding a Node and Minimum/Maximum Valuesin a Binary Search Tree
### Removing a Leaf Node From a BST
### Deleting a Node With One Child
### Deleting a Node With Two Children
## SUMMARY
## EXERCISES
# 13. Sets
## FUNDAMENTAL SET DEFINITIONS, OPERATIONS AND PROPERTIES
### Set Definitions
### Set Operations
### Set Properties
## A FIRST SET CLASS IMPLEMENTATION USING A HASH TABLE
### Class Data Members and Constructor Method
### The Add Method
### The Remove and Size Methods
### The Union Method
### The Intersection Method
### The isSubset Method
### The Difference Method
### A Program to Test the CSet Implementation
## A BITARRAY IMPLEMENTATION OF THE CSET CLASS
### Overview of Using a BitArray Implementation
## The BitArray Set Implementation
## SUMMARY
## EXERCISES
# 14. Advanced Sorting Algorithms
## THE SHELLSORT ALGORITHM
## THE MERGESORT ALGORITHM
## THE HEAPSORT ALGORITHM
### Building a Heap
## THE QUICKSORT ALGORITHM
### The QuickSort Algorithm Described
### Code for the QuickSort Algorithm
### An Improvement to the QuickSort Algorithm
## SUMMARY
## EXERCISES
# 15. Advanced Data Structures and Algorithms for Searching
## AVL TREES
### AVL Tree Fundamentals
### The AVL Tree Implementation
### RED–BLACK TREES
### Red–Black Tree Rules
### Red–Black Tree Insertion
### Red–Black Tree Implementation Code
## SKIP LISTS
### Skip List Fundamentals
### Skip List Implementation
## SUMMARY
## EXERCISES
# 16. Graphs and Graph Algorithms
## GRAPH DEFINITIONS
### REAL WORLD SYSTEMS MODELED BY GRAPHS
## THE GRAPH CLASS
### Representing Vertices
### Representing Edges
### Building a Graph
## A FIRST GRAPH APPLICATION: TOPOLOGICAL SORTING
### An Algorithm for Topological Sorting
### Implementing the Algorithm
## SEARCHING A GRAPH
### Depth-First Search
### Breadth-First Search
## MINIMUM SPANNING TREES
### A Minimum Spanning Tree Algorithm
## FINDING THE SHORTEST PATH
### Weighted Graphs
### Dijkstra’s Algorithm for Determining the Shortest Path
### Code for Dijkstra’s Algorithm
## SUMMARY
## EXERCISES
# 17. Advanced Algorithms
## DYNAMIC PROGRAMMING
### A Dynamic Programming Example: ComputingFibonacci Numbers
### Finding the Longest Common Substring
### The Knapsack Problem
## GREEDY ALGORITHMS
### A First Greedy Algorithm Example:The Coin-Changing Problem
### Data Compression Using Huffman Coding
### A Greedy Solution to the Knapsack Problem
## SUMMARY
## EXERCISES
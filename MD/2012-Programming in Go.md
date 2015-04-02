# Tables
## 2.1. Go’s Keywords
## 2.2. Go’s Predefined Identifiers
## 2.3. Boolean and Comparison Operators
## 2.4. Arithmetic Operators Applicable to All Built-In Numbers
## 2.5. Go’s Integer Types and Ranges
## 2.6. Arithmetic Operators Applicable Only to Built-In Integer Types
## 2.7. Go’s Floating-Point Types
## 2.8. The Math Package’s Constants and Functions #1
## 2.9. The Math Package’s Constants and Functions #2
## 2.10. The Math Package’s Constants and Functions #3
## 2.11. The Complex Math Package’s Functions
## 3.1. Go’s String and Character Escapes
## 3.2. String Operations
## 3.3. The Fmt Package’s Print Functions
## 3.4. The Fmt Package’s Verbs
## 3.5. The Fmt Package’s Verb Modifiers
## 3.6. The Strings Package’s Functions #1
## 3.7. The Strings Package’s Functions #2
## 3.8. The Strconv Package’s Functions #1
## 3.9. The Strconv Package’s Functions #2
## 3.10. The Utf8 Package’s Functions
## 3.11. The Unicode Package’s Functions
## 3.12. The Regexp Package’s Functions
## 3.13. The Regexp Package’s Escape Sequences
## 3.14. The Regexp Package’s Character Classes
## 3.15. The Regexp Package’s Zero-Width Assertions
## 3.16. The Regexp Package’s Quantifiers
## 3.17. The Regexp Package’s Flags and Groups
## 3.18. The *regexp.Regexp Type’s Methods #1
## 3.19. The *regexp.Regexp Type’s Methods #2
## 4.1. Slice Operations
## 4.2. The Sort Package’s Functions
## 4.3. Map Operations
## 5.1. Built-In Functions
## 8.1. Format Speed and Size Comparisons
## 8.2. The Fmt Package’s Scan Functions
# Introduction
[T] Duck Typing
>When I see a bird that walks like a duck and swims like a duck and quacks like a duck, I call that bird a duck. (Heim, Michael (2007). Exploring Indiana Highways. Exploring America's Highway. p. 68. ISBN 978-0-9744358-3-1.)
## Why Go?
## The Structure of the Book
## Acknowledgments
# 1. An Overview in Five Examples
## 1.1. Getting Going
## 1.2. Editing, Compiling, and Running
## 1.3. Hello Who?
## 1.4. Big Digits—Two-Dimensional Slices
## 1.5. Stack—Custom Types with Methods
## 1.6. Americanise—Files, Maps, and Closures
## 1.7. Polar to Cartesian—Concurrency
## 1.8. Exercise
# 2. Booleans and Numbers
## 2.1. Preliminaries
### 2.1.1. Constants and Variables
## 2.2. Boolean Values and Expressions
## 2.3. Numeric Types
### 2.3.1. Integer Types
### 2.3.2. Floating-Point Types
## 2.4. Example: Statistics
### 2.4.1. Implementing Simple Statistics Functions
### 2.4.2. Implementing a Basic HTTP Server
## 2.5. Exercises
# 3. Strings
## 3.1. Literals, Operators, and Escapes
## 3.2. Comparing Strings
## 3.3. Characters and Strings
## 3.4. Indexing and Slicing Strings
## 3.5. String Formatting with the Fmt Package
### 3.5.1. Formatting Booleans
### 3.5.2. Formatting Integers
### 3.5.3. Formatting Characters
### 3.5.4. Formatting Floating-Point Numbers
### 3.5.5. Formatting Strings and Slices
### 3.5.6. Formatting for Debugging
## 3.6. Other String-Related Packages
### 3.6.1. The Strings Package
### 3.6.2. The Strconv Package
### 3.6.3. The Utf8 Package
### 3.6.4. The Unicode Package
### 3.6.5. The Regexp Package
## 3.7. Example: M3u2pls
## 3.8. Exercises
# 4. Collection Types
## 4.1. Values, Pointers, and Reference Types
## 4.2. Arrays and Slices
### 4.2.1. Indexing and Slicing Slices
### 4.2.2. Iterating Slices
### 4.2.3. Modifying Slices
### 4.2.4. Sorting and Searching Slices
## 4.3. Maps
### 4.3.1. Creating and Populating Maps
### 4.3.2. Map Lookups
### 4.3.3. Modifying Maps
### 4.3.4. Key-Ordered Map Iteration
### 4.3.5. Map Inversion
## 4.4. Examples
### 4.4.1. Example: Guess Separator
### 4.4.2. Example: Word Frequencies
## 4.5. Exercises
# 5. Procedural Programming
## 5.1. Statement Basics
### 5.1.1. Type Conversions
### 5.1.2. Type Assertions
## 5.2. Branching
### 5.2.1. If Statements
### 5.2.2. Switch Statements
## 5.3. Looping with For Statements
## 5.4. Communication and Concurrency Statements
### 5.4.1. Select Statements
## 5.5. Defer, Panic, and Recover
### 5.5.1. Panic and Recover
## 5.6. Custom Functions
### 5.6.1. Function Arguments
### 5.6.2. The init() and main() Functions
### 5.6.3. Closures
### 5.6.4. Recursive Functions
### 5.6.5. Choosing Functions at Runtime
### 5.6.6. Generic Functions
### 5.6.7. Higher Order Functions
## 5.7. Example: Indent Sort
## 5.8. Exercises
# 6. Object-Oriented Programming
## 6.1. Key Concepts
## 6.2. Custom Types
### 6.2.1. Adding Methods
### 6.2.2. Validated Types
## 6.3. Interfaces
### 6.3.1. Interface Embedding
## 6.4. Structs
### 6.4.1. Struct Aggregation and Embedding
## 6.5. Examples
### 6.5.1. Example: FuzzyBool—A Single-Valued Custom Type
### 6.5.2. Example: Shapes—A Family of Custom Types
### 6.5.3. Example: Ordered Map—A Generic Collection Type
## 6.6. Exercises
# 7. Concurrent Programming
## 7.1. Key Concepts
## 7.2. Examples
### 7.2.1. Example: Filter
### 7.2.2. Example: Concurrent Grep
### 7.2.3. Example: Thread-Safe Map
### 7.2.4. Example: Apache Report
### 7.2.5. Example: Find Duplicates
## 7.3. Exercises
# 8. File Handling
## 8.1. Custom Data Files
### 8.1.1. Handling JSON Files
### 8.1.2. Handling XML Files
### 8.1.3. Handling Plain Text Files
### 8.1.4. Handling Go Binary Files
### 8.1.5. Handling Custom Binary Files
## 8.2. Archive Files
### 8.2.1. Creating Zip Archives
### 8.2.2. Creating Optionally Compressed Tarballs
### 8.2.3. Unpacking Zip Archives
### 8.2.4. Unpacking Optionally Compressed Tarballs
## 8.3. Exercises
# 9. Packages
## 9.1. Custom Packages
### 9.1.1. Creating Custom Packages
### 9.1.2. Importing Packages
## 9.2. Third-Party Packages
## 9.3. A Brief Survey of Go’s Commands
## 9.4. A Brief Survey of the Go Standard Library
### 9.4.1. Archive and Compression Packages
### 9.4.2. Bytes and String-Related Packages
### 9.4.3. Collection Packages
### 9.4.4. File, Operating System, and Related Packages
### 9.4.5. Graphics-Related Packages
### 9.4.6. Mathematics Packages
### 9.4.7. Miscellaneous Packages
### 9.4.8. Networking Packages
### 9.4.9. The Refiect Package
## 9.5. Exercises
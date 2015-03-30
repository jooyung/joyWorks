# Introduction
## Who This Book Is For
## How This Book Is Structured
## Conventions
## Downloading the Code
## Contacting the Author
# 1. Getting and Understanding Your Tools
## Obtaining Visual Studio 2012
## Installing SQL Server 2012 Express
## Installing and Attaching the AdventureWorks Sample Database
### Installing the AdventureWorks Database
### Attaching the AdventureWorks Sample Database
## Summary
# 2. Understanding Relational Databases
## What Is a Database?
## Choosing Between a Spreadsheet and a Database
## Why Use a Database?
## Benefits of Using a Relational Database Management System
## Comparing Desktop and Server RDBMS Systems
### Desktop Databases
### Server Databases
## The Database Life Cycle
## Mapping Cardinalities
## Understanding Keys
### Primary Keys
### Foreign Keys
## Understanding Data Integrity
### Entity Integrity
### Referential Integrity
## Normalization Concepts
## Drawbacks of Normalization
## Summary
# 3. Creating Database and Tables
## Launching SQL Server Management Studio
## Types of SQL Server Databases
## The Architecture of a SQL Server Database
## Creating a Database in a Simple Way
## Exploring Database Properties
## Creating Database with Your Own Settings
### Understanding Table Fundamentals
### SQL Server Data Types for Table Columns
### Creating a Table in SQL Server
### Adding an IDENTITY Column in a Table
## Summary
# 4. Manipulating Database Data
## Inserting Data
### Try It: Inserting a New Row
### How It Works
## Inserting Multiple Rows Through a Single INSERT Statement
## Updating Data
### Try It: Updating a Row
### How It Works
## Deleting Data
## Summary
# 5. Querying Databases
## Retrieving Data
### Try It: Running a Simple Query
### How It Works
### Using the WHERE Clause
### Using Comparison Operators
## Sorting Data
### Try It: Writing an Enhanced Query
### How It Works
## GROUP BY Clause
### Try It: Using the GROUP BY Clause
### How It Works
## Pattern Matching
### Try It: Using the Percent (%) Character
### How It Works
### Try It: Using the Underscore (_) Character
### How It Works
### Try It: Using the Square Bracket ([]) Characters
### How It Works
### Try It: Using the Square Bracket and Caret ([^ ]) Characters
### How It Works
## Aggregate Functions
### Try It: Using the MIN, MAX, SUM, and AVG Functions
### How It Works
### Try It: Using the COUNT Function
### How It Works
## DATETIME Functions
### Try It: Using T-SQL Date and Time Functions
### How It Works
## List Operator
### Try It: Using the IN Operator
### How It Works
### Try It: Using the NOT IN Operator
### How It Works
## Range Operator
### Try It: Using the BETWEEN Operator
### How It Works
### Try It: Using the NOT BETWEEN Operator
### How It Works
## Finding NULL Values
### Try It: Using IS NULL Operator
### How It Works
### Try It: Using the IS NOT NULL Operator
### How It Works
## Joins
### Inner Joins
### Table Aliasing
### Outer Joins
### Other Joins
## Summary
# 6. Using Stored Procedures
## Creating Stored Procedures
### Try It: Working with Stored Procedures in SQL Server
### How It Works
### Try It: Creating a Stored Procedure with an Input Parameter
### How It Works
### Try It: Creating a Stored Procedure with an Output Parameter
### How It Works
## Modifying Stored Procedures
### Try It: Modifying Your Trivial Stored Procedure
### How It Works
## Displaying the Definition of Stored Procedures
### Try It: Viewing the Definition of Our Stored Procedure
### How It Works
## Renaming Stored Procedures
### Try It: Renaming a Stored Procedure
### How It Works
## Deleting Stored Procedures
### Try It: Deleting a Stored Procedure
## Summary
# 7. Using XML
## Defining XML
## Why XML
## Benefits of Storing Data As XML
## Understanding XML Documents
## Understanding the XML Declaration
## Converting Relational Data to XML
### Using FOR XML RAW
### Try It: Using FOR XML RAW (Attribute-centric)
### How It Works
### Try It: Using FOR XML RAW (Element-centric)
### How It Works
### Try It: Renaming the row Element
### How It Works
### Observations About XML RAW Formatting
### Using FOR XML AUTO
### Try It: Using FOR XML AUTO
### How It Works
### Observations About XML AUTO Formatting
## Using the XML Datatype
### Try It: Creating a Table to Store XML
### How It Works
### Try It: Storing and Retrieving XML Documents
### How It Works
## Summary
# 8. Understanding Transactions
## What Is a Transaction?
### When to Use Transactions
## Understanding ACID Properties
### Transaction Design
## Transaction State
### Specifying Transaction Boundaries
### T-SQL Statements Allowed in a Transaction
### Local Transactions in SQL Server 2012
### Distributed Transactions in SQL Server 2012
### Guidelines to Code Efficient Transactions
### How to Code Transactions
### Coding Transactions in T-SQL
## Summary
# 9. Building Windows Forms Applications
## Understanding Windows Forms
### User Interface Design Principles
### Best Practices for User Interface Design
### Position of Controls
### Fonts
### Images and Icons
### Working with Windows Forms
### Understanding the Design and Code Views
### Sorting Properties in the Properties Window
### Categorized View
## Setting the Properties of Solutions, Projects, and Windows Forms
### Working with Controls
## Setting Dock and Anchor Properties
### Dock Property
### Anchor Property
### Adding a New Form to the Project
### Implementing an MDI Form
## Summary
# 10. Introduction to ADO.NET
## Understanding ADO.NET
### The Motivation Behind ADO.NET
### Moving from ADO to ADO.NET
### ADO.NET Isn’t a New Version of ADO
### ADO.NET and the .NET Base Class Library
### Understanding ADO.NET Architecture
### Understanding .NET Data Providers
### Understanding the SQL Server Data Provider
### Understanding the OLE DB Data Provider
### Understanding the ODBC Data Provider
## Data Providers Are APIs
## Summary
# 11. Handling Exceptions
## The System.Exception Class
## What Causes an Exception to Occur
### Try It: Creating a File-Handling Application
### Try It: Causing an Exception to Occur and Observing the Behavior
## Exploring the Type, Message, and StackTrace Properties of an Exception
## Handling Exceptions
### Try It: Adding Exception-Handling Statements
### How It Works
## Summary
# 12. Making Connections
## Introducing the Data Provider Connection Classes
## Connecting to SQL Server 2012 with SqlConnection
### Try It: Using SqlConnection
### How It Works
### Debugging Connections to SQL Server
### Security and Passwords in SqlConnection
### How to Use SQL Server Security
### Connection String Parameters for SqlConnection
### Connection Pooling
## Improving Your Use of Connection Objects
### Using the Connection String in the Connection Constructor
### Displaying Connection Information
### Try It: Displaying Connection Information
### How It Works
## Connecting to SQL Server with OleDbConnection
### Try It: Connecting to SQL Server with the OLE DB Data Provider
### How It Works
## Summary
# 13. Executing ADO.NET Commands to Retrieve Data
## Creating a Command
### Assigning Text to a Command
## Executing Commands
### Executing Commands with a Scalar Query
## Try It: Using the ExecuteScalar Method
### Executing Commands with Multiple Results
### Executing Nonquery Statements
## Working with Stored Procedures
### Creating a Stored Procedure to Perform a Delete Operation
## Summary
# 14. Using Data Readers
## Understanding Data Readers in General
### Using Ordinal Indexers
### Using Column Name Indexers
### Using Typed Accessor Methods
### Getting Data About Data
### Getting Data About Tables
### Using Multiple Result Sets with a Data Reader
## Summary
# 15. Using Data Sets and Data Adapters
## Understanding the Object Model
### Data Sets vs. Data Readers
### A Brief Introduction to Data Sets
### A Brief Introduction to Data Adapters
### A Brief Introduction to Data Tables, Data Columns, and Data Rows
## Working with Data Sets and Data Adapters
### Filtering and Sorting in a Data Set
### Comparing FilterSort to PopDataSet
### Using Data Views
### Modifying Data in a Dataset
### Propagating Changes to a Data Source
### InsertCommand Property
### Command Builders
### Concurrency
## Using Data Sets and XML
### Understanding Typed and Untyped Data Sets
## Summary
# 16. Using Data Controls with ASP.NET Applications
## Understanding Web Functionality
### The Web Server
## Understanding ASP.NET and Web Pages
## Understanding the Visual Studio 2012 Web Site Types
## Understanding the Layout of an ASP.NET Web Site
## Understanding the Web UI of ASP.NET Web Apps
## Using the Repeater Control
## Summary
# 17. Working with Text and Binary Data
## Understanding SQL Server Text and Binary Data Types
## Storing Images in a Database
### Retrieving Images from a Database
### Working with Text Data
### Retrieving Data from Text Columns
## Summary
# 18. Using LINQ
## Introduction to LINQ
## Architecture of LINQ
## LINQ Project Structure
### Using LINQ to Objects
### Using LINQ to SQL
### Using LINQ to XML
## Summary
# 19. Using the ADO.NET Entity Framework
## Understanding ADO.NET Entity Framework 5.0
## Understanding the Entity Data Model
### Working with the Entity Data Model
## Summary
# 20. Using the CLR in SQL Server
## Introducing SQL CLR
## Choosing Between T-SQL and SQL CLR
## Enabling SQL CLR Integration
## Creating a SQL CLR Stored Procedure
### Try It: Creating a SQL CLR Stored Procedure Using C#
### How It Works
## Deploying a SQL CLR Stored Procedure into SQL Server
### Try It: Deploying SQL CLR C# Stored Procedure in SQL Server
### How It Works
## Executing the SQL CLR Stored Procedure
### Try It: Executing the SQL CLR Stored Procedure
### How It Works
## Summary
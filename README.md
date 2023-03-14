# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @akowalczuk/lotide`

**Require it:**

`const _ = require('@akowalczuk/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...)`: a simple function for returning the first item in an array. 
* `tail(...)`: a function for returning the tail of an array (all items AFTER the head).
* `middle(...)`: a function for returning the middle value(s) of an array. 
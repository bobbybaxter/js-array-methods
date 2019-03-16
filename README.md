# JS Array Methods
One-page locally hosted site to practice Javascript array methods.

### Under the hood
- `const struggleBus` is initally defined as an empty array
- `const addPassenger` is a function that adds a passenger to `struggleBus` based the passenger's seat preference: front, middle, back.  if front; we `.unshift` the passenger to the front of the array, if back; we `.push` the passenger to the back of the array, and if middle; we use the follow function:
- `const addToExactMiddle` finds the exact middle of the array then uses `.splice` to add the passenger there
- `const unloadPassenger` is a function to remove a passenger from either the front or the back of the bus
- `const allAboard` is a function that defines a `busFare` then creates an array of the `validPassengers`, or the passengers that have enough `busFare` in their `wallet` parameter, while also subtracting the `busFare` from their `wallet`.
- `const busBuilder` creates cards for each passenger and displays them on the DOM

### Result
- `const init` initializes our page by first adding our 5 passengers with `addPassenger()` based on their seat preference, letting them on the bus and taking the `busFare` from their `wallet` if they have the money, then printing the results to the DOM with `busBuilder()` (with the top being the front of the bus)

## Screenshots
![image of javascript array methods website](https://raw.githubusercontent.com/bobbybaxter/js-array-methods/master/img/js-array-methods-screenshot.png)

## Getting Started
Clone the repo:
```
$git clone https://github.com/bobbybaxter/js-array-methods
```

### Prerequisites
Download HTTP Server, to be able to serve the site locally in your browser:
```
$npm install -g http-server
```

## Running
Browse to the js-array-methods/ directory and run HTTP Server by typing the following command into the terminal:
```
$ hs -p 5000
```

In your web browser, copy and paste this:

 `localhost:5000`

# Cryptosquare

#### Converts a text string into a crypto message

#### By Phil Mass & Scott Bergler

## Description

This program takes a string and encrypts it using a cryptosquare

### Specifications:
#### Spec: lowercase input
- [x] ** Expect: ** preprocessInput("I like code.") === "i like code.";

#### Spec: strip spaces and punctuation from string
- [x] ** Expect: ** preprocessInput("I like code.") === "ilikecode";

#### Spec: determine the grid size, smallest square that fits input size
- [x] ** Expect: ** findSquare(9) === 3;

#### Spec: map string to grid
- [x] ** Expect: ** mapStringToGrid("ilikecode") === row0="ili", row1="kec", row2="ode"

#### Spec: extract crypto string
- [x] ** Expect: ** extractCrypto(row0="ili", row1="kec", row2="ode") === "ikole dice"

#### process input to crypto string
- [x] ** Expect: ** cryptoController("I like code.") === "ikole dice"


## Setup/Installation Requirements
Not available yet.

## Known Bugs

## Support and contact details

Don't do it.

## Technologies Used

HTML, CSS, & Javascript.

### License

Licensed under the MIT license.

Copyright (c) 2018 ** Scott Bergler & Phil Mass **

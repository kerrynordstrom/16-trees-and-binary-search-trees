## 15 - Binary Trees and Traversal Methods

### How to Use

To start this app, clone this repo from 

  `http://www.github.com/kerrynordstrom/15-binary-trees`

install all necessary packages with 

  `npm install`

And run any available tests with

  `npm run test`

### Binary Tree Structure

This program is built with a simple binary tree that has at most four levels of depth.  In this program, it is traversed in-order with a find function, pre-order with a function that concatenates the resulting values to a string, and post-order by pushing all found values to an array.

                                11
                              /   \
                            12    13
                                 / \
                                14  15
                                    /
                                  11
                        

### Module

This program exports one module which contains the binary tree constructor and its prototype methods: find, concatToString, and pushToArray.

### Methods

#### Find In-Order Traversal - Left -> Root -> Right

This method uses an in order traversing method which in the case of the above binary tree will produe a result of one node value found via the pattern of left to root to right.  

Example: If fourteen is the value to be found, it will follow `12, 11, 14` and then return `14`

#### Big O

Time: O(n)
Space: O(nlogn)

### String - Pre Order Traversal - Root -> Left -> Right

This method uses a pre order order traversing method which in the case of the above binary tree will produe as result, a string concatenating all nodes succeeding the root value passed as argument with a line break in between each value.  

Example: If eleven is the argument root node, the result will be `'11\n12\n13\n14\n15\n11'`

        If fifteen is the argument root node, the result will be `'15\n11'`

#### Big O

Time: O(n)
Space: O(nlogn)


### Array Post Order Traversal - Left -> Right -> Root

This method uses a post order order traversing method which in the case of the above binary tree will produe as result, an array which indexes all nodes succeeding the root value passed as argument. 

Example: If eleven is the argument root node, the result will be `[12, 14, 11, 15, 13, 11]`

        If duplicateEleven is the argument root node, the result will be `[11]`

#### Big O

Time: O(n)
Space: O(nlogn)

### Tests

#### Find
-Find method should traverse tree and return the first iteration of the node even if there is another iteration elsewhere in the tree
-Find method should traverse tree and return null if value is not present
-Find method should traverse tree and return null if no value provided

#### To String
-String method should traverse tree and create string composed of all values with a newline break in between each value.
-String method should traverse tree beginning at intermediate root node, then create string composed of all values with a newline break in between each value.
-String method should provide empty string as argument even if nothing is passed to function initially.


#### To Array
-Array method should traverse tree and push node values to array
-Array method should be able to take in populated array, then traverse tree and push remaining values it finds to the end of this argument array
-Array method should return an array with a single value if no children are present

####  Documentation  
  * in your README, write documentation for you data structures
  * your documentation should includes code block usage examples
  * provide instructions for:
    * installing and using your data structure
    * accessing each method
    * running your tests


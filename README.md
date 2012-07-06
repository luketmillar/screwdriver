Over the last few years. I found that it didn't matter which project I was working on, I was rewriting the same functions over and over again. Enough of that.

### Introducing screwdriver.js

Screwdriver.js is a grabbag of JavaScript utilities.

Contained herein are the following utilities:

#### Extension Methods
* String
* Array
* Object

#### Data Structures
* LinkedHashMap

# String.prototype

### .startsWith( str ) 
> Determines whether the string begins with the given substring.
> #### Arguments
> **str** - The substring to search for.
> #### Returns
> **bool** - Whether or not the string starts with **str**.
> ```
> "screwdriver".startsWith("screw"); // true
> "screwdriver".startWith("bolt"); // false
> ```

***

### .endsWith( str ) 
> Determines whether the string ends with the given substring.
> #### Arguments
> **str** - The substring to search for.
> #### Returns
> **bool** - Whether or not the string ends with **str**.
> ```
> "screwdriver".endsWith("driver"); // true
> "screwdriver".endsWith("passenger"); // false
> ```

***

### .format( arg0, arg1, arg2, ... ) 
> Replaces placeholder strings with the arguments passed in.
> _Placeholders are of the format **{i}** with **i** being the index of the argument with which to replace it._
> #### Arguments
> **args** - Any number of string arguments to replace the corresponding placeholders.
> #### Returns
> **string** - The formatted string with all of the placeholders filled in with values.

> ```
> "I like {0} and {1}.".format("apples", "bananas"); // "I like apples and bananas."
> "I like {0} and {1}. She just likes {0}.".format("apples", "bananas"); // "I like apples and bananas. She just likes apples."
> ```

# Array.prototype

### .shuffle() 
> Randomly shuffles the contents of the array in place.
> #### Returns
> **array** - The shuffled array. Note: the array is shuffled in place.
> ```
> [1, 2, 3, 4].shuffle(); // [2, 4, 3, 1]
> ```

***

### .max() 
> Gets the max value from the array.
> #### Returns
> **object** - The max value of the array.
> ```
> [1, 2, 3, 4].max(); // 4
> [-3, -2, -5].max(); // -2
> ['a', 'b', 'c'].max(); // 'c'
> ```

***

### .min() 
> Gets the min value from the array.
> #### Returns
> **object** - The min value of the array.
> ```
> [1, 2, 3, 4].min(); // 1
> [-3, -2, -5].min(); // -5
> ['a', 'b', 'c'].min(); // 'a'
> ```

***

### .isEmpty() 
> Determines whether the array has any elements.
> #### Returns
> **bool** - Whether or not the array has any elements.
> ```
> [].isEmpty(); // true
> [1, 2, 3, 4].isEmpty(); // false
> [1].isEmpty(); // false
> [null].isEmpty(); // false
> ```


# Object.prototype

### .isEmpty() 
> Determines whether the object has any children.
> #### Returns
> **bool** - Whether or not the array has any elements.
> ```
> {}.isEmpty(); // true
> { a: true }.isEmpty(); // false
> { a: null }.isEmpty(); // false
> ```

# LinkedHashMap

An ordered HashMap. This version lets you add a MAX length of the list. Can be used as an LRU Cache.

### .clear()
> Empties the entire hashmap
> ```
> lhm.put('key', 'value');
> lhm.size(); // 1
> lhm.clear();
> lhm.size(); // 0
> ```

### .size()
> Gets the number of elements in the hashmap
> #### Returns
> **int** - The number of elements in the hashmap
> ```
> lhm.size(); // 0
> lhm.put('key', 'value');
> lhm.size(); // 1
> ```

### .isEmpty()
> Determines if there are zero elements in the hashmap
> #### Returns
> **bool** - Whether or not there are zero elements in the hashmap
> ```
> lhm.isEmpty(); // true
> lhm.put('key', 'value');
> lhm.isEmpty(); // false
> lhm.clear();
> lhm.isEmpty(); // true
> ```

### .put( key, value )
> Adds a key and value pair to the hashmap. The elements in the hashmap are stored in the order they were added.
> #### Arguments
> **key** - key with which the specified value is to be associated
> **value** - value to be associated with the specified key
> #### Returns
> **object** - the previous value associated with key or null if there was no mapping for key
> ```
> lhm.put('key', 'value'); // null
> lhm.get('key'); // 'value'
> lhm.put('key', 'value2'); // 'value'
> lhm.size(); // 1
> ```

### .remove( key )
> Removes the value associated with this key.
> #### Arguments
> **key** - key for which to remove the associated value
> #### Returns
> **object** - the value that just got removed or null if there was no mapping for the key
> ```
> lhm.put('key', 'value');
> lhm.get('key'); // 'value'
> lhm.get('key2'); // null
> ```

### .get( key )
> Gets the value associate with this key, or null if there is no mapping for the key.
> #### Arguments
> **key** - key for which to search for an associated value
> #### Returns
> **object** - the value associated with key or null if there was no mapping for key
> ```
> lhm.put('key', 'value');
> lhm.get('key'); // 'value'
> lhm.get('key2'); // null
> ```

### .containsKey( key )
> Determines if there is a value mapping for this key in the hashmap.
> #### Arguments
> **key** - key to search for
> #### Returns
> **bool** - whether or not there is a value mapping for this key
> ```
> lhm.containsKey('key'); // false
> lhm.put('key', 'value');
> lhm.containsKey('key'); // true
> lhm.containsKey('key2'); // false
> ```

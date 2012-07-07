Over the last few years, I found that it didn't matter which project I was working on, there were a few functions that I was writing over and over again. Enough of that.

### Introducing screwdriver.js

screwdriver.js contains the following utilities:

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
> 'screwdriver'.startsWith('screw'); // true
> 'screwdriver'.startWith('bolt'); // false
> ```

***

### .endsWith( str ) 
> Determines whether the string ends with the given substring.
> #### Arguments
> **str** - The substring to search for.
> #### Returns
> **bool** - Whether or not the string ends with **str**.
> ```
> 'screwdriver'.endsWith('driver'); // true
> 'screwdriver'.endsWith('passenger'); // false
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
> 'I like {0} and {1}.'.format('apples', 'bananas'); // 'I like apples and bananas.'
> 'I like {0} and {1}. She just likes {0}.'.format('apples', 'bananas'); // 'I like apples and bananas. She just likes apples.'
> ```

***

### .isEmail() 
> Validates that the string is a properly formatted email address.
> #### Returns
> **bool** - Whether or not the string is a valid email address

> ```
> 'screw@driver.com'.isEmail(); // true
> 'screwdriver.com'.isEmail(); // false
> ```

***

### .isPhoneNumber() 
> Validates that the string is a properly formatted phone number.
> #### Returns
> **bool** - Whether or not the string is a valid phone number

> ```
> '555 555 5555'.isPhoneNumber(); // true
> '(555) 555-5555'.isPhoneNumber(); // true
> '555-555-5555'.isPhoneNumber(); // true
> '55 55 55 55 55'.isPhoneNumber(); // false
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

***

### .peek() 
> Returns the element at the top of the stack without removing it
> #### Returns
> **object** - Element at the top of the stack. Null if the stack is empty.
> ```
> [1, 2, 3, 4].peek(); // 4
> [].peek(); // null
> ```

***

### .search( object ) 
> Finds the 1-based index of the object in the stack.
> #### Returns
> **int** - 1-based index of the object in the stack calculated from the top of the stack. -1 if the item is not found in the stack.
> ```
> [1, 2, 1, 3].search(3); // 1
> [1, 2, 1, 3].search(1); // 2
> [1, 2, 1, 3].search(0); // -1
> ```

# Object.prototype

### .isIdenticalTo( obj ) 
> Determines if the object is identical to **obj**
> #### Arguments
> **obj** - The compare object.
> #### Returns
> **bool** - Whether or not the two objects have identical values. This is a recursive check.
> ```
> {}.isIdenticalTo({}); // true
> { a: 1 }.isIdenticalTo({ a: 1 }); // true
> { a: 1, b: 2 }.isIdenticalTo({ a: 1 }); // false
> ```

***

### .duplicate() 
> Creates a new object with identical recursive properties
> #### Returns
> **object** - A new object with all of the property values copied. The object is completely duplicated in memory.
> ```
> var a = { a: 1 }.duplicate();
> a.isIdenticalTo({ a: 1 }); // true
> a === { a: 1 }; // false
> ```

***

### .isEmpty() 
> Determines whether the object has any children.
> #### Returns
> **bool** - Whether or not the object has any elements.
> ```
> {}.isEmpty(); // true
> { a: true }.isEmpty(); // false
> { a: null }.isEmpty(); // false
> ```

***

### .size() 
> Determines the number of children the object has
> #### Returns
> **int** - The number of children in the object
> ```
> {}.size(); // 0
> { a: 1 }.size(); // 1
> { a: 1, b: 2 }.size(); // 2
> ```

***

### .isArray() 
> Determines if the object is of type array
> #### Returns
> **bool** - Whether or not the object is an array
> ```
> [].isArray(); // true
> {}.isArray(); // false
> ```

# LinkedHashMap

An ordered HashMap.

### .clear()
> Empties the entire hashmap
> ```
> lhm.put('key', 'value');
> lhm.size(); // 1
> lhm.clear();
> lhm.size(); // 0
> ```

***

### .size()
> Gets the number of elements in the hashmap
> #### Returns
> **int** - The number of elements in the hashmap
> ```
> lhm.size(); // 0
> lhm.put('key', 'value');
> lhm.size(); // 1
> ```

***

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

***

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

***

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

***

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

***

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

***

### .peekFirst()
> Retrieves the first value added to the hashmap
> #### Returns
> **object** - the first value added to the hashmap or null if the hashmap is empty
> ```
> lhm.peekFirst(); // null
> lhm.put('key', 'value');
> lhm.peekFirst(); // 'value'
> lhm.put('key2', 'value2');
> lhm.peekFirst(); // 'value'
> lhm.remove('key');
> lhm.peekFirst(); // 'value2'
> ```

***

### .peekLast()
> Retrieves the last value added to the hashmap
> #### Returns
> **object** - the last value added to the hashmap or null if the hashmap is empty
> ```
> lhm.peekLast(); // null
> lhm.put('key', 'value');
> lhm.peekLast(); // 'value'
> lhm.put('key2', 'value2');
> lhm.peekLast(); // 'value2'
> lhm.remove('key2');
> lhm.peekLast(); // 'value'
> ```

***

### .values()
> Retrieves an ordered list of the added values
> #### Returns
> **array** - the ordered list of the added values
> ```
> lhm.values(); // []
> lhm.put('key', 'value');
> lhm.put('key2', 'value2');
> lhm.put('key3', 'value3');
> lhm.values(); // ['value', 'value2', 'value3']
> ```
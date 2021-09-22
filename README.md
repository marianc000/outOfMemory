# How many times a string length can be greater than its size in memory?

Sample code for my post https://marian-caikovski.medium.com/how-many-times-a-string-length-can-be-greater-than-its-size-in-memory-857bbe5b30ac about retrieving the totlal memory used by a web page. 
When you assign a string variable to another variable, you assign a reference to the string and not its value. The string is not copied. 512,000,000 characters long string needs ~1 MB of memory.
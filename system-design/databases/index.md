DB is slow because of not having current running through it

Databases are like a spreadsheet on disk

Stored as contiguos arrays and we need to use the address _ offest _ size method ot find things. Unless its var char and then we have to alot of O(n) searching and not O(1)
Unless we start using data structures to help with searching. Like a balanced B tree. But indexes are costly because of rebalancing of B trees on writes

UUIDs Or Strings as Indexes are Slower than Integers? Why? More overhead in rebalancing DB data stuctures

There are differnet algorithms that manipulate table schemas. In Place, Instant, PTOSC

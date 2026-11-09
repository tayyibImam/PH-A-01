# Type vs Interface - Differences and their Use Cases

## Introduction

`type` aliases and `interface` are two importent data type storing or designig tools in typescript. Though they seemed to be the same but they have core differences. Those differences differentiate their use cases also.

## Differences we visualize
At first they are totally different in case of syntax.
``` ts
interface Student {
  name: string;
  age: number;
}

type Teacher = {
  name: string;
  subject: string;
};
```
Besides syntex there are some common differences. `type` gives us various privileges like presenting primitive types, unions and tuples. On the other hand interface can't directly do  this.
``` ts
type Age = number; //primitive
type ID = string | number; // union
type Coordinates = [number, number]; //tuple
```
`type` and `interface` both can be extended but they have their own syntexes.
``` ts
// extending interface
interface Person {
  name: string;
}

interface Student extends Person {
  studentId: number;
}

// extending type alias
type Person = {
    name: string;
    age: number;
};

type Student = Person & {
    studentId: number;
};
```
## Who is Better?
If we directly comapare them it will be hard to choose. Rather we can search for who is better 'when'? Previously we discussed that `type` gives us flexibility on union, primitive types, tuples. So, in cases of those prioritized situations we should use `type`. On the other hand when we have to extend pre-existed structures of objects then it's better to use `interface`. After all it's really matter on how we design our projects.

## Conclusion
At last we can say that both are best at their own situations. We can't make any universal decision on that. To get best outcomes out of them we should master both of them. 





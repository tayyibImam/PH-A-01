# Access Modifiers in TypeScript OOP

## Introduction

Access modifiers are tools used on class properties in TypeScript OOP. Through these tools we restrict those properties in terms of access and modification. There are four access modifiers. They are `public`, `protected`, `private` and `readonly`.

## How They Work

#### `public`

This modifier make a property accessible from anywhere like inside, outside of a class and also from a child class.

```ts
class Student {
  public name: string = "Tayyib";

  public displayName(): void {
    console.log(this.name);
  }
}

const student1 = new Student();

// Accessing from outside
console.log(student1.name);

// Modifying from outside of the class
student1.name = "Asif";

// Accessing method from outside
student1.displayName();
```

`name` property and `displayName()` method are `public`. So we can access and modify them from outside of the class. But it's better to know that public is default. So, it's not medatory to explicitly declare `public`.

#### `private`

This modifier make a property accessible only from the same class. But we can't access that property outside of the class even not from it's child class.

```ts
class BankAccount {
  private balance: number = 5000;

  public showBalance(): void {
    console.log(this.balance);
  }
}

const account = new BankAccount();

account.showBalance(); // allowed
console.log(account.balance); // not allowed
account.balance = 0; // can't modify
```

Here we can see that same class but we can't access the `balance` property though we can use the public method `showBalance()`. Also `priveate` property is fully restricted from modifying.

#### `protected`

We have discussed the `private` access modifier. Protected is simillar with a little bit of change. The change is, we can access and modify a protected property from it's child class.

```ts
class Person {
  protected name: string = "Tayyib";
}

class Student extends Person {
  public showName(): void {
    this.name = "Asif"; // modification from child class
    console.log(this.name);
  }
}

const student = new Student();

student.showName(); // from child class - allowed
console.log(student.name); // not from child class - not allowed
```

Here we can see that name is protected so we can't access it from outside of the class. But we can change and access it from the child class.

#### `readonly`

The case `readonly` is that if it's initialized once, we can't change it ever. It's saves vairables from accidental modifications. But is access from inside and outside of class depends on access modifiers used on that property.

```ts
class Student {
  readonly id: number;

  constructor(id: number) {
    this.id = id;
  }
}

const student = new Student(101);

console.log(student.id); // 101
student.id = 202; // not allowed
```

Example for `private` `readonly`:

```ts
class Student {
  private readonly id: number = 101;
}
```

## Conclusion

Mainly these are the topics of Encapsulation which is one of the four pillars of OOP. This is the concept of how we interect or access a property while building. Those access modifiers create the limits in various scales so that no one can exceed their limit and do some wrong.

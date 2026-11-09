function multiplyValue(value: number, multiplier?: number): number {
  if (multiplier === undefined) {
    return value * 2;
  }

  return value * multiplier;
}

function processInput(a: string | number | boolean): string | number {
  if (typeof a === "string") {
    return a.trim().toLowerCase();
  } else if (typeof a === "number") {
    return a * 10;
  } else {
    return a === true ? "Active" : "Inactive";
  }
}

function formatCoordinate(loc: readonly [number, number, string]): string {
  return `Location: ${loc[2]} (${loc[0]}, ${loc[1]})`;
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  let arr: T[] = [];

  return arr.concat(...arrays);
}

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

function getPopularCourses(arr: Course[], minStudents: number): Course[] {
  let result: Course[] = [];

  arr.forEach((course) => {
    if (course.isPublished && course.students >= minStudents) {
      result.push(course);
    }
  });

  return result;
}

function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
  let arr: T[K][] = [];
  items.forEach((item) => {
    arr.push(item[key]);
  });
  return arr;
}

class Employee {
    protected name : string;
    private baseSalary : number;

    constructor(name: string, baseSalary: number) {
        this.name = name;
        this.baseSalary = baseSalary;
    }

    getDetails() : string{
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`
    }

}

class Manager extends Employee {

    private department : string;

    constructor(name: string, baseSalary: number, department: string){
        super(name, baseSalary);
        this.department = department;
    }

    getRoleInfo() : string{
        return `Manager of ${this.department}: ${this.name}`
    }
}


async function validateAgeAsync(age : number) : Promise<string> {
    return new Promise<string>((resolve, reject) => {

        if(age >= 18) {
            setTimeout(() => {
                resolve("Access Granted");
            }, 1000);
        }
        else {
            reject(new Error("Access Denied: Must be 18 or older"));
        }
    });
}

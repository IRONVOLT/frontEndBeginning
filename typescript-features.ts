abstract class Person {
  name: string;
  age?: number;

  constructor(name: string, age?: number) {
    this.name = name;
    this.age = age;
  }

  display(): void {
    console.log(
      `Human name: ${this.name} and age ${this.age ? this.age : "does not set"}`
    );
  }
}

interface IEmployee {
  addSkill(skill: string);
  getAllSkills(): any;
}

class Employee extends Person implements IEmployee {
  possition: string;
  skills: string[] = [];

  constructor(name: string, possition: string) {
    super(name);
    this.possition = possition;
  }

  addSkill(skillName: string): void {
    this.skills.push(skillName);
  }

  getAllSkills(): void {
    for (let skill of this.skills) {
      console.log(skill);
    }
  }
}

let employeeAnton = new Employee("Anton", "Front end developer");

employeeAnton.display();

employeeAnton.addSkill("Html");
employeeAnton.addSkill("CSS");
employeeAnton.addSkill("Js");

employeeAnton.getAllSkills();

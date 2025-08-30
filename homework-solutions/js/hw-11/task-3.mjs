class Employee {
  #salary;
  constructor(firstName, lastName, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    if (typeof value !== 'string' || value.length < 2 || value.length > 50 || !/^[A-Za-z]+$/.test(value))
      throw new Error('First name does not meet the conditions');
    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    if (typeof value !== 'string' || value.length < 2 || value.length > 50 || !/^[A-Za-z]+$/.test(value))
      throw new Error('Last name does not meet the conditions');
    this._lastName = value;
  }

  get salary() {
    return this.#salary;
  }

  set salary(value) {
    if (!value || typeof value !== 'number' || value <= 0 || value >= 100000)
      throw new Error('Salary does not meet the conditions');
    this.#salary = value;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Developer extends Employee {
  constructor(firstName, lastName, salary, programmingLanguages = []) {
    super(firstName, lastName, salary);
    this.programmingLanguages = programmingLanguages;
  }

  addProgrammingLanguage(language) {
    if (typeof language !== 'string' || language.length < 1) throw new Error('Language does not meet the conditions');
    this.programmingLanguages.push(language);
  }
}

class Manager extends Employee {
  constructor(firstName, lastName, salary, teamSize = 0) {
    super(firstName, lastName, salary);
    this.teamSize = teamSize;
  }

  increaseTeamSize() {
    return (this.teamSize += 1);
  }
}

class Designer extends Employee {
  constructor(firstName, lastName, salary, designTools = []) {
    super(firstName, lastName, salary);
    this.designTools = designTools;
  }

  addDesignTool(tool) {
    if (typeof tool !== 'string' || tool.length < 1) throw new Error('Tool does not meet the conditions');
    this.designTools.push(tool);
  }
}

class Company {
  #employees = [];

  addEmployee(employee) {
    if (
      employee instanceof Employee &&
      this.#employees.every(
        (item) => `${item.firstName} ${item.lastName}` !== `${employee.firstName} ${employee.lastName}`,
      )
    )
      this.#employees.push(employee);
    else throw new Error('Unexpected object');
  }

  getEmployees() {
    return this.#employees;
  }

  getEmployeesByProfession(profession) {
    return this.#employees.filter((item) => item.constructor.name === profession);
  }
}

// const company = new Company();
// const emp1 = new Designer('John', 'Doe', 3000, ['Figma']);
// const emp2 = new Designer('Ringo', 'Starr', 4000, ['Photoshop']);
// const emp3 = new Manager('Gareth', 'Bale', 5000, 1);
// const emp4 = new Manager('George', 'Bush', 7000, 5);
// const emp5 = new Developer('John', 'Lennon', 9000, ['JavaScript']);
// const emp6 = new Developer('Jane', 'Smith', 9000, ['Phyton']);

// company.addEmployee(emp1);
// company.addEmployee(emp2);
// company.addEmployee(emp3);
// company.addEmployee(emp4);
// company.addEmployee(emp5);
// company.addEmployee(emp6);

// console.log(company.getEmployeesByProfession('Designer'));
// console.log(company.getEmployeesByProfession('CTO'));

export { Employee, Company, Designer, Developer, Manager };

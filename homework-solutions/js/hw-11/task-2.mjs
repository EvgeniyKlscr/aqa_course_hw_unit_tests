class Employee {
  #salary;
  constructor(firstName, lastName, profession, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.profession = profession;
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

  get profession() {
    return this._profession;
  }

  set profession(value) {
    if (typeof value !== 'string' || value.length < 1 || !/^[A-Za-z]+(?: [A-Za-z]+)*$/.test(value))
      throw new Error('Profession does not meet the conditions');
    this._profession = value;
  }

  get salary() {
    return this.#salary;
  }

  set salary(value) {
    if (!value || typeof value !== 'number' || value <= 0 || value >= 10000)
      throw new Error('Salary does not meet the conditions');
    this.#salary = value;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Company {
  #employees = [];
  constructor(title, phone, address) {
    this.title = title;
    this.phone = phone;
    this.address = address;
  }

  getTitle() {
    return this._title;
  }

  setTitle(value) {
    if (typeof value !== 'string') throw new Error('Title should be type of string');
    this._title = value;
  }

  getPhone() {
    return this._phone;
  }

  setPhone(value) {
    if (typeof value !== 'number') throw new Error('Phone should be type of number');
    this._phone = value;
  }

  getAdress() {
    return this._address;
  }

  setAdress(value) {
    if (typeof value !== 'string') throw new Error('Adress should be type of string');
    this._address = value;
  }

  addEmployee(employee) {
    if (employee instanceof Employee) this.#employees.push(employee);
    else throw new Error('Unexpected object');
  }

  getEmployees() {
    return this.#employees;
  }

  getInfo() {
    return `Компания: ${this.title}\nАдрес: ${this.address}\nКоличество сотрудников: ${this.#employees.length}`;
  }

  findEmployeeByName(firstName) {
    const employee = this.#employees.find((item) => item.firstName === firstName);
    if (!employee) throw new Error('No employee with this name');
    return employee;
  }

  removeEmployee(firstName) {
    this.#employees.splice(this.#getEmployeeIndex(firstName), 1);
    return this.#employees;
  }

  #getEmployeeIndex(firstName) {
    const employeeIndex = this.#employees.findIndex((item) => item.firstName === firstName);
    if (employeeIndex === -1) throw new Error('Not found')
    return employeeIndex
  }

  getTotalSalary() {
    return this.#employees.reduce((acc, items) => acc + items.salary, 0);
  }
}

export { Employee, Company };

class Employee {
  #salary;
  constructor(firstName, lastName, profession, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.profession = profession;
    this.salary = salary
  }

  get firstName() {
    return this._firstName
  }

  set firstName(value) {
    if (typeof value !== 'string') throw new Error('First name should be type of string')
    this._firstName = value
  }

  get lastName() {
    return this._lastName
  }

  set lastName(value) {
    if (typeof value !== 'string') throw new Error('Last name should be type of string')
    this._lastName = value
  }

  get profession() {
    return this._profession
  }

  set profession(value) {
    if (typeof value !== 'string') throw new Error('Profession should be type of string')
    this._profession = value
  }

  get salary() {
    return this.#salary
  }

  set salary(value) {
    if (typeof value !== 'number' || value < 0) throw new Error('Salary should be type of number and bigger than 0')
    this.#salary = value
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`
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
    return this._title
  }

  setTitle(value) {
    if (typeof value !== 'string') throw new Error('Title should be type of string')
    this._title = value
  }

  getPhone() {
    return this._phone
  }

  setPhone(value) {
    if (typeof value !== 'number') throw new Error('Phone should be type of number')
    this._phone = value
  }

  getAdress() {
    return this._address
  }

  setAdress(value) {
    if (typeof value !== 'string') throw new Error('Adress should be type of string')
    this._address = value
  }

  addEmployee(employee) {
    if (employee instanceof Employee) this.#employees.push(employee)
    else throw new Error('Unexpected object')
  }

  getEmployees() {
    return this.#employees
  }

  getInfo() {
    return `Компания: ${this.title}\nАдрес: ${this.address}\nКоличество сотрудников: ${this.#employees.length}`
  }
}

export { Employee, Company };

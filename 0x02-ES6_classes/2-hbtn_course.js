export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = this._verifyString(name);
    this._length = this._verifyNumber(length);
    this._students = this._verifyArray(students);
  }

  // Getter and Setter for 'name'
  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = this._verifyString(newName);
  }
  // Getter and Setter for 'length'
  get length() {
    return this._length;
  }

  set length(newLength) {
    this._length = this._verifyNumber(newLength);
  }

  // Getter and Setter for 'students'
  get students() {
    return this._students;
  }

  set students(newStudents) {
    this._students = this._verifyArray(newStudents);
  }

  // Helper function to verify a string
  _verifyString(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    return value;
  }

  // Helper function to verify a number
  _verifyNumber(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    return value;
  }

  // Helper function to verify an array
  _verifyArray(value) {
    if (!Array.isArray(value)) {
      throw new TypeError('Students must be an array');
    }
    return value;
  }
}

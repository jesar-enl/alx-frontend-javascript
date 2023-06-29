export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = this._verifyString(newName);
  }

  get code() {
    return this._code;
  }

  set code(newCode) {
    this._code = this._verifyString(newCode);
  }

  // Helper function to verify a string
  _verifyString(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    return value;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}

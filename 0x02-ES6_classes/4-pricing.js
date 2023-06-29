export default class Pricing {
  constructor(amount, currency) {
    this._amount = this._verifyNumber(amount);
    this._currency = currency;
  }

  // Helper function to verify a number
  _verifyNumber(value) {
    if (typeof value !== 'number') {
      throw new TypeError('amount must be a number');
    }
    return value;
  }

  get amount() {
    return this._amount;
  }
  set amount(newAmount) {
    const verifiedNewAmount = this._verifyNumber(newAmount);
    this._amount = verifiedNewAmount;
  }
  get currency() {
    return this._currency;
  }
  set currency(newCurrency) {
    this._currency = newCurrency;
  }

  // Method to display full price
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  // Static method to convert price
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}

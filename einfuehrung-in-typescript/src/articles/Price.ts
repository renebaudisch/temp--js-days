class Price {
  amount: number;

  currency: Currency;

  constructor (amount: number, currency: Currency) {
    this.amount = amount;
    this.currency = currency;
  }
}

export default Price;

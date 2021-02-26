const rates = {
  USD: 5.2164,
  EUR: 6.3970,
  BRL: 1.000,
  // eurusd = 1.2206,
  iof: 0.011,
  fx: 0.01
}

const EventHandler = {
  data() {
    return {
      src_amount: 0.00,
      converted_value: 0.00,
      iof_value: 0,
      fx_value: 0,
      src_currency: 'USD',
      dest_currency: 'BRL',
      rate: 1
    }
  },
  methods: {
    setRate() {
      this.rate = rates[this.src_currency] / rates[this.dest_currency];
    },
    calculate() {
      this.iof_value = this.src_amount * rates.iof;
      this.fx_value = this.src_amount * rates.fx;
      this.converted_value = ((
        this.src_amount
        - this.iof_value
        - this.fx_value
       ) * this.rate)
       .toFixed(2);
    }
  }
}

Vue.createApp(EventHandler).mount('#currency-form');

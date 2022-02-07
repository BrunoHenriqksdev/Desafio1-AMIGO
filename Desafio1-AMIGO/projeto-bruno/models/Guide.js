const Patient = require('./Patient.js');
const Insurance = require('./Insurance.js');

class Guide {
    constructor(number, start_date, patient, insurance_id, insurance, price) {
      this.number = number;
      this.start_date = start_date;
      this.patient = patient;
      this.insurance_id = insurance_id;
      this.insurance = insurance;
      this.price = price;
    }
  }

patient = new Patient();
insurance = new Insurance();

module.exports = Guide;
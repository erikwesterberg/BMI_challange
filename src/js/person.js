function Person(attrs) {
    this.weight = attrs.weight;
    this.height = attrs.height;
    this.calculate_bmi = function () {
        const calculator = new BMICalculator();
        calculator.metric_bmi(this)
    }

    Person.prototype.calculate_imperial_bmi  = function() {
        calculator = new BMICalculator();
        calculator.imperial_bmi(this);
      }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = Person;
}
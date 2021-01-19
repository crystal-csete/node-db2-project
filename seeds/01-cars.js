
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { model: 'ford', make: 'taurus', mileage: 34234, vin: '46dfsgf4646', transmission: 'automatic', title_status: 'salvage' },
        { model: 'tesla', make: 'model1', mileage: 4, vin: '42f909hgyu0', transmission: 'automatic', title_status: 'clean' },
        { model: 'chevy', make: 'impala', mileage: 34000, vin: '089fdsf732479', transmission: 'manual', title_status: 'clean' },
        { model: 'ford', make: 'F150', mileage: 342, vin: 'd10078ddgb9', transmission: 'automatic', title_status: 'salvage' },
        { model: 'jeep', make: 'cherokee', mileage: 33334234, vin: '9d004sdfh7h879', transmission: 'manual', title_status: 'clean' }
      ]);
    });
};

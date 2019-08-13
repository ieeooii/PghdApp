import AppleHealthKit from 'rn-apple-healthkit';

const options = {
  permissions: {
    read: ['Height', 'Weight', 'StepCount', 'DateOfBirth', 'BodyMassIndex', 'ActiveEnergyBurned'],
    write: [
      'Height',
      'Weight',
      'StepCount',
      'BodyMassIndex',
      'Biotin',
      'Caffeine',
      'Calcium',
      'Carbohydrates',
      'Chloride',
      'Cholesterol',
      'Copper',
      'EnergyConsumed',
      'FatMonounsaturated',
      'FatPolyunsaturated',
      'FatSaturated',
      'FatTotal',
      'Fiber',
      'Folate',
      'Iodine',
      'Iron',
      'Magnesium',
      'Manganese',
      'Molybdenum',
      'Niacin',
      'PantothenicAcid',
      'Phosphorus',
      'Potassium',
      'Protein',
      'Riboflavin',
      'Selenium',
      'Sodium',
      'Sugar',
      'Thiamin',
      'VitaminA',
      'VitaminB12',
      'VitaminB6',
      'VitaminC',
      'VitaminD',
      'VitaminE',
      'VitaminK',
      'Zinc',
      'Water'
    ]
  }
};

const healthKit = {};

AppleHealthKit.initHealthKit(options, (err, results) => {
  if (err) {
    console.log('error initializing Healthkit: ', err);
    return;
  }
  healthKit.initNum = results;

  const date = new Date(2016, 1, 1);
  const stepsOrEnergyDate = {
    startDate: date.toISOString(),
    endDate: new Date().toISOString()
  };

  const weightForm = {
    unit: 'pound',
    startDate: date.toISOString(),
    endDate: new Date().toISOString(),
    ascending: false,
    limit: 10
  };

  AppleHealthKit.getDateOfBirth(null, (error, result) => {
    if (error) {
      console.log('error getDateOfBirth Healthkit: ', error);
      return;
    }
    healthKit.dateOfBirth = result;
  });

  AppleHealthKit.getActiveEnergyBurned(stepsOrEnergyDate, (error, result) => {
    if (error) {
      console.log('error getActiveEnergyBurned Healthkit: ', error);
      return;
    }
    healthKit.activeEnergy = result;
  });

  AppleHealthKit.getStepCount(stepsOrEnergyDate, (error, result) => {
    if (error) {
      console.log('error getStepCount Healthkit: ', error);
      healthKit.steps = { value: '기록된 step이 없습니다.' };
      return;
    }
    healthKit.steps = result;
  });

  AppleHealthKit.getWeightSamples(weightForm, (error, result) => {
    if (err) {
      console.log('error getWeightSamples Healthkit: ', error);
      return;
    }
    healthKit.weight = result;
  });
});

export default healthKit;

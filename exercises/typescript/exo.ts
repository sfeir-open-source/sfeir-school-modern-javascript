const add = (a, b) => a + b;
const includeInListOfString = (list) => (item) => {
  return list.indexOf(item) !== -1;
};

add(12, 100);
includeInListOfString(['1', '3'])('3');
includeInListOfString(['1', '3'])(3); // should Error


// EVehicleName
const includeInIllegalVehicle = includeInListOfString([EVehicleName.BMW]);


// IVehicle
const isIllegalVehicle = ({ name }) => includeInIllegalVehicle(name);

isIllegalVehicle(?);


// IVehicleOptions
const getVehiclePricesOptions = (vehicleOptions) => {
  if (vehicleOptions && vehicleOptions.length > 0) {
    return vehicleOptions.reduce((acc, o) => add(acc, o.pricing.netPriceInclTax), 0);
  }
  return 0;
};

getVehiclePricesOptions(?);

// Generic
function combineData(first, second) {
  return {...first, ...second};
}

// TFullVehicleInformation
const getFullVehicleInformation = (vehicle, vehicleOptions) => combineData(vehicle, vehicleOptions);

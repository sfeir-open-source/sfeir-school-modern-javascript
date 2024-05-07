const add = (a, b) => a + b;
const isIncludedInListOfString = (list) => (item) => {
  return list.indexOf(item) !== -1;
};

add(12, 100);
isIncludedInListOfString(['1', '3'])('3');
isIncludedInListOfString(['1', '3'])(3); // should Error


// EVehicleName
const isIllegalVehicleName = isIncludedInListOfString([EVehicleName.BMW]);


// IVehicle
const isIllegalVehicle = ({ name }) => isIllegalVehicleName(name); // Type a vehicle with IVehicle

// Declare a vehicle

isIllegalVehicle(vehicule);


// IVehicleOptions
const getVehicleOptionsTotalPrice = (vehicleOptions) => {
  if (vehicleOptions && vehicleOptions.length > 0) {
    return vehicleOptions.reduce((total, options) => add(total, options.pricing.netPriceInclTax), 0);
  }
  return 0;
};

getVehicleOptionsTotalPrice(?);


// Generic
function combineData(first, second) {
  return {...first, ...second};
}

// TFullVehicleInformation
const getFullVehicleInformation = (vehicle, vehicleOptions) => combineData(vehicle, vehicleOptions);


// Typeguard
interface IPlane {
  fly: () => void
}

interface ITrain {
  tchoo: () => void
}

const isPlane = ?;

let entity: ITrain | IPlane = { tchoo: () => console.log('tchooooo tchoooo')};

if (isPlane(entity)) {
  entity.fly();
} else {
  entity.tchoo()
}

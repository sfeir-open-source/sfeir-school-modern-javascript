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
const isIllegalVehicle = ({ name }) => includeInIllegalVehicle(name); // Type a vehicle with IVehicle

// Declare a vehicle

isIllegalVehicle(?); // Use your vehicle here


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


// Typegard
interface IPlane {
  fly: () => void
}

interface ITrain {
  tchoo: () => void
}

const isPlane =

let entity: ITrain | IPlane;
entity = { tchoo: () => console.log('tchooooo tchoooo')};

if (isPlane(entity)) {
  entity.fly();
} else {
  entity.tchoo()
}

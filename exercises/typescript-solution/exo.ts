const add = (a: number, b: number): number => a + b;
const includeInListOfString = (list: string[]) => (item: string): boolean => {
  return list.indexOf(item) !== -1;
};

add(12, 100);
includeInListOfString(['1', '3'])('3');
includeInListOfString(['1', '3'])(3); // should Error


// EVehicleName
enum EVehicleName { DS3 = 'DS3', BMW = 'BMW' }

const includeInIllegalVehicle = includeInListOfString([EVehicleName.BMW]);


// IVehicle
interface IVehicle {
  name: EVehicleName;
}

const isIllegalVehicle = ({ name }: IVehicle) => includeInIllegalVehicle(name);

const vehicle = {
  name: EVehicleName.BMW
};

isIllegalVehicle(vehicle);


// IVehicleOptions
interface IVehicleOptions {
  pricing: IPricing;
}

interface IPricing {
  netPriceInclTax: number;
  netPriceNotInclTax: number;
}

const getVehiclePricesOptions = (vehicleOptions: IVehicleOptions[]): number => {
  if (vehicleOptions && vehicleOptions.length > 0) {
    return vehicleOptions.reduce((acc: number, o) => add(acc, o.pricing.netPriceInclTax), 0);
  }
  return 0;
};

const vehicleOptions: IVehicleOptions = {
  pricing: {
    netPriceInclTax: 12,
    netPriceNotInclTax: 15
  }
};

getVehiclePricesOptions([vehicleOptions]);

// Generic
function combineData<First, Second>(first: First, second: Second): First & Second {
  return { ...first, ...second };
}

// TFullVehicleInformation
const getFullVehicleInformation = (vehicle: IVehicle, vehicleOption: IVehicleOptions) => combineData(vehicle, vehicleOption);

const add = (a: number, b: number): number => a + b;
const isIncludedInListOfString = (list: string[]) => (item: string): boolean => {
  return list.indexOf(item) !== -1;
};

add(12, 100);
isIncludedInListOfString(['1', '3'])('3');
isIncludedInListOfString(['1', '3'])(3); // should Error


// EVehicleName
enum EVehicleName { DS3 = 'DS3', BMW = 'BMW' }

const isIllegalVehicleName = isIncludedInListOfString([EVehicleName.BMW]);


// IVehicle
interface IVehicle {
  name: EVehicleName;
}

const isIllegalVehicle = ({ name }: IVehicle) => isIllegalVehicleName(name);

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

const getVehicleOptionsTotalPrice = (vehicleOptions: IVehicleOptions[]): number => {
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

getVehicleOptionsTotalPrice([vehicleOptions]);


// Generic
function combineData<First, Second>(first: First, second: Second): First & Second {
  return { ...first, ...second };
}

// TFullVehicleInformation
const getFullVehicleInformation = (vehicle: IVehicle, vehicleOption: IVehicleOptions) => combineData(vehicle, vehicleOption);


// Typegard
interface IPlane {
  fly: () => void
}

interface ITrain {
  tchoo: () => void
}

const isPlane =
  (entity: ITrain | IPlane): entity is IPlane => {
    return (<IPlane>entity).fly !== undefined;
  };

let entity: ITrain | IPlane = { tchoo: () => console.log('tchooooo tchoooo')};

if (isPlane(entity)) {
  entity.fly();
} else {
  entity.tchoo()
}


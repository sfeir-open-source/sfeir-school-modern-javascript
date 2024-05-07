var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var add = function (a, b) { return a + b; };
var includeInListOfString = function (list) { return function (item) {
    return list.indexOf(item) !== -1;
}; };
add(12, 100);
includeInListOfString(['1', '3'])('3');
includeInListOfString(['1', '3'])(3); // should Error
// EVehicleName
var includeInIllegalVehicle = includeInListOfString([EVehicleName.BMW]);
// IVehicle
var isIllegalVehicle = function (_a) {
    var name = _a.name;
    return includeInIllegalVehicle(name);
}; // Type a vehicle with IVehicle
// Declare a vehicle
isIllegalVehicle(); // Use your vehicle here
// IVehicleOptions
var getVehiclePricesOptions = function (vehicleOptions) {
    if (vehicleOptions && vehicleOptions.length > 0) {
        return vehicleOptions.reduce(function (acc, o) { return add(acc, o.pricing.netPriceInclTax); }, 0);
    }
    return 0;
};
getVehiclePricesOptions();
// Generic
function combineData(first, second) {
    return __assign(__assign({}, first), second);
}
// TFullVehicleInformation
var getFullVehicleInformation = function (vehicle, vehicleOptions) { return combineData(vehicle, vehicleOptions); };
var isPlane = let, entity;
entity = { tchoo: function () { return console.log('tchooooo tchoooo'); } };
if (isPlane(entity)) {
    entity.fly();
}
else {
    entity.tchoo();
}

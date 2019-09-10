let traps = {
    /* votre solution ici */
    set: function (target, prop, value) {
        if (!isNaN(prop) && !target.includes(value)) {
            target.push(value.toLowerCase());
        }
        return true
    },

    get: function (target, prop) {
        if (isNaN(prop)) {
            return target[prop];
        }
        return target[prop].replace(/\W/g, '');
    }
};

module.exports = {traps};

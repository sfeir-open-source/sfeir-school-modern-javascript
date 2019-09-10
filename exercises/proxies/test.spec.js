const {traps} = require('./exo.js');

describe('Test exercice for proxies', function () {
    it('testing that the setter only sets unique strings', () => {
        let pseudos = [];
        let pseudosProxy = new Proxy( pseudos, traps);

        pseudosProxy.push('badass', 'badass');

        expect(pseudosProxy.length).toBe(1);
        expect(pseudos.length).toBe(1);
    });
    it('testing that the setter only sets uppercase', () => {
        let pseudos = [];
        let pseudosProxy = new Proxy( pseudos, traps);

        pseudosProxy.push('BadAsS', 'SuPerMan');

        expect(pseudosProxy[0]).toBe('badass');
        expect(pseudosProxy[1]).toBe('superman');
    });
    it('testing that the getter doesnt get special chars from the proxy', () => {
        let pseudos = [];
        let pseudosProxy = new Proxy( pseudos, traps);

        pseudosProxy.push('iMa_Ro%%oR_P3wn€R', 'xXXc4tSl4yer$$XXx');

        expect(pseudosProxy[0]).toBe('ima_roor_p3wnr');
        expect(pseudosProxy[1]).toBe('xxxc4tsl4yerxxx');
    });
});
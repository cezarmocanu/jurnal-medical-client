const STRINGS = {
    title: "Jurnal Medical Brasovean"
}

const LABELS = new Proxy(STRINGS,{
    get: (obj, prop) => prop in obj ? obj[prop] : Object.keys({[prop]:prop})[0]
});

export {LABELS};
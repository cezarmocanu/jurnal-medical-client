const generateLorem = (nrWords) => {
  const WORDS = [  
        "lorem",
        "ipsum",
        "dolor",
        "sit",
        "amet",
        "onsectetur",
        "adipisicing ",
        "elit ",
        "quaerat",
        "enim",
        "sapiente",
        "tenetur",
        "ducimus",
        "quia",
        "quod",
        "dolorem",
        "dicta",
        "veniam",
        "maxime",
        "accusantium",
        "neque",
        "facere",
        "magni",
        "repellendus",
        "amet",
        "dolore",
        "consectetur",
        "tempora",
        "illo",
        "possimus"
    ];
    let result = "";
    for(let i=0;i<nrWords;i++) {
        const word = WORDS[parseInt(Math.random() * WORDS.length)];
        result = result + " " + word;
    }
    console.log(result);
    return result;
};

const generateLoremTitle = (nrWords) => {
    const title = generateLorem(nrWords);
    return title.split(' ').filter(word => word.length > 0).map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}

const STRINGS = {
    anualCollections: "Colectii Anuale",
    articlePage: "Articole",
    collectionPage: "Colectii",
    editions: "Editii",
    fastSearch : "Cautare rapida...",
    homePage : "Acasa",
    lorem: generateLorem,
    loremTitle: generateLoremTitle,
    loremSmall: "Lorem ipsum",
    loremLarge: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat enim sapiente, tenetur ducimus quia, quod dolorem dicta veniam maxime accusantium neque facere magni repellendus amet dolore consectetur tempora illo possimus.Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat enim sapiente, tenetur ducimus quia, quod dolorem dicta veniam maxime accusantium neque facere magni repellendus amet dolore consectetur tempora illo possimus.",
    loremMedium: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat enim sapiente, tenetur ducimus quia, quod dolorem dicta veniam maxime accusantium neque facere magni repellendus amet dolore consectetur tempora illo possimus.Lorem ipsum dolor sit amet.",
    partners : "Parteneri",
    popularKeywords: "Cuvinte cheie",
    title: "Jurnal Medical Brasovean",
    usefulDocuments: "Documente Utile",
    
}

const LABELS = new Proxy(STRINGS,{
    get: (obj, prop) => prop in obj ? obj[prop] : Object.keys({[prop]:prop})[0]
});

export {LABELS};
const STRINGS = {
    anualCollections: "Colectii Anuale",
    articlePage: "Articole",
    fastSearch : "Cautare rapida...",
    homePage : "Acasa",
    loremSmall: "Lorem ipsum",
    loremLarge: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, eligendi? Voluptatem, deleniti. Quod exercitationem minus natus nobis aut. Tenetur fugit, corrupti consectetur consequatur molestias quos architecto impedit doloribus illum facere. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat enim sapiente, tenetur ducimus quia, quod dolorem dicta veniam maxime accusantium neque facere magni repellendus amet dolore consectetur tempora illo possimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, eligendi? Voluptatem, deleniti. Quod exercitationem minus natus nobis aut. Tenetur fugit, corrupti consectetur consequatur molestias quos architecto impedit doloribus illum facere. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat enim sapiente, tenetur ducimus quia, quod dolorem dicta veniam maxime accusantium neque facere magni repellendus amet dolore consectetur tempora illo possimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, eligendi? Voluptatem, deleniti. Quod exercitationem minus natus nobis aut. Tenetur fugit, corrupti consectetur consequatur molestias quos architecto impedit doloribus illum facere. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat enim sapiente, tenetur ducimus quia, quod dolorem dicta veniam maxime accusantium neque facere magni repellendus amet dolore consectetur tempora illo possimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, eligendi? Voluptatem, deleniti. Quod exercitationem minus natus nobis aut. Tenetur fugit, corrupti consectetur consequatur molestias quos architecto impedit doloribus illum facere. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat enim sapiente, tenetur ducimus quia, quod dolorem dicta veniam maxime accusantium neque facere magni repellendus amet dolore consectetur tempora illo possimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, eligendi? Voluptatem, deleniti. Quod exercitationem minus natus nobis aut. Tenetur fugit, corrupti consectetur consequatur molestias quos architecto impedit doloribus illum facere. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat enim sapiente, tenetur ducimus quia, quod dolorem dicta veniam maxime accusantium neque facere magni repellendus amet dolore consectetur tempora illo possimus.",
    loremMedium: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat enim sapiente, tenetur ducimus quia, quod dolorem dicta veniam maxime accusantium neque facere magni repellendus amet dolore consectetur tempora illo possimus.Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat enim sapiente, tenetur ducimus quia, quod dolorem dicta veniam maxime accusantium neque facere magni repellendus amet dolore consectetur tempora illo possimus.",
    partners : "Parteneri",
    title: "Jurnal Medical Brasovean",
    usefulDocuments: "Documente Utile",
    
}

const LABELS = new Proxy(STRINGS,{
    get: (obj, prop) => prop in obj ? obj[prop] : Object.keys({[prop]:prop})[0]
});

export {LABELS};
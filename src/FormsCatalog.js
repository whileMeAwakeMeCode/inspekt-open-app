
/* FORMS COMPONENTS*/

const numberOneToTwenty = Array.from(new Array(20)).map((e, i) => String(i + 1));           // 1 to 20
const numberOneToFifty = Array.from(new Array(50)).map((e, i) => String(i + 1));            // 1 to 50
const number150to250 = Array.from(new Array(11)).map((e, i) => String(150 + (i * 10)));     // 150 to 250
const pumpOutput = Array.from(new Array(95)).map((e, i) => String(50 + (i * 10)));           // 50 to 990
const floatFromThreeToFifteen = Array.from(new Array(121)).map((e, i) => String( (3 + (i * .1)).toFixed(2) ));



/**
 * @dev Forms Items Catalog
 * @dev Stores all nature specific informations (fields contents)
 *  ## PROPERTIES ARE EITHER
 *      - a valid nature (ex. "tractor") for specific informations (ex. "brands")
 *      - a field recurrent data (ex. "ownerTitles")
 */
const formsCatalog = {
    
    /**
     * //////////////////////////////////////[ NATURES SPECIFICS ]\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
     */
    porteurTypes: [
        "Automotrice",
        "Tractée",
        "Assistance hydraulique",
        "2 RM",
        "4 RM"
    ],

    multifonction: [
        "Bras multifonction",
        "Chariot dépose tête",
        "Chassis porte-masses",
        "Ecimage",
        "Effeuillage",
        "Kit push-pull",
        "Palissage",
        "Prétaillage",
        "Pulvérisation",
        "Taille rase",
    ],

    porteurOptions: [
        "Anti-patinage",
        "Régulateur vitesse",
        "TPI"
    ],

    /* end ajouté par Mathieu */

    baler:{
        brands:[
            "CASE",
            "CLAAS",
            "DEUTZ FAHR",
            "FENDT",
            "FERRABOLI",
            "GALIGNANI",
            "GOWEIL",
            "HESSTON",
            "JOHN DEERE",
            "KRONE",
            "KUBOTA",
            "KUHN",
            "MASSEY FERGUSON",
            "MC HALE",
            "NEW HOLLAND",
            "POTTINGER",
            "RIVIERE CASALIS",
            "SUPERTINO",
            "VICON",
            "WELGER"
        ]
    },

    crusher:{
        brands:[
            "AGRAM",
            "AGRIMAT",
            "ALPEGO",
            "BERTI",
            "BOMFORD",
            "BREVIGLIERI",
            "DESVOYS",
            "FERRI",
            "FORMULE DIRECTE",
            "GYRAX",
            "KUBOTA",
            "KUHN",
            "KVERNELAND",
            "LAGARDE",
            "MASCHIO",
            "MUTHING",
            "NICOLAS",
            "NOREMAT",
            "QUIVOGNE",
            "ROUSSEAU",
            "SMA",
            "SILOFARMER",
            "SUIRE",
            "TAARUP",
            "VICON",
            "VOGEL & NOOT",
            //DIVIDER
            "AMV",
            "AGRATOR",
            "AGRIMASTER",
            "BECCHIO",
            "BELAFER",
            "BELIN",
            "BERNHARDT",
            "BERRY",
            "BOUCHARD",
            "BOXER",
            "BRUNET",
            "CARROY",
            "CHABAS",
            "COMER",
            "EUROC",
            "EUROTEC",
            "FACMA",
            "FALC",
            "FALCO NERO",
            "FEOR",
            "FERRAND",
            "FRONTONI",
            "GARD",
            "GIMBRE",
            "GREGOIRE",
            "HUMUS",
            "INO",
            "JP FRANCE",
            "MALETTI",
            "MOREAU",
            "MORGNIEUX",
            "MURATORI",
            "NIUBO",
            "OMARV",
            "ORSI",
            "ORTOLAN",
            "OSMA",
            "PALLADINO",
            "PERFECT",
            "PERUGINI",
            "QUITTE",
            "RIVIERE CASALIS",
            "ROTORAM",
            "STARK",
            "SAUERBURGER",
            "SEPPI",
            "SERRAT",
            "SOMEGA",
            "SPITOR",
            "SEKO",
            "TEHNOS",
            "TERRANOVA",
            "TIERRE",
            "TORTELLA",
            "UBALDI",
            "VDG",
            "VIGOLO",
            "WINTON",
            "ZANON"
        ]
    },

    cattleFeeder:{
        brands:[
            "AGRAM",
            "AGRISPHERE",
            "AUDUREAU",
            "BELAIR",
            "CALVET",
            "CAQUEVEL",
            "EMILY",
            "EUROMARK",
            "GYRAX",
            "HAYBUSTER",
            "JEANTIL",
            "JEULIN",
            "KEENAN",
            "KUHN",
            "KVERNELAND",
            "LUCAS",
            "QUITTE",
            "ROBERT",
            "SAMAS",
            "SGARIBOLDI",
            "SILODIS",
            "SILOFARMER",
            "SIROT",
            "SUIRE",
            "SUPERTINO",
            "TAARUP",
            "TEAGLE",
            "VICON"
        ]
    },

    combineHarvester:{
        brands:[
            "CASE",
            "CLAAS",
            "DEUTZ FAHR",
            "DRONNINGBORG",
            "FENDT",
            "FIATAGRI",
            "JOHN DEERE",
            "LAVERDA",
            "MASSEY FERGUSON",
            "NEW HOLLAND",
            "ROSTSELMASH"
        ]
    },

    dipper:{
        brands:[
            "DESVOYS",
            "EMILY",
            "FABRICATION ARTISANALE",
            "FAUCHEUX",
            "MAILLEUX",
            "MAGSI",
            "MX",
            "RIMAN",
            "TREMME",
            "AUTRE"
        ]
    },

    drill:{
        brands:[
            "ACCORD",
            "AGRAM",
            "AGUIRE",
            "ALPEGO",
            "AMAZONE",
            "GASPARDO",
            "GREAT PLAINS",
            "HERRIAU",
            "HORSCH",
            "HOWARD",
            "JOHN DEERE",
            "KONGSKILDE",
            "KUHN",
            "KVERNELAND",
            "KOCKERLING",
            "KUBOTA",
            "LELY",
            "LEMKEN",
            "MASCHIO",
            "MONOSEM",
            "NODET",
            "PERREIN",
            "POTTINGER",
            "RABE",
            "ROGER",
            "SKY",
            "SLY",
            "SULKY",
            "VICON",
            "VADERSTAD",
            //DIVIDER
            "ABA",
            "AGRO-MASZ",
            "AGRISEM",
            "CARRE",
            "HASSIA",
            "KRONE",
            "NORDSTEIN",
            "RAU",
            "TULIP",
            "VOGEL & NOOT"
        ]
    },

    drillCombination:{
        brands:[
            "ACCORD",
            "AGRAM",
            "ALPEGO",
            "AMAZONE",
            "GASPARDO",
            "KUHN",
            "KVERNELAND",
            "LEMKEN",
            "MASCHIO",
            "MONOSEM",
            "NODET",
            "PERREIN",
            "POTTINGER",
            "RABE",
            "ROGER",
            "SULKY",
            "VICON",
            "VADERSTAD",
            //DIVIDER
            "ABA",
            "AGRISEM",
            "CARRE",
            "HASSIA",
            "HERRIAU",
            "HORSCH",
            "HOWARD",
            "KONGSKILDE",
            "KUBOTA",
            "KOCKERLING",
            "LELY",
            "NORDSTEIN",
            "RAU",
            "TULIP",
            "VOGEL & NOOT"
        ]
    },

    epareuse:{
        brands:[
            "AGRAM",
            "AGRIMASTER",
            "BAMFORDS",
            "BERRY",
            "BERTI",
            "BOMFORD",
            "BOXER",
            "CMS",
            "CMV",
            "CANGINI",
            "FEMAC",
            "FEOR",
            "FERRI",
            "FERRY",
            "FLIEGL",
            "FRONTONI",
            "GYRAX",
            "KUHN",
            "LAGARDE",
            "MAROLIN",
            "MC CONNEL",
            "MORRIS",
            "MULAG",
            "NICOLAS",
            "NIUBO",
            "NOREMAT",
            "ORSI",
            "POLYVERT",
            "QUITTE",
            "QUIVOGNE",
            "RABAUD",
            "RINIERI",
            "ROUSSEAU",
            "SMA",
            "SLANETRAC",
            "TAIL'NET",
            "TURNER",
            "TWOSE"
            
        ]
    },

    feedingDipper:{
        brands:[
            "DESVOYS",
            "EMILY",
            "FABRICATION ARTISANALE",
            "FAUCHEUX",
            "MAILLEUX",
            "MAGSI",
            "MX",
            "RIMAN",
            "TREMME",
            "AUTRE"
        ]
    },

    fertilizerSpreader:{
        brands:[
            "ACCORD",
            "AGRAM",
            "AGUIRE",
            "AMAZONE",
            "AUDUREAU",
            "BOGBALLE",
            "CALVET",
            "KUBOTA",
            "KUHN",
            "KVERNELAND",
            "LELY",
            "NODET",
            "PANIEN",
            "POMMIER",
            "QUIVOGNE",
            "ROGER",
            "SULKY",
            "VICON",
            //DIVIDER
            "ABBEY",
            "AGREX",
            "AGRIC",
            "AGRIMIX",
            "CARRE",
            "EUROFARM",
            "EUROSPAND",
            "FERRAND",
            "GAMBERINI",
            "GASPARDO",
            "HOWARD",
            "KONGSKILDE",
            "MAGENDIE",
            "MAHIER",
            "MATERMACC",
            "MAUNAS",
            "MONOSEM",
            "NIUBO",
            "OMB",
            "RAUCH",
            "RONDINI",
            "SEGUES",
            "SOPER",
            "TIVE",
            "TULIP"
        ]
    },

    forageUnroller:{
        brands:[
            "AGRAM",
            "ALTEC",
            "CALVET",
            "CARTEL",
            "DEBOFFLES",
            "EMILY",
            "EURAGRI",
            "EUROFARM",
            "EUROTRAC",
            "FLIEGL",
            "GOWEIL",
            "HE-VA",
            "HUSTLER",
            "JURACCESSOIRE",
            "LERIN",
            "LUCAS",
            "MAGSI",
            "SILOFARMER",
            "SIROT",
            "SUIRE",
            "VERMEER",
            "WARZEE",
            //DIVIDER
            "AG",
            "AGRO FACTORY",
            "BICIEFFE",
            "GALONNIER",
            "MAMMUT",
            "ROBERT",
            "SIG",
            "TEAGLE",
            "WOLAGRI",
            "WOLVO"
        ]
    },

    forageHarvester:{
        brands:[
            "CLAAS",
            "FENDT",
            "JOHN DEERE",
            "KRONE",
            "MENGELE",
            "NEW HOLLAND"
        ]
    },

    frontLoader:{
        brands:[
            "ALO",
            "CLAAS",
            "DEUTZ FAHR",
            "FAUCHEUX",
            "FENDT",
            "JOHN DEERE",
            "KUBOTA",
            "MAILLEUX",
            "MASSEY FERGUSON",
            "NEW HOLLAND",
            "QUICKE",
            "STOLL"
        ]
    },

    frontRoll:{
        brands:[
            "AGRAM",
            "AGRO-TOM",
            "ALTEC",
            "ASKEL",
            "BONNEL",
            "BRIGANT",
            "CARRE",
            "COCHET",
            "COSTA",
            "DALBO",
            "DEHONDT",
            "DOUCET",
            "DUROU",
            "EUM",
            "ECOSOL",
            "EUROFARM",
            "FERJU",
            "FLEXI-COIL",
            "FRANQUET",
            "GOIZIN",
            "GOURDIN",
            "GREGOIRE BESSON",
            "GUILBART",
            "HE-VA",
            "JAMMET",
            "LABBE & ROTIEL",
            "LACHAUD",
            "LAMY",
            "LEMKEN",
            "MANDAM",
            "OTTAVIOLI",
            "PERREIN",
            "QUIVOGNE",
            "RABE",
            "RELIGIEUX",
            "SOPEMA",
            "SULPICE",
            "TECHMAGRI"
        ]
    },

    harvestingPlatform:{
        brands:[
            "BOURDONNEAU",
            "CAPELLO",
            "CLAAS",
            "CRESSONI",
            "DOMINONI",
            "FANTINI",
            "GERINGHOFF",
            "IDASS",
            "JOHN DEERE",
            "KEMPER",
            "NEW HOLLAND",
            "STARK",
            "ZURN"
        ]
    },

    heavyRolls:{
        brands:[
            "ACTISOL", 
            "AGRAM",
            "AGRIDIS",
            "AGRISEM",
            "AMAZONE",
            "BEDNAR",
            "BONNEL",
            "BUGNOT",
            "CARRE",
            "DALBO",
            "ECO MULCH",
            "FRANQUET",
            "GREGOIRE BESSON", 
            "HE-VA",
            "HORSCH",
            "KONGSKILDE",
            "KUBOTA",
            "KUHN",
            "KVERNELAND",
            "KOCKERLING",
            "LEMKEN",
            "NEW HOLLAND",
            "POTTINGER",
            "QUIVOGNE",
            "RABE", 
            "RAZOL",
            "SOUCHU PINET",
            "TECHNMAGRI",
            "VICON",
            "VOGEL & NOOT",
            "VADERSTAD",
            //DIVIDER
            "AGRIALLY",
            "AGRIPOL",
            "AGRISTAL",
            "AGRI-MASZ",
            "AGROLAND",
            "AGROMET", 
            "AKPIL",
            "ALGRITEC",
            "ALPEGO",
            "ASKEL",
            "AWEMAK",
            "BEISER",
            "BESSON",
            "BEYNE",
            "BOMFORD",
            "BOURBONNAIS",
            "BRIOIS", 
            "CASE IH",
            "COMAI",
            "DEHONDT",
            "DELAPLACE",
            "DEVRAND",
            "DOUBLET",
            "DUPUY",
            "DURO",
            "DUROU",
            "EBRA", 
            "EKOAGRI",
            "EURO FARM",
            "EVERS",
            "FARMET",
            "FERJU",
            "FITOSA",
            "FLEXICOIL",
            "GASCON",
            "GASPARDO",
            "GOIZIN",
            "GOURDIN",
            "GUILBART",
            "GOYER",
            "GRANO",
            "GREAT PLAINS", 
            "GREEN VISION",
            "GYRAX",
            "GUTTLER",
            "HANKMO",
            "HOWARD",
            "HUARD",
            "HEBARD",
            "INTER TECH",
            "JAMMET",
            "JEAN DE BRU", 
            "JOHN DEERE",
            "K-LINE",
            "KIRPY",
            "LABBE ET ROTIEL",
            "LACHAUD",
            "LANDSTAL",
            "MACAR",
            "MACRON",
            "MANDAM",
            "MARSK-STIG",
            "MASCHIO", 
            "MC CONNEL",
            "MC AGRI",
            "METAL-FACH",
            "MOREAU",
            "MORRIS",
            "MULTIVA",
            "NAMYSLO",
            "NEW SOLAGRI",
            "OTTAVIOLI",
            "OVLAC",
            "POM BRODNICA", 
            "PERREIN",
            "PICHON",
            "RAU",
            "RELIGIEUX",
            "RENSON",
            "RINIERI",
            "ROGER",
            "ROLEX",
            "ROLMAKO",
            "SMS",
            "SV",
            "SAMSON", 
            "SICAM",
            "SIMBA",
            "SIROT",
            "SKY",
            "SOLANO",
            "SOPEMA",
            "STALTECH",
            "STEENO",
            "SUIRE",
            "TESTA",
            "THIEME",
            "TIGER", 
            "TREFFLER",
            "TULIP",
            "UNIA",
            "URGA",
            "VIAUD",
            "VARIN",
            "ZAGRODA",
        ]
    },

    largeSquarebaler:{
        brands:[
            "CASE",
            "CLAAS",
            "DEUTZ FAHR",
            "FENDT",
            "FERRABOLI",
            "FIAT",
            "FREEMAN",
            "GREENLAND",
            "HESSTON",
            "JOHN DEERE",
            "KRONE",
            "KUHN",
            "LAVERDA",
            "MASSEY FERGUSON",
            "NEW HOLLAND",
            "RIVIERE CASALIS",
            "SUPERTINO",
            "VICON",
            "WELGER"
        ]
    },

    livestockTrailer:{
        brands:[
            "BEISER",
            "BONNEAU",
            "BROCHARD",
            "BRUNEAU",
            "CHOPIN",
            "COSNET",
            "COUSIN",
            "DANGREVILLE",
            "DEGUILLAUME",
            "DESMAREST",
            "GODIMAT",
            "HAUSWIRTH",
            "JEANTIL",
            "JOSKIN",
            "LA LITTORALE",
            "LAMBERT",
            "LEBIS",
            "LEGRAND",
            "LENORMAND",
            "LYONNET",
            "MASSON",
            "MAZERON",
            "ORENGE",
            "PONGE",
            "PROMODIS",
            "ROLLAND",
        ]
    },

    manureSpreader:{
        brands:[
            "AGRAM",
            "AGRIMAT",
            "BERGMANN",
            "BONNEAU",
            "BRIMONT",
            "BROCHARD",
            "CHEVANCE",
            "CORNE",
            "COUTAND",
            "DANGREVILLE",
            "DEGUILLAUME",
            "DELAPLACE",
            "DUCHESNE",
            "FLIEGL",
            "GILIBERT",
            "GUERIN",
            "GYRAX",
            "HEYWANG",
            "JEANTIL",
            "JEULIN",
            "JOSKIN",
            "LA CAMPAGNE",
            "LA LITTORALE",
            "LEBOULCH",
            "LEGRAND",
            "MAITRE",
            "METAL-FACH",
            "MIRO",
            "MOUZON",
            "ORENGE",
            "PANIEN",
            "PERARD",
            "PICHON",
            "PROMODIS",
            "ROCK",
            "ROLLAND",
            "SAMSON",
            "SODIMAC",
            "STRAUTMANN",
            "TEBBE",
            "THIEVIN",
            //DIVIDER
            "AGREX",
            "AURAN",
            "AVTO",
            "BALON",
            "BAROIN",
            "BUCHET",
            "CAREAC",
            "DANEL",
            "DOUCE",
            "EUROMILK",
            "GAFNER",
            "HF",
            "HAUSWIRTH",
            "HERCULANO",
            "JOCQUIN",
            "JUSCAFESA",
            "KRONE",
            "KUHN",
            "LMR",
            "LEBIS",
            "MAT SERVICE",
            "MAUPU",
            "TARTARIN",
            "TOTALSA"
        ]
    },

    manureTankSpreader:{
        brands:[
            "AGRIMAT",
            "AGRIMAC",
            "ARMOR",
            "DESMAREST",
            "JEANTIL",
            "JOSKIN",
            "MAUGUIN",
            "PICHON",
            "LEBOULCH",
            "PROMODIS",
            "SAMAS",
            "SAMSON",
            "SODIMAC",
            "TONALIS",
            "VERVAET",
            "VREDO",
            //DIVIDER
            "AGROLAND",
            "AURAN",
            "CAVALMORETTI",
            "COMERO",
            "DOME",
            "GODIMAT",
            "HERCULANO",
            "HEYWANG",
            "HOLMER",
            "IPSAM",
            "JEULIN",
            "MIRO",
            "ROLLAND",
            "SCHALLBERGER",
            "TOBROCO"
        ]
    },

    mixFeeder:{
        brands:[
            "AGRAM",
            "ALIMAT",
            "BVL",
            "AUDUREAU",
            "BELAIR",
            "COMAG",
            "DEBOFFLES",
            "EUROMARK",
            "FARESIN",
            "GYRAX",
            "HISPEC",
            "ITALMIX",
            "JF",
            "JEANTIL",
            "JEULIN",
            "JUSCAFRESA",
            "KEENAN",
            "KUHN",
            "KVERNELAND",
            "LUCAS",
            "METAL FACH",
            "NUTRIFEED",
            "OMAS",
            "PEECON",
            "PRONAR",
            "RABAUD",
            "RAPIDEX",
            "RMH",
            "REDROCK",
            "SGARIBOLDI",
            "SILOFARMER",
            "SILOKING",
            "STROTI",
            "STRAUTMANN",
            "SUPERTINO",
            "SEKO",
            "TAARUP",
            "TATOMA",
            "TECHMAGRI",
            "TOY",
            "TRIOLLET",
            "UNIFAST",
            "VICON"
        ]
    },

        mower: { 
            brands : [
                "AGRAM", 
                "CLAAS",
                "DEUTZ FAHR",
                "FELLA",
                "FENDT",
                "JOHN DEERE",
                "KRONE",
                "KUBOTA",
                "KUHN",
                "KVERNELAND",
                "LELY",
                "NEW HOLLAND",
                "POTTINGER",
                "VICON",
                // divider
                "BORELLO",
                "DION", 
                "ELHO",
                "ENOROSSI",
                "EUROFARM",
                "FORT",
                "FRANDENT",
                "GREENLAND",
                "IDASS",
                "JF STOLL",
                "JAR MET",
                "KONGSKILDE",
                "MASCHIO",
                "MASSEY FERGUSON",
                "MC CORMICK",
                "MOLON",
                "NIEMEYER",
                "PEZET",
                "QUIVOGNE",
                "REFORM",
                "REITER",
                "REMY",
                "REPOSSI",
                "ROC",
                "ROSZMITAL",
                "SAMASZ",
                "SIP",
                "SIPMA",
                "SITREX",
                "SUIRE",
                "TAARUP",
                "TONUTTI",
                "WOLAGRI",
                "ZIEGLER"
            ],// end mower brands

    },

    plough:{
        brands:[
            "AMAZONE",
            "BONNEL",
            "BUGNOT",
            "CHARLIER",
            "DEMBLON",
            "DUROT",
            "GOIZIN",
            "GREGOIRE BESSON",
            "HUARD",
            "KUBOTA",
            "KUHN",
            "KVERNELAND",
            "LEMKEN",
            "NAUD",
            "VOGEL & NOOT",
            //DIVIDER
            "AGRO-MASZ",
            "AGROLUX",
            "AKPIL",
            "ALPLER",
            "CASE-IH",
            "CASTILLON",
            "CAVEL",
            "FALC",
            "FENET",
            "GARD",
            "GOURDIN",
            "GREEN",
            "GRENIER",
            "HISARLAR",
            "JOHN DEERE",
            "JOUTEL",
            "KIRPY",
            "KONGSLIDE",
            "MASCHIO",
            "MASSEY FERGUSON",
            "MC CORMICK",
            "MORO PIETRO",
            "NOLI",
            "OVLAC",
            "PERREIN",
            "RANSOMES",
            "RAVIOT",
            "RIBATEJO",
            "SANCHEZ",
            "SOLANO",
            "SOUCHU PINET",
            "STEENO",
            "THIEME",
            "TUBERT",
            "UNIA",
            "VIAUD"
        ]
    },

    rake: { 
        brands : [
            "AGRAM", 
            "CLAAS",
            "DEUTZ FAHR",
            "FELLA",
            "FENDT",
            "JOHN DEERE",
            "KRONE",
            "KUBOTA",
            "KUHN",
            "KVERNELAND",
            "LELY",
            "NEW HOLLAND",
            "POTTINGER",
            "VICON",
            // divider
            "BORELLO",
            "DION", 
            "ELHO",
            "ENOROSSI",
            "EUROFARM",
            "FORT",
            "FRANDENT",
            "GREENLAND",
            "IDASS",
            "JF STOLL",
            "JAR MET",
            "KONGSKILDE",
            "MASCHIO",
            "MASSEY FERGUSON",
            "MC CORMICK",
            "MOLON",
            "NIEMEYER",
            "PEZET",
            "QUIVOGNE",
            "REFORM",
            "REITER",
            "REMY",
            "REPOSSI",
            "ROC",
            "ROSZMITAL",
            "SAMASZ",
            "SIP",
            "SIPMA",
            "SITREX",
            "SUIRE",
            "TAARUP",
            "TONUTTI",
            "WOLAGRI",
            "ZIEGLER"
        ],// end rake brands

},

rotativeHarrow:{
    brands:[
        "AGRAM",
        "ALPEGO",
        "AMAZONE",
        "BELRECOLT",
        "BREVIGLIERI",
        "HOWARD",
        "KONGSKILDE",
        "KUBOTA",
        "KUHN",
        "KVERNELAND",
        "LEMKEN",
        "MASCHIO",
        "POTTINGER",
        "RABE",
        "RAU",
        "SULKY",
        "VICON",
        //DIVIDER
        "CARRE",
        "CELLI",
        "FALC",
        "FERABOLI",
        "GREGOIRE",       
        "LELY",
        "PEGORARO",
        "PERUGINI",
        "PROMODIS",
        "PROSOL",
        "VOGEL & NOOT"
    ]
},

tedder: {
    brands : [
        "AGRAM", 
        "CLAAS",
        "DEUTZ FAHR",
        "FELLA",
        "FENDT",
        "JOHN DEERE",
        "KRONE",
        "KUBOTA",
        "KUHN",
        "KVERNELAND",
        "LELY",
        "NEW HOLLAND",
        "POTTINGER",
        "VICON",
        // divider
        "BORELLO",
        "DION", 
        "ELHO",
        "ENOROSSI",
        "EUROFARM",
        "FORT",
        "FRANDENT",
        "GALFRE",
        "GREENLAND",
        "GUSTIN",
        "IDASS",
        "JF STOLL",
        "JAR MET",
        "KONGSKILDE",
        "LANDINI",
        "MASCHIO",
        "MASSEY FERGUSON",
        "MC CORMICK",
        "MOLON",
        "MORRA",
        "NIEMEYER",
        "PEZET",
        "QUIVOGNE",
        "REFORM",
        "REITER",
        "REMY",
        "REPOSSI",
        "ROC",
        "ROSZMITAL",
        "SAMASZ",
        "SIP",
        "SIPMA",
        "SITREX",
        "SUIRE",
        "TAARUP",
        "TONUTTI",
        "WOLAGRI",
        "ZIEGLER"
    ],// end tedder brands

},

telehandler:{
    brands:[
        "BOBCAT", 
        "CASE", 
        "CLAAS",
        "DEUTZ FAHR",
        "DIECI", 
        "FENDT",
        "JCB", 
        "JOHN DEERE",
        "KRAMER", 
        "KUBOTA",
        "MANITOU", 
        "MERLO", 
        "MASSEY FERGUSON",
        "NEW HOLLAND",
        "VALTRA",
        //DIVIDER
        "ACMAG", 
        "AUSA", 
        "BOURGOIN", 
        "EVERUN", 
        "FARESIN", 
        "GENIE", 
        "HAULOTTE", 
        "HERCULES", 
        "JLG", 
        "KOMATSU", 
        "MAGNI", 
        "MUSTANG", 
        "SAMBRON", 
        "SCHAFFER",
        "THALER", 
        "TOYOTA", 
        "WEIDEMANN"

    ]
},

    tractor: {                      // formsCatalog properties (here "tractor") MUST be equal to Natures[index].key
        brands : [
            "CASE", 
            "CLAAS",
            "DEUTZ FAHR",
            "FENDT",
            "JOHN DEERE",
            "KUBOTA",
            "MASSEY FERGUSON",
            "NEW HOLLAND",
            "VALTRA",
            // divider
            "CARRARO",
            "FIAT", 
            "FORD",
            "HURLIMANN",
            "JCB",
            "KIOTI",
            "LAMBORGHINI",
            "LANDINI",
            "LINDNER",
            "MC CORMICK",
            "RENAULT",
            "SAME",
            "SOLIS",
            "STEYR",
            "TYM",
            "YTO",
            "ZETOR"
        ],// end tractor brands

    },

    tillage:{
        brands:[
            "ACTISOL", 
            "AGRAM",
            "AGRIDIS",
            "AGRISEM",
            "AMAZONE",
            "BEDNAR",
            "BONNEL",
            "BUGNOT",
            "CARRE",
            "ECO MULCH",
            "FRANQUET",
            "GREGOIRE BESSON", 
            "HORSCH",
            "KONGSKILDE",
            "KUBOTA",
            "KUHN",
            "KVERNELAND",
            "KOCKERLING",
            "LEMKEN",
            "NEW HOLLAND",
            "POTTINGER",
            "QUIVOGNE",
            "RABE", 
            "RAZOL",
            "SOUCHU PINET",
            "TECHNMAGRI",
            "VICON",
            "VOGEL & NOOT",
            "VADERSTAD",
            //DIVIDER
            "AGRIALLY",
            "AGRIPOL",
            "AGRISTAL",
            "AGRI-MASZ",
            "AGROLAND",
            "AGROMET", 
            "AKPIL",
            "ALGRITEC",
            "ALPEGO",
            "ASKEL",
            "AWEMAK",
            "BEISER",
            "BESSON",
            "BEYNE",
            "BOMFORD",
            "BOURBONNAIS",
            "BRIOIS", 
            "CASE IH",
            "COMAI",
            "DALBO",
            "DEHONDT",
            "DELAPLACE",
            "DEVRAND",
            "DOUBLET",
            "DUPUY",
            "DURO",
            "DUROU",
            "EBRA", 
            "EKOAGRI",
            "EURO FARM",
            "EVERS",
            "FARMET",
            "FITOSA",
            "GASCON",
            "GASPARDO",
            "GOIZIN",
            "GOYER",
            "GRANO",
            "GREAT PLAINS", 
            "GREEN VISION",
            "GYRAX",
            "GUTTLER",
            "HEVA",
            "HANKMO",
            "HOWARD",
            "HUARD",
            "HEBARD",
            "INTER TECH",
            "JAMMET",
            "JEAN DE BRU", 
            "JOHN DEERE",
            "K-LINE",
            "KIRPY",
            "LABBE ET ROTIEL",
            "LACHAUD",
            "LANDSTAL",
            "MACAR",
            "MACRON",
            "MANDAM",
            "MARSK-STIG",
            "MASCHIO", 
            "MC CONNEL",
            "MC AGRI",
            "METAL-FACH",
            "MOREAU",
            "MORRIS",
            "MULTIVA",
            "NAMYSLO",
            "NEW SOLAGRI",
            "OTTAVIOLI",
            "OVLAC",
            "POM BRODNICA", 
            "PERREIN",
            "PICHON",
            "RAU",
            "RELIGIEUX",
            "RINIERI",
            "ROGER",
            "ROLEX",
            "ROLMAKO",
            "SMS",
            "SV",
            "SAMSON", 
            "SICAM",
            "SIMBA",
            "SIROT",
            "SKY",
            "SOLANO",
            "STALTECH",
            "STEENO",
            "SUIRE",
            "TESTA",
            "THIEME",
            "TIGER", 
            "TREFFLER",
            "TULIP",
            "UNIA",
            "URGA",
            "VIAUD",
            "VARIN",
            "ZAGRODA",
        ]
    },

    silageTrailer: {                      // formsCatalog properties (here "tractor") MUST be equal to Natures[index].key
        brands : [
            "BERGMANN", 
            "CLAAS",
            "DEUTZ FAHR",
            "GALLIGNANI",
            "JF STOLL",
            "JEULIN",
            "KRONE",
            "LELY",
            "POTTINGER",
            "SCHUITEMAKER",
            "VICON"
        ],// end silageTrailer brands

    },

    sprayer: {                      // formsCatalog properties (here "tractor") MUST be equal to Natures[index].key
        brands : [
            "AGRIFAC", 
            "AGUIRRE",
            "AMAZONE",
            "ARLAND",
            "ARTEC",
            "BERTHOUD",
            "BLANCHARD",
            "CARUELLE",
            "CHALLENGER",
            "EVRARD",
            "HARDI",
            "HORSCH", 
            "JOHN DEERE",
            "KUHN",
            "KVERNELAND",
            "LEMKEN",
            "NODET",
            "RAU",
            "SEGUIP",
            "TECNOMA",
            "VICON",
            //DIVIDER
            "AMB SPRAYER", 
            "ABBA",
            "ABELLA",
            "AGRAM",
            "AGRAR",
            "AGRICO",
            "AGRIMASTER",
            "AGRITECHMA",
            "ALLAYES",
            "AMOS",
            "APACHE", 
            "ARAG",
            "ARLAND",
            "ATASA",
            "ATOM",
            "ATORAM",
            "AUDUREAU",
            "BARGAM",
            "BELLY MCV",
            "BEYNE",
            "BOBARD", 
            "BOUISSET",
            "BRARD ET SARAN",
            "BRUN",
            "CLM",
            "CAFFINI",
            "CALVET",
            "CAROFF",
            "CARRAROSPRAY",
            "CASE IH",
            "CHABBAS", 
            "CIMA",
            "CORBINS",
            "DELVANO",
            "DHUGUES",
            "DRAGONE",
            "DUBEX",
            "FAUPIN",
            "FAVARO",
            "FEDE",
            "FERROCRUZ", 
            "FITOSA",
            "FLORIDA",
            "FREMA",
            "FRIULI",
            "GASPARDO",
            "GAYSA",
            "GENERAL",
            "GYRLAND",
            "HERPA",
            "HOLDER", 
            "HYDRO PULVE",
            "IDEAL",
            "JCB",
            "JP FRANCE",
            "KFMR",
            "KWH",
            "KRUKOWIAK",
            "LOISEAU",
            "MM",
            "MAGNETO", 
            "MAKATO",
            "MANKAR",
            "MARTIGNANI",
            "MASCHIO",
            "MATROT",
            "MAZOTTI",
            "MANES Y LOZANO",
            "MERCEDES",
            "MOVICAM",
            "MUIZON",
            "NICOLAS", 
            "NIUBO",
            "NOBILI",
            "OSELLA",
            "PARIS",
            "PAULJET",
            "PELLENC",
            "PRATISSOLI",
            "PRECICULTURE",
            "PROJET",
            "PULVEJUSTE",
            "PULVE2000",
            "RAU", 
            "REBILLER",
            "ROCHA",
            "S21",
            "SAHER",
            "SANZ",
            "SENTAR",
            "SOLANO",
            "SOLO",
            "SOPERMA",
            "SPRA COUPE",
            "STAR TECH",
            "TSM", 
            "TECNOMA",
            "TERRECO",
            "TEYME",
            "THOMAS",
            "TIFONE",
            "TOMIX",
            "TORNADO",
            "UNIGREEN",
            "VMA",
            "VICAR",
            "VICH",
            "WEBER"
        ],// end sprayer brands

    },

    sweeper:{
        brands:[
            "ACTISWEEP",
            "AGRAM",
            "BUGNOT",
            "COCHET",
            "FLIEGL",
            "INTER TECH",
            "KERSTEN",
            "NIMOS",
            "RABAUD",
            "SCHULTE",
            "TUCHEL",
            "WARZEE",
            "WESTERMANN"

        ]
    },

    trailer:{
        brands:[
            "AGRAM",
            "BRIMONT",
            "BROCHARD",
            "CHEVANCE",
            "DANGREVILLE",
            "DEGUILLAUME",
            "DELAPLACE",
            "DESMARET",
            "FLIEGL",
            "GILIBERT",
            "GOURDON",
            "GOURMELON",
            "GYRAX",
            "HURET",
            "IDEAL",
            "JEANTIL",
            "JOSKIN",
            "LA CAMPAGNE",
            "LAIR",
            "LAMBERT",
            "LE BOULCH",
            "MAITRE",
            "MAUPU",
            "ROCK",
            "ROLLAND",
            "SODIMAC",
            "STRAUTMANN",
            "THIEVIN",
            //DIVIDER
            "ALEIN",
            "BENALU",
            "BERGMANN",
            "BRIGANT",
            "CARGO",
            "CLAAS",
            "CORNE",
            "DUCHESNE",
            "GODIMAT",
            "HEYWANG",
            "JEULIN",
            "KRAMPE",
            "LA LITTORALE",
            "LE NORMAND",
            "LEGRAND",
            "PERARD",
            "PONTHIEUX",
            "PROMODIS",
            "ROBUST",
            "SCHUITEMAKER",
            "SIAM",
            "SIMONNEAU",
            "THIERART"
        ]
    },

    wrapper:{
        brands:[
            "AGRAM",
            "CLAAS",
            "DEUTZ FAHR",
            "ELHO",
            "KRONE",
            "KUHN",
            "KVERNELAND",
            "LELY",
            "MC HALE",
            "TAARUP",
            "VICON",
            //DIVIDER
            "ANDERSON",
            "BAUDOUIN",
            "CARRARO",           
            "DOUCET",          
            "EUROMILK",
            "FORT",
            "GALLIGNANI",
            "GOWEIL",
            "INTER TECH",           
            "MASCAR",           
            "METAL FACH",
            "MORRA",
            "NHK",
            "POMI",
            "ROLMAKO",
            "RONDIA",
            "SIPMA",
            "SITREX",
            "SUPERTINO",
            "SYSTEM BEE",           
            "TANCO",
            "TECHMAGRI",
            "TELEFSDAL",
            "TONUTTI",          
            "WOLAGRI"
        ]
    },

    /**
     * /////////////////////////////////////[ STEP_1_COMPONENTS ]\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
     */

    ownerTitles:["CUMA", "EARL", "ETA", "EURL", "GAEC", "GIE", "MONSIEUR", "MADAME", "SARL", "SCEA", "SCEV", "SNC"],
       



    /**
     * /////////////////////////////////////[ STEP_2_COMPONENTS ]\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
     */

    

    /**
     * /////////////////////////////////////[ STEP_3_COMPONENTS ]\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
     */
    airConditioning:[
        "AUTOMATIQUE",
        "MANUELLE"
    ],

    assistantFunction:[
        "AUTOMATIQUE",
        "MANUEL"
    ],

    automotiveTransmission:[
        "3 VITESSES MECA",
        "4 VITESSES MECA",
        "3 VITESSES ELEC",
        "3 VITESSES ELEC",
        "AUTOMATIQUE"
    ],

    automotiveMaxSpeed:[
        "20 KM/H",
        "25 KM/H",
        "30 KM/H",
        "35 KM/H",
        "40 KM/H",
    ],

    axleSection:[
        "80",
        "90",
        "100",
        "110",
        "120",
        "130",
        "140",
        "150",
        "160",
        "170",
    ],

    brakingSystem:[
        "HYDRAULIQUE",
        "HYDRAULIQUE + PNEUMATIQUE",
        "DOUBLE HYDRAULIQUE",
        "DOUBLE HYD. + PNEUMATIQUE"
    ],

    boomFoldable:[
        "4 MORCEAUX",
        "6 MORCEAUX"
    ],

    buryingType:[
        "DISQUES",
        "SOCS"
    ],

    cabType:[
        "ARCEAU",
        "FIXE",
        "PLATEFORME",
        "SILENT BLOC",
        "SUSPENSION MECANIQUE",
        "SUSPENSION HYDRAUIQUE",
        "SUSPENSION PNEUMATIQUE"
    ],

    chassisMaterial:[
        "ACIER",
        "ALU",
        "HARDOX"
    ],

    combineSeparator:[
        "MONO ROTOR",
        "DOUBLE ROTOR",
        "HYBRIDE",
        "6 SECOUEURS",
        "5 SECOUEURS",
        "4 SECOUEURS",
    ],

    conformity:[
        "ECLAIRAGE",
        "EXTINCTEUR",
        "PLAQUES REFLECHISSANTES",
        "PROTECTION CARDAN"
    ],

    distributionSystem:[
        "MECANIQUE",
        "PNEUMATIQUE"
    ],

    floatFromThreeToFifteen,

    frontAxle:[
        "FIXE 2RM",
        "FIXE 4RM",
        "SUSPENDU 2RM",
        "SUSPENDU 4RM"
    ],

    frontLinkage:[
        "HB",
        "LAFORGE",
        "ORIGINE",
        "SAUTER",
        "ZUIDBERG",
        "AUTRE"
    ],

    frontValves:[
        "1 SIMPLE EFFET",
        "2 SIMPLE EFFET",
        "1 SIMPLE EFFET + 1 DOUBLE EFFET",
        "1 DOUBLE EFFET",
        "2 DOUBLE EFFET",
        "3 DOUBLE EFFET",
        "4 DOUBLE EFFET",
    ],

    groundAdaptation:[
        "SIMPLE ESSIEU",
        "TANDEM",
        "3D",
    ],

    handlingInterface:[
        "BOBCAT",
        "CATERPILLAR",
        "DEUTZ",
        "DIECI",
        "EURO",
        "FARESIN",
        "FAUCHEUX",
        "JCB",
        "JOHN DEERE",
        "KRAMER",
        "MAILLEUX",
        "MANITOU",
        "MX",
        "NEW HOLLAND"
    ],

    harvestingPlatformBrand:[
        "BMV",
        "CAPELLO",
        "CLAAS",
        "DOMINONI",
        "IDASS",
        "JOHN DEERE",
        "KEMPER",
        "KRONE",
        "NEW HOLLAND",
        "STARK",
        "AUTRE"
    ],

    hedgehog:[
        "HORIZONTAUX",
        "VERTICAUX"
    ],
    implementBrakingSytem:[
        "HYDRAULIQUE",
        "PNEUMATIQUE"
    ],

    implementFoldable:[
        "FIXE",
        "REPLIAGE HORIZONTAL",
        "REPLIAGE VERTICAL"
    ],

    implementHandCommand:[
        "DISTRIBUTEURS",
        "MONOL. ELECTRIQUE",
        "MONOL. MECANIQUE",
        "BASSE PRESSION"
    ],

    implementWrapperHandCommand:[
        "ELECTRIQUE",
        "MECANIQUE",
        "TELECOMMANDE"
    ],

    implementHydraulicCommands:[
        "1 SIMPLE EFFET",
        "2 SIMPLE EFFET",
        "1 DOUBLE EFFET",
        "2 DOUBLE EFFET",
        "3 DOUBLE EFFET"

    ],

    implementLinkageType:[
        "PORTE",
        "TRAINE (relevage)",
        "TRAINE (piton)",
    ],

    implementMainAxle:[
        "FIXE",
        "SUIVEUR"
    ],

    implementParallelSystem:[
        "HYDRAULIQUE",
        "MECANIQUE"
    ],

    implementPowerTransmission:[
        "ELECTRIQUE",
        "HYDRAULIQUE",
        "MECANIQUE"
    ],

    implementWorkingWidth:[
        "3 METRES",
        "3.5 METRES",
        "4 METRES",
        "4.5 METRES",
        "5 METRES",
        "6 METRES",
        "8 METRES",
        "9 METRES",
        "15 METRES",
        "18 METRES",
        "21 METRES",
        "24 METRES",
        "28 METRES",
        "30 METRES",
        "36 METRES",
        "40 METRES",
        "44 METRES",
        "48 METRES",
        //divider
        "2 METRES",
        "2.5 METRES",
        "5.5 METRES",
        "7 METRES",
        "10 METRES",
        "11 METRES",
        "12 METRES",
        "13 METRES",
        "14 METRES",
        "16 METRES",
        "17 METRES",
        "19 METRES",
        "20 METRES",
        "22 METRES",
        "23 METRES",
    ],

    loaderFunctions:[
        "2 FONCTIONS",
        "2 FONCTIONS + E",
        "3 FONCTIONS",
        "3 FONCTIONS + E",
        "4 FONCTIONS"
    ],

    metersFrom1To10:[
        "1 METRE",
        "1.5 METRES",
        "2 METRES",
        "2.5 METRES",
        "3 METRES",
        "3.5 METRES",
        "4 METRES",
        "4.5 METRES",
        "5 METRES",
        "5.5 METRES",
        "6 METRES",
        "6.5 METRES",
        "7 METRES",
        "7.5 METRES",
        "8 METRES",
        "8.5 METRES",
        "9 METRES",
        "9.5 METRES",
        "10 METRES"

    ],

    moldboardType:[
        "AMERICAIN",
        "CLAIRE VOIE",
        "CYLINDRIQUE COURT",
        "CYLINDRIQUE LONG",
        "CYLINDRO-HELICO.",
        "HELICOIDAL COURT",
        "LOSANGE",
        "PLASTIQUE"
    ],

    numberOneToTwenty,//: Array.from(new Array(20)).map((e, i) => i + 1),  // 1 to 20

    numberOneToFifty,//: Array.from(new Array(50)).map((e, i) => i + 1),   // 1 to 50

    number150to250,// : Array.from(new Array(11)).map((e, i) => 150 + (i * 10)),   // 150 to 250

    ploughShareType:[
        "CARBURE",
        "REVERSIBLE",
        "STANDARD"
    ],

    pullBars:[
        "MANUELLES",
        "HYDRAULIQUES"
    ],

    pumpOutput,

    powerTakeOffRear:[
        "540 - 540E",
        "540 - 1000",
        "540E - 1000",
        "540 - 1000E",
        "540 - 1000 - 1000E",
        "540 - 540E - 1000",
        "540 - 1000 - 1000E",
        "540 - 540E - 1000 - 1000E"
    ],

    powerTakeOffFront:[
        "DROITE 540",
        "DROITE 1000",
        "DROITE 540E - 1000",
        "GAUCHE 540",
        "GAUCHE 1000",
        "GAUCHE 540E - 1000",
    ],
    radio:[
        "RADIO",
        "RADIO - CD",
        "RADIO - CD - BLUETOOTH"
    ],

    rearValves:[
        "MECA 1 SIMPLE EFFET",
        "MECA 1 DOUBLE EFFET",
        "MECA 1 SIMPLE EFFET + 1 DOUBLE EFFET",
        "MECA 1 SIMPLE EFFET + 2 DOUBLE EFFET",
        "MECA 2 DOUBLE EFFET",
        "MECA 3 DOUBLE EFFET",
        "MECA 4 DOUBLE EFFET",
        "MECA 5 DOUBLE EFFET",
        "MECA 6 DOUBLE EFFET",
        "MECA 7 DOUBLE EFFET",
        "ELEC 1 DOUBLE EFFET",
        "ELEC 2 DOUBLE EFFET",
        "ELEC 3 DOUBLE EFFET",
        "ELEC 4 DOUBLE EFFET",
        "ELEC 5 DOUBLE EFFET",
        "ELEC 6 DOUBLE EFFET",
        "ELEC 7 DOUBLE EFFET",
    ],

    reverse:[
        "MECANIQUE",
        "ELECTRO-HYDR.",
        "NON EQUIPE"
    ],

    rollType:[
        "CAMBRIDGE",
        "CROSSKILETTES",
        "CROSSKILL",
        "DISQUES",
        "LISSE",
        "ONDULE",
        "PACKER",
        "MAXI PACKER",
        "PNEU",
        "SILLONNEUR",
        "SPIRE",
        "STS"
    ],

    rouesDirectrices:[
        "2",
        "4",
        "2 + 4",
        "2 + 4 + CRABE"
    ],

    seat:[
        "MECANIQUE",
        "PNEUMATIQUE",
        "BASSE FREQUENCE"
    ],

    silageTrailerUnload:[
        "FOND MOUVANT",
        "FOND POUSSANT",
    ],
    skimType:[
        "GRAND VOLUME",
        "MAIS",
        "MIXTE",
        "UNIVERSELLE",
    ],

    stabilisators:[
        "AUTOMATIQUES",
        "MANUELS",
        "HYDRAULIQUES"
    ],

    swathMode:[
        "A GAUCHE",
        "A DROITE",
        "CENTRAL",
        "CENTRAL ET LATERAL"
    ],

    tankCapacity:[
        "BOULON",
        "NON STOP MECA",
        "NON STOP HYDR."
    ],

    tillageSecurity:[
        "BOULON",
        "NON STOP MECA",
        "NON STOP HYDR."
    ],

    tineFit:[
        "BOULON",
        "DEMONTAGE RAPIDE"
    ],

    tonsFrom1To10:[
        "1T",
        "1.5T",
        "2T",
        "2.5T",
        "3T",
        "3.5T",
        "4T",
        "4.5T",
        "5T",
        "5.5T",
        "6T",
        "6.5T",
        "7T",
        "7.5T",
        "8T",
        "8.5T",
        "9T",
        "9.5T",
        "10T"

    ],

    tractorTransmission:[
        "DOUBLEUR SOUS CHARGE",
        "HYDROSTATIQUE",
        "MECANIQUE",
        "FULL-POWERSHIFT",
        "SEMI-POWERSHIFT",
        "VARIATION CONTINUE"
    ],
    trailerAxles:[
        "SIMPLE ESSIEU",
        "BALANCIER",
        "BALANCIER SUIVEUR",
        "BOGGIE",
        "BOGGIE SUIVEUR",
        "TANDEM",
        "TANDEM SUIVEUR",
        "TRIDEM",
        "TRIDEM SUIVEUR",

    ],

    trailerDoor:[
        "AUTOMATIQUE",
        "HYDRAULIQUE",
        "GUILLOTINE",
        "MANUELLE",
    ],

    trailerLinkage:[
        "BARRE OSCILLANTE",
        "CHAPE K80",
        "PITON",
    ],

    trailerRoadSuspension:[
        "HYDRAULIQUE",
        "MECANIQUE",
        "PNEUMATIQUE"
    ],

    trailerUnload:[
        "BENNAGE 1 VERIN",
        "BENNAGE 2 VERINS",
        "COMPAS",
        "FOND MOUVANT",
        "FOND POUSSANT",
    ],

    tyreBrands: [
        "BKT", 
        "BRIDGESTONE", 
        "CONTINENTAL", 
        "DUNLOP", 
        "FIRESTONE", 
        "GOODYEAR", 
        "KLEBER", 
        "MICHELIN", 
        "MITAS", 
        "PIRELLI", 
        "TRELLEBORG", 
        "VREDESTEIN", 
        // divider
        "ALLIANCE", 
        "BARUM", 
        "CARLISLE", 
        "EVEREST", 
        "NOKIAN", 
        "TAURUS", 
        "UNIROYAL"],

    tractorMaxSpeed:[
        "20 KM/H",
        "25 KM/H",
        "30 KM/H",
        "35 KM/H",
        "40 KM/H",
        "50 KM/H",
        "55 KM/H",
        "60 KM/H",
    ],

    years:[
        '2020','2019','2018','2017','2016','2015','2014','2013','2012','2011','2010','2009','2008','2007','2006','2005','2004','2003','2002','2001','2000','1999','1998','1997','1996','1995','1994','1993','1992','1991','1990'
    ],

    wearRatio:[
        "0%",
        "20%",
        "40%",
        "60%",
        "80%",
        "100%"
    ],






////////////////////////////////////////////////////////*[ Form Fields Ranked by Steps ]*////////////////////////////////////////////////////////







    /**
     * EXPORTED METHOD
     * @dev All Possible Steps ranked by step
     * ## param {object} properties :
     *  - step (number) the form step in use
     *  - brands (array) specific brands list accorded to selected nature (step 2 only)
     *  - years (array) 30 precedent years from current year (step 2 only)
     *  - list {boolean} return all form steps if set to true (default to false)
     */
    formSteps : async({step, brands, years, list}) => {

        const _formSteps = {
            2: {
                addOns: {
                    "nbrBottes": {
                        title: 'Nombre bottes',
                        property: 'nbrBottes',
                        numeric: true
                    },
                    "cptrBottes": {
                        title: 'Compteur bottes',
                        property: 'cptrBottes',
                        numeric: true
                    }, 
                    "hrsMoteur": {
                        title: 'Heures moteur',
                        property: 'motorHours',
                        numeric: true
                    },
                    "hrsCptr": {
                        title: 'Heures compteur',
                        property: 'counterHours',
                        numeric: true
                    },
                    "hrsRotor": {
                        title: 'Heures rotor',
                        property: 'rotorHours',
                        numeric: true
                    },
                    "hrsBatteur": {
                        title: 'Heures batteur',
                        property: 'batteurHours',
                        numeric: true
                    },
                    "hrsSecouage": {
                        title: 'Heures secouage',
                        property: 'secouageHours',
                        numeric: true
                    },
                },

                regular : [             // type 'regular' stored by nature.formStepsTypes (Natures.js)
                    {
                        title: 'Modèle',
                        property: 'model',
                        // multiline: true
                    },
                    {
                        title: 'Année',
                        property: 'year',
                        data: formsCatalog.years
                        //numeric: true,
                    },
                    {
                        title: 'Numéro de série',
                        property: 'serialNumber',
                    }
                ],

            },
            3:{
                addOns:{
                    "attelageTracteur":{
                        title:'Attelage',
                        property : 'tractorLinkage',
                        toggle:[
                            "Cat 2",
                            "Cat 3",
                            "Cat 4",
                            "Cat 5",
                            "Piton fixe",
                            "Barre oscillante",
                            "Crochet à échelle",
                            "Crochet ramasseur",
                            "Rotules",
                            "Troisième point manuel",
                            "Troisième point hydraulique"
                        ]  
                    },

                    "attelageOutil":{
                        title:'Attelage outil',
                        property:'implementLinkageType',
                        data: formsCatalog.implementLinkageType
                    },

                    "attelageRemorque":{
                        title:'Attelage',
                        property:'trailerLinkage',
                        data: formsCatalog.trailerLinkage
                    },

                    "autoguidageEmbarque":{
                        title:'Autoguidage',
                        property : 'onboardAutoguidance',
                        toggle:[
                            "AUTOTRAC READY",
                            "ACTIVATION AUTOTRAC",
                            "AUTOGUIDE READY",
                            "ACTIVATION AUTGUIDE"
                        ]  
                    },

                    "cabine":{
                        title:'Type de cabine',
                        property:'cabType',
                        data: formsCatalog.cabType
                    },

                    "cabineAutomoteur":{
                        title:'Cabine',
                        property : 'automotiveCabOptions',
                        toggle:[
                            "AVANCEMENT AUTOMATIQUE",
                            "CLIMATISATION",
                            "DEBITMETRE",
                            "DOCUMENTATION",
                            "MONITEUR DE PERTES",
                            "SIEGE PNEUMATIQUE",
                            "TELEMATIQUE"
                        ]  
                    },

                    "canalPresse":{
                        title:'Canal',
                        property : 'squareBalerChannel',
                        toggle:[
                            "80 X 50",
                            "80 X 60",
                            "80 X 70",
                            "80 X 80",
                            "120 X 60",
                            "120 X 70",
                            "120 X 80",
                            "120 X 90",
                            "120 X 120",
                            "120 X 130"
                        ]  
                    },

                    "capaciteEnLitres":{
                        title:'Capacité (litres)',
                        property:'literCapacity',
                        numeric: true,
                    },

                    "capaciteEnM3":{
                        title:'Capacité (m3)',
                        property:'squareMeterCapacity',
                        numeric: true,
                    },

                    "capaciteEnTonnes":{
                        title:'Capacité (T)',
                        property:'squareMeterCapacity',
                        data:formsCatalog.tonsFrom1To10
                    },

                    "chandelles":{
                        title:'Chandelles',
                        property:'pullBars',
                        data: formsCatalog.pullbars
                    },

                    "chargeUtile":{
                        title:'Charge utile (T)',
                        property:'tonsCapacity',
                        numeric: true,
                    },

                    "chariot":{
                        title:'Chariot',
                        property:'trolley',
                        data:["4 ROUES DIRECTIONNELLES","DOUBLE ESSIEUX","SIMPLE ESSIEU","TOURELLE"]
                    },

                    "climatisation":{
                        title:'Climatisation',
                        property:'airConditioning',
                        data : formsCatalog.airConditioning
                    },

                    "commandesEnrubanneuse":{
                        title:'Commande',
                        property:'implementWrapperHandCommand',
                        data: formsCatalog.implementWrapperHandCommand
                    },

                    "commandesHydrauliques":{
                        title:'Commandes hydraulique',
                        property:'implementHydraulicCommands',
                        data: formsCatalog.implementHydraulicCommands
                    },

                    "compensationNiveau":{
                        title:'Compensation',
                        property:'levelCompensation',
                        data: ["AUTOLEVEL","AUTONIVELLANT (CNH)","BALANCE (DEUTZ)","CAISSON 3D (CLAAS)","CAISSON 4D (CLAAS)","HILLMASTER (JOHN DEERE)","MONTANA (CLAAS)","SMARTSIEVE (CNH)","AUTRE"]
                    },

                    "conditionneur":{
                        title:'Conditionneur',
                        property : 'conditionning',
                        data: ["DOIGTS SOUPLES","DOIGTS RIGIDES","FLEAUX","ROULEAUX"]
                    },

                    "conformite":{
                        title:'Conformité',
                        property:'conformity',
                        //type:'select',
                        toggle: formsCatalog.conformity
                    },

                    "correcteurDeversPulverisateur":{
                        title:'Correcteur de dévers',
                        property:'tiltCorrectionForSprayer',
                        data: formsCatalog.assistantFunction
                    },

                    "debitPompe":{
                        title:'Débit pompe',
                        property:'pumpOutput',
                        data: formsCatalog.pumpOutput
                    },

                    "dechargementRemorque":{
                        title:'Déchargement',
                        property:'trailerUnload',
                        data: formsCatalog.silageTrailerUnload
                    },

                    "diametreFusee":{
                        title:'Diamètre fusée',
                        property:'rotateAxleDiameter',
                        numeric: true,
                    },

                    "diametreBotte":{
                        title:'Diamètre de bottes (cm)',
                        property:'baleDiameter',
                    },

                    "dimensionPneumatiques":{
                        title:'Dim. pneus',
                        property:'tyreSize',
                        
                    },

                    "dimensionPneumatiquesAvant":{
                        title:'Dim. pneus AV',
                        property:'frontTyreSize',
                        
                    },

                    "dimensionPneumatiquesArriere":{
                        title:'Dim. pneus AR',
                        property:'rearTyreSize',
                        
                    },

                    "distributeursAvant":{
                        title:'Distrib. AV',
                        property:'frontValves',
                        data : formsCatalog.frontValves
                    },

                    "distributeursArriere":{
                        title:'Distrib. AR',
                        property:'rearValves',
                        data : formsCatalog.rearValves
                    },

                    "eclateur":{
                        title:'Eclateur',
                        property:'cornKracker',
                        data: ["KERNELSTAR","STANDARD","SHREDLEDGE"]
                    },

                    "entrainementOutil":{
                        title:'Entrainement',
                        property:'implementPowerTransmission',
                        data: formsCatalog.implementPowerTransmission
                    },

                    "entrainementTurbine":{
                        title:'Entrainement turbine',
                        property:'implementTurbinePowerTransmission',
                        data: formsCatalog.implementPowerTransmission
                    },

                    "entrainementDemeleurs":{
                        title:'Entrainement démêleurs',
                        property:'implementUnravelPowerTransmission',
                        data: formsCatalog.implementPowerTransmission
                    },

                    "entrePointes":{
                        title:'Entre pointes',
                        property:'sharePloughSpaceBetween',
                        numeric: true,
                    },

                    "eparpilleur":{
                        title:'Eparpilleur',
                        property:'chaffSpreader',
                        data: formsCatalog.implementPowerTransmission
                    },

                    "essieuPrincipal":{
                        title:'Essieu principal',
                        property:'implementMainAxle',
                        data: formsCatalog.implementMainAxle
                    },

                    "fixationCouteaux":{
                        title:'Fixattion couteaux',
                        property:'knifeFit',
                        data: formsCatalog.tineFit
                    },

                    "fixationDentsHerse":{
                        title:'Fixation dents',
                        property:'tineFit',
                        data: formsCatalog.tineFit
                    },

                    "freinage":{
                        title:'Freinage',
                        property:'brakingSystem',
                        data: formsCatalog.brakingSystem
                    },

                    "freinageOutil":{
                        title:'Freinage outil',
                        property:'implementBrakingSytem',
                        data: formsCatalog.implementBrakingSytem
                    },

                    "fonctionsChargeur":{
                        title:'Fonctions',
                        property:'loaderFunctions',
                        data: formsCatalog.loaderFunctions
                    },

                    "geometrieVariable":{
                        title:'Géométrie variable',
                        property:'variableGeometry',
                        data: formsCatalog.assistantFunction
                    },

                    "hauteurDegagement":{
                        title : 'Hauteur de dégagement',
                        property:'tillageHeight',
                        numeric: true,
                    },

                    "herissons":{
                        title : 'Hérissons',
                        property:'hedgehog',
                        data: formsCatalog.hedgehog
                    },

                    "inverseur":{
                        title : 'Inverseur',
                        property:'reverse',
                        data: formsCatalog.reverse
                    },

                    "largeurCanal":{
                        title:'Largeur canal (cm)',
                        property:'channelWidth',
                        numeric: true,
                    },

                    "largeurCoupe":{
                        title:'Largeur coupe (m)',
                        property:'cutterbarWidth',
                        data: formsCatalog.floatFromThreeToFifteen
                    },

                    "largeurGodet":{
                        title:'Largeur (m)',
                        property:'dipperWidth',
                        numeric: true,
                    },

                    "largeurPickUp":{
                        title:'Largeur (m)',
                        property:'pickUpWidth',
                        data: formsCatalog.number150to250
                    },

                    "largeurTravailMetres":{
                        title:'Largeur travail (mètres)',
                        property:'implementWorkingWidth',
                        data: formsCatalog.implementWorkingWidth
                    },

                    "largeurTravailPouces":{
                        title:'Largeur travail (pouces)',
                        property:'implementWorkingWidth',
                        data: formsCatalog.implementWorkingWidth
                    },

                    "liageBotte":{
                        title:'Liage',
                        property:'baleWrapping',
                        data: ["FICELLE","FILET","FICELLE + FILET"]
                    },

                    "liagePresseCarre":{
                        title:'Liage',
                        property:'squareBaleString',
                        data: ["DOUBLE NOEUD","SIMPLE NOEUD"]
                    },

                    "longueur":{
                        title:"Longueur",
                        property:"length",
                        type:"numeric"
                    },

                    "longueurFleche":{
                        title:"Longueur flèche",
                        property:"telehandlerLength",
                        type:"select",
                        data:formsCatalog.metersFrom1To10
                    },

                    "marqueChariot":{
                        title:'Marque chariot',
                        property:'traolleyBrand',
                        data: ["CHEVAL","CLAAS","COCHET","DEUTZ FAHR","JOHN DEERE","PERARD","ZURN"]
                    },

                    "marqueRecolteur":{
                        title:'Marque récolteur',
                        property:'harvestingPlatformBrand',
                        data: formsCatalog.harvestingPlatformBrand
                    },

                    "marquePneumatiques":{
                        title:'Marque pneus',
                        property:'tyreBrand',
                        data: formsCatalog.tyreBrands
                    },

                    "marquePneumatiquesAvant":{
                        title:'Marque pneus AV',
                        property:'frontTyreBrand',
                        data: formsCatalog.tyreBrands
                    },

                    "marquePneumatiquesArriere":{
                        title:'Marque pneus AR',
                        property:'rearTyreBrand',
                        data: formsCatalog.tyreBrands
                    },

                    "materiauxCaisse":{
                        title:'Construction caisse',
                        property:'chassisMaterial',
                        data: formsCatalog.chassisMaterial
                    },

                    "miseAuTransport":{
                        title:'Mise au transport',
                        property:'transportSetMode',
                        data: formsCatalog.implementPowerTransmission
                    },

                    "miseEnAndain":{
                        title:'Mise en andain',
                        property:'swathMode',
                        data: formsCatalog.swathMode
                    },

                    "modeleRecolteur":{
                        title:'Modèle récolteur',
                        property:'harvestingPlatformModel',
                        
                    },

                    "monolevier":{
                        title:'Monolevier',
                        property:'implementHandCommand',
                        data: formsCatalog.implementHandCommand
                    },

                    "nettoyageNoueurs":{
                        title:'Nettoyage noueurs',
                        property:'knotterCleaning',
                        data: formsCatalog.implementPowerTransmission
                    },

                    "nombreAssiettesTambours":{
                        title:'Nombre assiettes/tambours',
                        property:'platesDrumsNumber',
                        data: formsCatalog.numberOneToTwenty
                    },

                    "nombreBrasRotors":{
                        title:'Nombre de bras/rotors',
                        property:'armRotorNumber',
                        data: formsCatalog.numberOneToTwenty
                    },

                    "nombreCourroies":{
                        title:'Nombre de courroies',
                        property:'beltNumber',
                        data: formsCatalog.numberOneToTwenty
                    },

                    "nombreCouteaux":{
                        title:'Nombre de couteaux',
                        property:'knifeNumber',
                        data: formsCatalog.numberOneToTwenty
                    },

                    "nombreCouteauxBroyeur":{
                        title:'Nombre couteaux broyeur',
                        property:'rotorKnifeNumber',
                        type:'numeric'
                    },

                    "nombreCouteauxAremplacer":{
                        title:'Couteaux à remplacer',
                        property:'knifeToReplace',
                        data: formsCatalog.numberOneToFifty
                    },

                    "nombreDentsARemplacer":{
                        title:'Nombre de dents à remplacer',
                        property:'toothToReplace',
                        data: formsCatalog.numberOneToTwenty
                    },

                    "nombreDemeleurs":{
                        title:'Nombre de démêleurs',
                        property:'unravelNumber',
                        data: formsCatalog.numberOneToTwenty
                    },

                    "nombrePoutres":{
                        title:'Nombre de poutres',
                        property:'beamNumber',
                        data: formsCatalog.numberOneToTwenty
                    },

                    "nombreRangs":{
                        title:'Nombre de rangs',
                        property:'rowNumber',
                        data: formsCatalog.numberOneToFifty
                    },

                    "nombreRotors":{
                        title:'Nombre de rotors',
                        property:'rotorNumber',
                        data: formsCatalog.numberOneToTwenty
                    },

                    "nombreRouleaux":{
                        title:'Nombre de rouleaux',
                        property:'rollNumber',
                        data: formsCatalog.numberOneToTwenty
                    },

                    "nombreSocs":{
                        title:'Nombre de socs',
                        property:'ploughShareNumber',
                        data: formsCatalog.numberOneToTwenty
                    },

                    "nombreSocsDisques":{
                        title:'Nombre de socs/disques',
                        property:'ploughShareDiscNumber',
                        data: formsCatalog.numberOneToFifty
                    },

                    "nombreTroncons":{
                        title:'Nombre de troncons',
                        property:'spayingSectionNumber',
                        data: formsCatalog.numberOneToFifty
                    },

                    "nombreVitesses":{
                        title:'Nombre de vitesses',
                        property:'gearRange',
                        
                    },

                    "optionsAndaineur":{
                        title:'Options',
                        property : 'rakeOptions',
                        toggle:[
                            "BACHE HYDRAULIQUE",
                            "ROUE DE SECOURS",
                            "CARDAN GRAND ANGLE",
                            "DIVISEUR DE DEBIT"
                        ]  
                    },

                    "optionsAutochargeuse":{
                        title:'Options',
                        property : 'silageTrailerOptions',
                        toggle:[
                            "BEQUILLE HYDRAULIQUE",
                            "BACHE",
                            "GAISSAGE CENTRAL.",
                            "GARDES BOUE",
                            "FILET",
                            "LUBRIFICATION AUTO",
                            "PICK UP HYDRAULIQUE",
                            "ROUES JAUGE PIVOT.",
                        ]  
                    },

                    "optionsBetaillere":{
                        title:'Options',
                        property : 'trailerOptions',
                        toggle:[
                            "PLANCHER ANTIDERAPANT",
                            "BEQUILLE HYDRAULIQUE",
                            "CAILLEBOTIS",
                            "CLOISON MOBILE",
                            "FOND BITUMEUX",
                            "POSE A TERRE",
                            "PONT MANUEL",
                            "PONT HYDRAULIQUE",
                        ]  
                    },

                    "optionsBroyeur":{
                        title:'Options',
                        property : 'crusherOptions',
                        toggle:[
                            "DEPORT HYDRAULIQUE",
                            "DEPORT MANUEL",
                        ]  
                    },

                    "optionsChargeur":{
                        title:'Options',
                        property : 'loaderOptions',
                        toggle:[
                            "BATI SUPPORT",
                            "MULTICOUPLEUR",
                            "PROTECTION FRONTALE",
                            "SUSPENSION HYD.",
                        ]  
                    },

                    "optionsCharrue":{
                        title:'Options',
                        property : 'ploughOptions',
                        toggle:[
                            "BOITIER DE COMMANDE",
                            "COUTRES",
                            "DEPORT HYDRAULIQUE",
                            "DEPORT MANUEL",
                        ]  
                    },

                    "optionsCombine":{
                        title:'Options',
                        property : 'drillCombinationOptions',
                        toggle:[
                            "LAME NIVELEUSE",
                            "DENTS CARBURE",
                            "ISOBUS",
                            "JALONNAGE",
                            "MICRO - FERTILISAT.",
                            "MODULATION DE DOSE",
                            "TRACEURS",
                            "TRACEURS PRE LEVEE",
                        ]  
                    },

                    "optionsCueilleur":{
                        title:'Options',
                        property : 'harvestingPlatformOptions',
                        toggle:[
                            "BROYEUR A COUTEAUX",
                            "BROYEUR A ROULEAUX",
                            "REPLIAGE HYDRAULIQUE",
                            "VIS LATERALES"
                        ]  
                    },

                    "optionsDerouleuse":{
                        title:'Options',
                        property : 'forageUnrollerOptions',
                        toggle:[
                            "BRAS DE CHARGEMENT",
                            "SYSTEME DE PAILLAGE",
                            "TABLIER AMOVIBLE 2 DENTS",
                            "TABLE ROTATIVE"
                        ]  
                    },

                    "optionsDesileuse":{
                        title:'Options',
                        property : 'cattleFeederOptions',
                        toggle:[
                            "GOULOTTE ORIENTABLE",
                            "GRIFFE ARRIERE",
                            "RECYCLAGE",
                            "PAILLEUSE"
                        ]  
                    },

                    "optionsEnrubanneuse":{
                        title:'Options',
                        property : 'wrapperOptions',
                        toggle:[
                            "BRAS DE CHARGEMENT",
                            "EJECTEUR"
                        ]  
                    },

                    "optionsEpandeurEngrais":{
                        title:'Options',
                        property : 'fertilizerSpreaderOptions',
                        toggle:[
                            "BACHE",
                            "COUPURE SECTIONS",
                            "DPAE",
                            "ISOBUS",
                            "LIMITEUR BORDURE",
                            "PARE BOUE",
                            "PESEE"
                        ]  
                    },

                    "optionsEpareuse":{
                        title:'Options',
                        property : 'epareuseOptions',
                        toggle:[
                            "BRAS DEPORTE",
                            "BRAS ARTICULE",
                            "CENTRALE HYDRAULIQUE",
                            "ROTOR A EQUILIBRER"
                        ]  
                    },

                    "optionsEpandeurFumier":{
                        title:'Options',
                        property : 'manureSpreaderOptions',
                        toggle:[
                            "BEQUILLE HYDRAULIQUE",
                            "CENTRALE HYDRAULIQUE",
                            "DPAE",
                            "GARDES BOUE",
                            "ISOBUS",
                            "TABLE EPANDAGE",
                            "VOLETS  DE BORDURE",
                            "PESEE"
                        ]  
                    },

                    "optionsFaneuse":{
                        title:'Options',
                        property : 'tedderOptions',
                        toggle:[
                            "ESCAMOTAGE DES TOUPIES",
                            "MISE EN OBLIQUE MANUELLE",
                            "MISE EN OBLIQUE HYDRAULIQUE",
                            "ROUE DE SECOURS"
                        ]  
                    },

                    "optionsFaucheuse":{
                        title:'Options',
                        property : 'mowerOptions',
                        toggle:[
                            "GROUPEUR",
                            "VOLETS ORIENTABLES"
                        ]  
                    },

                    "optionsGodet":{
                        title:'Options',
                        property : 'dipperOptions',
                        toggle:[
                            "FOURCHE FUMIER",
                            "GRAPPIN",
                            "JOUES LATERALES",
                            
                        ]  
                    },

                    "optionsHerse":{
                        title:'Options',
                        property : 'harrowOptions',
                        toggle:[
                            "BARRE NIVELEUSE",
                            "DENTS CARBURE",
                            "PORTE A COURT",
                            "TRACEURS"
                            
                        ]  
                    },

                    "optionsMoissonneuse":{
                        title:'Options',
                        property : 'combineOptions',
                        toggle:[
                            "COMPRESSEUR",
                            "COUPE EXTENSIBLE",
                            "PONT AR MOTEUR"
                        ]  
                    },

                    "optionsPresseBallesCarrees":{
                        title:'Options',
                        property : 'squareBalerOptions',
                        toggle:[
                            "CAMERA",
                            "EJECTEUR",
                            "HACHEUR",
                            "HUMIDIMETRE",
                            "INCORPORATEUR",
                            "GRAISSAGE CENTRALISE",
                            "LUBRIFICATION CHAINES",
                            "PESEE",
                            "ROUES DE JAUGE"
                        ]  
                    },

                    "optionsPresseBallesRondes":{
                        title:'Options',
                        property : 'balerOptions',
                        toggle:[
                            "EJECTEUR",
                            "KIT ENSILAGE",
                            "KIT CHANVRE",
                            "KIT BASSE DENSITE",
                            "GRAISSAGE CENTRALISE",
                            "LUBRIFICATION CHAINES",
                            "ROUES DE JAUGE"
                        ]  
                    },

                    "optionsPulverisateur":{
                        title:'Options',
                        property : 'sprayerOptions',
                        toggle:[
                            "BUSES BORDURE",
                            "COUPURE SECTION",
                            "ISOBUS"
                        ]  
                    },

                    "optionsRemorque":{
                        title:'Options',
                        property : 'trailerOptions',
                        toggle:[
                            "BEQUILLE HYDRAULIQUE",
                            "BACHE",
                            "COMPRESSEUR HYDRAULIQUE",
                            "GARDES BOUE",
                            "FILET",
                            "SURELEVATRICE",
                        ]  
                    },

                    "optionsSemoir":{
                        title:'Options',
                        property : 'drillOptions',
                        toggle:[
                            "ALARME FOND DE TREMIE",
                            "ISOBUS",
                            "INSECTICIDE",
                            "JALONNEURS",
                            "MICRO - FERTI",
                            "MODULATION DE DOSE",
                            "TRACEURS LATERAUX",
                            "TRACEURS PRE-LEVEE"
                        ]  
                    },

                    "optionsTonneLisier":{
                        title:'Options',
                        property:'manureTankSpreaderOptions',
                        data: ["ACCELERATEUR DE POMPAGE","BRAS DE POMPAGE AVANT","DEBITMETRE","BOUBLE BUSE","DPAE","ENFOUISSEUR","RAMPE A BUSES","RAMPE PENDILLARDS","TOURELLE DE POMPAGE"]
                    },

                    "optionsTelescopique":{
                        title:'Options',
                        property:'telehandlerOptions',
                        data: ["BEQUILLES","CROCHET A ECHELLE","CROCHET RAMASSEUR","PITON FIXE","RELEVAGE","ROTULES","SUSPENSION FLECHE","VERROUILLAGE OUTIL HYDR."]
                    },

                    "ouvertureTrappes":{
                        title:'Trappes',
                        property:'parallelSystem',
                        data: formsCatalog.implementPowerTransmission
                    },

                    "parallelogrammeChargeur":{
                        title:'Parallelogramme',
                        property:'parallelSystem',
                        data: formsCatalog.implementParallelSystem
                    },

                    "plastron":{
                        title:'Plastron',
                        property:'plastron',
                        data: ["FIXE","PIVOTANT"]
                    },

                    "plateauxTournesol":{
                        title:'Plateaux tournesol',
                        property:'sunflowerProlongator',
                        data: ["BISO","BOURDONNEAU","CHEVAL","CNH","COCHET","DEUTZ FAHR","PERARD","POGET","ZURN"]
                    },

                    "priseDeForceAR":{
                        title:'Prise de force AR',
                        property:'powerTakeOffRear',
                        data: formsCatalog.powerTakeOffRear
                    },

                    "priseDeForceAV":{
                        title:'Prise de force AV',
                        property:'powerTakeOffFront',
                        data: formsCatalog.powerTakeOffFront
                    },

                    "pontAvant":{
                        title:'Pont AV',
                        property:'frontAxle',
                        data: formsCatalog.frontAxle
                    },

                    "porteBuse":{
                        title:'Portes buses',
                        property:'nozalSupport',
                        data:["DOUBLE JET","MONOJET","PENTAJET","QUADRIJET","TRIJET"]
                    },

                    "porteeHorizontale":{
                        title:'Portée horizontale (m)',
                        property:'horizontalScope',
                        numeric: true
                    },

                    "puissance":{
                        title:'Puissance',
                        property:'horsePower',
                        
                    },

                    "radio":{
                        title:'radio',
                        property:'radio',
                        data: formsCatalog.radio
                    },

                    "rallongeColza":{
                        title:'Rallonge colza',
                        property:'oilSeedRapeProlongator',
                        data: ["BISO","BOURDONNEAU","CHEVAL","CNH","COCHET","DEUTZ FAHR","PERARD","POGET","ZURN"]
                    },

                    "materiauxRampe":{
                        title:'Rampe',
                        property:'boomMaterial',
                        data: ["ACIER","ALU","CARBONE"]
                    },

                    "relevageAvant":{
                        title:'Relevage AV',
                        property:'frontLinkage',
                        data: formsCatalog.frontLinkage
                    },

                    "reglageContreCouteau":{
                        title:'Contre couteau',
                        property:'counterKnife',
                        data: ["AUTOMATIQUE","MANUEL"]
                    },

                    "regulation":{
                        title:'Régulation',
                        property:'sprayingRegulation',
                        data: ["DPM","DPAM","DPAE DEBIT","DPAE PRESSION","DPAE PRESSION + DEBIT"]
                    },

                    "remorqueBennage":{
                        title:'Bennage',
                        property:'trailerUnload',
                        data: formsCatalog.trailerUnload
                    },

                    "remorquePorte":{
                        title:'Type de porte',
                        property:'trailerDoor',
                        data: formsCatalog.trailerDoor
                    },

                    "repliageChassis":{
                        title:'Repliage chassis',
                        property:'implementFoldable',
                        data: formsCatalog.implementFoldable
                    },

                    "repliageRampe":{
                        title:'Repliage rampe',
                        property:'boomFoldable',
                        data: formsCatalog.boomFoldable
                    },

                    "rotationEnrubanneuse":{
                        title:'Rotation',
                        property:'wrapperRotation',
                        data: formsCatalog.wrapperRotation
                    },

                    "rouleauxAlimentation":{
                        title:'Rouleaux alimentation',
                        property:'feedingRolls',
                        data: ["BOITE DE VITESSE","IVLOC","VARIATION CONTNUE"]
                    },

                    "sectionPoutre":{
                        title:'Section poutre',
                        property:'beamSection',
                        
                    },

                    "sectionEssieu":{
                        title:'Section essieu(x)',
                        property:'axleSection',
                        data: formsCatalog.axleSection
                    },

                    "securiteTravailSol":{
                        title:'Sécurité',
                        property:'tillageSecurity',
                        data: formsCatalog.tillageSecurity
                    },

                    "siege":{
                        title:'Siège',
                        property:'seat',
                        data: formsCatalog.seat
                    },

                    "stabilisateurs":{
                        title:'Stabilisateurs',
                        property:'stabilisators',
                        data: formsCatalog.stabilisators
                    },

                    "suiviSol":{
                        title:'Suivi du sol',
                        property:'groundAdaptation',
                        data: formsCatalog.groundAdaptation
                    },

                    "suspensionFleche":{
                        title:'Suspension flèche',
                        property:'trailerRoadSuspension',
                        data : formsCatalog.trailerRoadSuspension
                    },

                    "tablierAttelage":{
                        title:'Tablier attelage',
                        property:'handlingInterface',
                        data : formsCatalog.handlingInterface
                    },

                    "transmissionAutomoteur":{
                        title:'Transmission',
                        property:'automotiveTransmission',
                        data: formsCatalog.automotiveTransmission
                    },

                    "transmissionTracteur":{
                        title:'Transmission',
                        property:'tractorTransmission',
                        data: formsCatalog.tractorTransmission
                    },

                    "typeAligneusePierres":{
                        title:'Type',
                        property:'stoneAlignerType',
                        data:["DENTS","ROTOR"]
                    },

                    "typeAmeneur":{
                        title:'Type',
                        property:'baleFeederType',
                        data : ["ALTERNATIF","ROTATIF"]
                    },

                    "typeBroyeur":{
                        title:'Type',
                        property:'crusherType',
                        data : ["AXE HORIZONTAL","AXE VERTICAL"]
                    },
                    
                    "typeChambrePresse":{
                        title:'Type',
                        property:'baleChamberType',
                        data : ["FIXE","VARIABLE"]
                    },

                    "typeCharrue":{
                        title:'Type',
                        property:'ploughType',
                        data : ["PORTEE","MONOROUE","SEMI PORTEE","FRONTALE"]
                    },

                    "typeDistribution":{
                        title:'Distribution',
                        property:'distributionSystem',
                        data: formsCatalog.distributionSystem
                    },

                    "typeEnterrage":{
                        title:'Enterrage',
                        property:'buryingType',
                        data: formsCatalog.buryingType
                    },

                    "typeEssieuRemorque":{
                        title:'Type essieu(x)',
                        property:'trailerAxles',
                        data: formsCatalog.trailerAxles
                    },

                    "typeFaucheuse":{
                        title:'Type lamier',
                        property:'mowerType',
                        data: ["DISQUES","TAMBOURS"]
                    },

                    "typeHerse":{
                        title:'Type herse',
                        property:'harrowType',
                        data: ["ALTERNATIVE","ROTATIVE"]
                    },

                    "typePointes":{
                        title:'Type de pointes',
                        property:'ploughShareType',
                        data: formsCatalog.ploughShareType
                    },

                    "typePompe":{
                        title:'Type pompe',
                        property:'pumpType',
                        data: ["1 x POMPE PISTONS","2 x POMPES PISTONS","1 x POMPE CENTRIFUGE","1 x PISTON + 1 x CENTRIFUGE"]
                    },
                    
                    "typeRasettes":{
                        title:'Type rasettes',
                        property:'skimType',
                        data: formsCatalog.skimType
                    },

                    "typeRecolteur":{
                        title:'Type',
                        property:'harvestingPlatformType',
                        data: ["MAIS","TOURNESOL"]
                    },

                    "typeReglageAngle":{
                        title:'Réglage angle',
                        property:'tiltSettingType',
                        data: formsCatalog.implementPowerTransmission
                    },

                    "typeSemoir":{
                        title:'Type demoir',
                        property:'drillType',
                        data: ["DIRECT","EN LIGNE", "MONOGRAINE","SIMPLIFIE"]
                    },

                    "typeSeparationMoissoneuse":{
                        title:'Type séparation',
                        property:'combineSeparator',
                        data: formsCatalog.combineSeparator
                    },

                    "typeSocs":{
                        title:'Type de socs',
                        property:'ploughShareType',
                        data: formsCatalog.ploughShareType
                    },

                    "typeSocsDisques":{
                        title:'Type de socs/disques',
                        property:'ploughShareDiscType',
                        data: formsCatalog.ploughShareType
                    },

                    "typeRouleau":{
                        title:'Type rouleau',
                        property:'rollType',
                        data: formsCatalog.rollType
                    },

                    "typeVersoirs":{
                        title:'Type versoirs',
                        property:'moldboardType',
                        data: formsCatalog.moldboardType
                    },

                    "usureAubes":{
                        title:'Usure aubes',
                        property:'vanesWearing',
                        data: formsCatalog.wearRatio
                    },

                    "usureBalais":{
                        title:'Usure balais',
                        property:'sweepWearing',
                        data: formsCatalog.wearRatio
                    },

                    "usureChassis":{
                        title:'Usure chassis',
                        property:'frameworkWearing',
                        data: formsCatalog.wearRatio
                    },

                    "usureChaines":{
                        title:'Usure chaines transmission',
                        property:'chainsWearing',
                        data: formsCatalog.wearRatio
                    },

                    "usureChainesAlimentation":{
                        title:'Usure chaines alimentation',
                        property:'feedingChainsWearing',
                        data: formsCatalog.wearRatio
                    },

                    "usureChainesBarettes":{
                        title:'Usure chaines et barettes',
                        property:'barchainsWearing',
                        data: formsCatalog.wearRatio
                    },

                    "usureCourroies":{
                        title:'Usure courroies',
                        property:'beltWearing',
                        data: formsCatalog.wearRatio
                    },

                    "usureCouteaux":{
                        title:'Usure couteaux',
                        property:'knifeWearing',
                        data: formsCatalog.wearRatio
                    },

                    "usureContreCouteau":{
                        title:'Usure contre couteau',
                        property:'counterKnifeWearing',
                        data: formsCatalog.wearRatio
                    },

                    "usureDemeleurs":{
                        title:'Usure démêleurs',
                        property:'unravelWearing',
                        data: formsCatalog.wearRatio
                    },

                    "usureDisques":{
                        title:'Usure disques',
                        property:'discWearing',
                        data: formsCatalog.wearRatio
                    },

                    "usureGenerale":{
                        title:'Usure générale',
                        property:'globalWear',
                        data: formsCatalog.wearRatio
                    },

                    "usureHerissons":{
                        title:'Usure hérissons',
                        property:'hedgehogWear',
                        data: formsCatalog.wearRatio
                    },

                    "usureLame":{
                        title:'Usure lame',
                        property:'bladeWearing',
                        data: formsCatalog.wearRatio
                    },

                    "usureLamier":{
                        title:'Usure lamier',
                        property:'cutterbarWearing',
                        data: formsCatalog.wearRatio
                    },

                    "usurePeinture":{
                        title:'Usure peinture',
                        property:'paintWear',
                        data: formsCatalog.wearRatio
                    },

                    "usurePneumatiques":{
                        title:'Usure pneus',
                        property:'tyreWear',
                        data: formsCatalog.wearRatio
                    },

                    "usurePneumatiquesAvant":{
                        title:'Usure pneus AV',
                        property:'frontTyreWear',
                        data: formsCatalog.wearRatio
                    },

                    "usurePneumatiquesArriere":{
                        title:'Usure pneus AR',
                        property:'rearTyreWear',
                        data: formsCatalog.wearRatio
                    },

                    "usurePointes":{
                        title:'Usure pointe',
                        property:'pointWear',
                        data: formsCatalog.wearRatio
                    },

                    "usureRasettes":{
                        title:'Usure rasette',
                        property:'skimWear',
                        data: formsCatalog.wearRatio
                    },

                    "usureRouleaux":{
                        title:'Usure rouleaux',
                        property:'rollWear',
                        data: formsCatalog.wearRatio
                    },

                    "usureRouleauxEpanouilleurs":{
                        title:'Usure rouleaux',
                        property:'MaizeRollWear',
                        data: formsCatalog.wearRatio
                    },

                    "usureSpire":{
                        title:'Usure spire',
                        property:'coilWear',
                        data: formsCatalog.wearRatio
                    },

                    "usureSocs":{
                        title:'Usure socs',
                        property:'ploughshareWearing',
                        data: formsCatalog.wearRatio
                    },

                    "usureSocsDisques":{
                        title:'Usure socs/disques',
                        property:'ploughshareDiscWearing',
                        data: formsCatalog.wearRatio
                    },

                    "usureTapis":{
                        title:'Usure tapis',
                        property:'conveyorBeltWearing',
                        data: formsCatalog.wearRatio
                    },

                    "usureTolesGoulotte":{
                        title:'Usure toles goulotte',
                        property:'chuteToleWearing',
                        data: formsCatalog.wearRatio
                    },

                    "usureTolesRotor":{
                        title:'Usure toles rotor',
                        property:'rotorToleWearing',
                        data: formsCatalog.wearRatio
                    },

                    "usureTremie":{
                        title:'Usure trémie',
                        property:'tankWear',
                        data: formsCatalog.wearRatio
                    },

                    "usureTurbine":{
                        title:'Usure turbine',
                        property:'turbineWearing',
                        data: formsCatalog.wearRatio
                    },

                    "usureVersoirs":{
                        title:'Usure versoir',
                        property:'moldboardWear',
                        data: formsCatalog.wearRatio
                    },

                    "usureVis":{
                        title:'Usure vis',
                        property:'screwWear',
                        data: formsCatalog.wearRatio
                    },

                    "varilarge":{
                        title:'Varilarge',
                        property:'widthVariation',
                        data: formsCatalog.implementPowerTransmission
                    },

                    "vitesseMaximaleAutomoteur":{
                        title:'Vitesse maximale',
                        property:'automotiveMaxSpeed',
                        data: formsCatalog.automotiveMaxSpeed
                    },

                    "vitesseMaximaleTracteur":{
                        title:'Vitesse maximale',
                        property:'maxSpeed',
                        data: formsCatalog.tractorMaxSpeed
                    },

                    "vitessePDF":{
                        title:'Vitesse PDF',
                        property:'powerTakeOffSpeed',
                        data: ["540","1000"]
                    },
                    
                    "porteurType": {
                        title: 'Type',
                        property: 'porteurType',
                        data: formsCatalog.porteurTypes
                    },

                    "transmission": {
                        title: 'Transmission',
                        property: 'transmission'
                    },

                    "multifonction": {  // toggle
                        title : 'Multifonction',
                        property: "multifonction",
                        toggle: formsCatalog.multifonction
                    },

                    "porteurOptions": {
                        title: 'Options',
                        property: "porteurOption",
                        toggle: formsCatalog.porteurOptions
                    },

                    "porteurConformity": {
                        title: 'Conformité',
                        property: "porteurConformity",
                        toggle: [
                            "Eclairage",
                            "Clignotants",
                            "Gyrophare",
                            "Extincteur"
                        ]
                    },

                    "porteurSeat": {
                        title: 'Siège',
                        property: 'seat',
                        data: [
                            "MÉCANIQUE",
                            "PNEUMATIQUE",
                            "NON ÉQUIPÉ"
                        ]
                    }
                    /** end ajouté par Mathieu */
                }
            },
            4:{
                regular:[
                    {
                        title:'Numéro de série',
                        property : 'serialNumber',
                        picture: true
                    },
                    {
                        title : '3/4 avant gauche',
                        property:'leftFront',
                        picture: true
                    },
                    {
                        title:'3/4 avant droit',
                        property : 'rightFront',
                        picture: true
                    },
                    {
                        title:'3/4 arrière droit',
                        property : 'rightBack',
                        picture: true
                    },
                    {
                        title:'3/4 arrière gauche',
                        property : 'rightLeft',
                        picture: true
                    }
                ],

                trailed:[
                    {
                        title:'Numéro de série',
                        property : 'serialNumber',
                        picture: true
                    },
                    {
                        title : '3/4 avant gauche',
                        property:'leftFront',
                        picture: true
                    },
                    {
                        title:'3/4 avant droit',
                        property : 'rightFront',
                        picture: true
                    },
                    {
                        title:'3/4 arrière droit',
                        property : 'rightBack',
                        picture: true
                    },
                    {
                        title:'3/4 arrière gauche',
                        property : 'rightLeft',
                        picture: true
                    },
                    {
                        title:'Dimension pneus',
                        property:'tyreSize',
                        picture: true
                    },
                    {
                        title:'Carte grise',
                        property:'registrationCard',
                        picture: true
                    }
                ],

                addOns:{
                    "aubes":{
                        title:'Aubes',
                        property:'vanes',
                        picture: true
                    },

                    "bras":{
                        title:'Bras',
                        property:'arm',                 
                        picture: true
                    },

                    "brasChargement":{
                        title:'Bras de chargement',
                        property:'loadingArm',                 
                        picture: true
                    },

                    "boitier":{
                        title:'Boitier',
                        property:'commandBox',                 
                        picture: true
                    },

                    "brosses":{
                        title:'Brosses',
                        property:'brush',
                        picture: true
                    },

                    "broyeur":{
                        title:'Broyeur',
                        property:'crusher',
                        picture: true
                    },

                    "buses":{
                        title:'Buses',
                        property:'nozzle',
                        picture: true
                    },

                    "cadreCentral":{
                        title:'Cadre central',
                        property:'centerChassis',
                        picture: true
                    },

                    "canal":{
                        title:'Canal',
                        property:'channel',
                        picture: true
                    },
                    
                    "compteur":{
                        title:'Compteur',
                        property:'counter',
                        picture: true
                    },

                    "conditionneur":{
                        title:'Conditionneur',
                        property:'Conditionning',
                        picture: true
                    },

                    "couteaux":{
                        title:'Couteaux',
                        property:'silageKnives',
                        picture: true
                    },

                    "cuve":{
                        title:'Cuve',
                        property:'tank',
                        picture: true
                    },

                    "dents":{
                        title:'Dents',
                        property:'tine',
                        picture: true
                    },

                    "demeleurs":{
                        title:'Démêleurs',
                        property:'unravel',
                        picture: true
                    },

                    "dimensionPneumatiqueAvant":{
                        title:'Dimension pneus AV',
                        property:'frontTyreSize',
                        picture: true
                    },
                    "dimensionPneumatiqueArriere":{
                        title:'Dimension pneus AR',
                        property:'rearTyreSize',
                        picture: true
                    },
                    "entrainementGauche":{
                        title:'Entrainement gauche',
                        property:'leftPowerChain',
                        picture: true
                    },
                    "entrainementDroit":{
                        title:'Entrainement droit',
                        property:'rightPowerChain',
                        picture: true
                    },
                    "herissons":{
                        title:'Hérissons',
                        property:'hedgehog',
                        picture: true
                    },
                    "interieurCabine_1":{
                        title:'Intérieur cabine 1',
                        property:'cabIndoor1',
                        picture: true
                    },
                    "interieurCabine_2":{
                        title:'Intérieur cabine 2',
                        property:'cabIndoor2',
                        picture: true
                    },
                    "interieurCaisse_1":{
                        title:'Intérieur caisse 1',
                        property:'trailerIn_1',
                        picture: true
                    },
                    "interieurCaisse_2":{
                        title:'Intérieur caisse 2',
                        property:'trailerIn_2',
                        picture: true
                    },

                    "lame":{
                        title:'Lame',
                        property:'blade',
                        picture: true
                    },

                    "lamier":{
                        title:'Lamier',
                        property:'cutterbar',
                        picture: true
                    },

                    "monolevier":{
                        title:'Monolevier',
                        property:'unilever',
                        picture: true
                    },

                    "multicoupleur":{
                        title:'Multicoupleur',
                        property:'multicoupler',
                        picture: true
                    },

                    "outil_1":{
                        title:'Outil n°1',
                        property:'handlingAccessory_1',
                        picture: true
                    },

                    "outil_2":{
                        title:'Outil n°2',
                        property:'handlingAccessory_2',
                        picture: true
                    },

                    "outil_3":{
                        title:'Outil n°3',
                        property:'handlingAccessory_3',
                        picture: true
                    },

                    "outil_4":{
                        title:'Outil n°4',
                        property:'handlingAccessory_4',
                        picture: true
                    },

                    "outil_5":{
                        title:'Outil n°5',
                        property:'handlingAccessory_5',
                        picture: true
                    },

                    "pickUp":{
                        title:'Pick up',
                        property:'pickUp',
                        picture: true
                    },

                    "pompage":{
                        title:'Pompage',
                        property:'pumping',
                        picture: true
                    },

                    "rampe":{
                        title:'Rampe',
                        property:'ramp',
                        picture: true
                    },

                    "rampeDroite":{
                        title:'Rampe droite',
                        property:'rightBoom',
                        picture: true
                    },

                    "rampeGauche":{
                        title:'Rampe gauche',
                        property:'leftBoom',
                        picture: true
                    },

                    "rasette":{
                        title:'Rasette',
                        property:'skim',
                        picture: true
                    },

                    "recolteur_1":{
                        title:'Récolteur n°1',
                        property:'harvestingPlatform_1',
                        picture: true
                    },

                    "recolteur_2":{
                        title:'Récolteur n°2',
                        property:'harvestingPlatform_2',
                        picture: true
                    },

                    "rouleau":{
                        title:'Rouleau',
                        property:'roll',
                        picture: true
                    },

                    "rouleauxEpanouilleurs":{
                        title:'Rouleaux épanouilleurs',
                        property:'harvestRolls',
                        picture: true
                    },

                    "securite":{
                        title:'Sécurité',
                        property:'security',
                        picture: true
                    },

                    "socs":{
                        title:'Socs',
                        property:'ploughShare',
                        picture: true
                    },

                    "spire":{
                        title:'Spire',
                        property:'coil',
                        picture: true
                    },

                    "tapis":{
                        title:'Tapis',
                        property:'conveyorBelt',        
                        picture: true
                    },

                    "toile":{
                        title:'Toile',
                        property:'swatherCanvas',        
                        picture: true
                    },

                    "turbine":{
                        title:'Turbine',
                        property:'turbine',        
                        picture: true
                    },

                    "visAlimentation":{
                        title:'Vis alimentation',
                        property:'feedingScrew',        
                        picture: true
                    }
                }

            },
           
        }
  

        return list ? _formSteps : _formSteps[step]
    }

}

export default formsCatalog



const axios = require('axios')

export const sampleAxies = [
    {
        "id": "660679",
        "image": "https://assets.axieinfinity.com/axies/660679/axie/axie-full-transparent.png",
        "class": "Plant",
        "name": "DAMAGE PLANT- BACKLANE",
        "genes": "0x30000000030c64440c2220c80883090a0c4408020c4420c2088328ca0c83200a",
        "owner": "0x239dd0031d1e39ca814593ab03518f3fe967aa6c",
        "bodyShape": "Normal",
        "parts": [
            {
                "type": "Eyes",
                "id": "eyes-papi",
                "name": "Papi",
                "class": "Plant"
            },
            {
                "type": "Ears",
                "id": "ears-clover",
                "name": "Clover",
                "class": "Plant"
            },
            {
                "type": "Back",
                "id": "back-pigeon-post",
                "name": "Pigeon Post",
                "class": "Bird"
            },
            {
                "type": "Mouth",
                "id": "mouth-hungry-bird",
                "name": "Hungry Bird",
                "class": "Bird"
            },
            {
                "type": "Horn",
                "id": "horn-beech",
                "name": "Beech",
                "class": "Plant"
            },
            {
                "type": "Tail",
                "id": "tail-yam",
                "name": "Yam",
                "class": "Plant"
            }
        ]
    },
    {
        "id": "6968683",
        "image": "https://assets.axieinfinity.com/axies/6968683/axie/axie-full-transparent.png",
        "class": "Plant",
        "name": "0677. 83",
        "genes": "0x30000000021024140c4320c40c8509440c4520c4146308ca0cc330cc0cc308ca",
        "owner": "0x239dd0031d1e39ca814593ab03518f3fe967aa6c",
        "bodyShape": "Normal",
        "parts": [
            {
                "type": "Eyes",
                "id": "eyes-confused",
                "name": "Confused",
                "class": "Plant"
            },
            {
                "type": "Ears",
                "id": "ears-clover",
                "name": "Clover",
                "class": "Plant"
            },
            {
                "type": "Back",
                "id": "back-pumpkin",
                "name": "Pumpkin",
                "class": "Plant"
            },
            {
                "type": "Mouth",
                "id": "mouth-herbivore",
                "name": "Herbivore",
                "class": "Plant"
            },
            {
                "type": "Horn",
                "id": "horn-cerastes",
                "name": "Cerastes",
                "class": "Reptile"
            },
            {
                "type": "Tail",
                "id": "tail-hot-butt",
                "name": "Hot Butt",
                "class": "Plant"
            }
        ]
    },
    {
        "id": "6288409",
        "image": "https://assets.axieinfinity.com/axies/6288409/axie/axie-full-transparent.png",
        "class": "Plant",
        "name": "Badly need money",
        "genes": "0x300000000310b4040c8009420c2308c20cc328ca006329440cc220cc0c2518c2",
        "owner": "0x239dd0031d1e39ca814593ab03518f3fe967aa6c",
        "bodyShape": "Normal",
        "parts": [
            {
                "type": "Eyes",
                "id": "eyes-cucumber-slice",
                "name": "Cucumber Slice",
                "class": "Plant"
            },
            {
                "type": "Ears",
                "id": "ears-lotus",
                "name": "Lotus",
                "class": "Plant"
            },
            {
                "type": "Back",
                "id": "back-pumpkin",
                "name": "Pumpkin",
                "class": "Plant"
            },
            {
                "type": "Mouth",
                "id": "mouth-serious",
                "name": "Serious",
                "class": "Plant"
            },
            {
                "type": "Horn",
                "id": "horn-merry",
                "name": "Merry",
                "class": "Beast"
            },
            {
                "type": "Tail",
                "id": "tail-carrot",
                "name": "Carrot",
                "class": "Plant"
            }
        ]
    },
    {
        "id": "2876946",
        "image": "https://assets.axieinfinity.com/axies/2876946/axie/axie-full-transparent.png",
        "class": "Plant",
        "name": "Axie #2876946",
        "genes": "0x30000000212a1142084420c2144308c20cc331060ca430ca0cc408cc0c250844",
        "owner": "0x239dd0031d1e39ca814593ab03518f3fe967aa6c",
        "bodyShape": "WetDog",
        "parts": [
            {
                "type": "Eyes",
                "id": "eyes-lucas",
                "name": "Lucas",
                "class": "Bird"
            },
            {
                "type": "Ears",
                "id": "ears-lotus",
                "name": "Lotus",
                "class": "Plant"
            },
            {
                "type": "Back",
                "id": "back-pumpkin",
                "name": "Pumpkin",
                "class": "Plant"
            },
            {
                "type": "Mouth",
                "id": "mouth-kotaro",
                "name": "Kotaro",
                "class": "Reptile"
            },
            {
                "type": "Horn",
                "id": "horn-cactus",
                "name": "Cactus",
                "class": "Plant"
            },
            {
                "type": "Tail",
                "id": "tail-carrot",
                "name": "Carrot",
                "class": "Plant"
            }
        ]
    },
    {
        "id": "2637524",
        "image": "https://assets.axieinfinity.com/axies/2637524/axie/axie-full-transparent.png",
        "class": "Bird",
        "name": "??????? UNIQUE ???????",
        "genes": "0x200000001e20843200a028c4002108021065114a10c409061060090608601104",
        "owner": "0x239dd0031d1e39ca814593ab03518f3fe967aa6c",
        "bodyShape": "Curly",
        "parts": [
            {
                "type": "Eyes",
                "id": "eyes-chubby",
                "name": "Chubby",
                "class": "Beast"
            },
            {
                "type": "Ears",
                "id": "ears-bubblemaker",
                "name": "Bubblemaker",
                "class": "Aquatic"
            },
            {
                "type": "Back",
                "id": "back-goldfish",
                "name": "Goldfish",
                "class": "Aquatic"
            },
            {
                "type": "Mouth",
                "id": "mouth-nut-cracker",
                "name": "Nut Cracker",
                "class": "Beast"
            },
            {
                "type": "Horn",
                "id": "horn-shoal-star",
                "name": "Shoal Star",
                "class": "Aquatic"
            },
            {
                "type": "Tail",
                "id": "tail-the-last-one",
                "name": "The Last One",
                "class": "Bird"
            }
        ]
    },
    {
        "id": "3747398",
        "image": "https://assets.axieinfinity.com/axies/3747398/axie/axie-full-transparent.png",
        "class": "Aquatic",
        "name": "???? RARE Frontline Burst Aqua ???????",
        "genes": "0x400000000129e00114a411040c842148108429080ca4188c1044188210220902",
        "owner": "0x239dd0031d1e39ca814593ab03518f3fe967aa6c",
        "bodyShape": "Fuzzy",
        "parts": [
            {
                "type": "Eyes",
                "id": "eyes-topaz",
                "name": "Topaz",
                "class": "Reptile"
            },
            {
                "type": "Ears",
                "id": "ears-inkling",
                "name": "Inkling",
                "class": "Aquatic"
            },
            {
                "type": "Back",
                "id": "back-blue-moon",
                "name": "Blue Moon",
                "class": "Aquatic"
            },
            {
                "type": "Mouth",
                "id": "mouth-herbivore",
                "name": "Herbivore",
                "class": "Plant"
            },
            {
                "type": "Horn",
                "id": "horn-cactus",
                "name": "Cactus",
                "class": "Plant"
            },
            {
                "type": "Tail",
                "id": "tail-koi",
                "name": "Koi",
                "class": "Aquatic"
            }
        ]
    },
    {
        "id": "5365913",
        "image": "https://assets.axieinfinity.com/axies/5365913/axie/axie-full-transparent.png",
        "class": "Dawn",
        "name": "1/1UNIQUE AXIE",
        "genes": "0x90000000071a130314a528c20020210a14a4114a144511441464284414453144",
        "owner": "0x239dd0031d1e39ca814593ab03518f3fe967aa6c",
        "bodyShape": "Normal",
        "parts": [
            {
                "type": "Eyes",
                "id": "eyes-topaz",
                "name": "Topaz",
                "class": "Reptile"
            },
            {
                "type": "Ears",
                "id": "ears-swirl",
                "name": "Swirl",
                "class": "Reptile"
            },
            {
                "type": "Back",
                "id": "back-green-thorns",
                "name": "Green Thorns",
                "class": "Reptile"
            },
            {
                "type": "Mouth",
                "id": "mouth-nut-cracker",
                "name": "Nut Cracker",
                "class": "Beast"
            },
            {
                "type": "Horn",
                "id": "horn-scaly-spear",
                "name": "Scaly Spear",
                "class": "Reptile"
            },
            {
                "type": "Tail",
                "id": "tail-iguana",
                "name": "Iguana",
                "class": "Reptile"
            }
        ]
    },
    {
        "id": "4974660",
        "image": "https://assets.axieinfinity.com/axies/4974660/axie/axie-full-transparent.png",
        "class": "Reptile",
        "name": "Axie #4974660",
        "genes": "0x50000000040411330842088414a5100808211846144108460c41294814c32844",
        "owner": "0x239dd0031d1e39ca814593ab03518f3fe967aa6c",
        "bodyShape": "Normal",
        "parts": [
            {
                "type": "Eyes",
                "id": "eyes-lucas",
                "name": "Lucas",
                "class": "Bird"
            },
            {
                "type": "Ears",
                "id": "ears-pink-cheek",
                "name": "Pink Cheek",
                "class": "Bird"
            },
            {
                "type": "Back",
                "id": "back-shiitake",
                "name": "Shiitake",
                "class": "Plant"
            },
            {
                "type": "Mouth",
                "id": "mouth-tiny-turtle",
                "name": "Tiny Turtle",
                "class": "Reptile"
            },
            {
                "type": "Horn",
                "id": "horn-scaly-spear",
                "name": "Scaly Spear",
                "class": "Reptile"
            },
            {
                "type": "Tail",
                "id": "tail-grass-snake",
                "name": "Grass Snake",
                "class": "Reptile"
            }
        ]
    },
    {
        "id": "4879111",
        "image": "https://assets.axieinfinity.com/axies/4879111/axie/axie-full-transparent.png",
        "class": "Reptile",
        "name": "Axie #4879111",
        "genes": "0x500000000c1450001425214408a5214a14611148144008441445314214423146",
        "owner": "0x239dd0031d1e39ca814593ab03518f3fe967aa6c",
        "bodyShape": "Normal",
        "parts": [
            {
                "type": "Eyes",
                "id": "eyes-gecko",
                "name": "Gecko",
                "class": "Reptile"
            },
            {
                "type": "Ears",
                "id": "ears-curved-spine",
                "name": "Curved Spine",
                "class": "Reptile"
            },
            {
                "type": "Back",
                "id": "back-tri-spikes",
                "name": "Tri Spikes",
                "class": "Reptile"
            },
            {
                "type": "Mouth",
                "id": "mouth-little-owl",
                "name": "Little Owl",
                "class": "Bird"
            },
            {
                "type": "Horn",
                "id": "horn-scaly-spear",
                "name": "Scaly Spear",
                "class": "Reptile"
            },
            {
                "type": "Tail",
                "id": "tail-iguana",
                "name": "Iguana",
                "class": "Reptile"
            }
        ]
    },
    {
        "id": "3808785",
        "image": "https://assets.axieinfinity.com/axies/3808785/axie/axie-full-transparent.png",
        "class": "Plant",
        "name": "PLANT",
        "genes": "0x30000000042c2421008308440823080a0cc3180a0ca328ca0cc330cc0c2308c2",
        "owner": "0x239dd0031d1e39ca814593ab03518f3fe967aa6c",
        "bodyShape": "Normal",
        "parts": [
            {
                "type": "Eyes",
                "id": "eyes-puppy",
                "name": "Puppy",
                "class": "Beast"
            },
            {
                "type": "Ears",
                "id": "ears-lotus",
                "name": "Lotus",
                "class": "Plant"
            },
            {
                "type": "Back",
                "id": "back-pumpkin",
                "name": "Pumpkin",
                "class": "Plant"
            },
            {
                "type": "Mouth",
                "id": "mouth-doubletalk",
                "name": "Doubletalk",
                "class": "Bird"
            },
            {
                "type": "Horn",
                "id": "horn-cactus",
                "name": "Cactus",
                "class": "Plant"
            },
            {
                "type": "Tail",
                "id": "tail-carrot",
                "name": "Carrot",
                "class": "Plant"
            }
        ]
    },
    {
        "id": "4599426",
        "image": "https://assets.axieinfinity.com/axies/4599426/axie/axie-full-transparent.png",
        "class": "Reptile",
        "name": "PINKY",
        "genes": "0x500000000528a41300a5090a14452948002110cc14a528040cc5114814420948",
        "owner": "0x239dd0031d1e39ca814593ab03518f3fe967aa6c",
        "bodyShape": "Normal",
        "parts": [
            {
                "type": "Eyes",
                "id": "eyes-chubby",
                "name": "Chubby",
                "class": "Beast"
            },
            {
                "type": "Ears",
                "id": "ears-nyan",
                "name": "Nyan",
                "class": "Beast"
            },
            {
                "type": "Back",
                "id": "back-pumpkin",
                "name": "Pumpkin",
                "class": "Plant"
            },
            {
                "type": "Mouth",
                "id": "mouth-kotaro",
                "name": "Kotaro",
                "class": "Reptile"
            },
            {
                "type": "Horn",
                "id": "horn-incisor",
                "name": "Incisor",
                "class": "Reptile"
            },
            {
                "type": "Tail",
                "id": "tail-iguana",
                "name": "Iguana",
                "class": "Reptile"
            }
        ]
    },
    {
        "id": "11264601",
        "image": "https://assets.axieinfinity.com/axies/11264601/axie/axie-full-transparent.png",
        "class": "Aquatic",
        "name": "Axie #11264601",
        "genes": "0x400000001e1c702010a4110210a5090a10a5190610a02844104410c810c43102",
        "owner": "0x239dd0031d1e39ca814593ab03518f3fe967aa6c",
        "bodyShape": "Curly",
        "parts": [
            {
                "type": "Eyes",
                "id": "eyes-telescope",
                "name": "Telescope",
                "class": "Aquatic"
            },
            {
                "type": "Ears",
                "id": "ears-gill",
                "name": "Gill",
                "class": "Aquatic"
            },
            {
                "type": "Back",
                "id": "back-blue-moon",
                "name": "Blue Moon",
                "class": "Aquatic"
            },
            {
                "type": "Mouth",
                "id": "mouth-piranha",
                "name": "Piranha",
                "class": "Aquatic"
            },
            {
                "type": "Horn",
                "id": "horn-oranda",
                "name": "Oranda",
                "class": "Aquatic"
            },
            {
                "type": "Tail",
                "id": "tail-shrimp",
                "name": "Shrimp",
                "class": "Aquatic"
            }
        ]
    },
    {
        "id": "10088279",
        "image": "https://assets.axieinfinity.com/axies/10088279/axie/axie-full-transparent.png",
        "class": "Beast",
        "name": "??nico en venta ",
        "genes": "0x10410041440280a0c4010040020094c14c0108c0024080200201002",
        "owner": "0x239dd0031d1e39ca814593ab03518f3fe967aa6c",
        "bodyShape": "Fuzzy",
        "parts": [
            {
                "type": "Eyes",
                "id": "eyes-tricky",
                "name": "Tricky",
                "class": "Reptile"
            },
            {
                "type": "Ears",
                "id": "ears-nyan",
                "name": "Nyan",
                "class": "Beast"
            },
            {
                "type": "Back",
                "id": "back-ronin",
                "name": "Ronin",
                "class": "Beast"
            },
            {
                "type": "Mouth",
                "id": "mouth-zigzag",
                "name": "Zigzag",
                "class": "Plant"
            },
            {
                "type": "Horn",
                "id": "horn-bumpy",
                "name": "Bumpy",
                "class": "Reptile"
            },
            {
                "type": "Tail",
                "id": "tail-cottontail",
                "name": "Cottontail",
                "class": "Beast"
            }
        ]
    },
    {
        "id": "10600412",
        "image": "https://assets.axieinfinity.com/axies/10600412/axie/axie-full-transparent.png",
        "class": "Plant",
        "name": "Axie #10600412",
        "genes": "0x300000000b28b4330c23094a0c2410c20c43308c1461304c0cc330cc0c832144",
        "owner": "0x239dd0031d1e39ca814593ab03518f3fe967aa6c",
        "bodyShape": "Normal",
        "parts": [
            {
                "type": "Eyes",
                "id": "eyes-papi",
                "name": "Papi",
                "class": "Plant"
            },
            {
                "type": "Ears",
                "id": "ears-clover",
                "name": "Clover",
                "class": "Plant"
            },
            {
                "type": "Back",
                "id": "back-pumpkin",
                "name": "Pumpkin",
                "class": "Plant"
            },
            {
                "type": "Mouth",
                "id": "mouth-serious",
                "name": "Serious",
                "class": "Plant"
            },
            {
                "type": "Horn",
                "id": "horn-cerastes",
                "name": "Cerastes",
                "class": "Reptile"
            },
            {
                "type": "Tail",
                "id": "tail-yam",
                "name": "Yam",
                "class": "Plant"
            }
        ]
    },
    {
        "id": "2318412",
        "image": "https://assets.axieinfinity.com/axies/2318412/axie/axie-full-transparent.png",
        "class": "Plant",
        "name": "Fish destroyer ",
        "genes": "0x300000000b8483330c2120c21484284208631002042310480cc3310214630882",
        "owner": "0x239dd0031d1e39ca814593ab03518f3fe967aa6c",
        "bodyShape": "Normal",
        "parts": [
            {
                "type": "Eyes",
                "id": "eyes-papi",
                "name": "Papi",
                "class": "Plant"
            },
            {
                "type": "Ears",
                "id": "ears-owl",
                "name": "Owl",
                "class": "Bird"
            },
            {
                "type": "Back",
                "id": "back-pumpkin",
                "name": "Pumpkin",
                "class": "Plant"
            },
            {
                "type": "Mouth",
                "id": "mouth-razor-bite",
                "name": "Razor Bite",
                "class": "Reptile"
            },
            {
                "type": "Horn",
                "id": "horn-lagging",
                "name": "Lagging",
                "class": "Bug"
            },
            {
                "type": "Tail",
                "id": "tail-tiny-dino",
                "name": "Tiny Dino",
                "class": "Reptile"
            }
        ]
    },
    {
        "id": "10400614",
        "image": "https://assets.axieinfinity.com/axies/10400614/axie/axie-full-transparent.png",
        "class": "Plant",
        "name": "PVP#10400614",
        "genes": "0x30000000312f1333044208ca044310c20c4309421461304c0cc330cc0c8320c8",
        "owner": "0x239dd0031d1e39ca814593ab03518f3fe967aa6c",
        "bodyShape": "BigYak",
        "parts": [
            {
                "type": "Eyes",
                "id": "eyes-neo",
                "name": "Neo",
                "class": "Bug"
            },
            {
                "type": "Ears",
                "id": "ears-clover",
                "name": "Clover",
                "class": "Plant"
            },
            {
                "type": "Back",
                "id": "back-pumpkin",
                "name": "Pumpkin",
                "class": "Plant"
            },
            {
                "type": "Mouth",
                "id": "mouth-pincer",
                "name": "Pincer",
                "class": "Bug"
            },
            {
                "type": "Horn",
                "id": "horn-cerastes",
                "name": "Cerastes",
                "class": "Reptile"
            },
            {
                "type": "Tail",
                "id": "tail-yam",
                "name": "Yam",
                "class": "Plant"
            }
        ]
    },
    {
        "id": "11349081",
        "image": "https://assets.axieinfinity.com/axies/11349081/axie/axie-full-transparent.png",
        "class": "Plant",
        "name": "Axie #11349081",
        "genes": "0x30000000311c3322148420440c4320c2144531080ca0214810a3290a08c230c4",
        "owner": "0x239dd0031d1e39ca814593ab03518f3fe967aa6c",
        "bodyShape": "BigYak",
        "parts": [
            {
                "type": "Eyes",
                "id": "eyes-scar",
                "name": "Scar",
                "class": "Reptile"
            },
            {
                "type": "Ears",
                "id": "ears-friezard",
                "name": "Friezard",
                "class": "Reptile"
            },
            {
                "type": "Back",
                "id": "back-anemone",
                "name": "Anemone",
                "class": "Aquatic"
            },
            {
                "type": "Mouth",
                "id": "mouth-zigzag",
                "name": "Zigzag",
                "class": "Plant"
            },
            {
                "type": "Horn",
                "id": "horn-cactus",
                "name": "Cactus",
                "class": "Plant"
            },
            {
                "type": "Tail",
                "id": "tail-post-fight",
                "name": "Post Fight",
                "class": "Bird"
            }
        ]
    },
    {
        "id": "4580485",
        "image": "https://assets.axieinfinity.com/axies/4580485/axie/axie-full-transparent.png",
        "class": "Aquatic",
        "name": "5",
        "genes": "0x400000000678a02208a42904108420c40c64190810c430461061090610a42904",
        "owner": "0x239dd0031d1e39ca814593ab03518f3fe967aa6c",
        "bodyShape": "Normal",
        "parts": [
            {
                "type": "Eyes",
                "id": "eyes-robin",
                "name": "Robin",
                "class": "Bird"
            },
            {
                "type": "Ears",
                "id": "ears-rosa",
                "name": "Rosa",
                "class": "Plant"
            },
            {
                "type": "Back",
                "id": "back-goldfish",
                "name": "Goldfish",
                "class": "Aquatic"
            },
            {
                "type": "Mouth",
                "id": "mouth-risky-fish",
                "name": "Risky Fish",
                "class": "Aquatic"
            },
            {
                "type": "Horn",
                "id": "horn-shoal-star",
                "name": "Shoal Star",
                "class": "Aquatic"
            },
            {
                "type": "Tail",
                "id": "tail-navaga",
                "name": "Navaga",
                "class": "Aquatic"
            }
        ]
    },
    {
        "id": "4629723",
        "image": "https://assets.axieinfinity.com/axies/4629723/axie/axie-full-transparent.png",
        "class": "Beast",
        "name": "Snow Flake",
        "genes": "0x104100400a029080023080a00432888004011020020080c00a0280a",
        "owner": "0x239dd0031d1e39ca814593ab03518f3fe967aa6c",
        "bodyShape": "Fuzzy",
        "parts": [
            {
                "type": "Eyes",
                "id": "eyes-chubby",
                "name": "Chubby",
                "class": "Beast"
            },
            {
                "type": "Ears",
                "id": "ears-nut-cracker",
                "name": "Nut Cracker",
                "class": "Beast"
            },
            {
                "type": "Back",
                "id": "back-ronin",
                "name": "Ronin",
                "class": "Beast"
            },
            {
                "type": "Mouth",
                "id": "mouth-nut-cracker",
                "name": "Nut Cracker",
                "class": "Beast"
            },
            {
                "type": "Horn",
                "id": "horn-imp",
                "name": "Imp",
                "class": "Beast"
            },
            {
                "type": "Tail",
                "id": "tail-nut-cracker",
                "name": "Nut Cracker",
                "class": "Beast"
            }
        ]
    },
    {
        "id": "3189690",
        "image": "https://assets.axieinfinity.com/axies/3189690/axie/axie-full-transparent.png",
        "class": "Aquatic",
        "name": "Sipio Aqua",
        "genes": "0x400000000a20601210442904108421081084190a10c430861064180210a42904",
        "owner": "0x239dd0031d1e39ca814593ab03518f3fe967aa6c",
        "bodyShape": "Normal",
        "parts": [
            {
                "type": "Eyes",
                "id": "eyes-clear",
                "name": "Clear",
                "class": "Aquatic"
            },
            {
                "type": "Ears",
                "id": "ears-inkling",
                "name": "Inkling",
                "class": "Aquatic"
            },
            {
                "type": "Back",
                "id": "back-goldfish",
                "name": "Goldfish",
                "class": "Aquatic"
            },
            {
                "type": "Mouth",
                "id": "mouth-risky-fish",
                "name": "Risky Fish",
                "class": "Aquatic"
            },
            {
                "type": "Horn",
                "id": "horn-shoal-star",
                "name": "Shoal Star",
                "class": "Aquatic"
            },
            {
                "type": "Tail",
                "id": "tail-navaga",
                "name": "Navaga",
                "class": "Aquatic"
            }
        ]
    },
    {
        "id": "3465764",
        "image": "https://assets.axieinfinity.com/axies/3465764/axie/axie-full-transparent.png",
        "class": "Beast",
        "name": "3",
        "genes": "0x410d02114811004148508880883188614a328020862310604a12908",
        "owner": "0x239dd0031d1e39ca814593ab03518f3fe967aa6c",
        "bodyShape": "Normal",
        "parts": [
            {
                "type": "Eyes",
                "id": "eyes-scar",
                "name": "Scar",
                "class": "Reptile"
            },
            {
                "type": "Ears",
                "id": "ears-peace-maker",
                "name": "Peace Maker",
                "class": "Bird"
            },
            {
                "type": "Back",
                "id": "back-raven",
                "name": "Raven",
                "class": "Bird"
            },
            {
                "type": "Mouth",
                "id": "mouth-razor-bite",
                "name": "Razor Bite",
                "class": "Reptile"
            },
            {
                "type": "Horn",
                "id": "horn-incisor",
                "name": "Incisor",
                "class": "Reptile"
            },
            {
                "type": "Tail",
                "id": "tail-pupae",
                "name": "Pupae",
                "class": "Bug"
            }
        ]
    },
    {
        "id": "8451005",
        "image": "https://assets.axieinfinity.com/axies/8451005/axie/axie-full-transparent.png",
        "class": "Plant",
        "name": "oi",
        "genes": "0x300000000510502314212844142311420cc518cc1461090a0441104414c5314c",
        "owner": "0x239dd0031d1e39ca814593ab03518f3fe967aa6c",
        "bodyShape": "Normal",
        "parts": [
            {
                "type": "Eyes",
                "id": "eyes-gecko",
                "name": "Gecko",
                "class": "Reptile"
            },
            {
                "type": "Ears",
                "id": "ears-lotus",
                "name": "Lotus",
                "class": "Plant"
            },
            {
                "type": "Back",
                "id": "back-garish-worm",
                "name": "Garish Worm",
                "class": "Bug"
            },
            {
                "type": "Mouth",
                "id": "mouth-toothless-bite",
                "name": "Toothless Bite",
                "class": "Reptile"
            },
            {
                "type": "Horn",
                "id": "horn-cerastes",
                "name": "Cerastes",
                "class": "Reptile"
            },
            {
                "type": "Tail",
                "id": "tail-grass-snake",
                "name": "Grass Snake",
                "class": "Reptile"
            }
        ]
    },
    {
        "id": "9293428",
        "image": "https://assets.axieinfinity.com/axies/9293428/axie/axie-full-transparent.png",
        "class": "Plant",
        "name": "Axie #9293428",
        "genes": "0x30000000311c3422148321020c4308c80cc408c40ca328ca0c63190a0cc31048",
        "owner": "0x239dd0031d1e39ca814593ab03518f3fe967aa6c",
        "bodyShape": "BigYak",
        "parts": [
            {
                "type": "Eyes",
                "id": "eyes-scar",
                "name": "Scar",
                "class": "Reptile"
            },
            {
                "type": "Ears",
                "id": "ears-lotus",
                "name": "Lotus",
                "class": "Plant"
            },
            {
                "type": "Back",
                "id": "back-bidens",
                "name": "Bidens",
                "class": "Plant"
            },
            {
                "type": "Mouth",
                "id": "mouth-zigzag",
                "name": "Zigzag",
                "class": "Plant"
            },
            {
                "type": "Horn",
                "id": "horn-cactus",
                "name": "Cactus",
                "class": "Plant"
            },
            {
                "type": "Tail",
                "id": "tail-hot-butt",
                "name": "Hot Butt",
                "class": "Plant"
            }
        ]
    },
    {
        "id": "8090480",
        "image": "https://assets.axieinfinity.com/axies/8090480/axie/axie-full-transparent.png",
        "class": "Plant",
        "name": "3B2 g4",
        "genes": "0x30000000030814440c4208c40c2308c20cc328c20ca318ca0cc330cc0c230948",
        "owner": "0x239dd0031d1e39ca814593ab03518f3fe967aa6c",
        "bodyShape": "Normal",
        "parts": [
            {
                "type": "Eyes",
                "id": "eyes-confused",
                "name": "Confused",
                "class": "Plant"
            },
            {
                "type": "Ears",
                "id": "ears-lotus",
                "name": "Lotus",
                "class": "Plant"
            },
            {
                "type": "Back",
                "id": "back-pumpkin",
                "name": "Pumpkin",
                "class": "Plant"
            },
            {
                "type": "Mouth",
                "id": "mouth-serious",
                "name": "Serious",
                "class": "Plant"
            },
            {
                "type": "Horn",
                "id": "horn-cactus",
                "name": "Cactus",
                "class": "Plant"
            },
            {
                "type": "Tail",
                "id": "tail-carrot",
                "name": "Carrot",
                "class": "Plant"
            }
        ]
    },
    {
        "id": "9697754",
        "image": "https://assets.axieinfinity.com/axies/9697754/axie/axie-full-transparent.png",
        "class": "Plant",
        "name": "Axie #9697754",
        "genes": "0x300000000b0c1222082328c4142308c20c6028c404c130ca0cc330cc0c4308cc",
        "owner": "0x239dd0031d1e39ca814593ab03518f3fe967aa6c",
        "bodyShape": "Normal",
        "parts": [
            {
                "type": "Eyes",
                "id": "eyes-mavis",
                "name": "Mavis",
                "class": "Bird"
            },
            {
                "type": "Ears",
                "id": "ears-rosa",
                "name": "Rosa",
                "class": "Plant"
            },
            {
                "type": "Back",
                "id": "back-pumpkin",
                "name": "Pumpkin",
                "class": "Plant"
            },
            {
                "type": "Mouth",
                "id": "mouth-toothless-bite",
                "name": "Toothless Bite",
                "class": "Reptile"
            },
            {
                "type": "Horn",
                "id": "horn-leaf-bug",
                "name": "Leaf Bug",
                "class": "Bug"
            },
            {
                "type": "Tail",
                "id": "tail-cattail",
                "name": "Cattail",
                "class": "Plant"
            }
        ]
    },
    {
        "id": "9298317",
        "image": "https://assets.axieinfinity.com/axies/9298317/axie/axie-full-transparent.png",
        "class": "Dusk",
        "name": "JERSEYS",
        "genes": "0xa00000000a10623214a1290a048520c4106020861444188a0441100814c11906",
        "owner": "0x239dd0031d1e39ca814593ab03518f3fe967aa6c",
        "bodyShape": "Normal",
        "parts": [
            {
                "type": "Eyes",
                "id": "eyes-topaz",
                "name": "Topaz",
                "class": "Reptile"
            },
            {
                "type": "Ears",
                "id": "ears-bubblemaker",
                "name": "Bubblemaker",
                "class": "Aquatic"
            },
            {
                "type": "Back",
                "id": "back-garish-worm",
                "name": "Garish Worm",
                "class": "Bug"
            },
            {
                "type": "Mouth",
                "id": "mouth-cute-bunny",
                "name": "Cute Bunny",
                "class": "Bug"
            },
            {
                "type": "Horn",
                "id": "horn-scaly-spear",
                "name": "Scaly Spear",
                "class": "Reptile"
            },
            {
                "type": "Tail",
                "id": "tail-grass-snake",
                "name": "Grass Snake",
                "class": "Reptile"
            }
        ]
    },
    {
        "id": "9957447",
        "image": "https://assets.axieinfinity.com/axies/9957447/axie/axie-full-transparent.png",
        "class": "Plant",
        "name": "Ricky",
        "genes": "0x30000000210c92220c2110c20c2308c20cc4088204c4084c0cc330ca0c2308c2",
        "owner": "0x239dd0031d1e39ca814593ab03518f3fe967aa6c",
        "bodyShape": "WetDog",
        "parts": [
            {
                "type": "Eyes",
                "id": "eyes-papi",
                "name": "Papi",
                "class": "Plant"
            },
            {
                "type": "Ears",
                "id": "ears-lotus",
                "name": "Lotus",
                "class": "Plant"
            },
            {
                "type": "Back",
                "id": "back-pumpkin",
                "name": "Pumpkin",
                "class": "Plant"
            },
            {
                "type": "Mouth",
                "id": "mouth-serious",
                "name": "Serious",
                "class": "Plant"
            },
            {
                "type": "Horn",
                "id": "horn-leaf-bug",
                "name": "Leaf Bug",
                "class": "Bug"
            },
            {
                "type": "Tail",
                "id": "tail-carrot",
                "name": "Carrot",
                "class": "Plant"
            }
        ]
    },
    {
        "id": "7350311",
        "image": "https://assets.axieinfinity.com/axies/7350311/axie/axie-full-transparent.png",
        "class": "Bird",
        "name": "El Pikete",
        "genes": "0x20000000012082220822080a08a2288a0882208c08c21886084210840882288a",
        "owner": "0x239dd0031d1e39ca814593ab03518f3fe967aa6c",
        "bodyShape": "Fuzzy",
        "parts": [
            {
                "type": "Eyes",
                "id": "eyes-mavis",
                "name": "Mavis",
                "class": "Bird"
            },
            {
                "type": "Ears",
                "id": "ears-peace-maker",
                "name": "Peace Maker",
                "class": "Bird"
            },
            {
                "type": "Back",
                "id": "back-cupid",
                "name": "Cupid",
                "class": "Bird"
            },
            {
                "type": "Mouth",
                "id": "mouth-little-owl",
                "name": "Little Owl",
                "class": "Bird"
            },
            {
                "type": "Horn",
                "id": "horn-feather-spear",
                "name": "Feather Spear",
                "class": "Bird"
            },
            {
                "type": "Tail",
                "id": "tail-cloud",
                "name": "Cloud",
                "class": "Bird"
            }
        ]
    },
    {
        "id": "4088349",
        "image": "https://assets.axieinfinity.com/axies/4088349/axie/axie-full-transparent.png",
        "class": "Aquatic",
        "name": "PEZ DEFINITIVO",
        "genes": "0x40000000011860130ca0110a008420c80865110210c531061064080a1022088c",
        "owner": "0x239dd0031d1e39ca814593ab03518f3fe967aa6c",
        "bodyShape": "Fuzzy",
        "parts": [
            {
                "type": "Eyes",
                "id": "eyes-blossom",
                "name": "Blossom",
                "class": "Plant"
            },
            {
                "type": "Ears",
                "id": "ears-owl",
                "name": "Owl",
                "class": "Bird"
            },
            {
                "type": "Back",
                "id": "back-goldfish",
                "name": "Goldfish",
                "class": "Aquatic"
            },
            {
                "type": "Mouth",
                "id": "mouth-axie-kiss",
                "name": "Axie Kiss",
                "class": "Beast"
            },
            {
                "type": "Horn",
                "id": "horn-shoal-star",
                "name": "Shoal Star",
                "class": "Aquatic"
            },
            {
                "type": "Tail",
                "id": "tail-koi",
                "name": "Koi",
                "class": "Aquatic"
            }
        ]
    },
    {
        "id": "4632937",
        "image": "https://assets.axieinfinity.com/axies/4632937/axie/axie-full-transparent.png",
        "class": "Plant",
        "name": "Axie #4632937",
        "genes": "0x30000000011042220c2308c20c2308c20ca330ca0ca328ca0cc330cc0c2308c2",
        "owner": "0x239dd0031d1e39ca814593ab03518f3fe967aa6c",
        "bodyShape": "Fuzzy",
        "parts": [
            {
                "type": "Eyes",
                "id": "eyes-papi",
                "name": "Papi",
                "class": "Plant"
            },
            {
                "type": "Ears",
                "id": "ears-hollow",
                "name": "Hollow",
                "class": "Plant"
            },
            {
                "type": "Back",
                "id": "back-pumpkin",
                "name": "Pumpkin",
                "class": "Plant"
            },
            {
                "type": "Mouth",
                "id": "mouth-serious",
                "name": "Serious",
                "class": "Plant"
            },
            {
                "type": "Horn",
                "id": "horn-cactus",
                "name": "Cactus",
                "class": "Plant"
            },
            {
                "type": "Tail",
                "id": "tail-carrot",
                "name": "Carrot",
                "class": "Plant"
            }
        ]
    },
    {
        "id": "8034079",
        "image": "https://assets.axieinfinity.com/axies/8034079/axie/axie-full-transparent.png",
        "class": "Plant",
        "name": "Axie #8034079",
        "genes": "0x30000000310b13410c8308c40c2320c20c6328cc0ca328ca0cc3300c0c23194a",
        "owner": "0x239dd0031d1e39ca814593ab03518f3fe967aa6c",
        "bodyShape": "BigYak",
        "parts": [
            {
                "type": "Eyes",
                "id": "eyes-cucumber-slice",
                "name": "Cucumber Slice",
                "class": "Plant"
            },
            {
                "type": "Ears",
                "id": "ears-rosa",
                "name": "Rosa",
                "class": "Plant"
            },
            {
                "type": "Back",
                "id": "back-pumpkin",
                "name": "Pumpkin",
                "class": "Plant"
            },
            {
                "type": "Mouth",
                "id": "mouth-serious",
                "name": "Serious",
                "class": "Plant"
            },
            {
                "type": "Horn",
                "id": "horn-cactus",
                "name": "Cactus",
                "class": "Plant"
            },
            {
                "type": "Tail",
                "id": "tail-carrot",
                "name": "Carrot",
                "class": "Plant"
            }
        ]
    },
    {
        "id": "5967077",
        "image": "https://assets.axieinfinity.com/axies/5967077/axie/axie-full-transparent.png",
        "class": "Plant",
        "name": "Plantito Ng Casulming",
        "genes": "0x300000000b20b4440ca308c40c2108c20cc328420ca310ca0cc330080cc018c2",
        "owner": "0x239dd0031d1e39ca814593ab03518f3fe967aa6c",
        "bodyShape": "Normal",
        "parts": [
            {
                "type": "Eyes",
                "id": "eyes-blossom",
                "name": "Blossom",
                "class": "Plant"
            },
            {
                "type": "Ears",
                "id": "ears-lotus",
                "name": "Lotus",
                "class": "Plant"
            },
            {
                "type": "Back",
                "id": "back-pumpkin",
                "name": "Pumpkin",
                "class": "Plant"
            },
            {
                "type": "Mouth",
                "id": "mouth-serious",
                "name": "Serious",
                "class": "Plant"
            },
            {
                "type": "Horn",
                "id": "horn-cactus",
                "name": "Cactus",
                "class": "Plant"
            },
            {
                "type": "Tail",
                "id": "tail-hot-butt",
                "name": "Hot Butt",
                "class": "Plant"
            }
        ]
    },
    {
        "id": "5476675",
        "image": "https://assets.axieinfinity.com/axies/5476675/axie/axie-full-transparent.png",
        "class": "Beast",
        "name": "PURE BEAST",
        "genes": "0x118600200a0200a0020090200401004004320040020080200a51044",
        "owner": "0x239dd0031d1e39ca814593ab03518f3fe967aa6c",
        "bodyShape": "Fuzzy",
        "parts": [
            {
                "type": "Eyes",
                "id": "eyes-chubby",
                "name": "Chubby",
                "class": "Beast"
            },
            {
                "type": "Ears",
                "id": "ears-nut-cracker",
                "name": "Nut Cracker",
                "class": "Beast"
            },
            {
                "type": "Back",
                "id": "back-ronin",
                "name": "Ronin",
                "class": "Beast"
            },
            {
                "type": "Mouth",
                "id": "mouth-nut-cracker",
                "name": "Nut Cracker",
                "class": "Beast"
            },
            {
                "type": "Horn",
                "id": "horn-imp",
                "name": "Imp",
                "class": "Beast"
            },
            {
                "type": "Tail",
                "id": "tail-nut-cracker",
                "name": "Nut Cracker",
                "class": "Beast"
            }
        ]
    },
    {
        "id": "3895397",
        "image": "https://assets.axieinfinity.com/axies/3895397/axie/axie-full-transparent.png",
        "class": "Bird",
        "name": "Flash ????????#3895397",
        "genes": "0x200000000b2080220825208208a2280a08443144082120880862188608621806",
        "owner": "0x239dd0031d1e39ca814593ab03518f3fe967aa6c",
        "bodyShape": "Normal",
        "parts": [
            {
                "type": "Eyes",
                "id": "eyes-mavis",
                "name": "Mavis",
                "class": "Bird"
            },
            {
                "type": "Ears",
                "id": "ears-early-bird",
                "name": "Early Bird",
                "class": "Bird"
            },
            {
                "type": "Back",
                "id": "back-raven",
                "name": "Raven",
                "class": "Bird"
            },
            {
                "type": "Mouth",
                "id": "mouth-little-owl",
                "name": "Little Owl",
                "class": "Bird"
            },
            {
                "type": "Horn",
                "id": "horn-eggshell",
                "name": "Eggshell",
                "class": "Bird"
            },
            {
                "type": "Tail",
                "id": "tail-the-last-one",
                "name": "The Last One",
                "class": "Bird"
            }
        ]
    },
    {
        "id": "5665050",
        "image": "https://assets.axieinfinity.com/axies/5665050/axie/axie-full-transparent.png",
        "class": "Plant",
        "name": "kkkkkk",
        "genes": "0x300000000d0a12220c2308c20c4410c20cc520cc0ca328ca0cc120c60c830848",
        "owner": "0x239dd0031d1e39ca814593ab03518f3fe967aa6c",
        "bodyShape": "Normal",
        "parts": [
            {
                "type": "Eyes",
                "id": "eyes-papi",
                "name": "Papi",
                "class": "Plant"
            },
            {
                "type": "Ears",
                "id": "ears-lotus",
                "name": "Lotus",
                "class": "Plant"
            },
            {
                "type": "Back",
                "id": "back-pumpkin",
                "name": "Pumpkin",
                "class": "Plant"
            },
            {
                "type": "Mouth",
                "id": "mouth-zigzag",
                "name": "Zigzag",
                "class": "Plant"
            },
            {
                "type": "Horn",
                "id": "horn-cactus",
                "name": "Cactus",
                "class": "Plant"
            },
            {
                "type": "Tail",
                "id": "tail-yam",
                "name": "Yam",
                "class": "Plant"
            }
        ]
    },
    {
        "id": "11045045",
        "image": "https://assets.axieinfinity.com/axies/11045045/axie/axie-full-transparent.png",
        "class": "Mech",
        "name": "V3 META PARTNER AQUA",
        "genes": "0x800000000a34843210a210880020094210a4290600c0300c0045180400a0280a",
        "owner": "0x239dd0031d1e39ca814593ab03518f3fe967aa6c",
        "bodyShape": "Normal",
        "parts": [
            {
                "type": "Eyes",
                "id": "eyes-telescope",
                "name": "Telescope",
                "class": "Aquatic"
            },
            {
                "type": "Ears",
                "id": "ears-gill",
                "name": "Gill",
                "class": "Aquatic"
            },
            {
                "type": "Back",
                "id": "back-hero",
                "name": "Hero",
                "class": "Beast"
            },
            {
                "type": "Mouth",
                "id": "mouth-nut-cracker",
                "name": "Nut Cracker",
                "class": "Beast"
            },
            {
                "type": "Horn",
                "id": "horn-arco",
                "name": "Arco",
                "class": "Beast"
            },
            {
                "type": "Tail",
                "id": "tail-nut-cracker",
                "name": "Nut Cracker",
                "class": "Beast"
            }
        ]
    },
    {
        "id": "10370686",
        "image": "https://assets.axieinfinity.com/axies/10370686/axie/axie-full-transparent.png",
        "class": "Plant",
        "name": "<TOSELL> 95%parts 92% plant_bidens_gravelant top!! full origin!!",
        "genes": "0x30000000312c43330c2228ca0c2310c40c6308c404c1304c0c6318cc0c8328c2",
        "owner": "0x239dd0031d1e39ca814593ab03518f3fe967aa6c",
        "bodyShape": "BigYak",
        "parts": [
            {
                "type": "Eyes",
                "id": "eyes-papi",
                "name": "Papi",
                "class": "Plant"
            },
            {
                "type": "Ears",
                "id": "ears-rosa",
                "name": "Rosa",
                "class": "Plant"
            },
            {
                "type": "Back",
                "id": "back-bidens",
                "name": "Bidens",
                "class": "Plant"
            },
            {
                "type": "Mouth",
                "id": "mouth-serious",
                "name": "Serious",
                "class": "Plant"
            },
            {
                "type": "Horn",
                "id": "horn-leaf-bug",
                "name": "Leaf Bug",
                "class": "Bug"
            },
            {
                "type": "Tail",
                "id": "tail-yam",
                "name": "Yam",
                "class": "Plant"
            }
        ]
    },
    {
        "id": "10290986",
        "image": "https://assets.axieinfinity.com/axies/10290986/axie/axie-full-transparent.png",
        "class": "Plant",
        "name": "Chernobyl",
        "genes": "0x300000000d34d43214a228880c2528c80cc1194a0ca2208800c319440cc120cc",
        "owner": "0x239dd0031d1e39ca814593ab03518f3fe967aa6c",
        "bodyShape": "Normal",
        "parts": [
            {
                "type": "Eyes",
                "id": "eyes-topaz",
                "name": "Topaz",
                "class": "Reptile"
            },
            {
                "type": "Ears",
                "id": "ears-lotus",
                "name": "Lotus",
                "class": "Plant"
            },
            {
                "type": "Back",
                "id": "back-furball",
                "name": "Furball",
                "class": "Beast"
            },
            {
                "type": "Mouth",
                "id": "mouth-serious",
                "name": "Serious",
                "class": "Plant"
            },
            {
                "type": "Horn",
                "id": "horn-cactus",
                "name": "Cactus",
                "class": "Plant"
            },
            {
                "type": "Tail",
                "id": "tail-hot-butt",
                "name": "Hot Butt",
                "class": "Plant"
            }
        ]
    },
    {
        "id": "10101911",
        "image": "https://assets.axieinfinity.com/axies/10101911/axie/axie-full-transparent.png",
        "class": "Plant",
        "name": "Axie #10101911",
        "genes": "0x300000002104b3330c2311440c2510c20cc310cc04c4304c0cc330cc0c4310c4",
        "owner": "0x239dd0031d1e39ca814593ab03518f3fe967aa6c",
        "bodyShape": "WetDog",
        "parts": [
            {
                "type": "Eyes",
                "id": "eyes-papi",
                "name": "Papi",
                "class": "Plant"
            },
            {
                "type": "Ears",
                "id": "ears-lotus",
                "name": "Lotus",
                "class": "Plant"
            },
            {
                "type": "Back",
                "id": "back-pumpkin",
                "name": "Pumpkin",
                "class": "Plant"
            },
            {
                "type": "Mouth",
                "id": "mouth-serious",
                "name": "Serious",
                "class": "Plant"
            },
            {
                "type": "Horn",
                "id": "horn-leaf-bug",
                "name": "Leaf Bug",
                "class": "Bug"
            },
            {
                "type": "Tail",
                "id": "tail-cattail",
                "name": "Cattail",
                "class": "Plant"
            }
        ]
    },
    {
        "id": "166821",
        "image": "https://assets.axieinfinity.com/axies/166821/axie/axie-full-transparent.png",
        "class": "Aquatic",
        "name": "Axie #166821",
        "genes": "0x40000000051440430ca308040c2228ca00a22948148319081080284c0443310c",
        "owner": "0x239dd0031d1e39ca814593ab03518f3fe967aa6c",
        "bodyShape": "Normal",
        "parts": [
            {
                "type": "Eyes",
                "id": "eyes-blossom",
                "name": "Blossom",
                "class": "Plant"
            },
            {
                "type": "Ears",
                "id": "ears-puppy",
                "name": "Puppy",
                "class": "Beast"
            },
            {
                "type": "Back",
                "id": "back-sponge",
                "name": "Sponge",
                "class": "Aquatic"
            },
            {
                "type": "Mouth",
                "id": "mouth-serious",
                "name": "Serious",
                "class": "Plant"
            },
            {
                "type": "Horn",
                "id": "horn-scaly-spoon",
                "name": "Scaly Spoon",
                "class": "Reptile"
            },
            {
                "type": "Tail",
                "id": "tail-twin-tail",
                "name": "Twin Tail",
                "class": "Bug"
            }
        ]
    },
    {
        "id": "6712672",
        "image": "https://assets.axieinfinity.com/axies/6712672/axie/axie-full-transparent.png",
        "class": "Beast",
        "name": "for tuition pls buy",
        "genes": "0x1d75d03314211082042021481480308200a02842008028060080200a",
        "owner": "0x239dd0031d1e39ca814593ab03518f3fe967aa6c",
        "bodyShape": "Spiky",
        "parts": [
            {
                "type": "Eyes",
                "id": "eyes-gecko",
                "name": "Gecko",
                "class": "Reptile"
            },
            {
                "type": "Ears",
                "id": "ears-small-frill",
                "name": "Small Frill",
                "class": "Reptile"
            },
            {
                "type": "Back",
                "id": "back-risky-beast",
                "name": "Risky Beast",
                "class": "Beast"
            },
            {
                "type": "Mouth",
                "id": "mouth-mosquito",
                "name": "Mosquito",
                "class": "Bug"
            },
            {
                "type": "Horn",
                "id": "horn-dual-blade",
                "name": "Dual Blade",
                "class": "Beast"
            },
            {
                "type": "Tail",
                "id": "tail-hare",
                "name": "Hare",
                "class": "Beast"
            }
        ]
    },
    {
        "id": "10837199",
        "image": "https://assets.axieinfinity.com/axies/10837199/axie/axie-full-transparent.png",
        "class": "Dusk",
        "name": "Axie #10837199",
        "genes": "0xa0000000041053320ca1200814a5294a1465094c08a2288a00c0308208253082",
        "owner": "0x239dd0031d1e39ca814593ab03518f3fe967aa6c",
        "bodyShape": "Normal",
        "parts": [
            {
                "type": "Eyes",
                "id": "eyes-blossom",
                "name": "Blossom",
                "class": "Plant"
            },
            {
                "type": "Ears",
                "id": "ears-curved-spine",
                "name": "Curved Spine",
                "class": "Reptile"
            },
            {
                "type": "Back",
                "id": "back-furball",
                "name": "Furball",
                "class": "Beast"
            },
            {
                "type": "Mouth",
                "id": "mouth-tiny-turtle",
                "name": "Tiny Turtle",
                "class": "Reptile"
            },
            {
                "type": "Horn",
                "id": "horn-wing-horn",
                "name": "Wing Horn",
                "class": "Bird"
            },
            {
                "type": "Tail",
                "id": "tail-swallow",
                "name": "Swallow",
                "class": "Bird"
            }
        ]
    },
    {
        "id": "10895243",
        "image": "https://assets.axieinfinity.com/axies/10895243/axie/axie-full-transparent.png",
        "class": "Mech",
        "name": "Axie #10895243",
        "genes": "0x800000000104d44200a1080a0040100200451142004320ca004008ca00401004",
        "owner": "0x239dd0031d1e39ca814593ab03518f3fe967aa6c",
        "bodyShape": "Fuzzy",
        "parts": [
            {
                "type": "Eyes",
                "id": "eyes-chubby",
                "name": "Chubby",
                "class": "Beast"
            },
            {
                "type": "Ears",
                "id": "ears-nut-cracker",
                "name": "Nut Cracker",
                "class": "Beast"
            },
            {
                "type": "Back",
                "id": "back-hero",
                "name": "Hero",
                "class": "Beast"
            },
            {
                "type": "Mouth",
                "id": "mouth-goda",
                "name": "Goda",
                "class": "Beast"
            },
            {
                "type": "Horn",
                "id": "horn-imp",
                "name": "Imp",
                "class": "Beast"
            },
            {
                "type": "Tail",
                "id": "tail-rice",
                "name": "Rice",
                "class": "Beast"
            }
        ]
    },
    {
        "id": "9156050",
        "image": "https://assets.axieinfinity.com/axies/9156050/axie/axie-full-transparent.png",
        "class": "Dusk",
        "name": "Axie #9156050",
        "genes": "0xa00000001e1cd2210ca428440481204810201006044110440421084204630848",
        "owner": "0x239dd0031d1e39ca814593ab03518f3fe967aa6c",
        "bodyShape": "Curly",
        "parts": [
            {
                "type": "Eyes",
                "id": "eyes-blossom",
                "name": "Blossom",
                "class": "Plant"
            },
            {
                "type": "Ears",
                "id": "ears-nimo",
                "name": "Nimo",
                "class": "Aquatic"
            },
            {
                "type": "Back",
                "id": "back-snail-shell",
                "name": "Snail Shell",
                "class": "Bug"
            },
            {
                "type": "Mouth",
                "id": "mouth-cute-bunny",
                "name": "Cute Bunny",
                "class": "Bug"
            },
            {
                "type": "Horn",
                "id": "horn-antenna",
                "name": "Antenna",
                "class": "Bug"
            },
            {
                "type": "Tail",
                "id": "tail-fish-snack",
                "name": "Fish Snack",
                "class": "Bug"
            }
        ]
    },
    {
        "id": "11409367",
        "image": "https://assets.axieinfinity.com/axies/11409367/axie/axie-full-transparent.png",
        "class": "Bird",
        "name": "Axie #11409367",
        "genes": "0x200000001e28c4420824090408a4214a088108480083180814a420880cc40902",
        "owner": "0x239dd0031d1e39ca814593ab03518f3fe967aa6c",
        "bodyShape": "Curly",
        "parts": [
            {
                "type": "Eyes",
                "id": "eyes-mavis",
                "name": "Mavis",
                "class": "Bird"
            },
            {
                "type": "Ears",
                "id": "ears-peace-maker",
                "name": "Peace Maker",
                "class": "Bird"
            },
            {
                "type": "Back",
                "id": "back-red-ear",
                "name": "Red Ear",
                "class": "Reptile"
            },
            {
                "type": "Mouth",
                "id": "mouth-little-owl",
                "name": "Little Owl",
                "class": "Bird"
            },
            {
                "type": "Horn",
                "id": "horn-pocky",
                "name": "Pocky",
                "class": "Beast"
            },
            {
                "type": "Tail",
                "id": "tail-hot-butt",
                "name": "Hot Butt",
                "class": "Plant"
            }
        ]
    },
    {
        "id": "2235445",
        "image": "https://assets.axieinfinity.com/axies/2235445/axie/axie-full-transparent.png",
        "class": "Dusk",
        "name": "????????????",
        "genes": "0xa000000031c7143014221004008508820020188a14a221440cc210c40c240906",
        "owner": "0x239dd0031d1e39ca814593ab03518f3fe967aa6c",
        "bodyShape": "BigYak",
        "parts": [
            {
                "type": "Eyes",
                "id": "eyes-gecko",
                "name": "Gecko",
                "class": "Reptile"
            },
            {
                "type": "Ears",
                "id": "ears-nyan",
                "name": "Nyan",
                "class": "Beast"
            },
            {
                "type": "Back",
                "id": "back-pumpkin",
                "name": "Pumpkin",
                "class": "Plant"
            },
            {
                "type": "Mouth",
                "id": "mouth-axie-kiss",
                "name": "Axie Kiss",
                "class": "Beast"
            },
            {
                "type": "Horn",
                "id": "horn-incisor",
                "name": "Incisor",
                "class": "Reptile"
            },
            {
                "type": "Tail",
                "id": "tail-carrot",
                "name": "Carrot",
                "class": "Plant"
            }
        ]
    },
    {
        "id": "4224790",
        "image": "https://assets.axieinfinity.com/axies/4224790/axie/axie-full-transparent.png",
        "class": "Mech",
        "name": "M 7",
        "genes": "0x800000000134142400a00884002008020065300400a01004002008020020284a",
        "owner": "0x239dd0031d1e39ca814593ab03518f3fe967aa6c",
        "bodyShape": "Fuzzy",
        "parts": [
            {
                "type": "Eyes",
                "id": "eyes-chubby",
                "name": "Chubby",
                "class": "Beast"
            },
            {
                "type": "Ears",
                "id": "ears-innocent-lamb",
                "name": "Innocent Lamb",
                "class": "Beast"
            },
            {
                "type": "Back",
                "id": "back-ronin",
                "name": "Ronin",
                "class": "Beast"
            },
            {
                "type": "Mouth",
                "id": "mouth-nut-cracker",
                "name": "Nut Cracker",
                "class": "Beast"
            },
            {
                "type": "Horn",
                "id": "horn-dual-blade",
                "name": "Dual Blade",
                "class": "Beast"
            },
            {
                "type": "Tail",
                "id": "tail-cottontail",
                "name": "Cottontail",
                "class": "Beast"
            }
        ]
    },
    {
        "id": "11351610",
        "image": "https://assets.axieinfinity.com/axies/11351610/axie/axie-full-transparent.png",
        "class": "Beast",
        "name": "Axie #11351610",
        "genes": "0x604100400a02948002008c200432804102010040020080200a0280a",
        "owner": "0x239dd0031d1e39ca814593ab03518f3fe967aa6c",
        "bodyShape": "Normal",
        "parts": [
            {
                "type": "Eyes",
                "id": "eyes-chubby",
                "name": "Chubby",
                "class": "Beast"
            },
            {
                "type": "Ears",
                "id": "ears-nut-cracker",
                "name": "Nut Cracker",
                "class": "Beast"
            },
            {
                "type": "Back",
                "id": "back-ronin",
                "name": "Ronin",
                "class": "Beast"
            },
            {
                "type": "Mouth",
                "id": "mouth-nut-cracker",
                "name": "Nut Cracker",
                "class": "Beast"
            },
            {
                "type": "Horn",
                "id": "horn-babylonia",
                "name": "Babylonia",
                "class": "Aquatic"
            },
            {
                "type": "Tail",
                "id": "tail-nut-cracker",
                "name": "Nut Cracker",
                "class": "Beast"
            }
        ]
    },
    {
        "id": "11536811",
        "image": "https://assets.axieinfinity.com/axies/11536811/axie/axie-full-transparent.png",
        "class": "Dawn",
        "name": "Axie #11536811",
        "genes": "0x9000000006c5d433084509420022100414623104148408cc0040094a1460288c",
        "owner": "0x239dd0031d1e39ca814593ab03518f3fe967aa6c",
        "bodyShape": "Normal",
        "parts": [
            {
                "type": "Eyes",
                "id": "eyes-lucas",
                "name": "Lucas",
                "class": "Bird"
            },
            {
                "type": "Ears",
                "id": "ears-curved-spine",
                "name": "Curved Spine",
                "class": "Reptile"
            },
            {
                "type": "Back",
                "id": "back-hero",
                "name": "Hero",
                "class": "Beast"
            },
            {
                "type": "Mouth",
                "id": "mouth-nut-cracker",
                "name": "Nut Cracker",
                "class": "Beast"
            },
            {
                "type": "Horn",
                "id": "horn-scaly-spoon",
                "name": "Scaly Spoon",
                "class": "Reptile"
            },
            {
                "type": "Tail",
                "id": "tail-tiny-dino",
                "name": "Tiny Dino",
                "class": "Reptile"
            }
        ]
    },
    {
        "id": "11324942",
        "image": "https://assets.axieinfinity.com/axies/11324942/axie/axie-full-transparent.png",
        "class": "Mech",
        "name": "MECH- FEPOT",
        "genes": "0x800000000d18d12210a0108404a508021084308c00c0300c00c4080c04402844",
        "owner": "0x239dd0031d1e39ca814593ab03518f3fe967aa6c",
        "bodyShape": "Normal",
        "parts": [
            {
                "type": "Eyes",
                "id": "eyes-telescope",
                "name": "Telescope",
                "class": "Aquatic"
            },
            {
                "type": "Ears",
                "id": "ears-inkling",
                "name": "Inkling",
                "class": "Aquatic"
            },
            {
                "type": "Back",
                "id": "back-furball",
                "name": "Furball",
                "class": "Beast"
            },
            {
                "type": "Mouth",
                "id": "mouth-square-teeth",
                "name": "Square Teeth",
                "class": "Bug"
            },
            {
                "type": "Horn",
                "id": "horn-arco",
                "name": "Arco",
                "class": "Beast"
            },
            {
                "type": "Tail",
                "id": "tail-twin-tail",
                "name": "Twin Tail",
                "class": "Bug"
            }
        ]
    },
    {
        "id": "11333531",
        "image": "https://assets.axieinfinity.com/axies/11333531/axie/axie-full-transparent.png",
        "class": "Dawn",
        "name": "Axie #11333531",
        "genes": "0x9000000031746343082211420020108408a4108c102520cc0043200404802948",
        "owner": "0x239dd0031d1e39ca814593ab03518f3fe967aa6c",
        "bodyShape": "BigYak",
        "parts": [
            {
                "type": "Eyes",
                "id": "eyes-mavis",
                "name": "Mavis",
                "class": "Bird"
            },
            {
                "type": "Ears",
                "id": "ears-curly",
                "name": "Curly",
                "class": "Bird"
            },
            {
                "type": "Back",
                "id": "back-hero",
                "name": "Hero",
                "class": "Beast"
            },
            {
                "type": "Mouth",
                "id": "mouth-nut-cracker",
                "name": "Nut Cracker",
                "class": "Beast"
            },
            {
                "type": "Horn",
                "id": "horn-babylonia",
                "name": "Babylonia",
                "class": "Aquatic"
            },
            {
                "type": "Tail",
                "id": "tail-gravel-ant",
                "name": "Gravel Ant",
                "class": "Bug"
            }
        ]
    },
    {
        "id": "11349016",
        "image": "https://assets.axieinfinity.com/axies/11349016/axie/axie-full-transparent.png",
        "class": "Dawn",
        "name": "BigYak poison",
        "genes": "0x9000000031c4602210441088108010021480214800c2308a1021280c00a4310c",
        "owner": "0x239dd0031d1e39ca814593ab03518f3fe967aa6c",
        "bodyShape": "BigYak",
        "parts": [
            {
                "type": "Eyes",
                "id": "eyes-clear",
                "name": "Clear",
                "class": "Aquatic"
            },
            {
                "type": "Ears",
                "id": "ears-small-frill",
                "name": "Small Frill",
                "class": "Reptile"
            },
            {
                "type": "Back",
                "id": "back-hermit",
                "name": "Hermit",
                "class": "Aquatic"
            },
            {
                "type": "Mouth",
                "id": "mouth-risky-fish",
                "name": "Risky Fish",
                "class": "Aquatic"
            },
            {
                "type": "Horn",
                "id": "horn-arco",
                "name": "Arco",
                "class": "Beast"
            },
            {
                "type": "Tail",
                "id": "tail-nut-cracker",
                "name": "Nut Cracker",
                "class": "Beast"
            }
        ]
    },
    {
        "id": "11329464",
        "image": "https://assets.axieinfinity.com/axies/11329464/axie/axie-full-transparent.png",
        "class": "Dawn",
        "name": "Axie #11329464",
        "genes": "0x90000000311483330c4421421445114214c51108102521481083310a08c23048",
        "owner": "0x239dd0031d1e39ca814593ab03518f3fe967aa6c",
        "bodyShape": "BigYak",
        "parts": [
            {
                "type": "Eyes",
                "id": "eyes-confused",
                "name": "Confused",
                "class": "Plant"
            },
            {
                "type": "Ears",
                "id": "ears-sidebarb",
                "name": "Sidebarb",
                "class": "Reptile"
            },
            {
                "type": "Back",
                "id": "back-sponge",
                "name": "Sponge",
                "class": "Aquatic"
            },
            {
                "type": "Mouth",
                "id": "mouth-kotaro",
                "name": "Kotaro",
                "class": "Reptile"
            },
            {
                "type": "Horn",
                "id": "horn-babylonia",
                "name": "Babylonia",
                "class": "Aquatic"
            },
            {
                "type": "Tail",
                "id": "tail-post-fight",
                "name": "Post Fight",
                "class": "Bird"
            }
        ]
    },
    {
        "id": "11536813",
        "image": "https://assets.axieinfinity.com/axies/11536813/axie/axie-full-transparent.png",
        "class": "Dawn",
        "name": "Axie #11536813",
        "genes": "0x900000003128533314a508c2002021441465194a1045214414a5180214453106",
        "owner": "0x239dd0031d1e39ca814593ab03518f3fe967aa6c",
        "bodyShape": "BigYak",
        "parts": [
            {
                "type": "Eyes",
                "id": "eyes-topaz",
                "name": "Topaz",
                "class": "Reptile"
            },
            {
                "type": "Ears",
                "id": "ears-curved-spine",
                "name": "Curved Spine",
                "class": "Reptile"
            },
            {
                "type": "Back",
                "id": "back-red-ear",
                "name": "Red Ear",
                "class": "Reptile"
            },
            {
                "type": "Mouth",
                "id": "mouth-nut-cracker",
                "name": "Nut Cracker",
                "class": "Beast"
            },
            {
                "type": "Horn",
                "id": "horn-teal-shell",
                "name": "Teal Shell",
                "class": "Aquatic"
            },
            {
                "type": "Tail",
                "id": "tail-iguana",
                "name": "Iguana",
                "class": "Reptile"
            }
        ]
    },
    {
        "id": "11550220",
        "image": "https://assets.axieinfinity.com/axies/11550220/axie/axie-full-transparent.png",
        "class": "Dawn",
        "name": "Axie #11550220",
        "genes": "0x9000000031082224142209420c25088a048418c8108511481485200a04611842",
        "owner": "0x239dd0031d1e39ca814593ab03518f3fe967aa6c",
        "bodyShape": "BigYak",
        "parts": [
            {
                "type": "Eyes",
                "id": "eyes-gecko",
                "name": "Gecko",
                "class": "Reptile"
            },
            {
                "type": "Ears",
                "id": "ears-leaf-bug",
                "name": "Leaf Bug",
                "class": "Bug"
            },
            {
                "type": "Back",
                "id": "back-indian-star",
                "name": "Indian Star",
                "class": "Reptile"
            },
            {
                "type": "Mouth",
                "id": "mouth-serious",
                "name": "Serious",
                "class": "Plant"
            },
            {
                "type": "Horn",
                "id": "horn-anemone",
                "name": "Anemone",
                "class": "Aquatic"
            },
            {
                "type": "Tail",
                "id": "tail-fish-snack",
                "name": "Fish Snack",
                "class": "Bug"
            }
        ]
    },
    {
        "id": "11506231",
        "image": "https://assets.axieinfinity.com/axies/11506231/axie/axie-full-transparent.png",
        "class": "Dawn",
        "name": "Axie #11506231",
        "genes": "0x900000003114a3330845080814a5100414651904148411021460094a1464208c",
        "owner": "0x239dd0031d1e39ca814593ab03518f3fe967aa6c",
        "bodyShape": "BigYak",
        "parts": [
            {
                "type": "Eyes",
                "id": "eyes-lucas",
                "name": "Lucas",
                "class": "Bird"
            },
            {
                "type": "Ears",
                "id": "ears-curved-spine",
                "name": "Curved Spine",
                "class": "Reptile"
            },
            {
                "type": "Back",
                "id": "back-green-thorns",
                "name": "Green Thorns",
                "class": "Reptile"
            },
            {
                "type": "Mouth",
                "id": "mouth-tiny-turtle",
                "name": "Tiny Turtle",
                "class": "Reptile"
            },
            {
                "type": "Horn",
                "id": "horn-scaly-spoon",
                "name": "Scaly Spoon",
                "class": "Reptile"
            },
            {
                "type": "Tail",
                "id": "tail-tiny-dino",
                "name": "Tiny Dino",
                "class": "Reptile"
            }
        ]
    },
    {
        "id": "11536821",
        "image": "https://assets.axieinfinity.com/axies/11536821/axie/axie-full-transparent.png",
        "class": "Dawn",
        "name": "Axie #11536821",
        "genes": "0x9000000031c6130314a528ca0024288400222806144511441465308414430944",
        "owner": "0x239dd0031d1e39ca814593ab03518f3fe967aa6c",
        "bodyShape": "BigYak",
        "parts": [
            {
                "type": "Eyes",
                "id": "eyes-topaz",
                "name": "Topaz",
                "class": "Reptile"
            },
            {
                "type": "Ears",
                "id": "ears-nyan",
                "name": "Nyan",
                "class": "Beast"
            },
            {
                "type": "Back",
                "id": "back-green-thorns",
                "name": "Green Thorns",
                "class": "Reptile"
            },
            {
                "type": "Mouth",
                "id": "mouth-nut-cracker",
                "name": "Nut Cracker",
                "class": "Beast"
            },
            {
                "type": "Horn",
                "id": "horn-scaly-spear",
                "name": "Scaly Spear",
                "class": "Reptile"
            },
            {
                "type": "Tail",
                "id": "tail-iguana",
                "name": "Iguana",
                "class": "Reptile"
            }
        ]
    },
    {
        "id": "11549027",
        "image": "https://assets.axieinfinity.com/axies/11549027/axie/axie-full-transparent.png",
        "class": "Dawn",
        "name": "Axie #11549027",
        "genes": "0x9000000031771433084329420022110a0024108c148018cc14c010840c202808",
        "owner": "0x239dd0031d1e39ca814593ab03518f3fe967aa6c",
        "bodyShape": "BigYak",
        "parts": [
            {
                "type": "Eyes",
                "id": "eyes-lucas",
                "name": "Lucas",
                "class": "Bird"
            },
            {
                "type": "Ears",
                "id": "ears-nyan",
                "name": "Nyan",
                "class": "Beast"
            },
            {
                "type": "Back",
                "id": "back-croc",
                "name": "Croc",
                "class": "Reptile"
            },
            {
                "type": "Mouth",
                "id": "mouth-nut-cracker",
                "name": "Nut Cracker",
                "class": "Beast"
            },
            {
                "type": "Horn",
                "id": "horn-scaly-spoon",
                "name": "Scaly Spoon",
                "class": "Reptile"
            },
            {
                "type": "Tail",
                "id": "tail-carrot",
                "name": "Carrot",
                "class": "Plant"
            }
        ]
    },
    {
        "id": "11560599",
        "image": "https://assets.axieinfinity.com/axies/11560599/axie/axie-full-transparent.png",
        "class": "Dawn",
        "name": "Axie #11560599",
        "genes": "0x9000000031771431148229420025108a1040084214833046004520840c25280a",
        "owner": "0x239dd0031d1e39ca814593ab03518f3fe967aa6c",
        "bodyShape": "BigYak",
        "parts": [
            {
                "type": "Eyes",
                "id": "eyes-scar",
                "name": "Scar",
                "class": "Reptile"
            },
            {
                "type": "Ears",
                "id": "ears-tiny-fan",
                "name": "Tiny Fan",
                "class": "Aquatic"
            },
            {
                "type": "Back",
                "id": "back-hero",
                "name": "Hero",
                "class": "Beast"
            },
            {
                "type": "Mouth",
                "id": "mouth-nut-cracker",
                "name": "Nut Cracker",
                "class": "Beast"
            },
            {
                "type": "Horn",
                "id": "horn-scaly-spoon",
                "name": "Scaly Spoon",
                "class": "Reptile"
            },
            {
                "type": "Tail",
                "id": "tail-carrot",
                "name": "Carrot",
                "class": "Plant"
            }
        ]
    },
    {
        "id": "11560600",
        "image": "https://assets.axieinfinity.com/axies/11560600/axie/axie-full-transparent.png",
        "class": "Dawn",
        "name": "Axie #11560600",
        "genes": "0x9000000031c453131482294a148508841460188c046521041463280608c51844",
        "owner": "0x239dd0031d1e39ca814593ab03518f3fe967aa6c",
        "bodyShape": "BigYak",
        "parts": [
            {
                "type": "Eyes",
                "id": "eyes-scar",
                "name": "Scar",
                "class": "Reptile"
            },
            {
                "type": "Ears",
                "id": "ears-curved-spine",
                "name": "Curved Spine",
                "class": "Reptile"
            },
            {
                "type": "Back",
                "id": "back-green-thorns",
                "name": "Green Thorns",
                "class": "Reptile"
            },
            {
                "type": "Mouth",
                "id": "mouth-razor-bite",
                "name": "Razor Bite",
                "class": "Reptile"
            },
            {
                "type": "Horn",
                "id": "horn-caterpillars",
                "name": "Caterpillars",
                "class": "Bug"
            },
            {
                "type": "Tail",
                "id": "tail-post-fight",
                "name": "Post Fight",
                "class": "Bird"
            }
        ]
    },
    {
        "id": "11560601",
        "image": "https://assets.axieinfinity.com/axies/11560601/axie/axie-full-transparent.png",
        "class": "Dawn",
        "name": "Axie #11560601",
        "genes": "0x9000000031c7133314a50942002428840024114a1484100614a0114614430808",
        "owner": "0x239dd0031d1e39ca814593ab03518f3fe967aa6c",
        "bodyShape": "BigYak",
        "parts": [
            {
                "type": "Eyes",
                "id": "eyes-topaz",
                "name": "Topaz",
                "class": "Reptile"
            },
            {
                "type": "Ears",
                "id": "ears-nyan",
                "name": "Nyan",
                "class": "Beast"
            },
            {
                "type": "Back",
                "id": "back-red-ear",
                "name": "Red Ear",
                "class": "Reptile"
            },
            {
                "type": "Mouth",
                "id": "mouth-nut-cracker",
                "name": "Nut Cracker",
                "class": "Beast"
            },
            {
                "type": "Horn",
                "id": "horn-scaly-spoon",
                "name": "Scaly Spoon",
                "class": "Reptile"
            },
            {
                "type": "Tail",
                "id": "tail-iguana",
                "name": "Iguana",
                "class": "Reptile"
            }
        ]
    },
    {
        "id": "11518432",
        "image": "https://assets.axieinfinity.com/axies/11518432/axie/axie-full-transparent.png",
        "class": "Dawn",
        "name": "Axie #11518432",
        "genes": "0x9000000031c45413148229441485110200851842148118880cc3280614a33044",
        "owner": "0x239dd0031d1e39ca814593ab03518f3fe967aa6c",
        "bodyShape": "BigYak",
        "parts": [
            {
                "type": "Eyes",
                "id": "eyes-scar",
                "name": "Scar",
                "class": "Reptile"
            },
            {
                "type": "Ears",
                "id": "ears-zen",
                "name": "Zen",
                "class": "Beast"
            },
            {
                "type": "Back",
                "id": "back-pumpkin",
                "name": "Pumpkin",
                "class": "Plant"
            },
            {
                "type": "Mouth",
                "id": "mouth-razor-bite",
                "name": "Razor Bite",
                "class": "Reptile"
            },
            {
                "type": "Horn",
                "id": "horn-scaly-spoon",
                "name": "Scaly Spoon",
                "class": "Reptile"
            },
            {
                "type": "Tail",
                "id": "tail-gila",
                "name": "Gila",
                "class": "Reptile"
            }
        ]
    },
    {
        "id": "157738",
        "image": "https://assets.axieinfinity.com/axies/157738/axie/axie-full-transparent.png",
        "class": "Aquatic",
        "name": "beberage donald",
        "genes": "0x4000000022283233002310840c242848004209460863194208802108008010c6",
        "owner": "0x239dd0031d1e39ca814593ab03518f3fe967aa6c",
        "bodyShape": "Sumo",
        "parts": [
            {
                "type": "Eyes",
                "id": "eyes-zeal",
                "name": "Zeal",
                "class": "Beast"
            },
            {
                "type": "Ears",
                "id": "ears-nut-cracker",
                "name": "Nut Cracker",
                "class": "Beast"
            },
            {
                "type": "Back",
                "id": "back-pigeon-post",
                "name": "Pigeon Post",
                "class": "Bird"
            },
            {
                "type": "Mouth",
                "id": "mouth-serious",
                "name": "Serious",
                "class": "Plant"
            },
            {
                "type": "Horn",
                "id": "horn-trump",
                "name": "Trump",
                "class": "Bird"
            },
            {
                "type": "Tail",
                "id": "tail-hare",
                "name": "Hare",
                "class": "Beast"
            }
        ]
    },
    {
        "id": "11153704",
        "image": "https://assets.axieinfinity.com/axies/11153704/axie/axie-full-transparent.png",
        "class": "Mech",
        "name": "Mech for origin",
        "genes": "0x800000000118144408a210021425080208a2280200a5088a004030ca08a11004",
        "owner": "0x239dd0031d1e39ca814593ab03518f3fe967aa6c",
        "bodyShape": "Fuzzy",
        "parts": [
            {
                "type": "Eyes",
                "id": "eyes-robin",
                "name": "Robin",
                "class": "Bird"
            },
            {
                "type": "Ears",
                "id": "ears-curly",
                "name": "Curly",
                "class": "Bird"
            },
            {
                "type": "Back",
                "id": "back-hero",
                "name": "Hero",
                "class": "Beast"
            },
            {
                "type": "Mouth",
                "id": "mouth-toothless-bite",
                "name": "Toothless Bite",
                "class": "Reptile"
            },
            {
                "type": "Horn",
                "id": "horn-dual-blade",
                "name": "Dual Blade",
                "class": "Beast"
            },
            {
                "type": "Tail",
                "id": "tail-granmas-fan",
                "name": "Granma's Fan",
                "class": "Bird"
            }
        ]
    },
    {
        "id": "11402581",
        "image": "https://assets.axieinfinity.com/axies/11402581/axie/axie-full-transparent.png",
        "class": "Mech",
        "name": "Axie #11402581",
        "genes": "0x800000000d048044104028ca10802142002020861422210800c0114a00232002",
        "owner": "0x239dd0031d1e39ca814593ab03518f3fe967aa6c",
        "bodyShape": "Normal",
        "parts": [
            {
                "type": "Eyes",
                "id": "eyes-clear",
                "name": "Clear",
                "class": "Aquatic"
            },
            {
                "type": "Ears",
                "id": "ears-coca",
                "name": "Coca",
                "class": "Beast"
            },
            {
                "type": "Back",
                "id": "back-beach-ball",
                "name": "Beach Ball",
                "class": "Beast"
            },
            {
                "type": "Mouth",
                "id": "mouth-bubble-fish",
                "name": "Bubble Fish",
                "class": "Aquatic"
            },
            {
                "type": "Horn",
                "id": "horn-strawberry-ice-cream",
                "name": "Strawberry Ice Cream",
                "class": "Reptile"
            },
            {
                "type": "Tail",
                "id": "tail-cotton-candy",
                "name": "Cotton Candy",
                "class": "Beast"
            }
        ]
    },
    {
        "id": "125862",
        "image": "https://assets.axieinfinity.com/axies/125862/axie/axie-full-transparent.png",
        "class": "Aquatic",
        "name": "Axie #125862",
        "genes": "0x40080000097464340844290a0ca1094a0860108a0c65210c0c8118c410243002",
        "owner": "0x239dd0031d1e39ca814593ab03518f3fe967aa6c",
        "bodyShape": "Normal",
        "parts": [
            {
                "type": "Eyes",
                "id": "eyes-lucas",
                "name": "Lucas",
                "class": "Bird"
            },
            {
                "type": "Ears",
                "id": "ears-owl",
                "name": "Owl",
                "class": "Bird"
            },
            {
                "type": "Back",
                "id": "back-watering-can",
                "name": "Watering Can",
                "class": "Plant"
            },
            {
                "type": "Mouth",
                "id": "mouth-silence-whisper",
                "name": "Silence Whisper",
                "class": "Plant"
            },
            {
                "type": "Horn",
                "id": "horn-rose-bud",
                "name": "Rose Bud",
                "class": "Plant"
            },
            {
                "type": "Tail",
                "id": "tail-koinobori",
                "name": "Koinobori",
                "class": "Aquatic"
            }
        ]
    }
]

// async function main() {
//     //npx tsc sampleAxies.ts && node sampleAxies.js

// }

// async function runMain() {
//     try {
//         await main()
//         process.exit(1)
//     } catch (err) {
//         console.log("err:", err)
//         process.exit(0)
//     }
// }

// runMain()
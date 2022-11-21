const axios = require('axios')

export const sampleAxies = [
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
        "name": "⭐🦄 UNIQUE 🦄⭐",
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
        "name": "🏆 RARE Frontline Burst Aqua 🎖️",
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
        "id": "10088279",
        "image": "https://assets.axieinfinity.com/axies/10088279/axie/axie-full-transparent.png",
        "class": "Beast",
        "name": "único en venta ",
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
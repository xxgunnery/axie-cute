import axios from "axios"

const axieSchema = `
query GetAxieBriefList($auctionType: AuctionType, $criteria: AxieSearchCriteria, $owner: String) {
  part1: axies(auctionType: $auctionType, from: 0, size: 100, sort: PriceAsc, criteria: $criteria, owner: $owner) {
    results {
      ...AxieBrief
    }
  }
  part2: axies(auctionType: $auctionType, from: 100, size: 100, sort: PriceAsc, criteria: $criteria, owner: $owner) {
    results {
      ...AxieBrief
    }
  }
  part3: axies(auctionType: $auctionType, from: 200, size: 100, sort: PriceAsc, criteria: $criteria, owner: $owner) {
    results {
      ...AxieBrief
    }
  }
  part4: axies(auctionType: $auctionType, from: 300, size: 100, sort: PriceAsc, criteria: $criteria, owner: $owner) {
    results {
      ...AxieBrief
    }
  }
  part5: axies(auctionType: $auctionType, from: 400, size: 100, sort: PriceAsc, criteria: $criteria, owner: $owner) {
    results {
      ...AxieBrief
    }
  }
  part6: axies(auctionType: $auctionType, from: 500, size: 100, sort: PriceAsc, criteria: $criteria, owner: $owner) {
    results {
      ...AxieBrief
    }
  }
  part7: axies(auctionType: $auctionType, from: 600, size: 100, sort: PriceAsc, criteria: $criteria, owner: $owner) {
    results {
      ...AxieBrief
    }
  }
  part8: axies(auctionType: $auctionType, from: 700, size: 100, sort: PriceAsc, criteria: $criteria, owner: $owner) {
    results {
      ...AxieBrief
    }
  }
  part9: axies(auctionType: $auctionType, from: 800, size: 100, sort: PriceAsc, criteria: $criteria, owner: $owner) {
    results {
      ...AxieBrief
    }
  }
  part10: axies(auctionType: $auctionType, from: 900, size: 100, sort: PriceAsc, criteria: $criteria, owner: $owner) {
    results {
      ...AxieBrief
    }
  }
  part11: axies(auctionType: $auctionType, from: 1000, size: 100, sort: PriceAsc, criteria: $criteria, owner: $owner) {
    results {
      ...AxieBrief
    }
  }
  part12: axies(auctionType: $auctionType, from: 1100, size: 100, sort: PriceAsc, criteria: $criteria, owner: $owner) {
    results {
      ...AxieBrief
    }
  }
  part13: axies(auctionType: $auctionType, from: 1200, size: 100, sort: PriceAsc, criteria: $criteria, owner: $owner) {
    results {
      ...AxieBrief
    }
  }
  part14: axies(auctionType: $auctionType, from: 1300, size: 100, sort: PriceAsc, criteria: $criteria, owner: $owner) {
    results {
      ...AxieBrief
    }
  }
  part15: axies(auctionType: $auctionType, from: 1400, size: 100, sort: PriceAsc, criteria: $criteria, owner: $owner) {
    results {
      ...AxieBrief
    }
  }
  part16: axies(auctionType: $auctionType, from: 1500, size: 100, sort: PriceAsc, criteria: $criteria, owner: $owner) {
    results {
      ...AxieBrief
    }
  }
  part17: axies(auctionType: $auctionType, from: 1600, size: 100, sort: PriceAsc, criteria: $criteria, owner: $owner) {
    results {
      ...AxieBrief
    }
  }
  part18: axies(auctionType: $auctionType, from: 1700, size: 100, sort: PriceAsc, criteria: $criteria, owner: $owner) {
    results {
      ...AxieBrief
    }
  }
  part19: axies(auctionType: $auctionType, from: 1800, size: 100, sort: PriceAsc, criteria: $criteria, owner: $owner) {
    results {
      ...AxieBrief
    }
  }
  part20: axies(auctionType: $auctionType, from: 1900, size: 100, sort: PriceAsc, criteria: $criteria, owner: $owner) {
    results {
      ...AxieBrief
    }
  }
  part21: axies(auctionType: $auctionType, from: 2000, size: 100, sort: PriceAsc, criteria: $criteria, owner: $owner) {
    results {
      ...AxieBrief
    }
  }
  part22: axies(auctionType: $auctionType, from: 2100, size: 100, sort: PriceAsc, criteria: $criteria, owner: $owner) {
    results {
      ...AxieBrief
    }
  }
  part23: axies(auctionType: $auctionType, from: 2200, size: 100, sort: PriceAsc, criteria: $criteria, owner: $owner) {
    results {
      ...AxieBrief
    }
  }
  part24: axies(auctionType: $auctionType, from: 2300, size: 100, sort: PriceAsc, criteria: $criteria, owner: $owner) {
    results {
      ...AxieBrief
    }
  }
  part25: axies(auctionType: $auctionType, from: 2400, size: 100, sort: PriceAsc, criteria: $criteria, owner: $owner) {
    results {
      ...AxieBrief
    }
  }
  part26: axies(auctionType: $auctionType, from: 2500, size: 100, sort: PriceAsc, criteria: $criteria, owner: $owner) {
    results {
      ...AxieBrief
    }
  }
  part27: axies(auctionType: $auctionType, from: 2600, size: 100, sort: PriceAsc, criteria: $criteria, owner: $owner) {
    results {
      ...AxieBrief
    }
  }
  part28: axies(auctionType: $auctionType, from: 2700, size: 100, sort: PriceAsc, criteria: $criteria, owner: $owner) {
    results {
      ...AxieBrief
    }
  }
  part29: axies(auctionType: $auctionType, from: 2800, size: 100, sort: PriceAsc, criteria: $criteria, owner: $owner) {
    results {
      ...AxieBrief
    }
  }
  part30: axies(auctionType: $auctionType, from: 2900, size: 100, sort: PriceAsc, criteria: $criteria, owner: $owner) {
    results {
      ...AxieBrief
    }
  }
}

fragment AxieBrief on Axie {
  id
  image
  class
  name
  genes
  owner
  bodyShape
  order {
    currentPrice
    currentPriceUsd
  }
}
`

export async function fetchAllAxies(userAddress: string) {
    //const userAddress2 = "0xc45e86d1c3d4192ce2f0fb190de8dfac6f007be3"
    const payload = JSON.stringify({
        operation: "GetAxieBriefList",
        query: axieSchema,
        variables: {
            owner: userAddress,
            sort: "IdAsc",
        },
    })
    try {
        const { data } = await axios.post("api/graphql/graphql", {
            payload: payload,
        })
        var allAxiesArray = await PartArrayMerger([data])
        return allAxiesArray
    } catch (err) {
        console.log(err)
        throw err
    }
}

function PartArrayMerger(Array: any[]) {
    let ObjectToMerge: any
    let ItemDataArray: any[] = []

    ObjectToMerge = Array[0].data

    //for each key in the ObjectToMerge object
    for (let part in ObjectToMerge) {
        if (part !== "total") {
            const set = ObjectToMerge[part].results

            for (let i = 0; i < set.length; i++) {

                var constructAxie = {
                    name: set[i].name,
                    class: set[i].class,
                    id: set[i].id,
                    bodyShape: set[i].bodyShape,
                    parts: set[i].parts,
                    image: set[i].image.replace("assets", "axiecdn"),
                }

                ItemDataArray = [...ItemDataArray, constructAxie]
            }
        }
    }
    return ItemDataArray
}

// /** Run the getAxieBriefList GraphQL operation in order to get a list of the user's axies given by address */
// export async function getAxieBriefList(address: string): Promise<number | any[]> {
//     //address = "0xc45e86d1c3d4192ce2f0fb190de8dfac6f007be3"
//     var data = await fetchAllAxies(address)
//     var allAxiesArray = await PartArrayMerger([data])
//     return allAxiesArray
// }

/*
//OLD GRAPHQL QUERY
`
query GetAxieDetail($axieId: ID!) {
    axie(axieId: $axieId) {
        ...AxieDetail
        __typename
    }
}
fragment AxieDetail on Axie {
    id  
    image  
    class  
    chain  
    name  
    genes 
    owner
    birthDate
    bodyShape  
    class
    sireId
    sireClass 
    matronId  
    matronClass  
    stage  
    title  
    breedCount  
    level  
    figure {   
        atlas  
        model
        image   
        __typename  
    }
    parts {   
        ...AxiePart  
        __typename
    }  
    stats {    
        ...AxieStats  
        __typename
    }  auction {  
        ...AxieAuction    
        __typename  
    }  ownerProfile {    
        name    
        __typename  
    }  battleInfo {    
        ...AxieBattleInfo    
        __typename  
    }  children {    
        id    
        name    
        class    
        image    
        title    
        stage    
        __typename  
    }  
__typename
}
fragment AxieBattleInfo on AxieBattleInfo {
    banned
    banUntil
    level
    __typename
}
fragment AxiePart on AxiePart {
    id
    name
    class
    type
    specialGenes
    stage
    abilities {
        ...AxieCardAbility
        __typename
    }
    __typename
}
fragment AxieCardAbility on AxieCardAbility {
    id
    name
    attack
    defense
    energy
    description
    backgroundUrl
    effectIconUrl
    __typename
}
fragment AxieStats on AxieStats {
    hp
    speed
    skill
    morale
    __typename
}
fragment AxieAuction on Auction {
    startingPrice
    endingPrice
    startingTimestamp
    endingTimestamp
    duration
    timeLeft
    currentPrice
    currentPriceUSD
    suggestedPrice
    seller
    listingIndex
    state
    __typename
}
`

*/
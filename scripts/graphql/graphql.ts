import axios from "axios"

const axieSchema = `
query GetAxieBriefList($auctionType: AuctionType, $criteria: AxieSearchCriteria, $owner: String) {
  part1: axies(auctionType: $auctionType, from: 0, size: 80, sort: PriceAsc, criteria: $criteria, owner: $owner) {
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
  parts {
    type
    id
    name
    class
  }
}
`

export async function fetchAllAxies(userAddress: string) {
    const payload = JSON.stringify({
        operation: "GetAxieBriefList",
        query: axieSchema,
        variables: {
            owner: userAddress,
            sort: "IdAsc"
        },
    })
    try {
        const { data } = await axios.post("api/graphql/graphql", {
            payload: payload,
        })
        return data
    } catch (err) {
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
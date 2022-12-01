export function getV3AxieImage(axieID: string) {
    const newURL = "https://axiecdn.axieinfinity.com/axies/" + axieID + "/axie/axie-full-transparent.png"
    return newURL
}

export function sliceRoninAddress(address: string, numCharacters: number = 3): string {
    const slicedAddress = "ronin:" + address.slice(2, 2 + numCharacters) + "..." +
        address.slice(
            address.length - numCharacters,
            address.length
        )
    return slicedAddress
}

export function getClassColor(axieClass: string) {
    switch (axieClass) {
        case "Aquatic":
            return "#039BE5"
        case "Plant":
            return "#7CB342"
        case "Beast":
            return "#FDD835"
        case "Bird":
            return "#D81B60"
        case "Reptile":
            return "#8E24AA"
        case "Bug":
            return "#E53935"
    }
}
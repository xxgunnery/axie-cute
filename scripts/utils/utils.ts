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
        case "Dawn":
            return "#FFF59D"
        case "Dusk":
            return "#0097A7"
        case "Mech":
            return "#9E9E9E"
        default:
    }
}

export function getLinearGradient(axieClass: string) {
    let color = ""
    if (axieClass === "Aquatic") {
        color = "rgba(7,145,209"
    }
    if (axieClass === "Plant") {
        color = "rgba(72,165,66"
    }
    if (axieClass === "Beast") {
        color = "rgba(253,216,53"
    }
    if (axieClass === "Bird") {
        color = "rgba(191,27,96"
    }
    if (axieClass === "Reptile") {
        color = "rgba(142,36,164"
    }
    if (axieClass === "Bug") {
        color = "rgba(229,57,53"
    }
    if (axieClass === "Dawn") {
        color = "rgba(255,232,107"
    }
    if (axieClass === "Dusk") {
        color = "rgba(3,155,218"
    }
    if (axieClass === "Mech") {
        color = "rgba(158,158,158"
    }

    return `linear-gradient(180deg, ${color}, 0.05), ${color}, 0.1))`
}
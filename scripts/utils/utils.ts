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
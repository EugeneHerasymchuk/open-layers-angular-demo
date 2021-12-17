export interface Gift {
  coordinates: {
    lon: number,
    lat: number
  },
  text: string,
  name: string
}

export interface KidDTO {
  avatar: string,
  gifts: {
    giftname: string
  }[],
  id: string
  kidFirstName: string,
  kidLastName: string,
  location: {
    coordinates: [
      0
    ],
    type: string,
    x: 0,
    y: 0
  },
  visitedBySanta: true
}

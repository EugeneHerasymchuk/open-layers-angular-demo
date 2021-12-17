export interface IGeoData {
    longitude: Number;
    latitude: Number;
}
export interface IPresentData {
    geo: IGeoData;
    wish: String;
    type: String;
}
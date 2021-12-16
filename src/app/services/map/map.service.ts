import { Inject, Injectable } from "@angular/core";
import { View, Map } from 'ol';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import Draw from 'ol/interaction/Draw';
import VectorSource from 'ol/source/Vector';
import { AppConfig, APP_CONFIG } from "src/app/modules/config/config.module";

@Injectable({ providedIn: 'root' })
export class MapService {
  constructor(@Inject(APP_CONFIG) private config: AppConfig) {
  }

  provideMapInstance(tilesetId: string): Map {
    const mapInstance = new Map({
      target: 'map',
      layers: [new TileLayer({
        source: new XYZ({
          url: `https://atlas.microsoft.com/map/tile?subscription-key=${this.config.subscriptionKey
            }&api-version=2.0&tilesetId=${tilesetId
            }&zoom={z}&x={x}&y={y}&tileSize=256&language=en-US&view=Auto`,
          attributions: `© ${new Date().getFullYear()} Architech`
        })
      })],
      view: new View({
        center: [0, 0],
        zoom: 2
      })
    });

    const source = new VectorSource();

    mapInstance.addInteraction(
      new Draw({
        type: 'Polygon',
        source: source,
      })
    )

    return mapInstance


  }
}

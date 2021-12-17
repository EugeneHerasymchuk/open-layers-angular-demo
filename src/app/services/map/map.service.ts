import { Inject, Injectable } from "@angular/core";
import { View, Map, Feature } from 'ol';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import VectorSource from 'ol/source/Vector';
import { AppConfig, APP_CONFIG } from "src/app/modules/config/config.module";
import { Gift } from "src/app/interfaces/gift.interface";
import VectorLayer from "ol/layer/Vector";
import Geometry from "ol/geom/Geometry";
import Point from "ol/geom/Point";
import { fromLonLat } from "ol/proj";
import { Circle, Fill, Icon, Stroke, Style } from "ol/style";

@Injectable({ providedIn: 'root' })
export class MapService {

  giftSource: VectorSource<Geometry>;

  constructor(@Inject(APP_CONFIG) private config: AppConfig) {
  }

  provideMapInstance(tilesetId: string): Map {
    this.giftSource = new VectorSource({
      wrapX: false
    });
    const vector = new VectorLayer({
      source: this.giftSource,
      style: this.getStyleByFeatureType('')
    });

    const mapTileLayer = new TileLayer({
      source: new XYZ({
        url: `https://atlas.microsoft.com/map/tile?subscription-key=${this.config.subscriptionKey
          }&api-version=2.0&tilesetId=${tilesetId
          }&zoom={z}&x={x}&y={y}&tileSize=256&language=en-US&view=Auto`,
        attributions: `© ${new Date().getFullYear()} Architech`
      })
    });

    const mapInstance = new Map({
      target: 'map',
      layers: [mapTileLayer, vector],
      view: new View({
        center: [0, 0],
        zoom: 2
      })
    });


    return mapInstance
  }

  addGiftOnMap(gift: Gift) {
    const geom = new Point(fromLonLat([gift.coordinates.lon, gift.coordinates.lat]));
    const feature = new Feature({
      geometry: geom
    });
    this.giftSource.addFeature(feature);
  }


  applyGiftsToMap(gifts: Gift[]) {
    gifts.forEach((gift => this.addGiftOnMap(gift)))
  }

  getStyleByFeatureType(type: string): Style {
    const styles = {
      'route': new Style({
        stroke: new Stroke({
          width: 6,
          color: [237, 212, 0, 0.8],
        }),
      }),
      'icon': new Style({
        image: new Icon({
          anchor: [0.5, 1],
          src: 'assets/gift.png'
        }),
      }),
      'geoMarker': new Style({
        image: new Circle({
          radius: 7,
          fill: new Fill({ color: 'black' }),
          stroke: new Stroke({
            color: 'white',
            width: 2,
          }),
        }),
      }),
    };

    return styles['icon']
  }
}

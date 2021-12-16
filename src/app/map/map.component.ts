import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { View, Map } from 'ol';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.sass']
})
export class MapComponent implements OnInit {
  @Input() tilesetId: string = 'microsoft.imagery';
  @ViewChild('mapWidget')
  mapWidget!: ElementRef;

  mapInstance!: Map;

  subscriptionKey = 'ImRQfoC5_nPc0SBcsdzKCj_j9-5NqmKmEgAMa8PbnAQ';

  constructor() { }

  ngOnInit(): void {
    this.initMapInstance()
  }

  initMapInstance(): void {
    this.mapInstance = new Map({
      target: 'map',
      layers: [new TileLayer({
        source: new XYZ({
          url: `https://atlas.microsoft.com/map/tile?subscription-key=${this.subscriptionKey
            }&api-version=2.0&tilesetId=${this.tilesetId
            }&zoom={z}&x={x}&y={y}&tileSize=256&language=en-US&view=Auto`,
          attributions: `© ${new Date().getFullYear()} Architech`
        })
      })],
      view: new View({
        center: [0, 0],
        zoom: 2
      })
    });
    this.mapInstance.render()
  }

}

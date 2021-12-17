import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Map, MapEvent } from 'ol';
import { getBottomLeft, getTopRight } from 'ol/extent';
import { toLonLat } from 'ol/proj';
import { Gift } from '../../interfaces/gift.interface';
import { GiftService } from '../../services/gift/gift.service';
import { MapService } from '../../services/map/map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.sass']
})
export class MapComponent implements OnInit {
  @Input() gifts: Gift[] = []
  @Input() tilesetId: string = 'microsoft.imagery';
  @ViewChild('mapWidget')
  mapWidget!: ElementRef;

  mapInstance!: Map;
  constructor(private mapService: MapService, private gift: GiftService) { }

  ngOnInit(): void {
    this.mapInstance = this.mapService.provideMapInstance(this.tilesetId);

    this.mapInstance.on('moveend', (event) => {
      this.fetchGiftsByCoordinates(event)
    })

    // this.mapInstance.on('change:view', () => {
    //   this.fetchGiftsByCoordinates()
    // })
  }

  fetchGiftsByCoordinates(event: MapEvent): void {
    this.gift.getChildrenGifts(this.calculateArea(event)).subscribe((data: Gift[]) => {
      this.mapService.applyGiftsToMap(data);
      console.log(data)
    })
  }


  calculateArea(event: MapEvent): number[] {
    const extent = event.map.getView().calculateExtent(event.map.getSize());
    const bottomLeft = toLonLat(getBottomLeft(extent));
    const topRight = toLonLat(getTopRight(extent));
    return [this.wrapLon(bottomLeft[0]), bottomLeft[1], this.wrapLon(topRight[0]), topRight[1]];
  }

  wrapLon(value: number): number {
    const worlds = Math.floor((value + 180) / 360);
    return value - worlds * 360;
  }
}

import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Map } from 'ol';
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
    this.mapService.applyGiftsToMap(this.gifts);
  }

  fetchGifts(): void {
  }
}

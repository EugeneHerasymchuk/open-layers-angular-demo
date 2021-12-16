import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { View, Map } from 'ol';
import { MapService } from '../services/map/map.service';

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
  constructor(private mapService: MapService) { }

  ngOnInit(): void {
    this.mapInstance = this.mapService.provideMapInstance(this.tilesetId);
  }
}

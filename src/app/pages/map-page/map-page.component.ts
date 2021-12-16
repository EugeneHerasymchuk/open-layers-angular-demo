import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Gift } from 'src/app/interfaces/gift.interface';
import { GiftService } from 'src/app/services/gift/gift.service';

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.sass']
})
export class MapPageComponent implements OnInit {
  gifts$: Observable<Gift[]>;

  constructor(private giftService: GiftService) {
    this.gifts$ = this.giftService.getChildrenGifts();
  }

  ngOnInit(): void {
  }

}

import { Inject, Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Gift } from "src/app/interfaces/gift.interface";
import { APP_CONFIG, AppConfig } from "src/app/modules/config/config.module";

@Injectable({
  providedIn: 'root'
})
export class GiftService {
  constructor(@Inject(APP_CONFIG) private config: AppConfig) {

  }

  getChildrenGifts(): Observable<Gift[]> {
    return of([
      {
        coordinates: {
          lon: 24.2534,
          lat: 52.554
        },
        text: 'text',
        name: '353'
      },
      {
        coordinates: {
          lon: 34.2534,
          lat: 52.554
        },
        text: 'text',
        name: '353'
      }
    ] as Gift[])
  }
}

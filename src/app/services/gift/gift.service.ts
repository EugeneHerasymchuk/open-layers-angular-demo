import { Inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { Gift } from "src/app/interfaces/gift.interface";
import { APP_CONFIG, AppConfig } from "src/app/modules/config/config.module";
import { View } from "ol";

@Injectable({
  providedIn: 'root'
})
export class GiftService {
  constructor(@Inject(APP_CONFIG) private config: AppConfig, private http: HttpClient) {

  }

  getChildrenGifts(coordinatesArea: number[]): Observable<Gift[]> {
    console.log(coordinatesArea)
    // return this.http.get(this.config.api) as Observable<KidsDTO[]>
    return of(Array(10).fill(null).map(() => {
      const payload = {
        coordinates: {
          lon: this.randomBetween(coordinatesArea[0], coordinatesArea[2]), // between left and right sides
          lat: this.randomBetween(coordinatesArea[1], coordinatesArea[3]) // between bottom and top sides
        },
        text: 'string',
        name: 'string'
      }
      return payload as Gift

    }) as Gift[])
  }

  randomBetween(lowest: number, highest: number): number {
    return (Math.random()) * (highest - lowest) + lowest
  }
}

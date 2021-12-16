import { Injectable } from '@angular/core';
import { IPresentData } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor() { }

  requestPresent(presentData: IPresentData): void {
    console.log(presentData)
  }
}

import { Injectable } from '@angular/core';
import {Shope} from './shope'
import {shopeMock} from './shopeMock';
import { Observable } from 'rxjs';
import {of} from 'rxjs/observable/of';

@Injectable({
  providedIn: 'root'
})
export class ShopeService {

  constructor() { }

  getShope():Observable<Shope[]>{
    console.log(shopeMock)
    return of(shopeMock)
  }
}

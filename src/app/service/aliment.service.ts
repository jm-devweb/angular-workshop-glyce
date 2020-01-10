import { Injectable } from '@angular/core';
import {Aliment} from '../interface/aliment';
import { aliments } from '../../assets/aliments';

@Injectable({
  providedIn: 'root'
})

export class AlimentService {
  aliments: Aliment[] ;

  constructor(
  ) {
    this.aliments = aliments;
  }

  getItems() {
    return this.aliments;
  }

  addToItems(aliment) {
    this.aliments.push(aliment) ;
  }

  deleteItems(aliment) {
    this.aliments = this.aliments.filter(item => item !== aliment) ;
  }

}

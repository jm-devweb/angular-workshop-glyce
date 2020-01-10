import { Injectable } from '@angular/core';
import { Portion } from '../interface/portion';

@Injectable({
  providedIn: 'root'
})

export class PortionService {
  portions: Portion[] = [] ;

  constructor(){
  }

  getItems() {
    return this.portions;
  }

  addToItems(portion) {
    this.portions.push(portion);
    console.log(JSON.stringify(portion)) ;
  }

  deleteItems(portion) {
    this.portions = this.portions.filter(item => item !== portion) ;
  }

}

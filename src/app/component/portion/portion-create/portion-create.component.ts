import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Aliment} from '../../../interface/aliment';
import { PortionCreate} from '../../../interface/portion-create';
import { AlimentService } from '../../../service/aliment.service';
import { PortionService} from '../../../service/portion.service';
import {Portion} from '../../../interface/portion';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-portion-create',
  templateUrl: './portion-create.component.html',
  styleUrls: ['./portion-create.component.css']
})
export class PortionCreateComponent implements OnInit {
  @Input() product;
  @Output() notify = new EventEmitter();

  aliments : Aliment[] = [] ;

  public portionForm: FormGroup;

  constructor(
    private alimentService: AlimentService,
    private portionService: PortionService,
  ) {
    this.aliments = this.alimentService.getItems() ;
  }

  ngOnInit() {
    this.portionForm = new FormGroup({
      idx: new FormControl('', [Validators.required]),
      portion: new FormControl('', [Validators.required, Validators.max(10), Validators.min(1)]),
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.portionForm.controls[controlName].hasError(errorName);
  }

  public createPortion = (portionFormValue) => {
    if (this.portionForm.valid) {
      this.executePortionCreation(portionFormValue);
    }
  }

  private executePortionCreation = (portionFormValue) => {
    let portionCreate : PortionCreate = {
      idx: portionFormValue.idx,
      portion: portionFormValue.portion,
    }

    let portion : Portion = {
      name : this.aliments[portionCreate.idx].name ,
      ig : this.aliments[portionCreate.idx].ig ,
      proportion : portionCreate.portion ,
      charge : ((this.aliments[portionCreate.idx].ig *this.aliments[portionCreate.idx].carbs)/100)*portionCreate.portion/100 ,
    }
    this.portionService.addToItems(portion);
    this.notify.emit() ;
    this.portionForm.reset();
  }
}

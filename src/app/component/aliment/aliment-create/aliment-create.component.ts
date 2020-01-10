import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Aliment} from '../../../interface/aliment';
import { AlimentService } from '../../../service/aliment.service';

@Component({
  selector: 'app-aliment-create',
  templateUrl: './aliment-create.component.html',
  styleUrls: ['./aliment-create.component.css']
})
export class AlimentCreateComponent implements OnInit {

  public alimentForm: FormGroup;

  constructor(private location: Location, private alimentService: AlimentService,
  ) { }

  ngOnInit() {
    this.alimentForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      ig: new FormControl('', [Validators.required, Validators.max(10), Validators.min(1)]),
      carbs: new FormControl('', [Validators.required, Validators.max(10), Validators.min(1)]),
  });

  }

  public hasError = (controlName: string, errorName: string) => {
    return this.alimentForm.controls[controlName].hasError(errorName);
  }

  public onCancel = () => {
    this.location.back();
  }

  public createAliment = (alimentFormValue) => {
    if (this.alimentForm.valid) {
      this.executeAlimentCreation(alimentFormValue);
      this.location.back();
    }
  }

  private executeAlimentCreation = (alimentFormValue) => {
    let aliment: Aliment = {
      name: alimentFormValue.name,
      ig: alimentFormValue.ig,
      carbs: alimentFormValue.carbs,
    }
    this.alimentService.addToItems(aliment);
  }

}

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatNativeDateModule} from '@angular/material/core';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';

import { AlimentListComponent } from './component/aliment/aliment-list/aliment-list.component';
import {MaterialModule} from './material/material-module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import { AlimentCreateComponent } from './component/aliment/aliment-create/aliment-create.component';
import { PortionCreateComponent } from './component/portion/portion-create/portion-create.component';
import { PortionListComponent } from './component/portion/portion-list/portion-list.component';


@NgModule({
  declarations: [
    AppComponent,
    AlimentListComponent,
    AlimentCreateComponent,
    PortionCreateComponent,
    PortionListComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatTabsModule,
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



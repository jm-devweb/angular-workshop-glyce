import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AlimentListComponent} from './component/aliment/aliment-list/aliment-list.component';
import {PortionListComponent} from './component/portion/portion-list/portion-list.component';
import {AlimentCreateComponent} from './component/aliment/aliment-create/aliment-create.component';

const routes: Routes = [
  { path: 'aliment-list', component: AlimentListComponent },
  { path: 'portion-list', component: PortionListComponent },
  { path: 'create', component: AlimentCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

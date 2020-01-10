import { FormBuilder } from '@angular/forms';
import { PortionService } from '../../../service/portion.service';
import {Component, OnInit, ViewChild} from '@angular/core';
import {Portion} from '../../../interface/portion';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-portion-list',
  templateUrl: './portion-list.component.html',
  styleUrls: ['./portion-list.component.css']
})

export class PortionListComponent implements OnInit {
  totalCharge  = 0 ;
  displayedColumns: string[] = [ 'name', 'ig', 'proportion', 'charge', 'supprimer'];
  dataSource: MatTableDataSource<Portion>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private portionService: PortionService,
  ) {
    this.dataSource = new MatTableDataSource(this.portionService.getItems());
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  delete(thisPortion) {
    this.portionService.deleteItems(thisPortion);
    this.dataSource.data = this.portionService.getItems();
  }

  onNotify() {
    this.dataSource.data = this.portionService.getItems();
  }
}

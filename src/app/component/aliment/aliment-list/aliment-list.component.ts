import { FormBuilder } from '@angular/forms';
import { AlimentService } from '../../../service/aliment.service';
import {Component, OnInit, ViewChild} from '@angular/core';
import {Aliment} from '../../../interface/aliment';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-aliment-list',
  templateUrl: './aliment-list.component.html',
  styleUrls: ['./aliment-list.component.css']
})

export class AlimentListComponent implements OnInit {
  displayedColumns: string[] = [ 'name', 'ig', 'carbs', 'supprimer'];
  dataSource: MatTableDataSource<Aliment>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private dataService: AlimentService,
    private formBuilder: FormBuilder,
  ) {
    this.dataSource = new MatTableDataSource(this.dataService.getItems());
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  delete(thisAliment) {
    this.dataService.deleteItems(thisAliment);
    this.dataSource.data = this.dataService.getItems();
  }
}

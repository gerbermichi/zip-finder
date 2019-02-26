import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {Zip, ZIP_DATA} from './zip.data';

@Component({
  selector: 'zip-table',
  templateUrl: './zip-table.component.html',
  styleUrls: ['./zip-table.component.css']
})
export class ZipTableComponent implements OnInit {

  dataSource: MatTableDataSource<Zip>;
  displayedColumns = ['zip', 'town'];

  constructor() {
    this.dataSource = new MatTableDataSource(ZIP_DATA);
  }

  ngOnInit() {
  }

  applyFilter(filter: string): void {
    this.dataSource.filter = filter.trim().toLowerCase();
  }

}

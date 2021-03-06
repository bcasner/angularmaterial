import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Note } from '../../models/note';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  @Input() notes: Note[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns = ['position', 'title', 'date'];
  dataSource: MatTableDataSource<Note>;

  constructor() { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Note>(this.notes);
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();         // remove whitespace
    filterValue = filterValue.toLowerCase();  // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MyWorker } from 'src/app/shared/worker.model';
import { worker } from 'cluster';

@Component({
  selector: 'app-table-workers',
  templateUrl: './table-workers.component.html',
  styleUrls: ['./table-workers.component.css']
})
export class TableWorkersComponent implements OnInit {

  @Input() title: string;

  @Input() workers: MyWorker[] = [];

  @Output() deleteWorker = new EventEmitter<number>();
  @Output() changeWorker = new EventEmitter();


  flag: boolean = false;
  selectedWorker: number;
  name:string
  surname: string;
  isClicked: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteWorker( id : number){
    this.deleteWorker.emit(id)
  }

  onChangeWorker( id: number){
    this.name = this.workers[this.workers.findIndex((worker) => worker.id === id)].name 
    this.surname = this.workers[this.workers.findIndex((worker)=> worker.id === id)].surname
    this.isClicked = true
    this.selectedWorker = id

  }

  ApplyChanges(id: number){
    this.isClicked = false;

    this.changeWorker.emit({id: id, name: this.name, surname: this.surname })
    console.log(this.name)
    console.log(this.surname)
    this.selectedWorker = undefined;
    this.name = undefined;
    this.surname = undefined;
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MyWorker } from 'src/app/shared/worker.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';


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
  telephone: string;
  isClicked: boolean = false;

  changeWorkerForm: FormGroup

  constructor() { }

  ngOnInit(): void {

    this.changeWorkerForm = new FormGroup({
      name: new FormControl({ value: '', disabled: false}, [Validators.required]),
      surname: new FormControl({ value:"", disabled: false}, [Validators.required]),
      telephone: new FormControl({ value:"", disabled: false}, [Validators.required])
    })
  }

  onDeleteWorker( id : number){
    this.deleteWorker.emit(id)
    this.selectedWorker = undefined;
  }

  onChangeWorker( id: number){
    this.name = this.workers[this.workers.findIndex((worker) => worker.id === id)].name;
    this.surname = this.workers[this.workers.findIndex((worker)=> worker.id === id)].surname;
    this.telephone = this.workers[this.workers.findIndex((worker)=> worker.id ===id)].telephone;
    this.isClicked = true
    this.selectedWorker = id

    this.changeWorkerForm.value.name = this.workers[this.workers.findIndex((worker) => worker.id === id)].name;
    this.changeWorkerForm.value.surname = this.workers[this.workers.findIndex((worker)=> worker.id === id)].surname;
    this.changeWorkerForm.value.telephone = this.workers[this.workers.findIndex((worker)=> worker.id ===id)].telephone;
    
  }

  ApplyChanges(id: number){
    this.isClicked = false;

    let worker =  this.changeWorkerForm.value

    this.changeWorker.emit({id: id, name: worker.name, surname: worker.surname, telephone: worker.telephone })
   
    this.selectedWorker = undefined;
    this.name = undefined;
    this.surname = undefined;
    this.telephone = undefined;
    this.changeWorkerForm.reset()
  }
}

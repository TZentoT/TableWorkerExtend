import { Component } from '@angular/core';
import { MyWorker, MyWorkerDatabase, MyWorkerType } from './shared/worker.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Список сотрудников';

  workers: MyWorker[] = MyWorkerDatabase;
  myWorkersType = MyWorkerType;

  getByType(type: number){
    return this.workers.filter(worker => worker.type === type)
  }

  onDeleteWorker(id: number){
    let index = this.workers.findIndex((worker) => worker.id === id )
    if(index !== -1){
       this.workers.splice(index,1)
    }
  } 

   onAddWorker(worker: MyWorker){
     let id = this.workers.length >0 ? this.workers[this.workers.length-1].id + 1 : 0;
     worker.id = id;
     this.workers.push(worker)
   }

   onChangeWorker(worker){
    for( let item of this.workers){
      if (item.id === worker.id) {
        if (worker.name != undefined && worker.name != "") item.name = worker.name;
        if (worker.surname != undefined && worker.surname != "") item.surname = worker.surname;
      }
    }
   }
}

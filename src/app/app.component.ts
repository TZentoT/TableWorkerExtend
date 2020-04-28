import { Component, OnInit } from '@angular/core';
import { MyWorker, MyWorkerDatabase, MyWorkerType } from './shared/worker.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Список сотрудников';

  workers: MyWorker[] = MyWorkerDatabase;
  myWorkersType = MyWorkerType;

  hideProgrammers: boolean = false;
  hideDesigners: boolean = false;
  hideCopywriters: boolean = false;
  hideManagers: boolean = false;

  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};

  ngOnInit(): void {
    this.dropdownList = [
      { "id": this.myWorkersType.programmer, "itemName": "Программист" },
      { "id": this.myWorkersType.designer, "itemName": "Дизайнер" },
      { "id": this.myWorkersType.copywriter, "itemName": "Рекламщик" },
      { "id": this.myWorkersType.manager, "itemName": "Менеджер" }
  ];

  this.selectedItems = [
      { "id": this.myWorkersType.programmer, "itemName": "Программист" },
      { "id": this.myWorkersType.designer, "itemName": "Дизайнер" },
      { "id": this.myWorkersType.copywriter, "itemName": "Рекламщик" },
      { "id": this.myWorkersType.manager, "itemName": "Менеджер" }];

    this.dropdownSettings = { 
      singleSelection: false, 
      text:"Выберите сферу",
      selectAllText:'Выбрать все',
      unSelectAllText:'Скрыть все',
      // enableSearchFilter: true,
      // classes:"myclass custom-class"
    };         
  }

  onItemSelect(item:any){
    console.log(item);
    console.log(this.selectedItems);
    if (item.id == 0) this.hideProgrammers = false;
    if (item.id == 1) this.hideDesigners = false;
    if (item.id == 2) this.hideCopywriters = false;
    if (item.id == 3) this.hideManagers = false;
  }
  OnItemDeSelect(item:any){
      console.log(item);
      console.log(this.selectedItems);

      if (item.id == 0) this.hideProgrammers = true;
      if (item.id == 1) this.hideDesigners = true;
      if (item.id == 2) this.hideCopywriters = true;
      if (item.id == 3) this.hideManagers = true;

  }
  onSelectAll(items: any){
      console.log(items);
      this.hideProgrammers = false;
      this.hideDesigners = false;
      this.hideCopywriters = false;
      this.hideManagers = false;
  }
  onDeSelectAll(items: any){
      console.log(items);
      this.hideProgrammers = true;
      this.hideDesigners = true;
      this.hideCopywriters = true;
      this.hideManagers = true;
  }

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
         item.name = worker.name;
         item.surname = worker.surname;
         item.telephone = worker.telephone;
      }
    }
   }
}

export interface MyWorker  {
    name: string;
    surname: string
    type: number;
    telephone: string;
    id?: number; 
}

export enum MyWorkerType {
    programmer,
    designer,
    copywriter,
    manager
}

export let MyWorkerDatabase: MyWorker[] = [
    {id: 1, name: 'Иван', surname: 'Иванов', type: 0, telephone: "+7(902) 481-8585"},
    {id: 2, name: 'Петр', surname: 'Петров', type: 1, telephone: "+7(956) 404-7561"},
    {id: 3, name: 'Сидр', surname: 'Сидоров', type: 2, telephone: "+7(999) 536-1245"},
    {id: 4, name: 'Василий', surname: 'Васильев', type: 3, telephone: "+7(943) 487-4545"},
]

import { Component } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {

  myTask : any
  taskFound : any

  constructor (private listServ : TaskService) {}

  getPositions($event: number) {
    this.myTask = this.listServ.getOneTask($event)
    this.taskFound = this.myTask
  }

  editTask() {
    this.listServ.editTask(this.taskFound)
  }
}

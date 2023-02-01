import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/models/tasks';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css']
})
export class ListTasksComponent implements OnInit {

  @Output() sendPosition = new EventEmitter

  myTasks : Task[] | undefined;

  constructor(private listServ: TaskService) {}

  ngOnInit(): void {
    this.myTasks = this.listServ.getTasks()
    console.log('Estas son mis tareas: ', this.myTasks)
  }
  
  deleteTask(_id: number) {
    this.listServ.deleteTask(_id)
  }

  getPositions(_id: number) {
    this.sendPosition.emit(_id)
    // console.log("Mis tareas:",this.myTasks)
  }

}

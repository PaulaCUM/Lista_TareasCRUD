import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service'

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent {
  
  myId = 4;

  newTask = {
    id: this.myId,
    title: '',
    description: ''
  }

  constructor(private listServ: TaskService) {}

  addTask(){
    // console.log("Pronto enviaremos la nueva tarea: ", this.newTask)
    this.listServ.addTask(this.newTask)
    // Incrementar el id
    this.myId++;
    // Reiniciar el objeto "Nueva variable"
    this.newTask = {
      id: this.myId, // id: 0
      title: '',
      description: ''
    }
  }

}

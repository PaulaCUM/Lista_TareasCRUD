import { Injectable } from '@angular/core';
import { Task } from '../models/tasks';

const TasksList = [
  {
    'id' : 1,
    'title' : 'Hacer tarea',
    'description' : 'La tarea es extensa pero fructífera'
  },
  {
    'id' : 2,
    'title' : 'Hacer ejercicio',
    'description' : 'Hoy la rutina es de tren superior'
  },
  {
    'id' : 3,
    'title' : 'Comprar café',
    'description' : 'El café del desayuno se acabó esta mañana'
  }
]

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  // Obtener todas las tareas
  getTasks() {
    return TasksList;
  }

  // Obtener una tarea en especifico
  getOneTask (_id: number) {
    return TasksList.find(task => task.id === _id)
  }

  // Agregar una tarea
  addTask(task : Task){
    TasksList.push(task);
  }

  // Funcion para boton Edit
  editTask(newTaskEdit: { id: number; title: string; description: string; }) {
    const index = TasksList.findIndex(task => task.id === newTaskEdit.id)

    TasksList[index] = newTaskEdit;
  }

  // Funcion para borrar tareas
  deleteTask(_id: number){
    TasksList.splice(_id, 1)
  }
}

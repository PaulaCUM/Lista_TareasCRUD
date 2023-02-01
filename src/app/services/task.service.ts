import { Injectable } from '@angular/core';
import { Task } from '../models/tasks';

const TasksList = [
  {
    'id' : 1,
    'title' : 'Ir a la lavandería',
    'description' : 'Llevar camisa y pantalon'
  },
  {
    'id' : 2,
    'title' : 'Hacer ejercicio',
    'description' : 'Asistir al GYM para entrenar en la tarde'
  },
  {
    'id' : 3,
    'title' : 'Lista de compras',
    'description' : 'Comprar leche, café, huevos y pan'
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

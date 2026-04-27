import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  newTask: Task = { title: '', description: '', status: 'Pendente' };

  constructor(private taskService: TaskService) {}

  addTask(): void {
    this.taskService.addTask(this.newTask).subscribe(() => {
      this.newTask = { title: '', description: '', status: 'Pendente' };
    });
  }
}

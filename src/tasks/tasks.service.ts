import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './task-status.enum';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';

@Injectable()
export class TasksService {
  // getAllTasksFilter(getTasksFilterDto: GetTasksFilterDto): Task[] {
  //   const { search, status } = getTasksFilterDto;
  //   let newTasks = this.getAllTasks();
  //   if (status) {
  //     newTasks = newTasks.filter((task) => task.status === status);
  //   }
  //   if (search) {
  //     newTasks = newTasks.filter((task) => {
  //       return task.title.includes(search) || task.description.includes(search);
  //     });
  //   }
  //   return newTasks;
  // }
  // updateTask(updateTaskDto: UpdateTaskDto, id: string): Task {
  //   const { title, description, status } = updateTaskDto;
  //   const task = this.getTaskById(id);
  //   task.description = description || task.description;
  //   task.title = title || task.title;
  //   task.status = status || task.status;
  //   return task;
  // }
  // deleteTask(id: string): void {
  //   const foundTask = this.getTaskById(id);
  //   this.tasks = this.tasks.filter((task) => task.id !== foundTask.id);
  // }
  // getTaskById(id: string): Task {
  //   const foundTask = this.tasks.find((task) => task.id === id);
  //   if (!foundTask) {
  //     throw new NotFoundException(`Task with id ${id} is not found`);
  //   }
  //   return foundTask;
  // }
  // getAllTasks(): Task[] {
  //   return this.tasks;
  // }
  // createTask(createTaskDto: CreateTaskDto): Task {
  //   const { description, title } = createTaskDto;
  //   const newTask: Task = {
  //     id: uuid(),
  //     description,
  //     title,
  //     status: TaskStatus.OPEN,
  //   };
  //   this.tasks.push(newTask);
  //   return newTask;
  // }
}

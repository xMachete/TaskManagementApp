import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { TaskStatus } from './task-status.enum';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TaskRepository } from './task.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private tasksRepository: TaskRepository,
  ) {}
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
  //** */
  // async updateTask(updateTaskDto: UpdateTaskDto, id: string): Promise<Task> {
  //   const { title, description, status } = updateTaskDto;

  //   const newTask = this.tasksRepository.update(id, {
  //     title,
  //     description,
  //     status,
  //   });
  //   await this.tasksRepository.save(newTask);

  //   const task = this.getTaskById(id);

  //   return task;
  // }
  // deleteTask(id: string): void {
  //   const foundTask = this.getTaskById(id);
  //   this.tasks = this.tasks.filter((task) => task.id !== foundTask.id);
  // }

  async getTaskById(id: string): Promise<Task> {
    const found = await this.tasksRepository.findOne({ where: { id } });

    if (!found) {
      throw new NotFoundException(`Task with id ${id} is not found`);
    }

    return found;
  }

  getAllTasks(): Promise<Task[]> {
    return this.tasksRepository.find();
  }

  createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksRepository.createTask(createTaskDto);
  }
}

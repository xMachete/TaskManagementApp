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

  async getTaskById(id: string): Promise<Task> {
    const found = await this.tasksRepository.findOne({ where: { id } });

    if (!found) {
      throw new NotFoundException(`Task with id ${id} is not found`);
    }

    return found;
  }

  // getAllTasks(): Task[] {
  //   return this.tasks;
  // }

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    const { description, title } = createTaskDto;

    const newTask = {
      description,
      title,
      status: TaskStatus.OPEN,
    };

    const task = this.tasksRepository.create({
      description,
      title,
      status: TaskStatus.OPEN,
    });

    await this.tasksRepository.save(task);

    return task;
  }
}

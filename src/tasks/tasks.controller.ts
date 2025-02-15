import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { Task } from './task.entity';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  // @Get()
  // getAllTasks(@Query() getTasksFilterDto: GetTasksFilterDto): Task[] {
  //   if (Object.keys(getTasksFilterDto).length) {
  //     return this.taskService.getAllTasksFilter(getTasksFilterDto);
  //   }
  //   return this.taskService.getAllTasks();
  // }

  @Get()
  getAllTasks(): Promise<Task[]> {
    return this.taskService.getAllTasks();
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return this.taskService.createTask(createTaskDto);
  }

  @Get('/:id')
  getTaskById(@Param('id') id: string): Promise<Task> {
    return this.taskService.getTaskById(id);
  }

  // @Delete('/:id')
  // deleteTask(@Param('id') id: string): void {
  //   this.taskService.deleteTask(id);
  // }
  //** */
  // @Patch('/:id')
  // updateTask(
  //   @Body() updateTaskDto: UpdateTaskDto,
  //   @Param('id') id: string,
  // ): Promise<Task> {
  //   return this.taskService.updateTask(updateTaskDto, id);
  // }
}

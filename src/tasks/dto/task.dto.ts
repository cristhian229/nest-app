import { IsIn, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator"
import { TaskStatus } from "../task.entity"

export class CreateTaskDto{
    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    title: string
    description: string
}

export class UpdateTaskDto {
  @IsString()
  @IsOptional()
  title?: string;
  description?: string;
  @IsIn([TaskStatus.DONE, TaskStatus.IN_PROGRESS, TaskStatus.PENDING])
  status?: TaskStatus;
}
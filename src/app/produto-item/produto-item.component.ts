import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from '../tasks/shared/task.service';
import {Task} from '../../app/tasks/shared/task';
@Component({
  selector: 'app-produto-item',
  templateUrl: './produto-item.component.html',
  styleUrls: ['./produto-item.component.css']
})
export class ProdutoItemComponent implements OnInit {
  @Input()
  task!: Task;
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }
  changeProduto(task: Task){
    this.taskService.save(task);
  }
  remover(task: Task){
      this.taskService.delete(task.id);
  }
}

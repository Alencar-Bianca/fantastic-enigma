import { TaskService } from './../tasks/shared/task.service';
import{Task} from '../../app/tasks/shared/task';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
produto: Task[] =[];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {

    this.produto = this.taskService.getAll();
  }

}

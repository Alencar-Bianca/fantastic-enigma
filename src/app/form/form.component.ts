import { Component, OnInit } from '@angular/core';
import { TaskService } from '../tasks/shared/task.service';
import{Task} from '../tasks/shared/task'
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
task: Task = new Task();
title: string = 'Nova Tarefa';
  constructor(private taskService: TaskService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id){
        this.task = this.taskService.getId(parseInt(id))!
        this.title = 'Alterando Tarefa'

    }
  }
  onSubmit(){
    this.taskService.save(this.task);
    this.router.navigate(['/products'])
  }
}

import { Injectable } from '@angular/core';
import{Task} from './task'
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  pordutos: Task[] = [
    {id: 1, nome: 'PS5', preco: 54}
  ]
  constructor() { }

  getAll(){
    this.pordutos = JSON.parse(localStorage.getItem('pordutos')|| '{}')
    return this.pordutos
  }

  getId(id: number){
    const prod = this.pordutos.find((pi) => pi.id == id)
    return prod
  }

    save(produto: Task){
      if(produto.id){
        const pArr = this.getId(produto.id)
        pArr!.nome = produto.nome
        pArr!.preco = produto.preco
      }else{
        let lastId = 1
        if(this.pordutos.length > 0){
          lastId = this.pordutos[this.pordutos.length - 1].id
        }
        produto.id = lastId  + 1
        this.pordutos.push(produto)
      }
      const data = JSON.stringify(this.pordutos)
      localStorage.setItem('pordutos',data)
  }

  delete(id:number){
    const taskIndex = this.pordutos.findIndex((pi) => pi.id == id)
    this.pordutos.splice(taskIndex,1)
    const data = JSON.stringify(this.pordutos);
    localStorage.setItem('pordutos',data)
  }

}

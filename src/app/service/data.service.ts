import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  
  signup(first_name:any,last_name:any,email:any,username:any,password:any){

    let data={
      first_name,
      last_name,
      email,
      username,
      password
    }

  return fetch('http://127.0.0.1:8000/user/', {
  method: 'POST',
  body: JSON.stringify(data),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})

  }
  signin(username:any,password:any){
    let data={
      username,
      password
    }
    return fetch('http://127.0.0.1:8000/token', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    
  }
  getProduct(){
    return fetch('http://127.0.0.1:8000/todo/', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization':`Token ${localStorage.getItem('token')}`
      },
    })
  }
  addProduct(title:any,description:any,date:any){
    let data={
      title,
      description,
      date,
    }
    return fetch('http://127.0.0.1:8000/todo/', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization':`Token ${localStorage.getItem('token')}`
      },
    })
  }
  deleteProduct(id:any){
    return fetch(`http://127.0.0.1:8000/todo/${id}/`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization':`Token ${localStorage.getItem('token')}`
      },
    })
  }


}

import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  file:any;
  constructor(private fb:FormBuilder,private ds:DataService,private r:Router){}

  proForm=this.fb.group({
    title:['',[Validators.required]],
    description:['',[Validators.required]],
    date:['',[Validators.required]],
  })

  submitted(){
    let title=this.proForm.controls.title.value
    let date=this.proForm.controls.date.value
    let desc=this.proForm.controls.description.value
    console.log(title,date,desc)

    this.ds.addProduct(title,desc,date).then(res=>res.json()).then(res=>{
      if(res){
        alert("Product added Successfully!!")
        this.r.navigate(['home'])
      }
      else{
        alert("Something Wrong")
      }
    })

  }

}
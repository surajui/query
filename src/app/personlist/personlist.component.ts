import { PersonService } from './../shared/person.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-personlist',
  templateUrl: './personlist.component.html',
  styleUrls: ['./personlist.component.css']
})
export class PersonlistComponent implements OnInit {
  result:any;
  information;
  @Output() information1=new EventEmitter();

  constructor(private service:PersonService) { }

  ngOnInit() {
    this.fetch();
  }
  
  details;
fetch(){
  this.service.getData().subscribe((resp:any)=>{
    console.log(JSON.stringify(resp))   
    this.result=resp;
  })
}

info(e){
this.information=e;
this.information1.emit(this.information)
console.log(this.information)
}
}

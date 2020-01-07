import { PersonService } from './../shared/person.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {

  constructor(private service:PersonService,private route:ActivatedRoute) { }
  result;
  id;
  ngOnInit() {
   
    this.service.getData().subscribe(Resp=>{
      this.result=Resp
      console.log(this.result);
    })
  }
  passData(s){
  }
}

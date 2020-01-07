import { PersonService } from './../shared/person.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private service: PersonService, private route: ActivatedRoute) { }
  id;
  result;
  fullname
  ngOnInit() {
    this.route.queryParams.subscribe((query: any) => {
      this.id = query.id;
      this.fullname = query.fullname
    })
    console.log("llllllll" + this.id)
    this.service.getData1(this.id).subscribe(data => {
      this.result = data;
      console.log(this.result);
    })
  }
}

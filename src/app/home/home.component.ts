import { Component, OnInit } from '@angular/core';
import { KeyserviceService } from '../keyservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private keyservice: KeyserviceService) { 
    this.keyservice.getNews().subscribe((data)=>{
      console.log(data)
    })
  }
  
  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { OmdbService } from 'src/app/omdb.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private omdb : OmdbService) { }

  ngOnInit(): void {
   
    this.omdb.getId("tt1695366")
  }

  get movies(){
    return this.omdb.movies
  }


  

}

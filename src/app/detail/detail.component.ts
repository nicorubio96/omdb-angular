import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OmdbService } from '../omdb.service';
import { Film } from '../interface/film.interface';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  constructor(private activated: ActivatedRoute, private omdb: OmdbService) {}

  ngOnInit(): void {
    this.activated.params.subscribe(({ id }) => {
      console.log(id);
      this.omdb.getId(id)

});
  }

  get films (){
    return this.omdb.film
  }
  



}

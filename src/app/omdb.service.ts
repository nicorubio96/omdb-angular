import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Omdb, Search } from './interface/omdb.interface';

@Injectable({
  providedIn: 'root',
})
export class OmdbService {
  private url: string = 'http://www.omdbapi.com/?apikey=94249fbc&';
  private urlId: string = 'http://www.omdbapi.com/?apikey=94249fbc&';
 
  public _historial: string[] = [];
  public movies: Search[] = [];
  public film : any={}
  constructor(private omdb: HttpClient) {
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
  }
  

  get historial() {
    return [...this._historial];
  }

  get films(){
    return [...this.film]
  }

  getTitle(title: string) {
    title = title.trim().toLocaleLowerCase();

    if (!this._historial.includes(title)) {
      this._historial.unshift(title);
      this._historial = this._historial.splice(0, 10);
    }
    localStorage.setItem('historial', JSON.stringify(this._historial));

    console.log(this._historial);
    this.omdb.get<Omdb>(this.url + `&s=${title}`).subscribe((respuesta) => {
      this.movies = respuesta.Search;
    });
    console.log(this.movies);
  }

  getId(id:string){
    this.omdb.get<any>(this.url +`i=${id}`) 
 
    .subscribe(res=>{
     let  filmDetail = JSON.parse(JSON.stringify(res))
     this.film  = filmDetail
     console.log( "pelicula : " ,this.film)
    })

}
}

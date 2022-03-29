import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Search } from 'src/app/interface/omdb.interface';
import { OmdbService } from 'src/app/omdb.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  @ViewChild('caja') caja!: ElementRef<HTMLInputElement>;

  constructor(private omdb: OmdbService) {}

  ngOnInit(): void {}

  get resultados() {
    return this.omdb._historial;
  }

  buscar() {
    const value = this.caja.nativeElement.value;

    this.omdb.getTitle(value);

    this.caja.nativeElement.value = '';
  }

  busqueda(item:any){

    this.omdb.getTitle(item);
  }

  delete(){
     localStorage.removeItem('historial')
    

  }
}

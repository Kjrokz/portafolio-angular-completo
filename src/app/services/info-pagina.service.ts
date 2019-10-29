import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
// tslint:disable-next-line:import-spacing
import { InfoPagina } from  '../Interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {


  info: InfoPagina = {};
  cargada = false;

  equipo: any[] =[];

  constructor( private http: HttpClient) { 

   // console.log('Hola mundo');

    //Leer el archivo json

    this.cargarInfo();
    this.cargarEquipo();

 
  }

  private cargarInfo() {

    this.http.get('assets/data/data-pagina.json').subscribe( (resp: InfoPagina) =>{

      this.cargada = true;
      this.info = resp; 

      //console.log(resp);

  });

  }

  private cargarEquipo() { 

    this.http.get('https://angular-html-d6275.firebaseio.com/equipo.json').subscribe( (resp: any[]) =>{

      this.equipo = resp;
      //this.info = resp; 

      //console.log(resp);

  });




  }
  
}


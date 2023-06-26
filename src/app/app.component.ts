import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  //No hacer esto en un proyecto grande en producción
  data: any[] = [];

  constructor(private http: HttpClient) {

  }

  //Este es un dispardor que se ejecuta cuando el
  //componente esta listo para mostrar datos
  ngOnInit(){
    this.http.get('https://api.spacexdata.com/v4/rockets')
    .subscribe((data: any) => {
      this.data = data;
    })
  }

}

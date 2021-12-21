import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MobileAppService } from '../services/mobile-app.service';

@Component({
  selector: 'app-logout-page',
  templateUrl: './logout-page.component.html',
  styleUrls: ['./logout-page.component.css']
})
export class LogoutPageComponent implements OnInit {
id : string = "";
name : string = "";
surname : string = "";
email : string = "";

  constructor( servicios : MobileAppService, private router:Router) {
    servicios.ObtenerDatosUsuario().subscribe((data : any) => {
      this.id = data.id;
      this.name = data.name;
      this.surname = data.surname;
      this.email = data.email;
    });

   }

  ngOnInit(): void {
  }

  cerrarSesion(){
    this.router.navigate(['/login']);
    localStorage.setItem('token',"");
    localStorage.setItem('tipo', "");
  }

  verUsuarios(){
    this.router.navigate(['/users']);
  }

}

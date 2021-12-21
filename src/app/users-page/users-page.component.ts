import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MobileAppService } from '../services/mobile-app.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {
  users : any = [];
  id : any;

  constructor(private servicios : MobileAppService, private router:Router) {
    servicios.ObtenerUsuarios().subscribe((data : any) => {
      this.users = data.items;
    });
  }

  ngOnInit(): void {
  }

  modificarUsuario(){
    this.router.navigate(['/modify'],{queryParams: {id:this.id}});
  }

  eliminarUsuario(){
this.servicios.eliminaUsuario(this.id).subscribe(data =>{console.log("Usuario eliminado con éxito");
});
  }
}

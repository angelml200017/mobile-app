import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MobileAppService } from '../services/mobile-app.service';

@Component({
  selector: 'app-modify-page',
  templateUrl: './modify-page.component.html',
  styleUrls: ['./modify-page.component.css']
})
export class ModifyPageComponent implements OnInit {
  urlTree: any;
  user : any;

  constructor(private servicios : MobileAppService, private router:Router) {
    this.urlTree = this.router.parseUrl(this.router.url);
    servicios.obtenerUsuarioId(this.urlTree.queryParams['id']).subscribe(data => {
      this.user = data;
      console.log(data);
    })
  }

  ngOnInit(): void {
  }

  guardar(form : NgForm){
    this.servicios.modificarUsuario(this.user.id, {
    "email": form.value.email,
    "password": form.value.password,
    "name": form.value.name,
    "surname": form.value.surname,
    "id": form.value.id

  }).subscribe(
    data => {
    }
  );
  this.router.navigate(['/users']);
    }
}

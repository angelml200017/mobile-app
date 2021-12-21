import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MobileAppService } from "../services/mobile-app.service";

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent implements OnInit {

  constructor(private appservice : MobileAppService,private router : Router) {

  }

  ngOnInit(): void {
  }

  guardar(formulario: NgForm){
    this.appservice.añadirUsuario(formulario.value).subscribe((data : any) => {
    this.appservice.comprobarCredenciales({email:formulario.value.email, password: formulario.value.password});
      })

    }
}

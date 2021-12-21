import { Component, OnInit } from '@angular/core';
import { MobileAppService } from "../services/mobile-app.service";
import {  NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  parametros: any;

  constructor(private http : HttpClient,private router:Router, private appservice : MobileAppService) {

  }

  ngOnInit(): void {
  }

  guardar(formulario: NgForm){

  this.parametros = formulario.value;
  this.appservice.comprobarCredenciales(this.parametros);

  }

}



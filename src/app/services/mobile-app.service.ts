import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class MobileAppService {


  constructor(private http : HttpClient, private router:Router) {

  }


   comprobarCredenciales(parametros : any){
      this.http.post("http://51.38.51.187:5050/api/v1/auth/log-in",parametros).subscribe( (data : any)  => {

      // Guardamos el token
      localStorage.setItem('token', data.accessToken);
      localStorage.setItem('tipo', data.tokenType);

      // cuando navega me crea otro objeto servicio y se lia
      this.router.navigate(['/logout']);

    }, error => {console.log("Credenciales Erroneas");

      })
   }

   ObtenerDatosUsuario (){

   return this.http.get("http://51.38.51.187:5050/api/v1/users/me",{headers:{'Authorization':localStorage.getItem('tipo')+' '+localStorage.getItem('token')}});

   }

   ObtenerUsuarios (){

    return this.http.get("http://51.38.51.187:5050/api/v1/users",{headers:{'Authorization':localStorage.getItem('tipo')+' '+localStorage.getItem('token')}});

    }

    añadirUsuario(parametros : any){
      return this.http.post("http://51.38.51.187:5050/api/v1/auth/sign-up",parametros);
    }

    modificarUsuario(id : any, parametros : any){
      return this.http.put("http://51.38.51.187:5050/api/v1/users/"+id,parametros,{headers:{'Authorization':localStorage.getItem('tipo')+' '+localStorage.getItem('token')}});
    }

    obtenerUsuarioId(id : any){
      return this.http.get("http://51.38.51.187:5050/api/v1/users/"+id,{headers:{'Authorization':localStorage.getItem('tipo')+' '+localStorage.getItem('token')}});
    }

    eliminaUsuario(id : any){
      return this.http.delete("http://51.38.51.187:5050/api/v1/users/"+id,{headers:{'Authorization':localStorage.getItem('tipo')+' '+localStorage.getItem('token')}});
    }

}

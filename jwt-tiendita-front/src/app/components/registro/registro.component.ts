import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  user = {
    nombre:"",
    email:"",
    password:""
  }

  constructor(public authService:AuthService, private router:Router) { }

  ngOnInit() {
  }

  registrar(){
    this.authService.registro(this.user)
    .subscribe(
      res => {

        console.log("Respuesta:" + JSON.stringify(res))

        if(res.token != null){
          localStorage.setItem('token', res.token)
          this.router.navigate(['/admin'])
        }
        
        
      },
      err => console.log(err)
    )
  }

}

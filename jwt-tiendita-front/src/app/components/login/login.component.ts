import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = { 
    email:"",
    password:""
  }
  mensaje: String = ''

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login(){
    //console.log(this.user)
    this.authService.login(this.user)
    .subscribe(
      res => {
        console.log("Error:" + JSON.stringify(res))
        //console.log("Error:" + res.message)
        if(res.token != null){
          localStorage.setItem('token', res.token)
        }else{
          this.mensaje = 'Atención: ' + res.message
        }
        
        this.router.navigate(['/admin'])
      },
      err => console.log(err)
    )
  }

}

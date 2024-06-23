declare var google:any;
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  ngOnInit(): void {
    google.accounts.id.initialize ({
        client_id:'',
        callback:(response:any)=>{

        }
      })
      google.accounts.id.renderButton(document.getElementById("google-btn"),{
        theme:'filled_blue',
        size: 'large',
        shape: 'rectangle',
        window: 350
      })
  }
}

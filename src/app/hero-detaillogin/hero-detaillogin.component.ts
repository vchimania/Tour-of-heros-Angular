import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero-detaillogin',
  templateUrl: './hero-detaillogin.component.html',
  styleUrls: ['./hero-detaillogin.component.css']
})
export class HeroDetailloginComponent implements OnInit {

// constructor(){}
//constructor(private activatedRoute: ActivatedRoute) { }

ngOnInit(){
 // console.log(this.activatedRoute.snapshot.params['id'])
}
  
  
  status=false;
   constructor(private router:Router) { }

  // ngOnInit(): void {
  // }



  onSubmit() {
    const txt1 = (document.getElementById('uname') as HTMLInputElement).value;
    const txt2 = (document.getElementById('pass') as HTMLInputElement)
      .value;
    let txt3 = Number(txt2);
    fetch('https://ang-login-2b73d-default-rtdb.firebaseio.com/users.json')
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        Object.keys(res);
        Object.values(res).forEach((element: any) => {
          //debugger;
          if (element.email == txt1 && element.password == txt3) {
            this.status = true;
            localStorage.setItem('user',element.email);
            localStorage.setItem('pass',element.password);
    //  set a flag in localstorage name isLoggedIn = true/false
          }
        });
        if (this.status) {
          this.router.navigate(['dashboard']);
        } else {
          alert('login failed');
        }
      });
  }
  }



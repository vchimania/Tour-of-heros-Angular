import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService,
    private authService:AuthService,
    private router:Router) { }

  ngOnInit() {
    this.getHeroes();
  }

  // getHeroes(): void {
  //   this.heroService.getHeroes()
  //     .subscribe(heroes => this.heroes = heroes);
  // }

  getHeroes(): void {
    // this.heroService.getHeroes()
    //   .subscribe(heroes => this.heroes = heroes);
    fetch('https://ang-login-2b73d-default-rtdb.firebaseio.com/heroes.json')
      .then((res) => res.json())
      .then(res=>this.heroes=res);
  }

logout() {
  if (confirm('Do You want to logout? ')) {
    this.authService.logout();
    this.router.navigate(['']);
  }
}

}
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';


import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
  hero: Hero ;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    private authService:AuthService,private router:Router
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    fetch(`https://ang-login-2b73d-default-rtdb.firebaseio.com/heroes/${id}.json`)
      .then((res) => res.json())
      .then((res) => this.hero=res);
    // this.heroService.getHero(id)
    //   .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    // this.heroService.updateHero(this.hero)
    //   .subscribe(() => this.goBack());
  }

  logout() {
    if (confirm('Do You want to logout? ')) {
      this.authService.logout();
      this.router.navigate(['']);
    }
  }
}

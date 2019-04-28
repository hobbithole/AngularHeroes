import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class HeroService {
  private heroUrl: string = 'api/heroes';

  constructor(private http: HttpClient) {  }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroUrl);
  }

  getHero(id: number): Observable<Hero> {
    return of(HEROES.find(hero => hero.id === id));
  }
}

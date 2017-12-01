import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const baseUrl='http://localhost:5000'

@Injectable()
export class PokeSearchService {

  constructor(private http:HttpClient) { }

  getPokemons(payload){
   return this.http.get(baseUrl+`/pokedex?pokename=${payload}`)
  }
}

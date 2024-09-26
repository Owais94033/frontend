import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class FoodnwasteService {

  constructor(private http : HttpClient , private auth : AuthService) { }
  url: string = "http://localhost:9999"

  storeFoodNWaste(date: string,form:any) : Observable<any>{
    let foodwaste   = {
      userId : JSON.parse(localStorage.getItem("user") || '{}').id,
      date : date,
      amountSpent : form.amountSpent,
      foodType: form.foodType,
      waterUsage: form.waterUsage
    }
    return this.http.post(`${this.url}/api/foodnwaste`,foodwaste,{headers : this.auth.getAuthHeader()})
  }
}

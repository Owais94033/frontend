import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GadgetService {

  constructor(private http : HttpClient , private auth : AuthService) { }

}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAPIResponse } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  apiUrl: string = "/api/EventBooking/"

  constructor(private http: HttpClient) {

  }
  getAllEvents() {
    return this.http.get<IAPIResponse>(`${this.apiUrl}GetAllEvents`)
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TourService {
  postTour(value: any) {
    throw new Error('Method not implemented.');
  }
  private apiUrl = 'http://localhost:5500/tours';

  constructor(private http: HttpClient) {}

  createTour(tour: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, tour);
  }

  
  getTours(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }


  getTourById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  
  updateTour(id: number, tour: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, tour);
  }

  
  deleteTour(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}

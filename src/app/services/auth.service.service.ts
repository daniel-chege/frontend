import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: User[] = [
    { username: 'admin', password: 'admin', isAdmin: true },
    { username: 'user', password: 'user', isAdmin: false }
  ];

  login(username: string, password: string): Observable<User | null> {
    const user = this.users.find(u => u.username === username && u.password === password);
    return of(user || null);
  }

  signup(username: string, password: string, isAdmin: boolean): Observable<User> {
    const user: User = { username, password, isAdmin };
    this.users.push(user);
    return of(user);
  }
}

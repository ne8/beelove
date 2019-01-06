import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  getAll() {
    return this.httpClient.get<User[]>('/users');
  }
  getById(id: number) {
    return this.httpClient.get('/users/${id}');
  }

  register(user: User) {
    return this.httpClient.post('/users/register', user);
  }

  update(user: User) {
    return this.httpClient.put('/users/${user.id}', user);
  }

  delete(id: number) {
    return this.httpClient.delete(`/users/${id}`);
  }
}

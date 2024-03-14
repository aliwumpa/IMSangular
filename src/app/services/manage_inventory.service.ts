import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
  })
  export class InventoryService {
    constructor(private _http: HttpClient) {}
  
    addInventory(data: any): Observable<any> {
      return this._http.post('http://localhost:3000/inventory', data);
    }
  
    updateInventory(id: string, data: any): Observable<any> {
      return this._http.put(`http://localhost:3000/inventory/${id}`, data);
    }
  
    getInventoryList(): Observable<any> {
      return this._http.get('http://localhost:3000/inventory');
    }
  
    getIdInventoryList(id: string): Observable<any> {
      return this._http.get(`http://localhost:3000/inventory/${id}`);
    }
  
    deleteInventory(id: string): Observable<any> {
      return this._http.delete(`http://localhost:3000/inventory/${id}`);
    }
  }
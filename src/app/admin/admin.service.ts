import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Place } from '../modal/place';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
   apiUrl:string='http://localhost:9097/'
  constructor(private http:HttpClient) { }

    getPlace():Observable<Place[]>{
          return this.http.get<Place[]>(this.apiUrl+'place/viewplace')
    }

    getPlaceById(placeId:number):Observable<Place>{
         return this.http.get<Place>(this.apiUrl+'editplace/'+placeId);
    }

    addPlace(data:any){
      return this.http.post<Place>(this.apiUrl+'place/addplace',data)
    }
    
}

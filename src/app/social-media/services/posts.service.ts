import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../../environment/environment";
import { Posts } from "../models/post.model";

@Injectable()
export class PostsService{


    constructor(private http:HttpClient){}

    getPosts(): Observable<Posts[]>{
        return this.http.get<Posts[]>(`${environment.apiUrl}/posts`)
    }
}
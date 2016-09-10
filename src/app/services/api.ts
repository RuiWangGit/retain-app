import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core'; //class level decorator

import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/observable/throw';

@Injectable()  //service inject another service
export class ApiService {

    //Http type, typescript use the type to emit some metadata, angular use that metadata as token for dep injection
    constructor(private http: Http) {
        //bind http to the class

    }


    //default header
    headers: Headers = new Headers ( {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    });

    api_url: string = 'http://localhost:3500';

    private getJson(response:Response) {
        return response.json();
    }

    private checkForError(response: Response): Response{
        if (response.status >= 200 && response.status < 300 ){
            return response;
        }
        else {
            var error = new Error(response.statusText);
            error['response'] = response;
            console.error(error);
            throw error;
        }
    }

    get(path: string): Observable<any> {
        console.log( 'in api get service');
        console.log(path);
        return this.http.get(`${this.api_url}${path}`, { headers: this.headers}) //return observable by default
            .map(this.checkForError)
            .catch(err => Observable.throw(err))
            .map(this.getJson);
    }


    post(path: string, body): Observable<any> {
        return this.http.post(`${this.api_url}${path}`, JSON.stringify(body), { headers: this.headers}) //return observable by default
            .map(this.checkForError)
            .catch(err => Observable.throw(err))
            .map(this.getJson);
    }


    delete(path: string): Observable<any> {
        return this.http.delete(`${this.api_url}${path}`, { headers: this.headers}) //return observable by default
            .map(this.checkForError)
            .catch(err => Observable.throw(err))
            .map(this.getJson);
    }

    setHeaders(headers) {
        Object.keys(headers).forEach(header => this.headers.set(header, headers[header]));
    }





}
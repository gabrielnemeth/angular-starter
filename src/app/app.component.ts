import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    constructor(private http: HttpClient) {}

    onSubmit(email: string, password: string, evt: Event) {
        evt.preventDefault();
        console.log(email, password);
        this.http
            .post('/api/auth/login', {email, password})
            .subscribe(console.log);
    }

    onSignOut() {
        this.http.get('/api/auth/logout').subscribe(console.log);
    }
}

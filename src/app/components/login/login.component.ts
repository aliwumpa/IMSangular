
import { Component } from '@angular/core';
import { accounts } from '../../environments/accounts';

@Component({
  selector: 'IMS__inventory_items',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent {
    errorMessage: string | null = null;
    username: string | null = null;
    password: string | null = null;

    signIn(username: string, password: string): void {
        const user = matchUsername(username);
        if(user && user.password === password) {
            localStorage.setItem('username', user.username);
            localStorage.setItem('role', user.role);
        }
    }
}

const matchUsername = (username: string) => {
    return accounts.find(account => account.username === username);
}



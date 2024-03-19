import { Component } from "@angular/core";
import { AuthService } from "../../services/auth.service";

@Component({
    selector: "IMS__inventory_items",
    templateUrl: "./inventory_items.component.html",
    styleUrl: "./inventory_items.component.scss"
})

export class InventoryItemsComponent {
    constructor(
        private _authService: AuthService
    ) {}
    
    title = 'Inventory Items';
    username = GetUsername();
    role = GetRole();

    signOut() {
        this._authService.logout();
      }
}

const GetUsername = () => {
    return localStorage.getItem('username');
}

const GetRole = () => {
    return localStorage.getItem('role');
}
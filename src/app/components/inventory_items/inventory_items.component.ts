import { Component, OnInit, ViewChild } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { InventoryService } from "../../services/manage_inventory.service";

// import Angular Material 
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
    selector: "IMS__inventory_items",
    templateUrl: "./inventory_items.component.html",
    styleUrl: "./inventory_items.component.scss"
})

export class InventoryItemsComponent implements OnInit {
    displayedColumns: string[] = [
        'id',
        'name',
        'description',
        'price',
        'quantityInStock'
    ];

    dataSource!: MatTableDataSource<any>;

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;

    constructor(
        private _authService: AuthService,
        private _inventoryService: InventoryService 
    ) {}
    
    title = 'Inventory Items';
    username = GetUsername();
    role = GetRole();

    ngOnInit(): void {
        this.GetItemsList();
    }

    GetItemsList() {
        this._inventoryService.getInventoryList().subscribe({
            next: (res) => {
                this.dataSource = new MatTableDataSource(res);
                this.dataSource.sort = this.sort;
                this.dataSource.paginator = this.paginator;
            },
            error: console.log,
        })
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    
        if (this.dataSource.paginator) {
          this.dataSource.paginator.firstPage();
        }
    }

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
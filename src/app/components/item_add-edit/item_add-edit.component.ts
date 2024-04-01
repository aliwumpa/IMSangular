import { Component, Inject, OnInit } from '@angular/core';
import { SnackbarService } from '../../services/snackbar.service';
import { InventoryService } from '../../services/manage_inventory.service';

// import Angular Material 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'IMS__item-add-edit',
  templateUrl: './item_add-edit.component.html',
  styleUrls: ['./item_add-edit.component.scss'],
})
export class ItemAddEditComponent implements OnInit {
  itemForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _inventoryService: InventoryService ,
    private _dialogRef: MatDialogRef<ItemAddEditComponent>,
    private _snackbarService: SnackbarService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.itemForm = this._fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      quantityInStock: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.itemForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.itemForm.valid) {
      const formData = { ...this.itemForm.value }; 

      if (this.data) {
        this._inventoryService
          .updateInventory(this.data.id, formData)
          .subscribe({
            next: (val: any) => {
              this._snackbarService.openSnackBar('Item detail updated!', 'Ok', 'mat-update-snackbar');
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      } else {
        this._inventoryService.addInventory(this.itemForm.value).subscribe({
          next: (val: any) => {
            this._snackbarService.openSnackBar('Item added successfully!', 'Ok', 'mat-add-snackbar');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }
    }
  }
}

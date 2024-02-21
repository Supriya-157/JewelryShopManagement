import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ConfirmationSnackBarComponent } from '../components/confirmation-snack-bar/confirmation-snack-bar.component';

@Injectable({
    providedIn: 'root'
})
export class SnackBarService {
    constructor(private readonly snackBar: MatSnackBar) {}

    displaySnackBar(message: string = 'Your Information has been saved') {
        this.snackBar.openFromComponent(ConfirmationSnackBarComponent, {
            data: message,
            duration: 3000,
            verticalPosition: 'top'
        });
    }
}

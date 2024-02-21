import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-confirmation-snack-bar',
  templateUrl: './confirmation-snack-bar.component.html',
  styleUrls: ['./confirmation-snack-bar.component.css']
})
export class ConfirmationSnackBarComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public message: any) {}
}

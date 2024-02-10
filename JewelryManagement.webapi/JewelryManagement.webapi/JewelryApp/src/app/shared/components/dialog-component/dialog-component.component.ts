import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-dialog-component',
  templateUrl: './dialog-component.component.html',
  styleUrls: ['./dialog-component.component.css']
})
export class DialogComponentComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: {title: string, isUpdate: boolean, item: string,isActive:boolean}) { }
}

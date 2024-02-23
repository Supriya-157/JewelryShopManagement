import { Component, ComponentFactoryResolver, ComponentRef, Inject, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit, OnDestroy {


    dialogData: any;

    @ViewChild('componentPlaceHolder', { read: ViewContainerRef, static: true }) vcRef: ViewContainerRef;
    componentRef: ComponentRef<any>;

    constructor( public readonly dialogRef: MatDialogRef<DialogComponent>,
      private readonly resolver: ComponentFactoryResolver,
      @Inject(MAT_DIALOG_DATA) public data: any) { 
  
        this.dialogData = data;
      }

    ngOnInit(): void {
      const createComponent = this.resolver.resolveComponentFactory(this.data.component);
      this.componentRef = this.vcRef.createComponent(createComponent);
    }

    ngOnDestroy() {
      if (this.componentRef) {
          this.componentRef.destroy();
      }
  }

  onSaveClick(): void {
    typeof this.componentRef.instance.addORUpdateArtefact === 'function' && this.componentRef.instance.addORUpdateArtefact();
  }

  onCancelClick() {
    this.dialogRef.close();
  }
}

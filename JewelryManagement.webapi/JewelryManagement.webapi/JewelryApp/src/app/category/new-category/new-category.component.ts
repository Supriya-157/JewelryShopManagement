import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { AppCommonService } from 'src/app/shared/services/app-common.service';
import { CategoryService } from '../category.service';
import { result } from 'lodash';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.css']
})
export class NewCategoryComponent {

  formGroup: FormGroup;
  private readonly onDestroy$: Subject<void> = new Subject();

  isCategoryEditMode = false;

  public categoryForm: CagtegoryInformation;

  constructor(
    private readonly fb: FormBuilder,
    private readonly appService: AppCommonService,

    private _categoryService:CategoryService,
    public readonly dialogRef: MatDialogRef<NewCategoryComponent>,
    private readonly router: Router
){
  this.categoryForm = {} as CagtegoryInformation;

  this.appService.getFormData$.pipe(takeUntil(this.onDestroy$)).subscribe((attrInfo: CagtegoryInformation) => {
    this.categoryForm = {} as CagtegoryInformation;
    if (attrInfo) {
        this.categoryForm = attrInfo;
    }
});
}

ngOnInit() {
 // this.setFormFieldsOnEdit();

  if (this.categoryForm && this.categoryForm.Id){
    this._categoryService.getById(this.categoryForm.Id).subscribe((result)=>{
      console.log(result);
    })

  }

  this.resetForm();

  this.appService.getFormState$.pipe(takeUntil(this.onDestroy$)).subscribe((formState: boolean) => {
    this.isCategoryEditMode = formState;

    this.isCategoryEditMode ?  this.setFormFieldsOnEdit() : this.enableAll();//this.formGroup.enable();
  });
}

enableAll(){
    this.formGroup = this.fb.group({
      Name: new FormControl({ value: '', disabled: false })
    });
}

resetForm() {
  this.formGroup = this.fb.group({
      Name: [''],
      IsActive: null
    });
  }

setFormFieldsOnEdit(): void {
  this.formGroup.patchValue({
    Name: this.categoryForm.Name || '',
    Id: this.categoryForm.Id || null,
    IsActive: this.categoryForm.IsActive || null
  });
}

ngOnDestroy() {
  this.appService.setFormState(false);
}


addORUpdateArtefact(){
  console.log("new category component called");
  this._categoryService.updateCategory(1,false).subscribe((result)=> {console.log(result)});
 
}
}

export interface CagtegoryInformation {
  Id: number;
  Name: string;

  IsActive: boolean;
}

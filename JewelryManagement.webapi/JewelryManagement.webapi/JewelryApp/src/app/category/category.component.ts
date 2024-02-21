import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Router } from '@angular/router';
import { CategoryService } from './category.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../shared/components/dialog/dialog.component';
import { take } from 'rxjs';
import { NewCategoryComponent } from './new-category/new-category.component';
import { PopupDialogService } from '../shared/services/popup.service';
import { AppCommonService } from '../shared/services/app-common.service';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  
})
export class CategoryComponent implements AfterViewInit{
  displayedColumns: string[] = [ 'name', 'isActive', 'createdDate','edit','delete'];
  dataSource:any;

  constructor(private router: Router, private _categoryService:CategoryService,
    private dialog: MatDialog,  private readonly popupService: PopupDialogService,private readonly appService: AppCommonService,){
    
  }


  ngAfterViewInit() {
  }

  

  ngOnInit(){

    this._categoryService.getAll().subscribe((result)=>{
        console.log(result);
       this.dataSource =  new MatTableDataSource<CategoryElement>(result);
    })

  }

  onEdit(e:any,item:any){

    this.appService.setFormState(true);

    this.appService.setFormData(item);

    const defaultValues: any = {
      width: '450px',
      disableClose: false,
      data: { showActionBtn: true, text: "Edit Category",saveBtnLabel:"Save",showDivider:true }
  };

  
    e.preventDefault();

    const dialogSettings = {
      data: {
          component: NewCategoryComponent,
          title: 'Category Information',
          showEditButton: false,
          showActionBtn: true,
          showDivider: true,
          showHeaderTitle: true,
          editBtnLabel: 'Edit',
          saveBtnLabel: 'Save',
          saveAndExitBtnLabel: 'Save and Exit',
          saveAndAddAnotherLabel: 'Save and Add Another',
          isEditButtonDisable: false,
        
      }
  };
  
  this.popupService.openConfirmationDialog(DialogComponent, dialogSettings, undefined, false, true);

   
  }


}
export interface CategoryElement {
  Name: string;
  Id: number;
  IsActive: boolean;
  CreatedDate: string;

}


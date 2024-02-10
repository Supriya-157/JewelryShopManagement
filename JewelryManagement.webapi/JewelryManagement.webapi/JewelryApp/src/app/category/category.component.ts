import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Router } from '@angular/router';
import { CategoryService } from './category.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponentComponent } from '../shared/components/dialog-component/dialog-component.component';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  
})
export class CategoryComponent implements AfterViewInit{
  displayedColumns: string[] = [ 'name', 'isActive', 'createdDate','edit','delete'];
  dataSource:any;

  constructor(private router: Router, private _categoryService:CategoryService,private dialog: MatDialog){
    
  }


  ngAfterViewInit() {
  }

  

  ngOnInit(){

    this._categoryService.getAll().subscribe((result)=>{
        console.log(result);
       this.dataSource =  new MatTableDataSource<CategoryElement>(result);
    })

  }

  onEdit(e:any,id:any){
    e.preventDefault();
    this._categoryService.getById(id).subscribe((result)=>{
      console.log(result);
      this.dialog.open(DialogComponentComponent, {
        data: {
          isUpdate:true,
          title:"Update Category",
          item:result.Name,
          isActive:result.IsActive
        },
        panelClass: 'custom-modalbox',
        width: '60%',
        height: '60%',
        position: { top: '5%' }
      });
    })
  }
}
export interface CategoryElement {
  Name: string;
  Id: number;
  IsActive: boolean;
  CreatedDate: string;

}


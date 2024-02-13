import { Component } from '@angular/core';
import { ProductService } from './product.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  displayedColumns: string[] = [ 'name', 'description','isActive', 'createdDate','modifiedDate','itemCode','price','scratchRate','categoryID','metal','weight','delete','edit'];

  datasrc:any;
  constructor(private  _productService :ProductService ) {
  }

  ngOnInit(){

    this._productService.getAll().subscribe((result)=>{
        console.log(result);
       this.datasrc =  new MatTableDataSource<ProductElement>(result);
    })

  }

}

export interface ProductElement {
  Name: string;
  Id: number;
  IsActive: boolean;
  CreatedDate: string;
  Price?:number,
   ScratchRate:number,   
   ItemCode?:string  
   Weight:number,
   Metal:string
}

interface CategoryElement extends ProductElement{

}

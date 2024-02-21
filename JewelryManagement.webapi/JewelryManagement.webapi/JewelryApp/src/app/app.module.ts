import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import { CategoryComponent } from './category/category.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CategoryService } from './category/category.service';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import { DialogComponent } from './shared/components/dialog/dialog.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { NewCategoryComponent } from './category/new-category/new-category.component';
import { PopupDialogService } from './shared/services/popup.service';
import { SnackBarService } from './shared/services/snack-bar.service';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatGridListModule} from '@angular/material/grid-list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { AppCommonService } from './shared/services/app-common.service';
import { ProductComponent } from './product/product.component';
import { ProductService } from './product/product.service';

const MATERIAL_MODULES = [
  MatSidenavModule,
  MatTableModule, 
  MatPaginatorModule,
  HttpClientModule,
  MatButtonModule,
  MatCheckboxModule,
  MatDialogModule,
  MatDividerModule,
  MatSnackBarModule,
  MatIconModule,MatGridListModule,MatFormFieldModule];

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    CategoryComponent,
    DialogComponent,
    NewCategoryComponent,
    ProductComponent
   // ...MATERIAL_MODULES,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
  MatTableModule, 
  MatPaginatorModule,
  HttpClientModule,
  MatButtonModule,
  MatCheckboxModule,
  MatDialogModule,
  MatDividerModule,
  MatSnackBarModule,
  MatIconModule,
  FormsModule,ReactiveFormsModule,
  MatGridListModule,MatFormFieldModule,MatInputModule
  ],
    providers: [CategoryService, PopupDialogService, SnackBarService, AppCommonService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }

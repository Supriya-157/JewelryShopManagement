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
import { DialogComponentComponent } from './shared/components/dialog-component/dialog-component.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { ProductComponent } from './product/product.component';
import { ProductService } from './product/product.service';



@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    CategoryComponent,
    DialogComponentComponent,
    ProductComponent
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
    MatDividerModule
  ],
  providers: [CategoryService,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }

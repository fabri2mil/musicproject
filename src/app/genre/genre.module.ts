import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListGenreComponent } from './list-genre/list-genre.component';
import { CreateGenreComponent } from './create-genre/create-genre.component';
import { DetailGenreComponent } from './detail-genre/detail-genre.component';
import { FormsModule } from '@angular/forms';
import { PaginationModule } from 'ngx-bootstrap/pagination';

@NgModule({
  declarations: [ListGenreComponent, CreateGenreComponent, DetailGenreComponent],
  imports: [
    CommonModule,
    FormsModule,
    PaginationModule.forRoot()  
  ]
})
export class GenreModule { }

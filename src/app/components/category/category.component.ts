import { Component, OnInit } from '@angular/core';
import { cwd } from 'node:process';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/Services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  currentCategory: Category;
  categories: Category[];
  constructor(private _categoryService: CategoryService) {}

  ngOnInit(): void {
    this.getCategories()
  }
  getCategories()  {
    this._categoryService.getCategories().subscribe(result => {
      this.categories = result.data;
    })
  }
  setCurrentCategory(category:Category) {
    this.currentCategory = category
  }
  getCurrentCategoryClass(category : Category){
    if(this.currentCategory == category){
      return "list-group-item active"
    }
    else{
      return "list-group-item"
    }
  }
}

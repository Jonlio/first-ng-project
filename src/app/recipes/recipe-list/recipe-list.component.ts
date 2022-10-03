import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Chutney', 'description du Chutney', 'https://upload.wikimedia.org/wikipedia/commons/1/14/Chutneykarnataka.jpg'),
    new Recipe('Gnocchis', 'description des Gnocchis', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?resize=960,872?quality=90&webp=true&resize=300,272'),
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

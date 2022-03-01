import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipt',
      'This is a test',
      'https://www.mastercook.com/app/Image/20317306/6559974.jpg'
    ),
    new Recipe(
      'A Test Recipt',
      'This is a test',
      'https://www.mastercook.com/app/Image/20317306/6559974.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}

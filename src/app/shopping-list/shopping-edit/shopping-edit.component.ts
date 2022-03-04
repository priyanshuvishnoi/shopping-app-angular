import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef<HTMLInputElement>;
  @ViewChild('amountInput') amountInput: ElementRef<HTMLInputElement>;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {}

  addIngredient() {
    const name = this.nameInput.nativeElement.value;
    const amount = parseInt(this.amountInput.nativeElement.value);

    this.shoppingListService.addIngredient(new Ingredient(name, amount));
  }
}

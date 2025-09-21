import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from '../../interfaces/Category';
import { Product } from '../../interfaces/Product';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class ProductComponent {

  @Input()
  categories: Category[] = [];

  @Input()
  product?: Product;

  @Output()
  saveEmitter = new EventEmitter;

  save() {
    this.saveEmitter.emit();
  }
}

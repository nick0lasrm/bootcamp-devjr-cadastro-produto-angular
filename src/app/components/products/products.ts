import { Component } from '@angular/core';
import { Category } from '../../interfaces/Category';
import { Product } from '../../interfaces/Product';
import { CategoryService } from '../../services/category';
import { ProductComponent } from '../product/product';
import { ProductService } from '../../services/product';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {

  categories: Category[] = [];

  product: Product = {} as Product;
  products: Product[] = [];

  constructor(private categoryService: CategoryService, private productService: ProductService) { }

  ngOnInit(): void {
    this.loadProducts();
    this.loadCategories();
  }

  loadProducts() {
    this.productService.getProducts().subscribe({
      next: data => { this.products = data }
    }
    );
  }

  loadCategories() {
    this.categoryService.getCategories().subscribe({
      next: data => { this.categories = data }
    }
    );
  }

  saveProduct() {
    this.productService.save(this.product).subscribe(
      {
        next: data => {
          this.products.push(data);
          this.product = {} as Product;
        }

      });
  }

}

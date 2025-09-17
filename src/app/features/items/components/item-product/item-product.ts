import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-item-product',
  standalone: true,
  imports: [],
  templateUrl: './item-product.html',
  styleUrl: './item-product.css'
})
export class ItemProduct {

  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }

}

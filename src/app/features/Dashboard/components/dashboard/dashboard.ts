import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ItemProduct } from '../../../items/components/item-product/item-product';

interface Product {
  name: string;
  sku: string;
  category: string;
  quantity: number;
  price: number;
  status: 'En stock' | 'Stock faible' | 'Rupture';
}

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, FormsModule, ItemProduct],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

  constructor(private router: Router) { }

  pageTitle: string = 'Dashboard';
  isModalOpen = false;

  // Données simulées
  allProducts: Product[] = Array.from({ length: 50 }, (_, i) => ({
    name: `Produit ${i + 1}`,
    sku: `SKU-${1000 + i}`,
    category: ['Électronique', 'Vêtements', 'Maison'][i % 3],
    quantity: Math.floor(Math.random() * 20),
    price: Math.round(Math.random() * 1000) / 10,
    status: ['En stock', 'Stock faible', 'Rupture'][i % 3] as Product['status']
  }));


  get inStockCount(): number {
    return this.allProducts.filter(p => p.status === 'En stock').length;
  }
  get lowStockCount(): number {
    return this.allProducts.filter(p => p.status === 'Stock faible').length;
  }
  get outOfStockCount(): number {
    return this.allProducts.filter(p => p.status === 'Rupture').length;
  }

  // Actions exemple
  onExportData(): void {
    alert('Exporter CSV/Excel');
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  goToItems() {
    this.router.navigate(['/items']);
  }

}

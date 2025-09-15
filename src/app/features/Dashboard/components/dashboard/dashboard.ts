import { Component } from '@angular/core';
import { Pagination } from '../../../../shared/components/pagination/pagination';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
  imports: [Pagination, CommonModule, FormsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

  pageTitle: string = 'Dashboard';

  // Données simulées
  allProducts: Product[] = Array.from({ length: 50 }, (_, i) => ({
    name: `Produit ${i + 1}`,
    sku: `SKU-${1000 + i}`,
    category: ['Électronique', 'Vêtements', 'Maison'][i % 3],
    quantity: Math.floor(Math.random() * 20),
    price: Math.round(Math.random() * 1000) / 10,
    status: ['En stock', 'Stock faible', 'Rupture'][i % 3] as Product['status']
  }));

  // Filtres
  searchTerm: string = '';
  selectedCategory: string = '';
  selectedStatus: string = '';
  sortBy: string = 'name';
  sortDirection: 'asc' | 'desc' = 'asc';

  categories: string[] = ['Électronique', 'Vêtements', 'Maison'];
  statuses: string[] = ['En stock', 'Stock faible', 'Rupture'];

  // Pagination
  currentPage: number = 1;
  itemsPerPage: number = 5;

  // --- Stats ---
  get totalProducts(): number {
    return this.allProducts.length;
  }
  get inStockCount(): number {
    return this.allProducts.filter(p => p.status === 'En stock').length;
  }
  get lowStockCount(): number {
    return this.allProducts.filter(p => p.status === 'Stock faible').length;
  }
  get outOfStockCount(): number {
    return this.allProducts.filter(p => p.status === 'Rupture').length;
  }

  // --- Filtrage & tri ---
  get filteredProducts(): Product[] {
    let products = [...this.allProducts];

    if (this.searchTerm) {
      const term = this.searchTerm.toLowerCase();
      products = products.filter(p =>
        p.name.toLowerCase().includes(term) ||
        p.sku.toLowerCase().includes(term) ||
        p.category.toLowerCase().includes(term)
      );
    }

    if (this.selectedCategory) {
      products = products.filter(p => p.category === this.selectedCategory);
    }

    if (this.selectedStatus) {
      products = products.filter(p => p.status === this.selectedStatus);
    }

    // Tri
    products.sort((a, b) => {
      let valA: any = a[this.sortBy as keyof Product];
      let valB: any = b[this.sortBy as keyof Product];

      if (typeof valA === 'string') valA = valA.toLowerCase();
      if (typeof valB === 'string') valB = valB.toLowerCase();

      if (valA < valB) return this.sortDirection === 'asc' ? -1 : 1;
      if (valA > valB) return this.sortDirection === 'asc' ? 1 : -1;
      return 0;
    });

    return products;
  }

  get paginatedProducts(): Product[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredProducts.slice(start, start + this.itemsPerPage);
  }

  // --- Méthodes ---
  onPageChange(page: number): void {
    this.currentPage = page;
  }

  onSort(field: string): void {
    if (this.sortBy === field) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortBy = field;
      this.sortDirection = 'asc';
    }
  }

  getSortIcon(field: string): string {
    if (this.sortBy !== field) return 'fa-solid fa-sort';
    return this.sortDirection === 'asc'
      ? 'fa-solid fa-sort-up'
      : 'fa-solid fa-sort-down';
  }

  resetFilters(): void {
    this.searchTerm = '';
    this.selectedCategory = '';
    this.selectedStatus = '';
    this.sortBy = 'name';
    this.sortDirection = 'asc';
    this.currentPage = 1;
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'En stock': return 'status-in-stock';
      case 'Stock faible': return 'status-low-stock';
      case 'Rupture': return 'status-out-stock';
      default: return '';
    }
  }

  getStatusIcon(status: string): string {
    switch (status) {
      case 'En stock': return 'fa-solid fa-check-circle';
      case 'Stock faible': return 'fa-solid fa-exclamation-triangle';
      case 'Rupture': return 'fa-solid fa-times-circle';
      default: return '';
    }
  }

  // Actions exemple
  onExportData(): void {
    console.log('Exporter CSV/Excel');
  }

  onAddProduct(): void {
    console.log('Ajouter un produit');
  }

}

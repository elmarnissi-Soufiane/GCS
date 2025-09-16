import { Component } from '@angular/core';
import { ProductItem } from '../../../../shared/models/product.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ItemProduct } from '../item-product/item-product';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, FormsModule, ItemProduct],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product {

  pageTitle = 'Items';
  isModalOpen = false;

  products: ProductItem[] = [
    {
      name: 'Gas Kitting',
      image: 'fa-laptop',
      model: 'G-7893',
      type: 'IE Project Items',
      store: '22 House Store',
      amount: '1 pcs',
      project: 'HQ',
      account: 'Account1',
      status: 'activated'
    },
    {
      name: 'Conduit',
      image: 'fa-laptop',
      model: 'Co-7898',
      type: 'IE Project Items',
      store: 'HQ Main Store',
      amount: '3 pcs',
      project: 'HQ',
      account: 'Account2',
      status: 'activated'
    },
    {
      name: 'Conduit',
      image: 'fa-laptop',
      model: 'G-7893',
      type: 'IE Project Items',
      store: 'HQ Main Store',
      amount: '5 pcs',
      project: 'HQ',
      account: 'Account3',
      status: 'invitation'
    },
    {
      name: 'Cable',
      image: 'fa-ethernet',
      model: 'C-1234',
      type: 'Electrical Items',
      store: 'HQ Main Store',
      amount: '10 pcs',
      project: 'Site A',
      account: 'Account4',
      status: 'activated'
    },
    {
      name: 'Switch',
      image: 'fa-toggle-on',
      model: 'S-5678',
      type: 'Network Items',
      store: 'IT Store',
      amount: '2 pcs',
      project: 'Site B',
      account: 'Account5',
      status: 'invitation'
    },
    {
      name: 'Router',
      image: 'fa-router',
      model: 'R-9012',
      type: 'Network Items',
      store: 'IT Store',
      amount: '4 pcs',
      project: 'Site C',
      account: 'Account6',
      status: 'activated'
    },
    {
      name: 'Monitor',
      image: 'fa-desktop',
      model: 'M-3456',
      type: 'IT Equipment',
      store: 'HQ Main Store',
      amount: '6 pcs',
      project: 'HQ',
      account: 'Account7',
      status: 'activated'
    },
    {
      name: 'Keyboard',
      image: 'fa-keyboard',
      model: 'K-7890',
      type: 'IT Equipment',
      store: 'IT Store',
      amount: '12 pcs',
      project: 'Site A',
      account: 'Account8',
      status: 'invitation'
    },
    {
      name: 'Mouse',
      image: 'fa-mouse',
      model: 'M-1234',
      type: 'IT Equipment',
      store: 'IT Store',
      amount: '15 pcs',
      project: 'Site B',
      account: 'Account9',
      status: 'activated'
    },
    {
      name: 'Server Rack',
      image: 'fa-server',
      model: 'SR-5678',
      type: 'Data Center',
      store: 'HQ Main Store',
      amount: '2 pcs',
      project: 'HQ',
      account: 'Account10',
      status: 'activated'
    },
    {
      name: 'Power Supply',
      image: 'fa-bolt',
      model: 'PS-9012',
      type: 'Electrical Items',
      store: 'HQ Main Store',
      amount: '8 pcs',
      project: 'Site C',
      account: 'Account11',
      status: 'invitation'
    },
    {
      name: 'UPS',
      image: 'fa-battery-full',
      model: 'U-3456',
      type: 'Electrical Items',
      store: 'HQ Main Store',
      amount: '3 pcs',
      project: 'HQ',
      account: 'Account12',
      status: 'activated'
    },
    {
      name: 'Network Cable',
      image: 'fa-network-wired',
      model: 'NC-7890',
      type: 'Network Items',
      store: 'IT Store',
      amount: '20 pcs',
      project: 'Site A',
      account: 'Account13',
      status: 'activated'
    },
    {
      name: 'HDD',
      image: 'fa-hdd',
      model: 'H-1234',
      type: 'IT Equipment',
      store: 'IT Store',
      amount: '7 pcs',
      project: 'Site B',
      account: 'Account14',
      status: 'invitation'
    },
    {
      name: 'SSD',
      image: 'fa-compact-disc',
      model: 'S-5678',
      type: 'IT Equipment',
      store: 'IT Store',
      amount: '10 pcs',
      project: 'Site C',
      account: 'Account15',
      status: 'activated'
    },
    {
      name: 'RAM',
      image: 'fa-memory',
      model: 'R-9012',
      type: 'IT Equipment',
      store: 'IT Store',
      amount: '25 pcs',
      project: 'HQ',
      account: 'Account16',
      status: 'activated'
    },
    {
      name: 'CPU',
      image: 'fa-microchip',
      model: 'C-3456',
      type: 'IT Equipment',
      store: 'IT Store',
      amount: '5 pcs',
      project: 'Site A',
      account: 'Account17',
      status: 'invitation'
    },
    {
      name: 'GPU',
      image: 'fa-desktop',
      model: 'G-7890',
      type: 'IT Equipment',
      store: 'IT Store',
      amount: '4 pcs',
      project: 'Site B',
      account: 'Account18',
      status: 'activated'
    },
    {
      name: 'Motherboard',
      image: 'fa-microchip',
      model: 'M-1234',
      type: 'IT Equipment',
      store: 'IT Store',
      amount: '6 pcs',
      project: 'Site C',
      account: 'Account19',
      status: 'activated'
    },
    {
      name: 'Cooling Fan',
      image: 'fa-fan',
      model: 'CF-5678',
      type: 'IT Equipment',
      store: 'IT Store',
      amount: '15 pcs',
      project: 'HQ',
      account: 'Account20',
      status: 'invitation'
    },
    {
      name: 'Projector',
      image: 'fa-tv',
      model: 'P-9012',
      type: 'AV Equipment',
      store: 'HQ Main Store',
      amount: '3 pcs',
      project: 'Site A',
      account: 'Account21',
      status: 'activated'
    },
    {
      name: 'Speaker',
      image: 'fa-volume-up',
      model: 'S-3456',
      type: 'AV Equipment',
      store: 'HQ Main Store',
      amount: '8 pcs',
      project: 'Site B',
      account: 'Account22',
      status: 'activated'
    },
    {
      name: 'Microphone',
      image: 'fa-microphone',
      model: 'M-7890',
      type: 'AV Equipment',
      store: 'HQ Main Store',
      amount: '6 pcs',
      project: 'Site C',
      account: 'Account23',
      status: 'invitation'
    },
    {
      name: 'Camera',
      image: 'fa-camera',
      model: 'C-1234',
      type: 'Security',
      store: 'HQ Main Store',
      amount: '4 pcs',
      project: 'HQ',
      account: 'Account24',
      status: 'activated'
    },
    {
      name: 'Sensor',
      image: 'fa-sensor',
      model: 'S-5678',
      type: 'Security',
      store: 'HQ Main Store',
      amount: '12 pcs',
      project: 'Site A',
      account: 'Account25',
      status: 'activated'
    }
  ];

  // --- Recherche ---
  searchTerm = '';

  // --- Tri ---
  sortColumn: keyof ProductItem | '' = '';
  sortAsc = true;

  // --- Pagination ---
  page = 1;
  pageSize = 5;

  // --- Filtrage pour affichage ---
  get filteredProducts(): ProductItem[] {
    let filtered = this.products.filter(p =>
      p.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      p.model.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      p.type.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      p.store.toLowerCase().includes(this.searchTerm.toLowerCase())
    );

    if (this.sortColumn) {
      const column = this.sortColumn;
      filtered = filtered.sort((a, b) => {
        const valA = (a[column] ?? '').toString().toLowerCase();
        const valB = (b[column] ?? '').toString().toLowerCase();

        if (!isNaN(Number(valA)) && !isNaN(Number(valB))) {
          return this.sortAsc ? Number(valA) - Number(valB) : Number(valB) - Number(valA);
        }
        return this.sortAsc ? valA.localeCompare(valB) : valB.localeCompare(valA);
      });
    }

    return filtered.slice((this.page - 1) * this.pageSize, this.page * this.pageSize);
  }

  // --- Changer tri ---
  sort(column: keyof ProductItem) {
    if (this.sortColumn === column) {
      this.sortAsc = !this.sortAsc;
    } else {
      this.sortColumn = column;
      this.sortAsc = true;
    }
  }

  // --- Pagination controls ---
  changePage(newPage: number) {
    if (newPage >= 1 && newPage <= this.totalPages()) {
      this.page = newPage;
    }
  }

  setPageSize(size: any) {
    // Conversion en nombre
    const newSize = typeof size === 'string' ? parseInt(size, 10) : size;
    this.pageSize = newSize;
    this.page = 1;
  }

  totalPages(): number {
    const filtered = this.products.filter(p =>
      p.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      p.model.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      p.type.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      p.store.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    return Math.ceil(filtered.length / this.pageSize);
  }

  get totalFilteredItems(): number {
    return this.products.filter(p =>
      p.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      p.model.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      p.type.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      p.store.toLowerCase().includes(this.searchTerm.toLowerCase())
    ).length;
  }

  get showingStart(): number {
    return (this.page - 1) * this.pageSize + 1;
  }

  get showingEnd(): number {
    const end = this.page * this.pageSize;
    return end > this.totalFilteredItems ? this.totalFilteredItems : end;
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

}
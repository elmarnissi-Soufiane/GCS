import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  imports: [],
  templateUrl: './pagination.html',
  styleUrl: './pagination.css'
})
export class Pagination {


  @Input() currentPage: number = 1; // Représente la page actuellement sélectionnée.
  @Input() itemsPerPage: number = 5; // Indique le nombre d'éléments affichés par page.
  @Input() totalItems: number = 0; // Représente le nombre total d'éléments à paginer.
  @Output() pageChange = new EventEmitter<number>(); // Un EventEmitter qui émet un événement chaque fois que l'utilisateur change de page. L'événement contient le numéro de la nouvelle page.

  // Calcule le nombre total de pages nécessaires pour afficher tous les éléments.
  get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  // Génère une liste de pages à afficher dans la pagination, en incluant des points de suspension (...) pour indiquer des pages manquantes.
  getVisiblePages(): (string | number)[] {
    const pages: (string | number)[] = [];
    const totalVisible = 7;

    if (this.totalPages <= totalVisible) {
      return Array.from({ length: this.totalPages }, (_, i) => i + 1);
    }

    pages.push(1);

    const start = Math.max(2, this.currentPage - 2);
    const end = Math.min(this.totalPages - 1, this.currentPage + 2);

    if (start > 2) {
      pages.push('...');
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (end < this.totalPages - 1) {
      pages.push('...');
    }

    if (this.totalPages > 1) {
      pages.push(this.totalPages);
    }

    return pages;
  }

  // Génère une liste de toutes les pages disponibles pour la liste déroulante.
  getPageOptions(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  // Change la page courante et émet un événement pour informer le composant parent de la nouvelle page sélectionnée.
  changePage(page: string | number): void {
    const pageNumber = typeof page === 'string' ? Number(page) : page;

    if (pageNumber >= 1 && pageNumber <= this.totalPages) {
      this.currentPage = pageNumber;
      this.pageChange.emit(pageNumber);
    }
  }


}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  isDropdownOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  goToProfile() {
    console.log("Naviguer vers la page Profil");
    // this.router.navigate(['/profile']);
  }

  logout() {
    console.log("Déconnexion...");
    // Ici tu mets ton service Auth pour déconnecter
  }
}

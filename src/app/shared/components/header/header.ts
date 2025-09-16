import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  @Input() isDarkMode = false;
  @Output() themeToggle = new EventEmitter<void>();

  isDropdownOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  goToProfile() {
    console.log("Naviguer vers la page Profil");
  }

  logout() {
    console.log("Déconnexion...");
  }

  toggleTheme() {
    console.log("Theme toggle clicked in Header");
    this.themeToggle.emit();
  }

}

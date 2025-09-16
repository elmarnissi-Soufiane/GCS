import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  imports: [RouterModule],
  templateUrl: './side-menu.html',
  styleUrl: './side-menu.css'
})
export class SideMenu {

  isDarkMode = false;


  setMode(isDark: boolean) {
    this.isDarkMode = isDark;
    // Ici vous pouvez aussi sauvegarder le thème dans le localStorage
    if (isDark) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }

}

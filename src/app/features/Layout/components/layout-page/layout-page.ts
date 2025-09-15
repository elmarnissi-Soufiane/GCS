import { Component } from '@angular/core';
import { SideMenu } from "../../../../shared/components/side-menu/side-menu";
import { Header } from "../../../../shared/components/header/header";
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-layout-page',
  imports: [SideMenu, Header, RouterOutlet
  ],
  templateUrl: './layout-page.html',
  styleUrl: './layout-page.css'
})
export class LayoutPage {

}

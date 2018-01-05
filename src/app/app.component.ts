import { Component, OnInit } from '@angular/core';
import { MenuService } from './menu.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MenuService]
})
export class AppComponent {
  private menuItems;
  private filterKey: string = '';
   constructor(private menuService: MenuService) {}

   ngOnInit() {
     this.filterList();
   }

   filterList() {
    // this.menuItems = this.menuService.getMenu(this.filterKey);
    this.menuService.getMenu(this.filterKey).then(menuItems => this.menuItems = menuItems);
   }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '../home-page/home-page.component';
import { ShopListComponent } from '../shop/shop-list/shop-list.component';
import { HoneyComponent } from '../honey/honey/honey.component';
const appRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'shop',
    component: ShopListComponent
  },
  {
    path: 'honey',
    component: HoneyComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      // enableTracing: true
    })
  ],
  exports:[RouterModule]

})
export class AppRoutesModule { }


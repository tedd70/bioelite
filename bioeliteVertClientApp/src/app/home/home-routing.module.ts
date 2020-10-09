import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Components
import { HomeComponent } from './components/home-container/home.component';

// Resolver
// import { HomeResolver } from './services/home-resolver.service';

const routes: Routes = [
  { 
    path: '', component: HomeComponent, 
    // resolve: { 
    //   response: HomeResolver
    // }
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}




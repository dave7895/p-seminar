import { TextPageComponent } from './pages/text-page/text-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentsPageComponent } from './pages/contents-page/contents-page.component';


const routes: Routes = [
  {path: 'contents', component: ContentsPageComponent},
  {path: 'text', component: TextPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

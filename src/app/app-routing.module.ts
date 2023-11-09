import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { JobsListComponent } from "./pages/jobs-list/jobs-list.component";

const routes: Routes = [
  {
    path: "jobs-list",
    component: JobsListComponent,
  },
  {
    path: "**",
    redirectTo: "jobs-list",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}

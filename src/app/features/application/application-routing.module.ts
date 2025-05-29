import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppLayoutComponent} from "./layout/app-layout/app-layout.component";
import {WorkspaceComponent} from "./pages/workspace/workspace.component";
import {DocumentsComponent} from "./pages/documents/documents.component";
import {ReportsComponent} from "./pages/reports/reports.component";
import {PreferencesComponent} from "./pages/preferences/preferences.component";
import {AdminComponent} from "./pages/admin/admin.component";
import {AllDocumentsComponent} from "./pages/documents/all-documents/all-documents.component";
import {CreateDocumentComponent} from "./pages/documents/create-document/create-document.component";
import {ViewDocumentComponent} from "./pages/documents/view-document/view-document.component";
import {AllAdminComponent} from "./pages/admin/all-admin/all-admin.component";
import {UsersAdminComponent} from "./pages/admin/users-admin/users-admin.component";
import {TemplatesAdminComponent} from "./pages/admin/templates-admin/templates-admin.component";
import {PermissionsAdminComponent} from "./pages/admin/permissions-admin/permissions-admin.component";
import {AllCategoriesComponent} from "./pages/admin/categories-admin/all-categories/all-categories.component";
import {ViewCategoryComponent} from "./pages/admin/categories-admin/view-category/view-category.component";
import {CategoriesAdminComponent} from "./pages/admin/categories-admin/categories-admin.component";
import {ViewTemplateComponent} from "./pages/admin/templates-admin/view-template/view-template.component";
import {AllTemplatesComponent} from "./pages/admin/templates-admin/all-templates/all-templates.component";
import {CreateTemplateComponent} from "./pages/admin/templates-admin/create-template/create-template.component";
import { SelfServiceAdminComponent } from './pages/self-service-admin/self-service-admin.component';
import { TicketsComponent } from './pages/self-service-admin/tickets/tickets.component';
import { AllTicketsComponent } from './pages/self-service-admin/tickets/all-tickets/all-tickets.component';
import { ViewTicketComponent } from './pages/self-service-admin/tickets/view-ticket/view-ticket.component';
import { EditTicketComponent } from './pages/self-service-admin/tickets/edit-ticket/edit-ticket.component';

const routes: Routes = [
  { path: "", component: AppLayoutComponent,
    children: [
      { path: "", redirectTo: "workspace", pathMatch: "full" },
      { path: "workspace", component: WorkspaceComponent },
      { path: "documents", component: DocumentsComponent,
        children:[
          { path: "", redirectTo: "all", pathMatch: "full" },
          { path: "all", component: AllDocumentsComponent },
          { path: "create", component: CreateDocumentComponent },
          { path: "view/:id", component: ViewDocumentComponent },
        ]
      },
      { path: "self-service-admin", component: SelfServiceAdminComponent, children: [
        { path: "", redirectTo: "tickets", pathMatch: "full" },
        { path: "tickets", component: TicketsComponent, children: [
          {path: "", redirectTo: "all", pathMatch: "full"},
          {path: "all", component: AllTicketsComponent},
          {path: "view/:id", component: ViewTicketComponent},
          {path: "edit/:id", component: EditTicketComponent}
        ] },
      ] },
      { path: "reports", component: ReportsComponent },
      { path: "preferences", component: PreferencesComponent },
      { path: "admin", component: AdminComponent,
        children: [
          { path: '', redirectTo: 'all', pathMatch: 'full' },
          { path: 'all', component: AllAdminComponent },
          { path: 'users', component: UsersAdminComponent },
          { path: 'categories', component: CategoriesAdminComponent,
            children: [
              { path: '', redirectTo: 'all', pathMatch: 'full' },
              { path: 'all', component: AllCategoriesComponent },
              { path: 'view/:id', component: ViewCategoryComponent }
            ]
          },
          { path: 'templates', component: TemplatesAdminComponent,
            children: [
              { path: '', redirectTo: 'all', pathMatch: 'full' },
              { path: 'all', component: AllTemplatesComponent },
              { path: 'view/:id', component: ViewTemplateComponent },
              { path: 'create', component: CreateTemplateComponent }
            ]
          },
          { path: 'permissions', component: PermissionsAdminComponent },
        ]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }

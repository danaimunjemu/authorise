import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationRoutingModule } from './application-routing.module';
import { PreloaderComponent } from './pages/preloader/preloader.component';
import { WorkspaceComponent } from './pages/workspace/workspace.component';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import {SharedModule} from "../shared/shared.module";
import {AntDesignModules} from "../../core/modules/antdesign.module";
import { DocumentStatusComponent } from './components/document/document-status/document-status.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DocumentsComponent } from './pages/documents/documents.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { PreferencesComponent } from './pages/preferences/preferences.component';
import { AdminComponent } from './pages/admin/admin.component';
import {
  DndDraggableDirective, DndDragImageRefDirective,
  DndDropzoneDirective,
  DndHandleDirective, DndModule,
  DndPlaceholderRefDirective
} from "ngx-drag-drop";
import { CreateTemplateComponent} from "./pages/admin/templates-admin/create-template/create-template.component";
import { AllTemplatesComponent} from "./pages/admin/templates-admin/all-templates/all-templates.component";
import {ResizableModule} from "angular-resizable-element";
import { AllDocumentsComponent } from './pages/documents/all-documents/all-documents.component';
import { ViewDocumentComponent } from './pages/documents/view-document/view-document.component';
import { CreateDocumentComponent } from './pages/documents/create-document/create-document.component';
import {NzHighlightPipe} from "ng-zorro-antd/core/highlight";
import {NgxEditorModule} from "ngx-editor";
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { HighlightTextDirective } from './directives/highlight-text.directive';
import { AllAdminComponent } from './pages/admin/all-admin/all-admin.component';
import { UsersAdminComponent } from './pages/admin/users-admin/users-admin.component';
import { TemplatesAdminComponent } from './pages/admin/templates-admin/templates-admin.component';
import { PermissionsAdminComponent } from './pages/admin/permissions-admin/permissions-admin.component';
import { CategoriesAdminComponent } from './pages/admin/categories-admin/categories-admin.component';
import { ViewTemplateComponent } from './pages/admin/templates-admin/view-template/view-template.component';
import {AllCategoriesComponent} from "./pages/admin/categories-admin/all-categories/all-categories.component";
import {ViewCategoryComponent} from "./pages/admin/categories-admin/view-category/view-category.component";
import { FormViewComponent } from './components/form-view/form-view.component';
import { SignatureComponent } from './components/signature/signature.component';
import {AngularSignaturePadModule} from "@almothafar/angular-signature-pad";
import { FormPreviewComponent } from './components/form-preview/form-preview.component';
import { SelfServiceAdminComponent } from './pages/self-service-admin/self-service-admin.component';
import { TicketsComponent } from './pages/self-service-admin/tickets/tickets.component';
import { AllTicketsComponent } from './pages/self-service-admin/tickets/all-tickets/all-tickets.component';
import { ViewTicketComponent } from './pages/self-service-admin/tickets/view-ticket/view-ticket.component';
import { EditTicketComponent } from './pages/self-service-admin/tickets/edit-ticket/edit-ticket.component';


@NgModule({
  declarations: [
    PreloaderComponent,
    WorkspaceComponent,
    AppLayoutComponent,
    DocumentStatusComponent,
    DocumentsComponent,
    ReportsComponent,
    PreferencesComponent,
    AdminComponent,
    AllDocumentsComponent,
    ViewDocumentComponent,
    CreateDocumentComponent,
    DynamicFormComponent,
    HighlightTextDirective,
    AllAdminComponent,
    UsersAdminComponent,
    TemplatesAdminComponent,
    PermissionsAdminComponent,
    CategoriesAdminComponent,
    AllCategoriesComponent,
    CategoriesAdminComponent,
    ViewTemplateComponent,
      AllTemplatesComponent,
      CreateTemplateComponent,
      ViewCategoryComponent,
      FormViewComponent,
      SignatureComponent,
      FormPreviewComponent,
      SelfServiceAdminComponent,
      TicketsComponent,
      AllTicketsComponent,
      ViewTicketComponent,
      EditTicketComponent
  ],
    imports: [
        CommonModule,
        ApplicationRoutingModule,
        SharedModule,
        AntDesignModules,
        FormsModule,
        DndDraggableDirective,
        DndDropzoneDirective,
        DndPlaceholderRefDirective,
        DndHandleDirective,
        DndDragImageRefDirective,
        DndModule,
        ResizableModule,
        NzHighlightPipe,
        NgxEditorModule,
        ReactiveFormsModule,
      AngularSignaturePadModule
    ]
})
export class ApplicationModule { }

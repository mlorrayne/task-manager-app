import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

// Importando os componentes criados
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskFormComponent } from './components/task-form/task-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,        // Necessário para usar [(ngModel)] nos formulários
    HttpClientModule    // Necessário para consumir a API REST
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

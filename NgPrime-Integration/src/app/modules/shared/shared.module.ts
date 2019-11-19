import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/components/button/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { PanelModule } from 'primeng/panel';
import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import {DataViewModule} from 'primeng/dataview';

@NgModule({
  imports: [
    CardModule,
    CheckboxModule,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    PanelModule,
    MenubarModule,
    TableModule,
    DataViewModule
  ],

  exports: [CardModule,
    CheckboxModule,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    PanelModule,
    MenubarModule,
    TableModule,
    DataViewModule
  ]
})
export class SharedModule { }

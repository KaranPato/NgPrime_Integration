import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';
import {CheckboxModule} from 'primeng/checkbox';

@NgModule({
  imports: [CardModule, CheckboxModule],
  exports: [CardModule, CheckboxModule]
})
export class SharedModule { }

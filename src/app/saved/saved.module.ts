import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SavedPageRoutingModule } from './saved-routing.module';

import { SavedPage } from './saved.page';

import { HeaderComponent } from '../common/components/header/header.component';
import { CompactListComponent } from '../common/components/compact-list/compact-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SavedPageRoutingModule
  ],
  declarations: [SavedPage, HeaderComponent, CompactListComponent]
})
export class SavedPageModule {}

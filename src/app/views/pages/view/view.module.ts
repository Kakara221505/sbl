import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ViewRoutingModule } from './view-routing.module';
import { ViewComponent } from './view.component';
import { FormsModule } from '@angular/forms';
import { PublicComponent} from './public/public.component';
import { NgxSpinnerModule } from "ngx-spinner";



@NgModule({
  declarations: [
    ViewComponent,
    PublicComponent
   
   
  ],
  imports: [
    CommonModule,
    ViewRoutingModule,
    FormsModule,
    NgxSpinnerModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class ViewModule { }

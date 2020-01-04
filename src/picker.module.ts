import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders } from '@angular/core';
import { CommonModule } from "@angular/common";
import { IonicModule } from "ionic-angular";

import { DatetimePickerAlertComponent } from "./alert.component";
import { DatetimePickerAlertController } from "./alert.controller";
import { DatetimePickerComponent } from "./picker.component";
import { DatetimePickerDirective } from "./picker.directive";

@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [
    DatetimePickerAlertComponent,
    DatetimePickerComponent,
    DatetimePickerDirective
  ],
  entryComponents: [
    DatetimePickerAlertComponent,
  ],
  providers: [
    DatetimePickerAlertController,
  ],
  exports: [
    DatetimePickerDirective,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DatetimePickerModule {
  static forRoot(): ModuleWithProviders {
    return {
        ngModule: DatetimePickerModule,
    };
  }
}

import { NgModule } from '@angular/core';
import {
  ServerModule,
  ServerTransferStateModule
} from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';

/**
 * Used for server rendering
 */
@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ServerTransferStateModule,
    ModuleMapLoaderModule // <-- *Important* to have lazy-loaded routes work
  ],
  bootstrap: [AppComponent]
})
export class AppServerModule {}

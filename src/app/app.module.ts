import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from "@angular/core";
import { LayoutModule } from './views/layout/layout.module';
import { AuthGuard } from './core/guard/auth.guard';
import { AppComponent } from './app.component';
import { ErrorPageComponent } from './views/pages/error-page/error-page.component';
import { HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { UnifiedRegistryComponent } from './views/pages/unified-registry/unified-registry.component';
import { BlockchainModule } from './views/pages/blockchain/blockchain.module';
import { UnifiedRegistryModule } from './views/pages/unified-registry/unified-registry.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { PaymentModule } from './views/pages/payment/payment.module';
import { ExchangeModule } from './views/pages/exchange/exchange.module';
import {AnalysisModule} from './views/pages/analysis/analysis.module'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataInferenceModule } from './views/pages/data-inference/data-inference.module';

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    UnifiedRegistryComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
    BlockchainModule,
    UnifiedRegistryModule,
    ToastrModule.forRoot(),
    PaymentModule,
    ExchangeModule,
    NgxPaginationModule,
    AnalysisModule,
    NgbModule,
    DataInferenceModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HIGHLIGHT_OPTIONS, // https://www.npmjs.com/package/ngx-highlightjs
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        languages: {
          xml: () => import('highlight.js/lib/languages/xml'),
          typescript: () => import('highlight.js/lib/languages/typescript'),
          scss: () => import('highlight.js/lib/languages/scss'),
        }
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BreadcrumbModule } from 'angular-crumbs';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import {ButtonModule} from 'primeng-lts/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreloaderComponent } from './preloader/preloader.component';
import {CarouselModule} from 'primeng-lts/carousel';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { AjouterUnModeDeRetraitComponent } from './components/pages/ajouter-un-mode-de-retrait/ajouter-un-mode-de-retrait.component';
import { TouslespartenairesIntegrateursComponent } from './components/pages/touslespartenaires-integrateurs/touslespartenaires-integrateurs.component';
import { SidebarComponent } from './components/pages/sidebar/sidebar.component';
import { CompteEntrepriseComponent } from './components/pages/compte-entreprise/compte-entreprise.component';
import { GerermaboutiqueComponent } from './components/pages/compte-entreprise/gerermaboutique/gerermaboutique.component';
import { TransfereargentComponent } from './components/pages/compte-entreprise/transfereargent/transfereargent.component';
import { DemanderpaiementComponent } from './components/pages/compte-entreprise/demanderpaiement/demanderpaiement.component';
import { CollecterdespaiementsComponent } from './components/pages/compte-entreprise/collecterdespaiements/collecterdespaiements.component';
import { DebourserdespaiementsComponent } from './components/pages/compte-entreprise/debourserdespaiements/debourserdespaiements.component';
import { EnvoyerducredittelephonikComponent } from './components/pages/compte-entreprise/envoyerducredittelephonik/envoyerducredittelephonik.component';
import { GerermesclientsComponent } from './components/pages/compte-entreprise/gerermesclients/gerermesclients.component';
import { GestiondesrolesComponent } from './components/pages/compte-entreprise/gestiondesroles/gestiondesroles.component';
import { ApiWebMobileComponent } from './components/pages/compte-entreprise/api-web-mobile/api-web-mobile.component';
import { NouveldemandepaiementComponent } from './components/pages/compte-entreprise/nouveldemandepaiement/nouveldemandepaiement.component';
import { NouvelcampagneenvoicreditComponent } from './components/pages/compte-entreprise/nouvelcampagneenvoicredit/nouvelcampagneenvoicredit.component';
import { ComptesmsComponent } from './components/pages/compte-entreprise/comptesms/comptesms.component';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  declarations: [
    AppComponent,
    PreloaderComponent,
    AjouterUnModeDeRetraitComponent,
    TouslespartenairesIntegrateursComponent,
    SidebarComponent,
    CompteEntrepriseComponent,
    GerermaboutiqueComponent,
    TransfereargentComponent,
    DemanderpaiementComponent,
    CollecterdespaiementsComponent,
    DebourserdespaiementsComponent,
    EnvoyerducredittelephonikComponent,
    GerermesclientsComponent,
    GestiondesrolesComponent,
    ApiWebMobileComponent,
    NouveldemandepaiementComponent,
    NouvelcampagneenvoicreditComponent,
    ComptesmsComponent,
   
    
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BreadcrumbModule,
    NgbModule,ButtonModule,CarouselModule,
    SlickCarouselModule,
    MatTabsModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDialogModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

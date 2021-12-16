import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterUnModeDeRetraitComponent } from './components/pages/ajouter-un-mode-de-retrait/ajouter-un-mode-de-retrait.component';
import { ApiWebMobileComponent } from './components/pages/compte-entreprise/api-web-mobile/api-web-mobile.component';
import { CollecterdespaiementsComponent } from './components/pages/compte-entreprise/collecterdespaiements/collecterdespaiements.component';
import { CompteEntrepriseComponent } from './components/pages/compte-entreprise/compte-entreprise.component';
import { DebourserdespaiementsComponent } from './components/pages/compte-entreprise/debourserdespaiements/debourserdespaiements.component';
import { DemanderpaiementComponent } from './components/pages/compte-entreprise/demanderpaiement/demanderpaiement.component';
import { EnvoyerducredittelephonikComponent } from './components/pages/compte-entreprise/envoyerducredittelephonik/envoyerducredittelephonik.component';
import { GerermaboutiqueComponent } from './components/pages/compte-entreprise/gerermaboutique/gerermaboutique.component';
import { GerermesclientsComponent } from './components/pages/compte-entreprise/gerermesclients/gerermesclients.component';
import { GestiondesrolesComponent } from './components/pages/compte-entreprise/gestiondesroles/gestiondesroles.component';
import { NouveldemandepaiementComponent } from './components/pages/compte-entreprise/nouveldemandepaiement/nouveldemandepaiement.component';
import { TransfereargentComponent } from './components/pages/compte-entreprise/transfereargent/transfereargent.component';
import { SidebarComponent } from './components/pages/sidebar/sidebar.component';
import { TouslespartenairesIntegrateursComponent } from './components/pages/touslespartenaires-integrateurs/touslespartenaires-integrateurs.component';

const routes: Routes = [
  
  
  // Home
  { path: '', loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule), data: { breadcrumb: 'Homepage' } },
  { path: 'dashboard', loadChildren: () => import('./components/pages/dashboard/home-v2.module').then(m => m.HomeV2Module), data: { breadcrumb: 'Homepage' } },
  { path: 'home-v3', loadChildren: () => import('./components/pages/home-v3/home-v3.module').then(m => m.HomeV3Module), data: { breadcrumb: 'Homepage' } },
  // About
  { path: 'about', loadChildren: () => import('./components/pages/parteners/about.module').then(m => m.AboutModule), data: { breadcrumb: 'About Us' } },
  // Speakers
  { path: 'speakers', loadChildren: () => import('./components/pages/speakers/speakers.module').then(m => m.SpeakersModule), data: { breadcrumb: 'Speakers' } },
  { path: 'speaker-details/:id', loadChildren: () => import('./components/pages/speaker-details/speaker-details.module').then(m => m.SpeakerDetailsModule), data: { breadcrumb: 'Speakers v2' } },
  // Events
  { path: 'api', loadChildren: () => import('./components/pages/integrationapi/event.module').then(m => m.EventModule), data: { breadcrumb: 'Integration API' } },
  { path: 'event-details/:id', loadChildren: () => import('./components/pages/event-details/event-details.module').then(m => m.EventDetailsModule), data: { breadcrumb: 'Event Details' } },
  // Pages
  { path: 'shop/cat/:catId', loadChildren: () => import('./components/pages/shop/shop.module').then(m => m.ShopModule), data: { breadcrumb: 'Shop' } },
  { path: 'shop/tag/:tagId', loadChildren: () => import('./components/pages/shop/shop.module').then(m => m.ShopModule), data: { breadcrumb: 'Shop' } },
  
  { path: 'shop', loadChildren: () => import('./components/pages/shop/shop.module').then(m => m.ShopModule), data: { breadcrumb: 'Shop' } },
  { path: 'shop-details/:id', loadChildren: () => import('./components/pages/shop-details/shop-details.module').then(m => m.ShopDetailsModule), data: { breadcrumb: 'Shop Details' } },
  { path: 'rechargermoncompte', loadChildren: () => import('./components/pages/rechargermoncompte/schedules.module').then(m => m.SchedulesModule), data: { breadcrumb: 'Schedules' } },
  { path: 'profildugestionnaire', loadChildren: () => import('./components/pages/profil-du-gestionnaire/schedule-details.module').then(m => m.ScheduleDetailsModule), data: { breadcrumb: ' Profil du gestionnaire ' } },
  { path: 'partenaires', loadChildren: () => import('./components/pages/sponser/sponser.module').then(m => m.SponserModule), data: { breadcrumb: 'Partenaires' } },
  { path: 'connexion', loadChildren: () => import('./components/pages/connexion/gallery.module').then(m => m.GalleryModule), data: { breadcrumb: 'Connexion' } },
  { path: 'dashboardadmin', loadChildren: () => import('./components/pages/dashboardadmin/gallery-two.module').then(m => m.GalleryTwoModule), data: { breadcrumb: 'Gallery v2' } },
  { path: 'creeruncompte', loadChildren: () => import('./components/pages/creeruncompte/pricing.module').then(m => m.PricingModule), data: { breadcrumb: 'Pricing' } },
  { path: 'commentcamarche', loadChildren: () => import('./components/pages/commentcamarche/faqs.module').then(m => m.FaqsModule), data: { breadcrumb: "Comment ça marche ?" } },
  { path: 'contact', loadChildren: () => import('./components/pages/contact/contact.module').then(m => m.ContactModule), data: { breadcrumb: 'Contact Us' } },
  { path: 'mesrecharge', loadChildren: () => import('./components/pages/mesrecharges/coming-soon.module').then(m => m.ComingSoonModule), data: { breadcrumb: 'Coming Soon' } },
  
  // News
  { path: 'blog/cat/:catId', loadChildren: () => import('./components/pages/retirer-argent/blog-grid-two.module').then(m => m.BlogGridTwoModule), data: { breadcrumb: 'Blog Grid 3 Col' } },
  { path: 'blog/tag/:tagId', loadChildren: () => import('./components/pages/retirer-argent/blog-grid-two.module').then(m => m.BlogGridTwoModule), data: { breadcrumb: 'Blog Grid 3 Col' } },
  { path: 'blog/author/:authorId', loadChildren: () => import('./components/pages/retirer-argent/blog-grid-two.module').then(m => m.BlogGridTwoModule), data: { breadcrumb: 'Blog Grid 3 Col' } },
  { path: 'ajouterunmoderetrait',component:AjouterUnModeDeRetraitComponent } ,
  { path: 'partenaireintegrateurs',component:TouslespartenairesIntegrateursComponent } ,
  { path: 'sidebar',component:SidebarComponent } ,
  { path: 'compteentreprise',component:CompteEntrepriseComponent } ,
  { path: 'gererboutique',component:GerermaboutiqueComponent } ,
  { path: 'apiwebmobile',component:ApiWebMobileComponent } ,
  { path: 'gererclient',component:GerermesclientsComponent } ,
  { path: 'collectepaiement',component:CollecterdespaiementsComponent } ,
  { path: 'deboursepaiement',component:DebourserdespaiementsComponent } ,
  { path: 'demanderpaiement',component:DemanderpaiementComponent } ,
  { path: 'envoyerducreditTelephone',component:EnvoyerducredittelephonikComponent } ,
  { path: 'roles',component:GestiondesrolesComponent },
  { path: 'transfereArgent',component:TransfereargentComponent },
  { path: 'nouveldemandepaiement',component:NouveldemandepaiementComponent },
  
  
  { path: 'rechargeenattente', loadChildren: () => import('./components/pages/recharge-en-attente/blog-list.module').then(m => m.BlogListModule), data: { breadcrumb: 'Recharge en attente' } },
  { path: 'comptederetrait', loadChildren: () => import('./components/pages/compte-de-retrait/blog-grid.module').then(m => m.BlogGridModule), data: { breadcrumb: 'Blog Grid' } },
  { path: 'retirerdelargent', loadChildren: () => import('./components/pages/retirer-argent/blog-grid-two.module').then(m => m.BlogGridTwoModule), data: { breadcrumb: 'Blog Grid 3 Col' } },
  { path: 'blog-details/:id', loadChildren: () => import('./components/pages/blog-details/blog-details.module').then(m => m.BlogDetailsModule), data: { breadcrumb: 'Blog Details' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

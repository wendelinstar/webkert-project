import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { MainComponent } from './pages/main/main.component';
// import { HirekComponent } from './pages/hirek/hirek.component';
// import { SzamlakComponent } from './pages/szamlak/szamlak.component';
// import { KapcsolatComponent } from './pages/kapcsolat/kapcsolat.component';
// import { RegisztracioComponent } from './pages/regisztracio/regisztracio.component';
import { MenuComponent } from './shared/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { DateFormatPipe } from './shared/pipes/date-format.pipe';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule} from '@angular/flex-layout';
import { MatListModule} from '@angular/material/list';
//import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { AngularFireModule} from '@angular/fire/compat';
import { AuthGuard } from './shared/services/auth.guard';



@NgModule({
  declarations: [
    AppComponent,
    // MainComponent,
    // HirekComponent,
    // SzamlakComponent,
    // KapcsolatComponent,
    // RegisztracioComponent,
    MenuComponent
    // DateFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatListModule,
    AngularFireModule.initializeApp(environment.firebase),
    //provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

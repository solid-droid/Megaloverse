import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './screens/header/header.component';
import { MapComponent } from './screens/map/map.component';
import { GameComponent } from './screens/game/game.component';
import { EventComponent } from './screens/event/event.component';
import { StickyComponent } from './screens/sticky/sticky.component';
import { UserComponent } from './screens/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MapComponent,
    GameComponent,
    EventComponent,
    StickyComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

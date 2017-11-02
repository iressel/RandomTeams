//Modules
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Components
import { AppComponent }  from './app.component';
import { HeaderComponent }  from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
//import { BodyComponent }  from './components/body/body.component';
import { FooterComponent }  from './components/footer/footer.component';
//Providers

@NgModule({
  imports:      [ BrowserModule ],
  declarations:
  [
    AppComponent, HeaderComponent, BodyComponent, FooterComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule
{

}

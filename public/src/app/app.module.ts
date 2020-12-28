import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CardsComponent } from './home/cards/cards.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { JumbotronComponent } from './home/jumbotron/jumbotron.component';
import { UsersComponent } from './users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { PostsComponent } from './posts/posts.component';
import { PhotosComponent } from './photos/photos.component';
import { MyCompComponent } from './home/my-comp/my-comp.component';
import { SignupComponent } from './signup/signup.component';
import { ReversePipe } from './reverse.pipe';
import { MenuComponent } from './menu/menu.component';
import { MealStartComponent } from './menu/meal-start/meal-start.component';
import { MealDetailComponent } from './menu/meal-start/meal-detail/meal-detail.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SingleItemComponent } from './posts/single-item/single-item.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { ObservableComponent } from './observable/observable.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CardsComponent,
    CarouselComponent,
    JumbotronComponent,
    UsersComponent,
    PostsComponent,
    PhotosComponent,
    MyCompComponent,
    SignupComponent,
    ReversePipe,
    MenuComponent,
    MealStartComponent,
    MealDetailComponent,
    PagenotfoundComponent,
    SingleItemComponent,
    EmployeeListComponent,
    EmployeeDetailComponent,
    ObservableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

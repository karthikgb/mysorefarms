import { Component, OnInit } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { HeaderComponent } from './app/header/header.component';
import { HeroComponent } from './app/hero/hero.component';
import { ProductsComponent } from './app/products/products.component';
import { AboutComponent } from './app/about/about.component';
import { ContactComponent } from './app/contact/contact.component';
import { FooterComponent } from './app/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    ProductsComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent
  ],
  template: `
    <app-header></app-header>
    <main>
      <app-hero></app-hero>
      <app-products></app-products>
      <app-about></app-about>
      <app-contact></app-contact>
    </main>
    <app-footer></app-footer>
  `,
})
export class App implements OnInit {
  ngOnInit() {
    // Smooth scrolling for navigation links
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      if (target.matches('a[href^="#"]')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        if (id) {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    });
  }
}

bootstrapApplication(App);

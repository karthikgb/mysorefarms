import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="header">
      <nav class="nav">
        <div class="nav-brand">
          <h1 class="brand-name">Mysore Farms</h1>
          <span class="brand-tagline">Authentic South Indian Organics</span>
        </div>
        <ul class="nav-menu">
          <li><a href="#home" class="nav-link">Home</a></li>
          <li><a href="#products" class="nav-link">Products</a></li>
          <li><a href="#about" class="nav-link">About</a></li>
          <li><a href="#contact" class="nav-link">Contact</a></li>
        </ul>
        <button class="menu-toggle" (click)="toggleMenu()">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>
  `,
  styles: [`
    .header {
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
    }

    .nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    .nav-brand {
      display: flex;
      flex-direction: column;
    }

    .brand-name {
      font-size: 1.8rem;
      font-weight: 700;
      color: #2d5016;
      margin: 0;
      line-height: 1;
    }

    .brand-tagline {
      font-size: 0.8rem;
      color: #6b7280;
      font-weight: 400;
    }

    .nav-menu {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
      gap: 2rem;
    }

    .nav-link {
      text-decoration: none;
      color: #374151;
      font-weight: 500;
      transition: color 0.3s ease;
      position: relative;
    }

    .nav-link:hover {
      color: #2d5016;
    }

    .nav-link::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0;
      height: 2px;
      background: #2d5016;
      transition: width 0.3s ease;
    }

    .nav-link:hover::after {
      width: 100%;
    }

    .menu-toggle {
      display: none;
      flex-direction: column;
      background: none;
      border: none;
      cursor: pointer;
      padding: 0.5rem;
    }

    .menu-toggle span {
      width: 25px;
      height: 3px;
      background: #374151;
      margin: 3px 0;
      transition: 0.3s;
    }

    @media (max-width: 768px) {
      .nav-menu {
        display: none;
      }

      .menu-toggle {
        display: flex;
      }
    }
  `]
})
export class HeaderComponent {
  toggleMenu() {
    // Mobile menu toggle functionality can be added here
  }
}
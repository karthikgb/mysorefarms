import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h3 class="footer-title">Mysore Farms</h3>
            <p class="footer-description">
              Bringing authentic South Indian organic products to Canadian families with a commitment to quality, 
              sustainability, and fair trade practices.
            </p>
            <div class="social-links">
              <a href="#" class="social-link">📘</a>
              <a href="#" class="social-link">📷</a>
              <a href="#" class="social-link">🐦</a>
            </div>
          </div>
          
          <div class="footer-section">
            <h4 class="footer-subtitle">Products</h4>
            <ul class="footer-links">
              <li><a href="#products">Basmati Rice</a></li>
              <li><a href="#products">Sona Masoori</a></li>
              <li><a href="#products">Red Rice</a></li>
              <li><a href="#products">Spices</a></li>
              <li><a href="#products">Coconut Oil</a></li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h4 class="footer-subtitle">Company</h4>
            <ul class="footer-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#">Shipping Info</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h4 class="footer-subtitle">Newsletter</h4>
            <p class="newsletter-text">Stay updated with our latest products and offers</p>
            <div class="newsletter-form">
              <input type="email" placeholder="Enter your email" class="newsletter-input">
              <button class="newsletter-btn">Subscribe</button>
            </div>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; 2025 Mysore Farms. All rights reserved.</p>
          <p>Made with ❤️ for authentic South Indian flavors</p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: #1f2937;
      color: white;
      padding: 3rem 2rem 1rem;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .footer-content {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1.5fr;
      gap: 3rem;
      margin-bottom: 2rem;
    }

    .footer-title {
      font-size: 1.5rem;
      font-weight: 700;
      color: #84cc16;
      margin-bottom: 1rem;
    }

    .footer-description {
      color: #d1d5db;
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }

    .social-links {
      display: flex;
      gap: 1rem;
    }

    .social-link {
      display: inline-block;
      font-size: 1.5rem;
      text-decoration: none;
      transition: transform 0.3s ease;
    }

    .social-link:hover {
      transform: scale(1.2);
    }

    .footer-subtitle {
      font-size: 1.1rem;
      font-weight: 600;
      margin-bottom: 1rem;
      color: #f9fafb;
    }

    .footer-links {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .footer-links li {
      margin-bottom: 0.5rem;
    }

    .footer-links a {
      color: #d1d5db;
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .footer-links a:hover {
      color: #84cc16;
    }

    .newsletter-text {
      color: #d1d5db;
      margin-bottom: 1rem;
      font-size: 0.9rem;
    }

    .newsletter-form {
      display: flex;
      gap: 0.5rem;
    }

    .newsletter-input {
      flex: 1;
      padding: 0.75rem;
      border: 1px solid #374151;
      border-radius: 8px;
      background: #374151;
      color: white;
      font-size: 0.9rem;
    }

    .newsletter-input::placeholder {
      color: #9ca3af;
    }

    .newsletter-input:focus {
      outline: none;
      border-color: #84cc16;
    }

    .newsletter-btn {
      background: #84cc16;
      color: #1f2937;
      border: none;
      padding: 0.75rem 1rem;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.3s ease;
      font-size: 0.9rem;
    }

    .newsletter-btn:hover {
      background: #65a30d;
    }

    .footer-bottom {
      border-top: 1px solid #374151;
      padding-top: 2rem;
      text-align: center;
      color: #9ca3af;
    }

    .footer-bottom p {
      margin: 0.5rem 0;
      font-size: 0.9rem;
    }

    @media (max-width: 768px) {
      .footer-content {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .newsletter-form {
        flex-direction: column;
      }
    }
  `]
})
export class FooterComponent {}
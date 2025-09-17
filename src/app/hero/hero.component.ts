import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="home" class="hero">
      <div class="hero-content">
        <div class="hero-text">
        <h1 class="hero-title">Mysore Farms</h1>
          <h1 class="hero-title">
            Premium Organic Rice
            <span class="highlight">From South India to Canada</span>
          </h1>
          <p class="hero-description">
            Experience the authentic taste of traditional South Indian organic rice and premium agricultural products, 
            carefully sourced from sustainable farms and delivered fresh to your doorstep across Canada.
          </p>
          <div class="hero-buttons">
            <button class="btn btn-primary">Shop Now</button>
            <button class="btn btn-secondary">Learn More</button>
          </div>
          <div class="hero-stats">
            <div class="stat">
              <span class="stat-number">100%</span>
              <span class="stat-label">Organic</span>
            </div>
            <div class="stat">
              <span class="stat-number">5+</span>
              <span class="stat-label">Rice Varieties</span>
            </div>
            <div class="stat">
              <span class="stat-number">1000+</span>
              <span class="stat-label">Happy Customers</span>
            </div>
          </div>
        </div>
        <div class="hero-image">
          
               <img src="assets/ricepic.jpg" 
               alt="Organic rice fields in South India" class="main-image">
          <div class="floating-card">
            <img src="https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg?auto=compress&cs=tinysrgb&w=400" 
                 alt="Premium basmati rice" class="card-image">
            <div class="card-content">
              <h3>Sona Masoori rice</h3>
              <p>Aged to perfection</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
    .hero {
      min-height: 100vh;
      background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
      display: flex;
      align-items: center;
      padding: 6rem 2rem 2rem;
      position: relative;
      overflow: hidden;
    }

    .hero::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" patternUnits="userSpaceOnUse" width="4" height="4"><circle cx="2" cy="2" r="0.5" fill="%23d1d5db" opacity="0.3"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
      opacity: 0.5;
    }

    .hero-content {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
      position: relative;
      z-index: 1;
    }

    .hero-title {
      font-size: 3.5rem;
      font-weight: 800;
      line-height: 1.1;
      color: #1f2937;
      margin-bottom: 1.5rem;
    }

    .highlight {
      display: block;
      color: #2d5016;
      background: linear-gradient(120deg, #84cc16 0%, #65a30d 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .hero-description {
      font-size: 1.2rem;
      color: #6b7280;
      line-height: 1.6;
      margin-bottom: 2rem;
    }

    .hero-buttons {
      display: flex;
      gap: 1rem;
      margin-bottom: 3rem;
    }

    .btn {
      padding: 1rem 2rem;
      border: none;
      border-radius: 12px;
      font-weight: 600;
      font-size: 1rem;
      cursor: pointer;
      transition: all 0.3s ease;
      text-decoration: none;
      display: inline-block;
    }

    .btn-primary {
      background: linear-gradient(135deg, #2d5016 0%, #365314 100%);
      color: white;
      box-shadow: 0 4px 15px rgba(45, 80, 22, 0.3);
    }

    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(45, 80, 22, 0.4);
    }

    .btn-secondary {
      background: white;
      color: #2d5016;
      border: 2px solid #2d5016;
    }

    .btn-secondary:hover {
      background: #2d5016;
      color: white;
      transform: translateY(-2px);
    }

    .hero-stats {
      display: flex;
      gap: 2rem;
    }

    .stat {
      text-align: center;
    }

    .stat-number {
      display: block;
      font-size: 2rem;
      font-weight: 700;
      color: #2d5016;
    }

    .stat-label {
      font-size: 0.9rem;
      color: #6b7280;
      font-weight: 500;
    }

    .hero-image {
      position: relative;
    }

    .main-image {
      width: 100%;
      height: 500px;
      object-fit: cover;
      border-radius: 20px;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    }

    .floating-card {
      position: absolute;
      bottom: -20px;
      left: -20px;
      background: white;
      border-radius: 16px;
      padding: 1.5rem;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
      display: flex;
      align-items: center;
      gap: 1rem;
      max-width: 250px;
    }

    .card-image {
      width: 60px;
      height: 60px;
      object-fit: cover;
      border-radius: 12px;
    }

    .card-content h3 {
      margin: 0 0 0.5rem 0;
      font-size: 1rem;
      font-weight: 600;
      color: #1f2937;
    }

    .card-content p {
      margin: 0;
      font-size: 0.8rem;
      color: #6b7280;
    }

    @media (max-width: 768px) {
      .hero-content {
        grid-template-columns: 1fr;
        gap: 2rem;
        text-align: center;
      }

      .hero-title {
        font-size: 2.5rem;
      }

      .hero-buttons {
        justify-content: center;
      }

      .floating-card {
        position: static;
        margin-top: 1rem;
        justify-content: center;
      }
    }
  `,
  ],
})
export class HeroComponent {}

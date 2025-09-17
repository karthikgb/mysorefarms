import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="about">
      <div class="container">
        <div class="about-content">
          <div class="about-text">
            <h2 class="section-title">From South India's Fields to Your Table</h2>
            <p class="lead">
              Mysore Farms bridges the gap between traditional South Indian agriculture and Canadian families 
              seeking authentic, organic products.
            </p>
            <p>
              Founded with a passion for preserving traditional farming methods and bringing the finest organic 
              rice varieties to Canada, we work directly with small-scale farmers in Karnataka, Tamil Nadu, 
              and Andhra Pradesh.
            </p>
            <p>
              Our commitment goes beyond just importing products – we ensure fair trade practices, 
              sustainable farming methods, and the highest quality standards from farm to your kitchen.
            </p>
            
            <div class="values">
              <div class="value-item">
                <div class="value-icon">🌱</div>
                <h3>100% Organic</h3>
                <p>Certified organic products with no pesticides or chemicals</p>
              </div>
              <div class="value-item">
                <div class="value-icon">🤝</div>
                <h3>Fair Trade</h3>
                <p>Supporting small farmers with fair prices and sustainable practices</p>
              </div>
              <div class="value-item">
                <div class="value-icon">🚚</div>
                <h3>Fresh Delivery</h3>
                <p>Direct import ensuring freshness and quality across Canada</p>
              </div>
            </div>
          </div>
          
          <div class="about-image">
            <img src="assets/ricepic.jpg" 
                 alt="South Indian farmers in rice fields" class="main-image">
            <div class="stats-overlay">
              <div class="stat-item">
                <span class="stat-number">50+</span>
                <span class="stat-label">Partner Farms</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">5</span>
                <span class="stat-label">Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about {
      padding: 6rem 2rem;
      background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .about-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
    }

    .section-title {
      font-size: 2.5rem;
      font-weight: 700;
      color: #1f2937;
      margin-bottom: 1.5rem;
      line-height: 1.2;
    }

    .lead {
      font-size: 1.2rem;
      color: #2d5016;
      font-weight: 600;
      margin-bottom: 1.5rem;
      line-height: 1.5;
    }

    .about-text p {
      color: #6b7280;
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }

    .values {
      display: grid;
      gap: 2rem;
      margin-top: 3rem;
    }

    .value-item {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
    }

    .value-icon {
      font-size: 2rem;
      flex-shrink: 0;
    }

    .value-item h3 {
      font-size: 1.1rem;
      font-weight: 600;
      color: #1f2937;
      margin: 0 0 0.5rem 0;
    }

    .value-item p {
      color: #6b7280;
      margin: 0;
      font-size: 0.9rem;
    }

    .about-image {
      position: relative;
    }

    .main-image {
      width: 100%;
      height: 500px;
      object-fit: cover;
      border-radius: 20px;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    }

    .stats-overlay {
      position: absolute;
      bottom: 2rem;
      left: 2rem;
      right: 2rem;
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
      border-radius: 16px;
      padding: 1.5rem;
      display: flex;
      justify-content: space-around;
    }

    .stat-item {
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

    @media (max-width: 768px) {
      .about-content {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .section-title {
        font-size: 2rem;
      }

      .stats-overlay {
        position: static;
        margin-top: 1rem;
      }
    }
  `]
})
export class AboutComponent {}
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="contact" class="contact">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Get In Touch</h2>
          <p class="section-description">
            Ready to experience authentic South Indian organic products? Contact us today!
          </p>
        </div>

        <div class="contact-content">
          <div class="contact-info">
            <div class="info-card">
              <div class="info-icon">📍</div>
              <h3>Our Location</h3>
              <p>Toronto, Ontario<br>Canada</p>
            </div>
            
            <div class="info-card">
              <div class="info-icon">📞</div>
              <h3>Phone</h3>
              <p>+1 (416) 555-0123</p>
            </div>
            
            <div class="info-card">
              <div class="info-icon">✉️</div>
              <h3>Email</h3>
              <p>sales&#64;mysorefarms.ca</p>
            </div>
            
            <div class="info-card">
              <div class="info-icon">🕒</div>
              <h3>Business Hours</h3>
              <p>Mon - Fri: 9:00 AM - 6:00 PM<br>Sat: 10:00 AM - 4:00 PM</p>
            </div>
          </div>

          <form class="contact-form" #f="ngForm" (ngSubmit)="onSubmit(f)" novalidate>
            <div class="form-group">
              <label for="name">Full Name</label>
              <input type="text" id="name" [(ngModel)]="formData.name" name="name" required>
            </div>
            
            <div class="form-group">
              <label for="email">Email Address</label>
              <input type="email" id="email" [(ngModel)]="formData.email" name="email" required>
            </div>
            
            <div class="form-group">
              <label for="phone">Phone Number</label>
              <input type="tel" id="phone" [(ngModel)]="formData.phone" name="phone">
            </div>
            
            <div class="form-group">
              <label for="subject">Subject</label>
              <select id="subject" [(ngModel)]="formData.subject" name="subject" required>
                <option value="">Select a subject</option>
                <option value="product-inquiry">Product Inquiry</option>
                <option value="bulk-order">Bulk Order</option>
                <option value="partnership">Partnership</option>
                <option value="support">Customer Support</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" [(ngModel)]="formData.message" name="message" rows="5" required></textarea>
            </div>
            
            <button type="submit" class="btn-submit" [disabled]="isSubmitting">
              {{ isSubmitting ? 'Sending…' : 'Send Message' }}
            </button>

            <p class="status success" *ngIf="status==='ok'">✅ Thanks! Your message was sent.</p>
            <p class="status error" *ngIf="status==='err'">❌ Sorry, something went wrong. Please try again.</p>
          </form>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact {
      padding: 6rem 2rem;
      background: white;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .section-header {
      text-align: center;
      margin-bottom: 4rem;
    }

    .section-title {
      font-size: 2.5rem;
      font-weight: 700;
      color: #1f2937;
      margin-bottom: 1rem;
    }

    .section-description {
      font-size: 1.1rem;
      color: #6b7280;
      max-width: 600px;
      margin: 0 auto;
      line-height: 1.6;
    }

    .contact-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
    }

    .contact-info {
      display: grid;
      gap: 1.5rem;
    }

    .info-card {
      background: #f8fafc;
      padding: 2rem;
      border-radius: 16px;
      text-align: center;
      border: 1px solid #e2e8f0;
    }

    .info-icon {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    .info-card h3 {
      font-size: 1.2rem;
      font-weight: 600;
      color: #1f2937;
      margin-bottom: 0.5rem;
    }

    .info-card p {
      color: #6b7280;
      margin: 0;
      line-height: 1.5;
    }

    .contact-form {
      background: #f8fafc;
      padding: 2rem;
      border-radius: 20px;
      border: 1px solid #e2e8f0;
    }

    .form-group {
      margin-bottom: 1.5rem;
    }

    .form-group label {
      display: block;
      font-weight: 600;
      color: #374151;
      margin-bottom: 0.5rem;
    }

    .form-group input,
    .form-group select,
    .form-group textarea {
      width: 100%;
      padding: 0.75rem 1rem;
      border: 1px solid #d1d5db;
      border-radius: 8px;
      font-size: 1rem;
      transition: border-color 0.3s ease;
      background: white;
    }

    .form-group input:focus,
    .form-group select:focus,
    .form-group textarea:focus {
      outline: none;
      border-color: #2d5016;
      box-shadow: 0 0 0 3px rgba(45, 80, 22, 0.1);
    }

    .form-group textarea {
      resize: vertical;
      min-height: 120px;
    }

    .btn-submit {
      width: 100%;
      background: linear-gradient(135deg, #2d5016 0%, #365314 100%);
      color: white;
      border: none;
      padding: 1rem 2rem;
      border-radius: 12px;
      font-weight: 600;
      font-size: 1rem;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .btn-submit:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(45, 80, 22, 0.3);
    }

    @media (max-width: 768px) {
      .contact-content {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
    }

    /* small status styles */
    .status { margin-top:.75rem; font-size:.95rem; }
    .status.success { color:#166534; }
    .status.error { color:#b91c1c; }
  `]
})
export class ContactComponent {
  private http = inject(HttpClient);

  private endpoint = 'https://formspree.io/f/mnnbejwl';

  isSubmitting = false;
  status: 'idle' | 'ok' | 'err' = 'idle';

  formData = { name: '', email: '', phone: '', subject: '', message: '' };

  onSubmit(form: NgForm) {
    if (form.invalid) return;

    this.isSubmitting = true;
    this.status = 'idle';

    this.http.post(this.endpoint, this.formData, {
      headers: new HttpHeaders({ 'Accept': 'application/json' })
    }).subscribe({
      next: () => {
        this.status = 'ok';
        form.resetForm();
        this.isSubmitting = false;
      },
      error: () => {
        this.status = 'err';
        this.isSubmitting = false;
      }
    });
  }
}

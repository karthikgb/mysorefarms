import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

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
            <div class="info-card"><div class="info-icon">📍</div><h3>Our Location</h3><p>Toronto, Ontario<br>Canada</p></div>
            <div class="info-card"><div class="info-icon">📞</div><h3>Phone</h3><p>+1 (416) 555-0123</p></div>
            <div class="info-card"><div class="info-icon">✉️</div><h3>Email</h3><p>sales&#64;mysorefarms.ca</p></div>
            <div class="info-card"><div class="info-icon">🕒</div><h3>Business Hours</h3><p>Mon - Fri: 9:00 AM - 6:00 PM<br>Sat: 10:00 AM - 4:00 PM</p></div>
          </div>

          <form class="contact-form"
                name="contact"
                data-netlify="true"
                netlify-honeypot="bot-field"
                #f="ngForm"
                (ngSubmit)="onSubmit(f)"
                novalidate>

            <!-- Honeypot -->
            <input type="text" name="bot-field" [(ngModel)]="honeypot" class="hp" tabindex="-1" aria-hidden="true">

            <!-- Hidden form name -->
            <input type="hidden" name="form-name" [value]="formName">

            <div class="form-group">
              <label for="name">Full Name</label>
              <input type="text" id="name" name="name" [(ngModel)]="formData.name" required>
            </div>

            <div class="form-group">
              <label for="email">Email Address</label>
              <input type="email" id="email" name="email" [(ngModel)]="formData.email" required>
            </div>

            <div class="form-group">
              <label for="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" [(ngModel)]="formData.phone">
            </div>

            <div class="form-group">
              <label for="subject">Subject</label>
              <select id="subject" name="subject" [(ngModel)]="formData.subject" required>
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
              <textarea id="message" name="message" rows="5" [(ngModel)]="formData.message" required></textarea>
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
    .hp { position: absolute; left: -9999px; opacity: 0; height: 0; width: 0; }
    .status { margin-top: .75rem; font-size: .95rem; }
    .status.success { color: #166534; }
    .status.error { color: #b91c1c; }
  `]
})
export class ContactComponent {
  formName = 'contact';
  honeypot = '';
  isSubmitting = false;
  status: 'idle' | 'ok' | 'err' = 'idle';

  formData = { name: '', email: '', phone: '', subject: '', message: '' };

  private encode(data: Record<string, string>) {
    return Object.keys(data)
      .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(data[k] ?? ''))
      .join('&');
  }

  async onSubmit(form: NgForm) {
    if (form.invalid || this.honeypot?.trim()) return;

    this.isSubmitting = true;
    this.status = 'idle';

    const body = this.encode({ 'form-name': this.formName, ...this.formData });

    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body
      });

      if (res.ok) {
        this.status = 'ok';
        form.resetForm();
      } else {
        this.status = 'err';
      }
    } catch {
      this.status = 'err';
    } finally {
      this.isSubmitting = false;
    }
  }
}

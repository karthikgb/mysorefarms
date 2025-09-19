import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="products" class="products">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Our Premium Products</h2>
          <p class="section-description">
            Discover our carefully curated selection of organic rice varieties and traditional South Indian products
          </p>
        </div>

        <div class="products-grid">
          <div class="product-card" *ngFor="let product of products">
            <div class="product-image">
              <img [src]="product.image" [alt]="product.name">
              <div class="product-badge">{{ product.badge }}</div>
            </div>
            <div class="product-content">
              <h3 class="product-name">{{ product.name }}</h3>
              <p class="product-description">{{ product.description }}</p>
              <div class="product-features">
                <span class="feature" *ngFor="let feature of product.features">{{ feature }}</span>
              </div>
              <div class="product-footer">
                <span class="product-price">{{ product.price }}</span>
                <button class="btn-add-cart">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .products {
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

    .products-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .product-card {
      background: white;
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
      transition: all 0.3s ease;
      border: 1px solid #f3f4f6;
    }

    .product-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
    }

    .product-image {
      position: relative;
      height: 200px;
      overflow: hidden;
    }

    .product-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    .product-card:hover .product-image img {
      transform: scale(1.05);
    }

    .product-badge {
      position: absolute;
      top: 1rem;
      right: 1rem;
      background: #2d5016;
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: 600;
    }

    .product-content {
      padding: 1.5rem;
    }

    .product-name {
      font-size: 1.3rem;
      font-weight: 600;
      color: #1f2937;
      margin-bottom: 0.5rem;
    }

    .product-description {
      color: #6b7280;
      line-height: 1.5;
      margin-bottom: 1rem;
    }

    .product-features {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 1.5rem;
    }

    .feature {
      background: #f0fdf4;
      color: #166534;
      padding: 0.25rem 0.75rem;
      border-radius: 12px;
      font-size: 0.8rem;
      font-weight: 500;
    }

    .product-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .product-price {
      font-size: 1.2rem;
      font-weight: 700;
      color: #2d5016;
    }

    .btn-add-cart {
      background: #2d5016;
      color: white;
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 10px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .btn-add-cart:hover {
      background: #365314;
      transform: translateY(-1px);
    }

    @media (max-width: 768px) {
      .products-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ProductsComponent {
  products = [
    {
      name: 'Premium Basmati Rice',
      description: 'Aged for 2 years, this aromatic long-grain rice delivers exceptional flavor and texture.',
      image: 'https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: '$22.99',
      badge: 'Best Seller',
      features: ['Organic', 'Aged 2 Years', 'Long Grain', 'Aromatic']
    },
    {
      name: 'Traditional Sona Masoori',
      description: 'Light, fluffy medium-grain rice perfect for everyday meals and South Indian cuisine.',
      image: 'https://images.pexels.com/photos/1393382/pexels-photo-1393382.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: '$19.99',
      badge: 'Popular',
      features: ['Medium Grain', 'Light Texture', 'Versatile', 'Traditional']
    },
    {
      name: 'Red Rice Variety',
      description: 'Nutrient-rich red rice with a nutty flavor and chewy texture, packed with antioxidants.',
      image: 'https://images.pexels.com/photos/4198018/pexels-photo-4198018.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: '$29.99',
      badge: 'Superfood',
      features: ['High Fiber', 'Antioxidants', 'Nutty Flavor', 'Nutritious']
    },
    {
      name: 'Organic Spice Mix',
      description: 'Authentic South Indian spice blend made from premium organic spices.',
      image: 'https://images.pexels.com/photos/4198017/pexels-photo-4198017.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: '$15.99',
      badge: 'New',
      features: ['Organic', 'Authentic', 'Fresh Ground', 'Traditional Recipe']
    },
    {
      name: 'Coconut Oil',
      description: 'Cold-pressed virgin coconut oil from organic coconuts, perfect for cooking and health.',
      image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: '$22.99',
      badge: 'Premium',
      features: ['Cold Pressed', 'Virgin', 'Organic', 'Multi-use']
    },
    {
      name: 'Jaggery Blocks',
      description: 'Pure, unrefined jaggery made from organic sugarcane, a healthy sugar alternative.',
      image: 'https://images.pexels.com/photos/4198019/pexels-photo-4198019.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: '$12.99',
      badge: 'Natural',
      features: ['Unrefined', 'Natural', 'Iron Rich', 'Traditional']
    }
  ];
}
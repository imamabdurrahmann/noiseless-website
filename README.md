# Noiseless Brand Website

Brand catalog website for Noiseless - custom apparel brand.

**Live URL:** https://noiseless-website.vercel.app

---

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Deploy to Vercel
npx vercel --prod
```

---

## Post-Deployment Checklist

### 1. Update WhatsApp Number

Replace the placeholder phone number `6281234567890` with your real WhatsApp number (without + sign).

**Files to update:**
- `lib/whatsapp.ts` - change default parameter
- `components/Footer.tsx` - WhatsApp link in footer
- `app/tentang/page.tsx` - WhatsApp link in contact section

**Format:** Use format `628xxxxxxxxx` (country code 62 for Indonesia, no + sign)

---

### 2. Update Instagram Link

Replace `https://instagram.com/noiseless` with your actual Instagram URL.

**Files to update:**
- `components/Footer.tsx`

---

### 3. Replace Placeholder Images

Replace the placeholder images in `public/images/products/` with actual product photos.

| File | Product | Recommended Size |
|------|---------|------------------|
| placeholder-1.jpg | Essential Tee | 1000x1000px |
| placeholder-2.jpg | Oversized Hoodie | 1000x1000px |
| placeholder-3.jpg | Graphic Tee | 1000x1000px |
| placeholder-4.jpg | Crewneck | 1000x1000px |
| placeholder-5.jpg | Tote Bag | 1000x1000px |
| placeholder-6.jpg | Cap | 1000x1000px |

**Recommended format:** JPG or WebP (WebP for better compression)

---

### 4. Update Product Data

Edit `data/products.ts` to:
- Update product names, descriptions, prices
- Add/remove products
- Update available colors and sizes
- Point to real product images

---

### 5. Update Meta Tags (Optional)

Edit meta tags for SEO optimization:

- `app/layout.tsx` - global site metadata
- `app/katalog/page.tsx` - catalog page metadata
- `app/tentang/page.tsx` - about page metadata
- `app/produk/[slug]/page.tsx` - product page metadata (auto-generated)

---

### 6. Add Custom Domain (Optional)

To add a custom domain (e.g., noiseless.id):

1. Go to Vercel Dashboard
2. Select your project
3. Go to Settings → Domains
4. Add your domain and follow DNS configuration instructions

---

## Project Structure

```
noiseless-website/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   ├── katalog/           # Catalog page
│   ├── produk/[slug]/     # Product detail pages
│   └── tentang/           # About page
├── components/             # React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ProductCard.tsx
│   └── WhatsAppButton.tsx
├── data/                   # Static data
│   └── products.ts
├── lib/                    # Utilities
│   └── whatsapp.ts
└── public/                 # Static assets
    └── images/products/    # Product images
```

---

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **Deployment:** Vercel
- **Images:** Local (unoptimized for Vercel deployment)

---

## Contact

For questions about this project, reach out to the developer.

---

Built with ❤️ for Noiseless Brand
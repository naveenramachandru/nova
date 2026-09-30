import { MetadataRoute } from 'next';

// Example: Simulate fetching dynamic product or blog slugs from your database or API
async function getDynamicRoutes() {
  // Replace this with your actual database query or API call (e.g., fetch from Supabase, Firebase, or an external API)
  const products = [
    { slug: 'hyp2003', updatedAt: new Date() },
    // Add other dynamic products or pages here
  ];

  return products.map((product) => ({
    url: `https://novaventure.in/products/${product.slug}`,
    lastModified: product.updatedAt,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://novaventure.in';

  // 1. Define static routes
  const staticRoutes = [
    '',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // 2. Fetch dynamic routes
  const dynamicRoutes = await getDynamicRoutes();

  // 3. Combine both static and dynamic routes
  return [...staticRoutes, ...dynamicRoutes];
}
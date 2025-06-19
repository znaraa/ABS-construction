import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

// Define your site URLs
const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.7 },
  { url: '/projects', changefreq: 'weekly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.6 },
  { url: '/project1', changefreq: 'monthly', priority: 0.7 },
  { url: '/project2', changefreq: 'monthly', priority: 0.7 },
  { url: '/project3', changefreq: 'monthly', priority: 0.7 },
  { url: '/ceo-message', changefreq: 'monthly', priority: 0.6 },
  // Add more routes as needed
];

const sitemap = new SitemapStream({ hostname: 'https://abs-construction.vercel.app/' });

streamToPromise(
  sitemap
    .pipe(createWriteStream('./public/sitemap.xml'))
    .on('finish', () => {
      console.log('Sitemap created!');
    })
);

links.forEach(link => sitemap.write(link));
sitemap.end();
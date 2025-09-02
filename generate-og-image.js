// Script to generate Open Graph image for social media sharing
// Creates a 1200x630px image with branding

import { createCanvas } from 'canvas';
import fs from 'fs';

// Create canvas with OG image dimensions
const width = 1200;
const height = 630;
const canvas = createCanvas(width, height);
const ctx = canvas.getContext('2d');

// Background gradient
const gradient = ctx.createLinearGradient(0, 0, width, height);
gradient.addColorStop(0, '#0a0a0a');
gradient.addColorStop(1, '#1a1a2e');
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, width, height);

// Add subtle pattern
ctx.strokeStyle = 'rgba(37, 99, 235, 0.1)';
ctx.lineWidth = 1;
for (let i = 0; i < width; i += 40) {
  ctx.beginPath();
  ctx.moveTo(i, 0);
  ctx.lineTo(i, height);
  ctx.stroke();
}
for (let i = 0; i < height; i += 40) {
  ctx.beginPath();
  ctx.moveTo(0, i);
  ctx.lineTo(width, i);
  ctx.stroke();
}

// Add accent bar
ctx.fillStyle = '#2563eb';
ctx.fillRect(0, 0, width, 8);

// Title
ctx.fillStyle = '#ffffff';
ctx.font = 'bold 72px system-ui, -apple-system, sans-serif';
ctx.textAlign = 'center';
ctx.fillText('TechConcepts', width / 2, 180);

// Tagline
ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
ctx.font = '36px system-ui, -apple-system, sans-serif';
ctx.fillText('Building Revenue-Generating Tech Products', width / 2, 240);

// Stats section
const stats = [
  { label: 'Business Impact', value: '€1.2M' },
  { label: 'ML Accuracy', value: '74-82%' },
  { label: 'Live Products', value: '4+' },
  { label: 'LLM Providers', value: '9' }
];

// Draw stats boxes
const boxWidth = 250;
const boxHeight = 100;
const startX = (width - (boxWidth * 4 + 30 * 3)) / 2;
const startY = 320;

stats.forEach((stat, index) => {
  const x = startX + index * (boxWidth + 30);
  
  // Box background
  ctx.fillStyle = 'rgba(37, 99, 235, 0.1)';
  ctx.fillRect(x, startY, boxWidth, boxHeight);
  
  // Box border
  ctx.strokeStyle = 'rgba(37, 99, 235, 0.3)';
  ctx.lineWidth = 2;
  ctx.strokeRect(x, startY, boxWidth, boxHeight);
  
  // Stat value
  ctx.fillStyle = '#2563eb';
  ctx.font = 'bold 32px system-ui, -apple-system, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(stat.value, x + boxWidth / 2, startY + 40);
  
  // Stat label
  ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
  ctx.font = '18px system-ui, -apple-system, sans-serif';
  ctx.fillText(stat.label, x + boxWidth / 2, startY + 70);
});

// Footer
ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
ctx.font = '24px system-ui, -apple-system, sans-serif';
ctx.textAlign = 'center';
ctx.fillText('Evgeny Goncharov • Madrid, Spain', width / 2, 520);

// Technologies
ctx.font = '20px system-ui, -apple-system, sans-serif';
ctx.fillText('Python • TypeScript • Swift • React • FastAPI • ML • Chrome Extensions', width / 2, 560);

// Save the image
const buffer = canvas.toBuffer('image/png');
fs.writeFileSync('public/og-image.png', buffer);

console.log('✅ OG image created successfully at public/og-image.png');
console.log('📐 Dimensions: 1200x630px');
console.log('📦 Size:', (buffer.length / 1024).toFixed(2), 'KB');
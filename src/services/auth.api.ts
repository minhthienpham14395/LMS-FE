// src/lib/emailjs-config.ts
// ✅ This is the working solution - No process.env in client code!

/**
 * EmailJS Configuration
 * 
 * These values are safe to be public because:
 * 1. publicKey is meant to be public (NEXT_PUBLIC_ prefix)
 * 2. Browser can see it anyway in the source code
 * 3. This is how EmailJS is designed to work
 * 
 * Get these values from: https://dashboard.emailjs.com
 * 1. Public Key: Dashboard → API Keys
 * 2. Service ID: Dashboard → Email Services
 * 3. Template ID: Dashboard → Email Templates
 */

export const emailJSConfig = {
  // ⚠️ IMPORTANT: Replace these with your actual values from EmailJS dashboard
  publicKey: 'YX7CNLtCwgatlT-vz',      // Change this!
  serviceId: 'service_dxk8oo8',                           // Change this!
  templateId: 'template_l3rauzx',                         // Change this!
} as const;

// Validate config on import
if (!emailJSConfig.publicKey || emailJSConfig.publicKey.startsWith('pk_')) {
  console.warn('⚠️ EmailJS publicKey not configured properly. Update emailjs-config.ts');
}

if (!emailJSConfig.serviceId || emailJSConfig.serviceId.startsWith('service_')) {
  console.warn('⚠️ EmailJS serviceId not configured properly. Update emailjs-config.ts');
}

if (!emailJSConfig.templateId || emailJSConfig.templateId.startsWith('template_')) {
  console.warn('⚠️ EmailJS templateId not configured properly. Update emailjs-config.ts');
}

export default emailJSConfig;
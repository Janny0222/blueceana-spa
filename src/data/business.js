// ============================================================
//  Blueceana Spa — Single source of truth for business info.
//  Edit values here and they update across the whole website.
// ============================================================

export const business = {
  name: 'Blueceana Spa',
  tagline: 'Reservation & Home Services',
  shortPitch:
    'Your calming escape in Cabuyao. Relax, refresh, and renew with our soothing massage and spa treatments.',

  // Contact numbers (display + tel: link friendly)
  phones: [
    { label: '0949 585 4130', tel: '+639495854130' },
    { label: '0926 491 3689', tel: '+639264913689' },
  ],

  address: {
    line1: '228 JP Rizal Street',
    line2: 'Brgy. Uno, Cabuyao',
    region: 'Laguna, Philippines',
  },

  // Google Maps links (place + embed)
  maps: {
    placeUrl: 'https://maps.app.goo.gl/?q=Blueceana+Spa+Cabuyao',
    // Embed centered on the spa's coordinates
    embedSrc:
      'https://www.google.com/maps?q=14.2789991,121.1227396&hl=en&z=17&output=embed',
  },

  social: {
    facebook: 'https://www.facebook.com/BlueceanaSpaPH/',
  },

  hours: [
    { day: 'Monday – Sunday', time: '10:00 AM – 12:00 MN' },
  ],

  promo: {
    title: '₱199 Promo Time',
    time: '1:00 PM – 5:00 PM',
    note: 'Applicable for Loyalty Card holders only',
  },
}

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

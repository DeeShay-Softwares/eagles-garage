/**
 * ------------------------------------------------------------------
 * SITE CONTENT / BUSINESS INFO  -> EDIT THIS FILE FIRST
 * ------------------------------------------------------------------
 * Everything the client needs to change (phone, address, services,
 * prices, opening hours) lives here so you never have to dig through
 * the page code. Values marked TODO are PLACEHOLDERS — replace them
 * with the real information from the client.
 */

export const business = {
  name: "Eagles Hybrid Solutions",
  tagline: "Hybrid & petrol vehicle specialists in Masvingo, Zimbabwe",
  // TODO: replace with the real phone number (keep the +263 format for click-to-call)
  phone: "+263 77 000 0000",
  // TODO: replace with the real WhatsApp number (digits only, no + or spaces)
  whatsapp: "263770000000",
  // TODO: replace with the real email address
  email: "info@eagleshybridsolutions.co.zw",
  address: {
    street: "TODO: Shop / stand number, street name", // TODO
    city: "Masvingo",
    region: "Masvingo Province",
    country: "Zimbabwe",
  },
  // TODO: paste the real Google Maps embed link (Google Maps > Share > Embed a map)
  mapEmbedUrl:
    "https://www.google.com/maps?q=Masvingo,Zimbabwe&output=embed",
  hours: [
    { days: "Monday – Friday", time: "08:00 – 17:00" },
    { days: "Saturday", time: "08:00 – 13:00" },
    { days: "Sunday & Public Holidays", time: "Closed (emergency call-outs)" },
  ],
  yearsExperience: "10+", // TODO: confirm with client
};

/** Services shown in the "What we do" section. Add/remove freely. */
export const services = [
  {
    icon: "battery",
    title: "Hybrid Battery Service",
    description:
      "Testing, cell balancing, reconditioning and replacement of hybrid battery packs (Toyota, Honda, Lexus and more).",
  },
  {
    icon: "engine",
    title: "Engine Diagnostics",
    description:
      "Computerised fault scanning for hybrid and petrol engines — we find the real problem before spending your money.",
  },
  {
    icon: "service",
    title: "Full Service & Oil Change",
    description:
      "Manufacturer-schedule servicing: oils, filters, plugs, fluids and a free multi-point safety check.",
  },
  {
    icon: "brakes",
    title: "Brakes & Suspension",
    description:
      "Pads, discs, regenerative braking systems, shocks, bushes and wheel alignment for our rough roads.",
  },
  {
    icon: "electrical",
    title: "Auto Electrical",
    description:
      "Inverters, converters, starters, alternators, wiring faults and warning lights sorted properly.",
  },
  {
    icon: "parts",
    title: "Genuine & Used Parts",
    description:
      "TODO: describe the parts business here (brands stocked, warranty, ordering time).",
  },
];

/** Customer reviews. TODO: swap these placeholders for real testimonials. */
export const testimonials = [
  {
    name: "TODO: Customer name",
    car: "Toyota Aqua",
    quote:
      "TODO: paste a real review here. Keep it short — two sentences works best.",
  },
  {
    name: "TODO: Customer name",
    car: "Honda Fit Hybrid",
    quote: "TODO: paste a real review here.",
  },
  {
    name: "TODO: Customer name",
    car: "Lexus CT200h",
    quote: "TODO: paste a real review here.",
  },
];

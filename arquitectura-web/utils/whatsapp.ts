
export const CONTACT_CONFIG = {
  phone: "5492932547307",
  email: "info@arquitecturaweb.site",
  defaultMessage: "Hola! Vengo desde la web. Quisiera consultar por servicios de arquitectura y desarrollo web profesional.",
  logoUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MDAgMjAwIj4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMCwgNDApIj4KICAgIDwhLS0gSWNvbm8gSXNvbca8dHJpY28gLS0+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLCAxMCkiPgogICAgICA8IS0tIENlbnRybyAvIFRvcCAoQXp1bCBDbGFybykgLS0+CiAgICAgIDxwYXRoIGQ9Ik01MCAwIEw4MCAxNSBMNTAgMzAgTDIwIDE1IFoiIGZpbGw9IiM3Y2I5ZTgiLz4KICAgICAgPHBhdGggZD0iTTUwIDMwIEw4MCAxNSBMODAgNjAgTDUwIDc1IFoiIGZpbGw9IiM2MGE1ZmEiLz4KICAgICAgPHBhdGggZD0iTTUwIDMwIEwyMCAxNSBMMjAgNjAgTDUwIDc1IFoiIGZpbGw9IiM0YjhlYmYiLz4KICAgICAgCiAgICAgIDwhLS0gSXpxdWllcmRhIChBenVsIE9zY3VybykgLS0+CiAgICAgIDxwYXRoIGQ9Ik0yMCA1MCBMMjAgMTEwIEwwIDk1IEwwIDM1IFoiIGZpbGw9IiMxODFmMzgiLz4KICAgICAgPHBhdGggZD0iTTIwIDUwIEw0MCA2NSBMNDAgOTUgTDIwIDgwIFoiIGZpbGw9IiMxODFmMzgiLz4KICAgICAgPHBhdGggZD0iTTAgMzUgTDIwIDUwIEw0MCAzNSBMMjAgMjAgWiIgZmlsbD0iIzA4MTAyOCIvPgogICAgICAKICAgICAgPCEtLSBEZXJlY2hhIChBenVsIE1lZGlvKSAtLT4KICAgICAgPHBhdGggZD0iTTgwIDUwIEw4MCAxMTAgTDEwMCA5NSBMMTAwIDM1IFoiIGZpbGw9IiMyNTQ3OGQiLz4KICAgICAgPHBhdGggZD0iTTgwIDUwIEw2MCA2NSBMNjAgOTUgTDgwIDgwIFoiIGZpbGw9IiMyNTQ3OGQiLz4KICAgICAgPHBhdGggZD0iTTEwMCAzNSBMODAgNTAgTDYwIDM1IEw4MCAyMCBaIiBmaWxsPSIjMWUzYThhIi8+CiAgICA8L2c+CiAgICAKICAgIDwhLS0gVGV4dG8gLS0+CiAgICA8dGV4dCB4PSIxMjAiIHk9IjY1IiBmaWxsPSIjMTgxZjM4IiBmb250LWZhbWlseT0iJ0ludGVyJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI1MiIgZm9udC13ZWlnaHQ9IjcwMCI+QXJxdWl0ZWN0dXJhPC90ZXh0PgogICAgPHRleHQgeD0iMTIwIiB5PSIxMTUiIGZpbGw9IiMxODFmMzgiIGZvbnQtZmFtaWx5PSInSW50ZXInLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjUyIiBmb250LXdlaWdodD0iNTAwIj5XZWI8L3RleHQ+CiAgPC9nPgo8L3N2Zz4=" 
};

export const buildWhatsAppLink = (message?: string): string => {
  const finalMessage = message || CONTACT_CONFIG.defaultMessage;
  return `https://wa.me/${CONTACT_CONFIG.phone}?text=${encodeURIComponent(finalMessage)}`;
};

export const openWhatsApp = (message?: string): void => {
  window.open(buildWhatsAppLink(message), '_blank');
};

/**
 * Opens the default email client with a pre-filled subject and body
 */
export const openEmail = (subject?: string, body?: string): void => {
  const mailto = `mailto:${CONTACT_CONFIG.email}?subject=${encodeURIComponent(subject || '')}&body=${encodeURIComponent(body || '')}`;
  window.location.href = mailto;
};

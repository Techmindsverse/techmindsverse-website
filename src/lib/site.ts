
export const site = {
  name: 'TechMindsVerse',
  fullName: 'Technology Mindset Universe',
  tagline: 'Where Minds Build the Future.',
  description:
    'TechMindsVerse is a technology ecosystem connecting people, ideas, skills, and opportunities through practical learning, digital solutions, product development, collaboration, and innovation.',

  email: 'techmindsverse@gmail.com',

  url:
    process.env.NEXT_PUBLIC_SITE_URL ||
    'https://techmindsverse-website.vercel.app',

  os: 'https://techmindsverse-os.vercel.app/',

  community:
    'https://chat.whatsapp.com/GaIXQOrgY8W4VYAYYUsApH?s=cl&p=a&mlu=4&ilr=4',

  // Add verified links when available.
  calendly: '',
  formspree: '',
  academyForm: '',
  eventForm: '',

  socials: {
    linkedin: '',
    x: '',
    instagram: '',
    tiktok: '',
    youtube: '',
    facebook: '',
  },
} as const;

export const nav = [
  { label: 'About', href: '/about' },
  { label: 'Academy', href: '/academy' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Events', href: '/events' },
  { label: 'Community', href: '/community' },
] as const;

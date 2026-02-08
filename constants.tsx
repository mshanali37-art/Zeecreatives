import React from 'react';
import { Project, SideProject } from './types';

export const COLORS = {
  accent: '#ccff00', // Neon green
  bgDark: '#000000',
  bgDeep: '#062a1a',
  textMain: '#f3f4f6',
  textMuted: '#9ca3af',
};

export const LINKS = {
  upwork: 'https://www.upwork.com/freelancers/~0179303185f2a7fe3d',
  figma: 'https://www.figma.com/design/ayIH64prWkftAzhBc6GcKy/Portfolio-Extended',
  linkedin: 'https://linkedin.com',
  behance: 'https://behance.net',
  instagram: 'https://instagram.com',
  dribbble: 'https://dribbble.com',
  email: 'mailto:mshanali37@gmail.com'
};

export const STATS = {
  earnings: '$20K+',
  jobs: '60+',
  jss: '100%',
  status: 'Top Rated'
};

export const TESTIMONIALS = [
  {
    id: 1,
    client: "Luxury Client",
    comment: "Great work, great communication and very accommodating of revisions. Excellent performance.",
    rating: 5,
    project: "Klaviyo Email Design Refresh"
  },
  {
    id: 2,
    client: "E-commerce Founder",
    comment: "Freelancer and amazing to work with. He knows Klaviyo very well. I am satisfied with the completion of the project.",
    rating: 5,
    project: "Klaviyo Flows Setup"
  },
  {
    id: 3,
    client: "Brand Manager",
    comment: "Zee is wonderful. I will use his services again. Highly professional and timely.",
    rating: 5,
    project: "Klaviyo Design Edit"
  },
  {
    id: 4,
    client: "Marketing Director",
    comment: "Excellent work on our email newsletter. Highly recommended for premium brands.",
    rating: 5,
    project: "Luxury Newsletter Design"
  }
];

export const EXPERIENCE_HISTORY = [
  {
    role: "Email Marketing specialist",
    company: "Private Freelance",
    period: "May 2019 - Present",
    description: "Spearheading retention strategies for global brands, focusing on MBA-driven marketing logic and high-end visual conversion."
  },
  {
    role: "Klaviyo specialist",
    company: "FLorence by mills",
    period: "Jan 2022 - Feb 2022",
    description: "Managed sophisticated email segmentation and design for the celebrity beauty brand."
  },
  {
    role: "Klaviyo email marketer",
    company: "Fiverr / Global Clients",
    period: "Apr 2021 - Jan 2022",
    description: "Executed hundreds of email campaigns and automated flows with a focus on deliverability and design."
  }
];

export const BUDDABOMB_CAMPAIGNS = [
  {
    id: 'bb-retention-01',
    title: "Retention Strategy Main",
    category: "Featured Campaign",
    imageUrl: "https://lh3.googleusercontent.com/d/1EJ-Vcv3M9lVEd28gzVVRt4A2ovXAXZrJ"
  },
  {
    id: 'bb-lifecycle-01',
    title: "Lifecycle Funnel Architecture",
    category: "Strategic Automation",
    imageUrl: "https://lh3.googleusercontent.com/d/1qix0Gmxn0VftoLoR4dx2cCFYS40Ur6p_"
  },
  {
    id: 'bb-conversion-01',
    title: "Conversion Focused Creative",
    category: "Performance Marketing",
    imageUrl: "https://lh3.googleusercontent.com/d/1A9rRz1FqXCdDssxTs3N2WJx72TeNJNHR"
  },
  {
    id: 'bb-high-impact-01',
    title: "High-Impact Retail Visual",
    category: "Retail Design",
    imageUrl: "https://lh3.googleusercontent.com/d/1HsOggKIT8VTffPpiZ121VMhs1eg7D8rr"
  },
  {
    id: 'bb-seasonal-prod-01',
    title: "Seasonal Product Launch",
    category: "Marketing Strategy",
    imageUrl: "https://lh3.googleusercontent.com/d/15aIWlpKyc8f2VZTu1X5BzgnEM-rgVU9l"
  },
  {
    id: 'bb-loyalty-flow-01',
    title: "Brand Loyalty Flow",
    category: "Retention Logic",
    imageUrl: "https://lh3.googleusercontent.com/d/1I1i6KfA7bGTqkZEKf7fGo3RcoPiUneKU"
  },
  {
    id: 'bb-acquisition-01',
    title: "Digital Acquisition Asset",
    category: "Growth Marketing",
    imageUrl: "https://lh3.googleusercontent.com/d/1R9WlLuN-yhzm5hqucTnm8hgABv9Q9afA"
  },
  {
    id: 'bb-retention-loop-01',
    title: "Retention Loop Creative",
    category: "Customer Lifecycle",
    imageUrl: "https://lh3.googleusercontent.com/d/1nFDBIWZ6wRs2oJUuLPcycbEkEWlLCOUF"
  },
  {
    id: 'bb-performance-01',
    title: "Performance Graphic",
    category: "Conversion Design",
    imageUrl: "https://lh3.googleusercontent.com/d/1fsrkcAIQamKFUaqJ1fQDanmYzoIkCvss"
  }
];

export const GOGOOD_CAMPAIGNS = [
  {
    id: 'gg-featured-01',
    title: "Core Lifecycle Visual",
    description: "Primary marketing asset for lifecycle automation and customer retention.",
    imageUrl: "https://lh3.googleusercontent.com/d/1_fnG1bkaonoXflJIjNLk5i1q79N6dJCk"
  },
  {
    id: 'gg-campaign-01',
    title: "Performance Marketing Flow",
    description: "Strategic email sequence designed for high-end conversion and brand storytelling.",
    imageUrl: "https://lh3.googleusercontent.com/d/1BpWeW0L8sYlyeLty9aXfu7xZZF8n2rxI"
  },
  {
    id: 'gg-campaign-02',
    title: "Retention Engagement Asset",
    description: "Visual communication focused on user longevity and product education.",
    imageUrl: "https://lh3.googleusercontent.com/d/19iJm6IcRxbSRVmPv1UoEZn9BsZGWDG5u"
  },
  {
    id: 'gg-campaign-03',
    title: "Conversion Content Study",
    description: "Multi-channel marketing creative with premium aesthetic and clear CTA.",
    imageUrl: "https://lh3.googleusercontent.com/d/1yObFx67ETqR_PgS7WjqNBm6bBpU3yH86"
  },
  {
    id: 'gg-campaign-04',
    title: "Strategic Lifecycle Series",
    description: "Automated sequence visuals that bridge brand value and customer needs.",
    imageUrl: "https://lh3.googleusercontent.com/d/1hawK3DrQoKktIyp-UD20pI3nuTbnt9Ch"
  },
  {
    id: 'gg-campaign-05',
    title: "Acquisition Brand Creative",
    description: "High-impact visual designed to lower acquisition costs through strong identity.",
    imageUrl: "https://lh3.googleusercontent.com/d/1bRbKAJXpf5oa8u6taNM_OVElOIGrqs_V"
  },
  {
    id: 'gg-campaign-06',
    title: "Loyalty Loop Design",
    description: "Visual elements for VIP and loyalty tiers to boost customer LTV.",
    imageUrl: "https://lh3.googleusercontent.com/d/15jDd2OsJuKH5efgRy17bQIEEcLyg1Sa3"
  },
  {
    id: 'gg-campaign-07',
    title: "Educational Content Flow",
    description: "Visual storytelling that educates users while driving product discovery.",
    imageUrl: "https://lh3.googleusercontent.com/d/1UUqEzfrnoPl1F1baJS3-mfSTc2j5EbrW"
  },
  {
    id: 'gg-campaign-08',
    title: "Premium Growth Asset",
    description: "Clean, high-end visual design for sophisticated marketing automation.",
    imageUrl: "https://lh3.googleusercontent.com/d/1df7g5y_9uWY8z3rLM0Va4hdP0X1zPnk7"
  }
];

export const FIT_FIGHTER_CAMPAIGNS = [
  {
    id: 'ff-brand-01',
    title: "Brand Identity Core",
    description: "Primary logo marks and high-energy visual system for Fit Fighter.",
    imageUrl: "https://lh3.googleusercontent.com/d/1acD8kuNgfdK9-3gYoK009Jk35fa_ajD3"
  },
  {
    id: 'ff-social-01',
    title: "Social Motion Static",
    description: "Impactful social media templates designed for maximum engagement.",
    imageUrl: "https://lh3.googleusercontent.com/d/11cFmW_mmHeDKaX2HkUhA_Lnqx03DXwtp"
  },
  {
    id: 'ff-event-01',
    title: "Event & Promo",
    description: "Digital collateral for fight nights and gym activations.",
    imageUrl: "https://lh3.googleusercontent.com/d/1N6SSA22jhlGN8cZJizCLfEQOm5iP0rVH"
  },
  {
    id: 'ff-apparel-01',
    title: "Performance Apparel",
    description: "Merchandise design concepts for the fitness lifestyle sector.",
    imageUrl: "https://lh3.googleusercontent.com/d/1qXG-WSCqFBdu35TK6deroOeJUQaCYr0G"
  },
  {
    id: 'ff-digital-01',
    title: "Digital Campaign",
    description: "Conversion-optimized web banners and ad creatives.",
    imageUrl: "https://lh3.googleusercontent.com/d/1gaQy3PPk1fgvQsK4ItloLkOns7kT-3BU"
  }
];

export const GORAL_CAMPAIGNS = [
  {
    id: 'gr-social-01',
    title: "Social Media Impact",
    description: "High-contrast social media visuals designed to stop the scroll.",
    imageUrl: "https://lh3.googleusercontent.com/d/11cFmW_mmHeDKaX2HkUhA_Lnqx03DXwtp"
  },
  {
    id: 'gr-brand-01',
    title: "Brand Identity Hero",
    description: "Core brand imagery establishing the premium handcrafted aesthetic of GORAL.",
    imageUrl: "https://lh3.googleusercontent.com/d/1rrF4WBQ-CXRAZnE91mEtWrj0RJ_8vuHz"
  },
  {
    id: 'gr-product-01',
    title: "Product Direction",
    description: "Clean, studio-quality product presentation focusing on material details.",
    imageUrl: "https://lh3.googleusercontent.com/d/1WTaGDpOLPWdVYSJ0WqrLuH5-bLG1roWx"
  },
  {
    id: 'gr-lifestyle-01',
    title: "Lifestyle Campaign",
    description: "Editorial style imagery connecting the product to a modern urban lifestyle.",
    imageUrl: "https://lh3.googleusercontent.com/d/15Mf1_WZaWdM_fBNjpKgWhidiML45w7BG"
  },
  {
    id: 'gr-web-01',
    title: "Digital Storefront",
    description: "UI/UX design elements for the e-commerce platform.",
    imageUrl: "https://lh3.googleusercontent.com/d/10-Vkxm3MuBR8WYJx4fEEdoEU_kpR-8Go"
  },
  {
    id: 'gr-email-01',
    title: "Email Marketing",
    description: "Retention-focused email template design for product drops.",
    imageUrl: "https://lh3.googleusercontent.com/d/1TUJ3x8KxMBHXJpIbTPGjpVIEjB8gBNlg"
  },
  {
    id: 'gr-packaging-01',
    title: "Packaging Experience",
    description: "Unboxing experience design and physical collateral.",
    imageUrl: "https://lh3.googleusercontent.com/d/1mSZ6jWmKAsxr18_CNlxWtu241WVkx-kh"
  }
];

export const CUPPINGS_CAMPAIGNS = [
  {
    id: 'cp-hero-01',
    title: "Brand Visual System",
    description: "Core identity system establishing the premium, wellness-focused aesthetic.",
    imageUrl: "https://lh3.googleusercontent.com/d/1DOmBIzg-LGhkSXw_Xar3uX3sKKWF_-f-"
  },
  {
    id: 'cp-pack-01',
    title: "Packaging Suite",
    description: "Minimalist packaging design focusing on tactile experience and clarity.",
    imageUrl: "https://lh3.googleusercontent.com/d/1ZiheoR9tnifooBLW9_XK9RTgNIhL9Q81"
  },
  {
    id: 'cp-identity-01',
    title: "Visual Identity",
    description: "Logomarks, typography, and color palette definition.",
    imageUrl: "https://lh3.googleusercontent.com/d/13Rzawg9MjNjc0KkmjRmtugKe08hrlYML"
  },
  {
    id: 'cp-prod-01',
    title: "Product Detail",
    description: "High-fidelity product rendering and presentation.",
    imageUrl: "https://lh3.googleusercontent.com/d/1q_EbTfqTCFXxUe4iyas_db5yw3QXjHfz"
  },
  {
    id: 'cp-social-01',
    title: "Social Engagement",
    description: "Instagram and social media content strategy visuals.",
    imageUrl: "https://lh3.googleusercontent.com/d/1rPOoXl6IJJj_3xPe8aUse9irq9mrk78m"
  },
  {
    id: 'cp-life-01',
    title: "Lifestyle Imagery",
    description: "Art direction for lifestyle photography and brand atmosphere.",
    imageUrl: "https://lh3.googleusercontent.com/d/1y3Blf_AhxxyNKFi3HxqdwiZi2a1MkEFF"
  },
  {
    id: 'cp-market-01',
    title: "Marketing Collateral",
    description: "Print and digital assets for promotional campaigns.",
    imageUrl: "https://lh3.googleusercontent.com/d/1ZJ1sKGke-n_nV5yr1jrjERihr9Odoo22"
  },
  {
    id: 'cp-patt-01',
    title: "Brand Pattern",
    description: "Custom illustrative patterns used across packaging and web.",
    imageUrl: "https://lh3.googleusercontent.com/d/1Ga-IM8tNbI7Jl3UW6daJ2lBlDQcxTMxY"
  },
  {
    id: 'cp-type-01',
    title: "Typographic System",
    description: "Clean, modern typography usage in brand communications.",
    imageUrl: "https://lh3.googleusercontent.com/d/1o3y_C4OCdF8rzwwh-l0ymUpif-jVJuFr"
  },
  {
    id: 'cp-digi-01',
    title: "Digital Presence",
    description: "Web and app interface concepts for the brand.",
    imageUrl: "https://lh3.googleusercontent.com/d/1Sf742E8fzJzrGcrHMywAbtZWIAMkh8II"
  },
  {
    id: 'cp-print-01',
    title: "Print Design",
    description: "Brochures, cards, and physical touchpoints.",
    imageUrl: "https://lh3.googleusercontent.com/d/1K90ZXV_pBRQnHvloj2CVDQnNpHDcygOR"
  },
  {
    id: 'cp-merch-01',
    title: "Merchandise Concept",
    description: "Branded apparel and accessory concepts.",
    imageUrl: "https://lh3.googleusercontent.com/d/16K1oZwsZd4nbJxko-MnTeyvkKUkLBuVA"
  },
  {
    id: 'cp-camp-01',
    title: "Campaign Visual",
    description: "Key visual for seasonal launch campaign.",
    imageUrl: "https://lh3.googleusercontent.com/d/1NwoAoO0A_mPruHZ36HbczajB4rzIxzr5"
  },
  {
    id: 'cp-guide-01',
    title: "Brand Guidelines",
    description: "Comprehensive style guide for brand consistency.",
    imageUrl: "https://lh3.googleusercontent.com/d/1VXwsI-i6bS6OWmXT6LEztHVV2QUPc2Yz"
  }
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: 1,
    title: 'BUUDABOMB',
    category: 'RETENTION & LIFECYCLE MARKETING',
    description: 'A comprehensive retention strategy that transformed customer churn into long-term loyalty through high-conversion visual storytelling and behavioral automation.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1EJ-Vcv3M9lVEd28gzVVRt4A2ovXAXZrJ'
  },
  {
    id: 2,
    title: 'GOGOOD CAMPAIGNS',
    category: 'Marketing Automation',
    description: 'Specialized retention and acquisition email flows designed to drive long-term customer value through premium brand aesthetic and strategic clarity.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1_fnG1bkaonoXflJIjNLk5i1q79N6dJCk'
  },
  {
    id: 3,
    title: 'FIT FIGHTER',
    category: 'Brand Identity & Social',
    description: 'A complete visual overhaul for a combat sports lifestyle brand. This project merged aggressive, high-energy aesthetics with clean, functional design systems for web and apparel.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1acD8kuNgfdK9-3gYoK009Jk35fa_ajD3'
  },
  {
    id: 4,
    title: 'GORAL',
    category: 'Footwear Identity',
    description: 'A distinct visual identity system for a heritage footwear brand, blending traditional craftsmanship with modern streetwear aesthetics.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1rrF4WBQ-CXRAZnE91mEtWrj0RJ_8vuHz'
  },
  {
    id: 5,
    title: 'CUPPINGS',
    category: 'Branding & Packaging',
    description: 'A comprehensive branding and packaging suite designed to elevate a modern wellness brand. The visual identity balances organic warmth with premium minimalism, creating a serene yet impactful consumer experience.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1DOmBIzg-LGhkSXw_Xar3uX3sKKWF_-f-'
  }
];

export const WALL_IMAGES = [
  { url: "https://lh3.googleusercontent.com/d/1EJ-Vcv3M9lVEd28gzVVRt4A2ovXAXZrJ", name: "Retention Strategy" },
  { url: "https://lh3.googleusercontent.com/d/1qix0Gmxn0VftoLoR4dx2cCFYS40Ur6p_", name: "Lifecycle Funnel" },
  { url: "https://lh3.googleusercontent.com/d/1A9rRz1FqXCdDssxTs3N2WJx72TeNJNHR", name: "Conversion Creative" },
  { url: "https://lh3.googleusercontent.com/d/1HsOggKIT8VTffPpiZ121VMhs1eg7D8rr", name: "High-Impact Retail" },
  { url: "https://lh3.googleusercontent.com/d/15aIWlpKyc8f2VZTu1X5BzgnEM-rgVU9l", name: "Seasonal Launch" },
  { url: "https://lh3.googleusercontent.com/d/1I1i6KfA7bGTqkZEKf7fGo3RcoPiUneKU", name: "Brand Loyalty" },
  { url: "https://lh3.googleusercontent.com/d/1R9WlLuN-yhzm5hqucTnm8hgABv9Q9afA", name: "Digital Acquisition" },
  { url: "https://lh3.googleusercontent.com/d/1nFDBIWZ6wRs2oJUuLPcycbEkEWlLCOUF", name: "Retention Loop" },
  { url: "https://lh3.googleusercontent.com/d/1fsrkcAIQamKFUaqJ1fQDanmYzoIkCvss", name: "Performance Graphic" },
  { url: "https://lh3.googleusercontent.com/d/1_fnG1bkaonoXflJIjNLk5i1q79N6dJCk", name: "Core Lifecycle" },
  { url: "https://lh3.googleusercontent.com/d/1BpWeW0L8sYlyeLty9aXfu7xZZF8n2rxI", name: "Performance Flow" },
  { url: "https://lh3.googleusercontent.com/d/19iJm6IcRxbSRVmPv1UoEZn9BsZGWDG5u", name: "Retention Engagement" },
  { url: "https://lh3.googleusercontent.com/d/1yObFx67ETqR_PgS7WjqNBm6bBpU3yH86", name: "Conversion Content" },
  { url: "https://lh3.googleusercontent.com/d/1hawK3DrQoKktIyp-UD20pI3nuTbnt9Ch", name: "Strategic Lifecycle" },
  { url: "https://lh3.googleusercontent.com/d/1bRbKAJXpf5oa8u6taNM_OVElOIGrqs_V", name: "Acquisition Brand" },
  { url: "https://lh3.googleusercontent.com/d/15jDd2OsJuKH5efgRy17bQIEEcLyg1Sa3", name: "Loyalty Loop" },
  { url: "https://lh3.googleusercontent.com/d/1UUqEzfrnoPl1F1baJS3-mfSTc2j5EbrW", name: "Educational Flow" },
  { url: "https://lh3.googleusercontent.com/d/1df7g5y_9uWY8z3rLM0Va4hdP0X1zPnk7", name: "Premium Growth" },
  { url: "https://lh3.googleusercontent.com/d/1acD8kuNgfdK9-3gYoK009Jk35fa_ajD3", name: "Fit Fighter Identity" },
  { url: "https://lh3.googleusercontent.com/d/11cFmW_mmHeDKaX2HkUhA_Lnqx03DXwtp", name: "Social Motion" },
  { url: "https://lh3.googleusercontent.com/d/1N6SSA22jhlGN8cZJizCLfEQOm5iP0rVH", name: "Event & Promo" },
  { url: "https://lh3.googleusercontent.com/d/1qXG-WSCqFBdu35TK6deroOeJUQaCYr0G", name: "Performance Apparel" },
  { url: "https://lh3.googleusercontent.com/d/1gaQy3PPk1fgvQsK4ItloLkOns7kT-3BU", name: "Digital Campaign" },
  { url: "https://lh3.googleusercontent.com/d/1rrF4WBQ-CXRAZnE91mEtWrj0RJ_8vuHz", name: "Goral Identity" },
  { url: "https://lh3.googleusercontent.com/d/1WTaGDpOLPWdVYSJ0WqrLuH5-bLG1roWx", name: "Product Direction" },
  { url: "https://lh3.googleusercontent.com/d/15Mf1_WZaWdM_fBNjpKgWhidiML45w7BG", name: "Lifestyle Campaign" },
  { url: "https://lh3.googleusercontent.com/d/10-Vkxm3MuBR8WYJx4fEEdoEU_kpR-8Go", name: "Digital Storefront" },
  { url: "https://lh3.googleusercontent.com/d/1TUJ3x8KxMBHXJpIbTPGjpVIEjB8gBNlg", name: "Email Marketing" },
  { url: "https://lh3.googleusercontent.com/d/1mSZ6jWmKAsxr18_CNlxWtu241WVkx-kh", name: "Packaging Experience" },
  { url: "https://lh3.googleusercontent.com/d/1DOmBIzg-LGhkSXw_Xar3uX3sKKWF_-f-", name: "Cuppings Brand System" },
  { url: "https://lh3.googleusercontent.com/d/1ZiheoR9tnifooBLW9_XK9RTgNIhL9Q81", name: "Packaging Suite" },
  { url: "https://lh3.googleusercontent.com/d/13Rzawg9MjNjc0KkmjRmtugKe08hrlYML", name: "Visual Identity" },
  { url: "https://lh3.googleusercontent.com/d/1q_EbTfqTCFXxUe4iyas_db5yw3QXjHfz", name: "Product Detail" },
  { url: "https://lh3.googleusercontent.com/d/1rPOoXl6IJJj_3xPe8aUse9irq9mrk78m", name: "Social Engagement" },
  { url: "https://lh3.googleusercontent.com/d/1y3Blf_AhxxyNKFi3HxqdwiZi2a1MkEFF", name: "Lifestyle Imagery" },
  { url: "https://lh3.googleusercontent.com/d/1ZJ1sKGke-n_nV5yr1jrjERihr9Odoo22", name: "Marketing Collateral" },
  { url: "https://lh3.googleusercontent.com/d/1Ga-IM8tNbI7Jl3UW6daJ2lBlDQcxTMxY", name: "Brand Pattern" },
  { url: "https://lh3.googleusercontent.com/d/1o3y_C4OCdF8rzwwh-l0ymUpif-jVJuFr", name: "Typographic System" },
  { url: "https://lh3.googleusercontent.com/d/1Sf742E8fzJzrGcrHMywAbtZWIAMkh8II", name: "Digital Presence" },
  { url: "https://lh3.googleusercontent.com/d/1K90ZXV_pBRQnHvloj2CVDQnNpHDcygOR", name: "Print Design" },
  { url: "https://lh3.googleusercontent.com/d/16K1oZwsZd4nbJxko-MnTeyvkKUkLBuVA", name: "Merchandise Concept" },
  { url: "https://lh3.googleusercontent.com/d/1NwoAoO0A_mPruHZ36HbczajB4rzIxzr5", name: "Campaign Visual" },
  { url: "https://lh3.googleusercontent.com/d/1VXwsI-i6bS6OWmXT6LEztHVV2QUPc2Yz", name: "Brand Guidelines" }
];
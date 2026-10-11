export interface PortfolioItem {
  id: string;
  title: string;
  slug: string;
  type: 'WORKSHOP' | 'ACTIVITY' | 'INSTAGRAM';
  status: 'UPCOMING' | 'COMPLETED' | 'DRAFT';
  category?: string;
  eventDate?: string;
  eventTime?: string;
  location?: string;
  summary?: string;
  content?: string;
  coverImageUrl?: string;
  galleryImages: string[];
  instagramUrl?: string;
  ctaText?: string;
  ctaUrl?: string;
  isFeatured: number;
  isPublished: number;
  orderIndex: number;
  createdAt?: string | number;
}

function getApiUrl(path: string): string {
  const rawBase = import.meta.env.VITE_API_URL || 'https://api.the-kidpreneur-journey.com';
  // Strip any trailing /api or slash to get origin/base
  const cleanBase = rawBase.replace(/\/api\/?$/, '').replace(/\/$/, '');
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${cleanBase}/api${cleanPath}`;
}

export async function fetchPortfolioItems(params?: {
  type?: string;
  status?: string;
  featured?: boolean;
}): Promise<PortfolioItem[]> {
  try {
    const url = new URL(getApiUrl('/portfolio'));
    if (params?.type && params.type !== 'ALL') url.searchParams.set('type', params.type);
    if (params?.status && params.status !== 'ALL') url.searchParams.set('status', params.status);
    if (params?.featured) url.searchParams.set('featured', '1');

    const res = await fetch(url.toString(), {
      headers: { 'Accept': 'application/json' },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch portfolio: ${res.statusText}`);
    }

    const data = await res.json();
    return data.items || [];
  } catch (error) {
    console.error('fetchPortfolioItems error:', error);
    return [];
  }
}

export async function fetchPortfolioItemBySlug(slug: string): Promise<PortfolioItem | null> {
  try {
    const url = getApiUrl(`/portfolio/${slug}`);
    const res = await fetch(url, {
      headers: { 'Accept': 'application/json' },
    });

    if (!res.ok) {
      if (res.status === 404) return null;
      throw new Error(`Failed to fetch item: ${res.statusText}`);
    }

    const data = await res.json();
    return data.item || null;
  } catch (error) {
    console.error('fetchPortfolioItemBySlug error:', error);
    return null;
  }
}

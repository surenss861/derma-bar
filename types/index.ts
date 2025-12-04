export interface Service {
  id: string
  name: string
  slug: string
  description: string
  category: 'injectables' | 'skin' | 'body' | 'laser'
  image?: string
  benefits: string[]
  duration?: string
  price?: string
}

export interface Testimonial {
  id: string
  name: string
  location: string
  rating: number
  text: string
  service: string
  image?: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  credentials: string[]
  bio: string
  image: string
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  author: string
  publishedAt: string
  image?: string
  tags: string[]
}


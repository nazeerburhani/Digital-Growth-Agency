
export interface ServiceCard {
  title: string;
  description: string;
  icon: string;
}

export interface StatItem {
  label: string;
  value: string;
  suffix?: string;
}

export interface Project {
  title: string;
  category: string;
  imageUrl: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
}

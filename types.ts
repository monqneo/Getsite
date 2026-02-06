export interface Course {
  icon: string;
  title: string;
  description: string;
  color: string;
}

export interface PricingPlan {
  name: string;
  subtitle: string;
  price: string;
  period: string;
  features: string[];
  popular: boolean;
  color: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

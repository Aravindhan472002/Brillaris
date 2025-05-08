export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  service: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  image: string;
  features: string[];
}

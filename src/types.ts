export type CurrencyCode = 'USD' | 'EUR' | 'GBP' | 'SGD' | 'AUD' | 'JPY';

export interface CurrencyConfig {
  code: CurrencyCode;
  name: string;
  symbol: string;
  flag: string;
  rateToUSD: number;
}

export interface Transaction {
  id: string;
  type: 'inflow' | 'outflow';
  title: string;
  counterparty: string;
  amountUSD: number;
  date: string;
  category: string;
  status: 'completed' | 'processing';
}

export interface BusinessApplication {
  businessName: string;
  country: string;
  industry: string;
  monthlyVolume: string;
  email: string;
  phone: string;
}

export type ActiveNavTab = 'Home' | 'About Us' | 'Contact Us';

export type ModalType = 
  | null 
  | 'top_up' 
  | 'transfer' 
  | 'more_options' 
  | 'become_client' 
  | 'register' 
  | 'about' 
  | 'about_us'
  | 'contact_us'
  | 'features' 
  | 'pricing' 
  | 'article' 
  | 'statement';


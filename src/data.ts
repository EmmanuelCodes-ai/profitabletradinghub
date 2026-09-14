import { CurrencyConfig, CurrencyCode, Transaction } from './types';

export const INITIAL_BALANCE_USD = 418875.00;

export const CURRENCIES: Record<CurrencyCode, CurrencyConfig> = {
  USD: { code: 'USD', name: 'US Dollar', symbol: '$', flag: '🇺🇸', rateToUSD: 1.0 },
  EUR: { code: 'EUR', name: 'Euro', symbol: '€', flag: '🇪🇺', rateToUSD: 0.92 },
  GBP: { code: 'GBP', name: 'British Pound', symbol: '£', flag: '🇬🇧', rateToUSD: 0.79 },
  SGD: { code: 'SGD', name: 'Singapore Dollar', symbol: 'S$', flag: '🇸🇬', rateToUSD: 1.35 },
  AUD: { code: 'AUD', name: 'Australian Dollar', symbol: 'A$', flag: '🇦🇺', rateToUSD: 1.52 },
  JPY: { code: 'JPY', name: 'Japanese Yen', symbol: '¥', flag: '🇯🇵', rateToUSD: 154.2 },
};

export const RECENT_TRANSACTIONS: Transaction[] = [
  {
    id: 'tx-101',
    type: 'inflow',
    title: 'Global Checkout Settlement',
    counterparty: 'Shopify Merchant Gateway',
    amountUSD: 84250.00,
    date: 'Today, 14:23',
    category: 'E-commerce Settlement',
    status: 'completed'
  },
  {
    id: 'tx-102',
    type: 'inflow',
    title: 'Cross-Border Wire (SEPA)',
    counterparty: 'Nordic Digital Holding AB',
    amountUSD: 119400.00,
    date: 'Today, 10:15',
    category: 'B2B Enterprise Invoice',
    status: 'completed'
  },
  {
    id: 'tx-103',
    type: 'outflow',
    title: 'Automated Global Payroll',
    counterparty: 'Deel Contractor Batch',
    amountUSD: 42100.00,
    date: 'Yesterday, 18:40',
    category: 'Treasury Payout',
    status: 'completed'
  },
  {
    id: 'tx-104',
    type: 'inflow',
    title: 'Stripe Connect Multi-currency',
    counterparty: 'Stripe Inc.',
    amountUSD: 93800.00,
    date: 'Yesterday, 09:30',
    category: 'Marketplace Payout',
    status: 'completed'
  },
  {
    id: 'tx-105',
    type: 'outflow',
    title: 'AWS Enterprise Infrastructure',
    counterparty: 'Amazon Web Services EMEA',
    amountUSD: 8425.00,
    date: 'Sep 02, 2026',
    category: 'Cloud Services',
    status: 'completed'
  }
];

export const FEATURES = [
  {
    id: 'multi-currency',
    title: 'Global Multi-Currency Treasury',
    badge: 'Unified Liquidity',
    description: 'Collect, hold, and disburse in 36+ currencies with local domestic banking coordinates in US, UK, EU, Singapore, and Australia.',
    stat: '36+ Currencies'
  },
  {
    id: 'instant-settlement',
    title: 'Next-Gen Instant Settlement Rails',
    badge: 'Zero Waiting',
    description: 'Eliminate multi-day settlement delays. Route high-volume transactions via FedNow, SEPA Instant, and SWIFT gpi in sub-second speeds.',
    stat: '< 2.4s Average'
  },
  {
    id: 'api-first',
    title: 'Developer-First Payment APIs',
    badge: 'SDKs & Webhooks',
    description: 'Modern REST & GraphQL APIs with client SDKs in React, Node, Python, and Go. Integrate in minutes with 99.999% uptime SLA.',
    stat: '99.999% SLA'
  },
  {
    id: 'fraud-shield',
    title: 'Adaptive Machine Learning Fraud Shield',
    badge: 'PCI-DSS Level 1',
    description: 'Bank-grade biometric validation, 3D Secure 2.3, and real-time risk scoring that drops false decline rates by 68%.',
    stat: '0.01% Chargeback'
  }
];

export const SINGLE_PROGRAM_OFFER = {
  name: 'Profitable Trading mentorship cohort',
  price: '$1,500',
  period: 'One-Time Complete Investment',
  tagline: 'The only trading mentorship program you will ever need. Zero recurring fees.',
  seatsRemaining: 7,
  totalCohortSeats: 25,
  features: [
    'Lifetime Access to Mechanical Trading Model',
    'Weekly Private Trade Journal Desk Audits',
    'London & New York Institutional Session Execution Framework',
    'Mechanical trading model',
    'Prop Firm Evaluation Scaling ($100K - $400K Allocations)',
    'Direct Desk Telegram & Discord Head Trader Channel'
  ]
};

export const PRICING_TIERS = [
  {
    name: 'Profitable Trading mentorship cohort',
    tagline: 'The only mentorship program you will ever need. Lifetime access, zero recurring fees.',
    rate: '$1,500',
    fxFee: 'One-Time Payment',
    monthlyFee: '$0 / mo',
    features: [
      'Full Mechanical Trading Model Strategy & Playbook',
      'Weekly Private Trade Journal Audits',
      'London & NY Session Execution Blueprint',
      'Prop Firm Funding & Drawdown Risk Sizing ($100k-$400k)',
      'Direct Desk Discord & Telegram Access'
    ],
    popular: true
  }
];

export const ARTICLES = [
  {
    id: 'art-1',
    title: 'How 250,000 Global Businesses Saved 78% on Cross-Border FX Fees',
    readTime: '4 min read',
    category: 'Treasury & FX',
    summary: 'Traditional correspondent banking drains up to 3.5% on cross-border conversion. Discover how modern liquidity routing keeps your margins intact.',
    date: 'Sep 02, 2026'
  },
  {
    id: 'art-2',
    title: 'The Shift to Real-Time Rails: FedNow, SEPA Instant, and ISO 20022',
    readTime: '6 min read',
    category: 'Infrastructure',
    summary: 'A deep dive into why batch processing is obsolete and how instant liquidity transforms working capital efficiency for digital enterprises.',
    date: 'Aug 28, 2026'
  },
  {
    id: 'art-3',
    title: 'Building Frictionless Checkout Experiences That Maximize Conversion',
    readTime: '5 min read',
    category: 'Product & UX',
    summary: 'How one-click local payment methods like Apple Pay, iDEAL, and PIX drive a 24% lift in checkout completion rates across international markets.',
    date: 'Aug 20, 2026'
  }
];

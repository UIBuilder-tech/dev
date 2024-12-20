export interface DonationItem {
  id: string;
  name: string;
  amount: number;
  description?: string;
  hasQuantity?: boolean;
}

export interface DonationSubcategory {
  id: string;
  name: string;
  items: DonationItem[];
}

export interface DonationCategory {
  id: string;
  name: string;
  items?: DonationItem[];
  subcategories?: DonationSubcategory[];
}
export interface ServiceCategory {
  title: string;
  items: string[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    title: 'Document & Forms',
    items: [
      'Document Printing',
      'Company Forms',
      'School Forms and Printing Needs'
    ]
  },
  {
    title: 'ID & Cards',
    items: [
      'PVC ID Packages',
      'Calling Cards'
    ]
  },
  {
    title: 'Apparel & Products',
    items: [
      'T-shirt Printing',
      'Customized Printing',
      'Mugs and Drinkwares Printing'
    ]
  },
  {
    title: 'Signage & Display',
    items: [
      'Laser Engraving',
      'UV Print',
      'Tarpaulins',
      'Indoor and Outdoor Signages'
    ]
  },
  {
    title: 'Special Services',
    items: [
      'Awards and Recognition Printing',
      'Souvenirs & Company Giveaways',
      'Photography & Frame Services',
      'Canon Printer Supplier'
    ]
  }
];

export const servicesOverview: string[] = [
  'Document Printing',
  'Company Forms',
  'School Forms',
  'PVC ID Packages',
  'T-shirt Printing',
  'Laser Engraving',
  'UV Print',
  'Awards and Recognition',
  'Customized Printing',
  'Souvenirs & Giveaways',
  'Calling Cards',
  'Signages',
  'Tarpaulins',
  'Mugs and Drinkwares',
  'Photography & Frame Services',
  'Canon Printer Supplier'
];

export {};
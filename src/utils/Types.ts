export interface Supplier {
  supplierId: string;
  name: string;
  address: string;
  phone: string;
  last_order_date: string;
  profile_pic_url: string;
  state: string;
  additional_infromation?: string;
  orders?: Order[] | [];
}

export interface Order {
  orderId: string;
  orderNumber: string;
  dateOfOrder: string;
  shippingStatus: ShippingStatus;
  price: number;
  estimatedTimeOfArrival: string;
  supplier: string;
  items?: OrderedItem[];
}

export interface OrderedItem {
  ordered_item_id: string;
  name: string;
  quantity: number;
  unit_price: number;
  category: ProductCategory;
  total_price: number;
}

export interface Product {
  product_id: string;
  name: string;
  category: ProductCategory;
  product_code: string;
  quantity_in_stock: number;
  min_quantity: number;
  unit_price: number;
  date_of_arrival: string;
  expiry_date: string;
  supplier_id: string;
  quantity?: number;
  quantity_sold?: number;
  unit_of_measurement: string;
  shelf_life_duration: string;
  stock_status: StockStatus;
}

export interface SaleProduct extends Product {
  saleQuantity: number;
}

export interface Personnel {
  personnelId?: string;
  firstName: string;
  lastName: string;
  middleName: string;
  dateOfBirth: string;
  dateOfHire: string;
  profilePicture?: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  state: string;
  gender: Gender;
  additionalInfo?: string;
  guarantor: {
    name: string;
    relationshipWithStaff: string;
    phone: string;
    email: string;
    address: string;
  };
  jobDesignation: JobDesignation | ADMINROLE;
  monthlySalary: number;
}

export interface User {
  name: string;
  role: ADMINROLE;
}

export interface PersonnelLogin {
  name: string;
  workerID: string;
  password: string;
  role: string;
}

interface MetricValue {
  id: string;
  name: string;
  value: string | number;
}

export interface Metrics {
  dailyProfit: MetricValue;
  purchaseCount: MetricValue;
  dailyLoss: MetricValue;
  dailySales: MetricValue;
  inventoryCost: MetricValue;
  staffOnDuty: MetricValue;
  lowInStock: MetricValue;
  outOfStock: MetricValue;
  expiredProducts: MetricValue;
  overdueShipments: MetricValue;
  pendingOrders: MetricValue;
  receivedOrders: MetricValue;
  shippedOrders: MetricValue;
  costOfPendingOrders: MetricValue;
}

export enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}

export enum Department {
  MANAGEMENT = 'MANGEMENT',
  FLOOR_WORKER = 'FLOOR WORKER',
  JANITOR = 'JANITOR',
  SECURITY = 'SECURITY',
  CASHIER = 'CASHIER',
}

export enum StockStatus {
  IN_STOCK = 'IN STOCK',
  OUT_OF_STOCK = 'OUT OF STOCK',
  LOW_IN_STOCK = 'LOW IN STOCK',
  EXPIRED = 'EXPIRED',
}

export enum ADMINROLE {
  MANAGER = 'MANAGER',
  SUPERVISOR = 'SUPERVISOR',
  CASHIER = 'CASHIER',
}

export enum JobDesignation {
  MANAGER = 'MANAGER',
  SUPERVISOR = 'SUPERVISOR',
  FLOOR_WORKER = 'FLOOR WORKER',
  CASHIER = 'CASHIER',
  SECURITY = 'SECURITY',
  JANITOR = 'JANITOR',
}

export enum ShippingStatus {
  CONFIRMED = 'CONFIRMED',
  PENDING = 'PENDING',
  DELIVERED = 'DELIVERED',
}

export enum ProductCategory {
  Select = '',
  GROCERIES = 'Groceries',
  DAIRY_AND_EGGS = 'Dairy and Eggs',
  MEAT_AND_POULTRY = 'Meat and Poultry',
  SEAFOOD = 'Seafood',
  FRESH_PRODUCE = 'Fresh Produce',
  FROZEN_FOODS = 'Frozen Foods',
  BAKERY_AND_BAKED_GOODS = 'Bakery and Baked Goods',
  SNACKS_AND_CHIPS = 'Snacks and Chips',
  BEVERAGES = 'Beverages',
  CANNED_AND_PACKAGED_GOODS = 'Canned and Packaged Goods',
  CONDIMENTS_AND_SAUCES = 'Condiments and Sauces',
  BREAKFAST_AND_CEREAL = 'Breakfast and Cereal',
  PASTA_AND_RICE = 'Pasta and Rice',
  COOKING_OILS_AND_VINEGARS = 'Cooking Oils and Vinegars',
  SPICES_AND_SEASONINGS = 'Spices and Seasonings',
  CANDY_AND_SWEETS = 'Candy and Sweets',
  HEALTH_AND_WELLNESS = 'Health and Wellness',
  PERSONAL_CARE_AND_HYGIENE = 'Personal Care and Hygiene',
  HOUSEHOLD_SUPPLIES = 'Household Supplies',
  BABY_AND_CHILD_CARE = 'Baby and Child Care',
  PET_CARE = 'Pet Care',
  OFFICE_AND_SCHOOL_SUPPLIES = 'Office and School Supplies',
  ELECTRONICS_AND_APPLIANCES = 'Electronics and Appliances',
  HOME_AND_KITCHEN = 'Home and Kitchen',
  CLOTHING_AND_ACCESSORIES = 'Clothing and Accessories',
  CLEANING_PRODUCTS = 'Cleaning Products',
  GARDENING_AND_OUTDOOR = 'Gardening and Outdoor',
  AUTOMOTIVE_AND_CAR_CARE = 'Automotive and Car Care',
  SPORTS_AND_FITNESS = 'Sports and Fitness',
  TOYS_AND_GAMES = 'Toys and Games',
  BOOKS_AND_MAGAZINES = 'Books and Magazines',
  MISCELLANEOUS = 'Miscellaneous',
}

export type JobData = {
  id: number;
  title: string;
  featured: boolean;
  datePosted: string; // ISO date string
  expirationDate: string; // ISO date string
  employmentType:
    | 'FULL_TIME'
    | 'PART_TIME'
    | 'CONTRACT'
    | 'INTERNSHIP'
    | 'FREELANCE'
    | 'TEMPORARY';
  positionLevel: string;
  company: {
    id: number;
    name: string;
    industry: string;
    description: string | null;
    address: string | null;
    phone: string | null;
    email: string | null;
    size: string | null;
    imageId: number;
    imageURL: string;
  };
  country: string;
  location: string;
  category: {
    id: number;
    name: string;
    slug: string;
    icon: string | null;
  };
  subCategory: {
    id: number;
    name: string;
    slug: string;
  };
  speciality: {
    id: number;
    name: string;
    slug: string;
  };
  jobType: 'REMOTE' | 'ONSITE' | 'HYBRID';
  views: number;
  shares: number;
};

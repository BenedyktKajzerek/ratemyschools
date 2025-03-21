export interface UserModel {
  email: string;
  createdAt: Date | null;
}

export interface ReviewModel {
  id: string;
  approved: boolean;
  author: string | null;
  date: Date;
  relationship: string;
  ratings: {
    teachers: number;
    learning: number;
    facilities: number;
    building: number;
    location: number;
  };
  ratingOverall: number;
  comment: string;
  likes: number;
  isAddCity: boolean;
  isAddSchool: boolean;
  city: {
    name: string;
    slug: string;
    reference: string;
  };
  school: {
    name: string;
    slug: string;
    reference: string;
  };
  country: {
    name: string;
    slug: string;
    reference: string;
  };
  images: string[];
}

export interface SchoolModel {
  name: string;
  slug: string;
  city: {
    name: string;
    slug: string;
    reference: string;
  };
  country: {
    name: string;
    slug: string;
    reference: string;
  };
  ratingOverall: number;
  reviewsCount: number;
}

export interface CityModel {
  name: string;
  slug: string;
  country: {
    name: string;
    slug: string;
    reference: string;
  };
  reviewsCount: number;
}

export interface CountryModel {
  name: string;
  slug: string;
}

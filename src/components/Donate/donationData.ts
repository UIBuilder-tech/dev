import { DonationCategory } from './types';

export const donationData: DonationCategory[] = [
  {
    id: "education",
    name: "EDUCATION",
    items: [
      {
        id: "shs",
        name: "Srivali High School, Shirali (Sponsor-A-Student)",
        amount: 300,
        description:
          "Sponsor-A-Student at the Srivali High School. We suggest a minimum commitment of $300 for 3 years. This will sponsor one student thru high school (8th, 9th and 10th standard) - $25/m",
        hasQuantity: true,
      },
      {
        id: "pvk",
        name: "Parijnanashram Vidyalaya, Karla",
        amount: 200,
      },
      {
        id: "spevc",
        name: "Shri Parijnanashram Educational and Vocational Centre (SPEVC), Virar",
        amount: 250,
      },
      {
        id: "pvko",
        name: "Parijnan Vidyalay, Kotekar",
        amount: 150,
      },
      {
        id: "ges",
        name: "Guruprasad Educational Society, Mallapur",
        amount: 100,
      },
    ],
  },
  {
    id: "heritage",
    name: "HERITAGE",
    items: [
      {
        id: "vantiga",
        name: "Vantiga",
        amount: 500,
        description: "Annual Vantiga contribution",
      },
      {
        id: "mathamaryada",
        name: "Mathamaryada",
        amount: 0,
        description: "Mathamaryada contribution",
      },

      {
        id: "gurukanika",
        name: "Gurukanika / Padakanika at the Lotus Feet",
        amount: 0,
      },
      {
        id: "anandashraya",
        name: "Anandashraya",
        amount: 150,
      },
      {
        id: "vaidika",
        name: "Vaidika Pathashala",
        amount: 100,
        description: "Support for Vaidika Pathashala",
      },
      {
        id: "goshala",
        name: "Goshala Maintenance",
        amount: 150,
        description: "Support for Goshala Maintenance",
      },
      {
        id: "sevas",
        name: "Sevas",
        amount: 0,
        description: "All Sevas",
        hasQuantity: true,
      },
    ],
  },
  {
    id: "women-empowerment",
    name: "WOMEN EMPOWERMENT",
    items: [
      {
        id: "samvit-sudha",
        name: "Samvit Sudha",
        amount: 0,
      },
      {
        id: "hmpp",
        name: "Hand Made Paper Unit (HMPP)",
        amount: 100,
      },
      {
        id: "pari",
        name: "Self-Help Groups (SHGs) and Microfinance Support - Parimochan",
        amount: 0,
      },
      {
        id: "holding-hands",
        name: "Mother & Child Holding Hands SPEVC, Virar",
        amount: 100,
      },
    ],
  },
  {
    id: "specialProjects",
    name: "SPECIAL PROJECTS",
    items: [],
  },
];
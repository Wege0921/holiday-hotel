export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export const contactData: ContactInfo = {
  address: "Haile Gebre Selassie Avenue, Addis Ababa",
  phone: "+251116612627",
  email: "holidayhoteladdis@gmail.com"
};

export const socialLinks: SocialLink[] = [
  {
    platform: "Facebook",
    url: "#",
    icon: "fab fa-facebook"
  },
  {
    platform: "Instagram",
    url: "#",
    icon: "fab fa-instagram"
  },
  {
    platform: "Twitter",
    url: "#",
    icon: "fab fa-twitter"
  },
  {
    platform: "LinkedIn",
    url: "#",
    icon: "fab fa-linkedin"
  }
];

export const developerInfo = {
  name: "Habkal",
  url: "https://habkal.com/"
};


export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  link: string | null;
}

export interface CaseStudy {
  id: string;
  client: string;
  title: string;
  impact: string;
  image: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatar: string;
}

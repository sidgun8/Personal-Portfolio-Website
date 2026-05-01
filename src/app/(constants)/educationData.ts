export interface EducationType {
  institution: string;
  timeline: string;
  qualification: string;
  notes?: string;
}

export const educationData: EducationType[] = [
  {
    institution: "DPS Secunderabad - Diamond Point",
    timeline: "Until 2018",
    qualification: "10th Grade",
  },
  {
    institution: "Narayana Madhapur N120",
    timeline: "11th and 12th",
    qualification: "IIT JEE Preparation",
  },
  {
    institution: "NIT Warangal",
    timeline: "Undergraduate",
    qualification: "BTech - Chemical Engineering",
  },
];

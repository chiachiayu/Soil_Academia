export interface Soilsurvey {
  location: string;
  time: string;
  soilclassification: string;
  description?: string;
  image?: string;
}

export function isSoilsurvey(element: Soilsurvey ): element is Soilsurvey {
  return 'soilclassification' in element && 'location' in element;
}
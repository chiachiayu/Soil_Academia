export interface SoilsurveyDetail {
  subtitle?: string;
  text?: string;
  subimages?: string[];
}

export interface Soilsurvey {
  location: string;
  time: string;
  soilclassification: string;
  description?: string;
  image?: string;
  detail?: SoilsurveyDetail; // ✅ 新增：細節欄位
}

export function isSoilsurvey(element: Soilsurvey): element is Soilsurvey {
  return 'soilclassification' in element && 'location' in element;
}

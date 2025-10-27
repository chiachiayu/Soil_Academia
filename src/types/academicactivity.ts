export interface ActivityDetail {
  subtitle?: string;
  text?: string;
  subimages?: string[];
}

export interface Activity {
  location: string;
  time: string;
  name: string;
  description?: string;
  image?: string;
  detail?: ActivityDetail; // ✅ 新增：細節欄位
}

export function isActivityDetail(element: Activity): element is Activity {
  return 'name' in element && 'location' in element;
}

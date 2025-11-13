export const soilsurvey = [
  {
    location: '桃園 (Taoyuan), Taiwan',
    time: '2025/01/03',
    soilclassification: 'Typic Hapludults',
    description: 'Tropical humid paddy soils with plinthite.',
    image: '/images/soilsurvey/Taoyuan/Taoyuan_1.jpeg',  // ✅ 圖片路徑
    detail: {
      subtitle: 'Detailed Descriptions',
       text: `
		This soil profile showed coarse Fe—Mn nodules between the depth of 50—65 cm.
		The upper layer exhibited fine platy structure due to periodic wetting and drying.
		Fe—Mn nodules reflect clear evidence of soil chemistry; that is,
		Mn always moved faster than Fe during flooding due to its higher redox potential.`,
      subimages: ['/images/soilsurvey/Taoyuan/Taoyuan_2.png', '/images/soilsurvey/Taoyuan/Taoyuan_3.png'],  // 可選，若要附上細節圖
    },
  },

    {
    location: '澎湖 (Penghu), Taiwan',
    time: '2017/04/23',
    soilclassification: 'Typic Haplustalfs',
    description: 'Tropical humid basaltic soils.',
    image: '/images/soilsurvey/Penghu/Penghu_1.png',  // ✅ 圖片路徑
    detail: {
      subtitle: 'Detailed Descriptions',
       text: `
		None.`,
      subimages: ['/images/soilsurvey/Penghu/Penghu_2.jpg', '/images/soilsurvey/Penghu/Penghu_3.tif'],  // 可選，若要附上細節圖
    },
  }
];

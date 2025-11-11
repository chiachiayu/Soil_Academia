export const soilsurvey = [
  {
    location: '桃園 (Taoyuan), Taiwan',
    time: '2025/04/01 - 2025/04/02',
    soilclassification: 'Typic Hapludult',
    description: 'Tropical humid paddy soils with plinthite.',
    image: '/images/Taoyuan_1.jpeg',  // ✅ 圖片路徑
    detail: {
      subtitle: 'Detailed Descriptions',
       text: `
		This soil profile showed coarse Fe—Mn nodules between the depth of 50—65 cm.
		The upper layer exhibited fine platy structure due to periodic wetting and drying.
		Fe—Mn nodules reflect clear evidence of soil chemistry; that is,
		Mn always moved faster than Fe during flooding due to its higher redox potential.`,
      subimages: ['/images/Taoyuan_2.png', '/images/Taoyuan_3.png'],  // 可選，若要附上細節圖
    },
  },

    {
    location: '澎湖 (Penghu), Taiwan',
    time: '2017/04/23',
    soilclassification: 'Typic Haplustalfs',
    description: 'Tropical humid basaltic soils.',
    image: '/images/soilsurvey/Penghu_1.png',  // ✅ 圖片路徑
    detail: {
      subtitle: 'Detailed Descriptions',
       text: `
		None.`,
      subimages: ['/images/soilsurvey/Penghu_2.jpg', '/images/soilsurvey/Penghu_3.tif'],  // 可選，若要附上細節圖
    },
  }
];

import instance, { baseUrlWithoutApi } from "./BaseUrl";

export const fetchRecentFromAPI = async () => {
  try {
    const response = await instance.get("/showrecent");
    const recentsData = response.data;

    // Process the data to match the `list` object structure
    const processedData = recentsData.map((recent) => ({
      id: recent.id,
      cover: `${recent.cover}`,
      filePdfRecent: `${recent.filePdfRecent}`,
      name: recent.name,
      name_en: recent.name_en,
      location: recent.location,
      location_en: recent.location_en,
      category: recent.category,
      category_en: recent.category_en,
      price: recent.price,
      price_en: recent.price_en,
      type: recent.type,
      type_en: recent.type_en,
      property_area: recent.property_area,
      street_direction: recent.street_direction,
      street_direction_en: recent.street_direction_en,
      bathrooms: recent.bathrooms,
      bedrooms: recent.bedrooms,
      land_length: recent.land_length,
      property_age: recent.property_age,
      property_age_en: recent.property_age_en,
      street_width: recent.street_width,
      land_width: recent.land_width,
      description: recent.description,
      description_en: recent.description_en,
      license_number: recent.license_number,
      map_location: recent.map_location,
      imgs: recent.recent_imags.map((image) => ({
        src: `${baseUrlWithoutApi}${image.url}`,
      })),
    }));

    const sortedData = processedData.sort((a, b) => {
      const order = ["castle", "villa", "apartment"];
      const aIndex = order.indexOf(a.type_en.toLowerCase());
      const bIndex = order.indexOf(b.type_en.toLowerCase());

      if (aIndex === -1) return 1;
      if (bIndex === -1) return -1;
      return aIndex - bIndex;
    });

    return sortedData;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};
// Call the function and export the posts object
export const list = await fetchRecentFromAPI();
// export const list = [];

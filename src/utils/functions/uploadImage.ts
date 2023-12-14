export const uploadImage = async (image: File, folder: string) => {
  const data = new FormData();

  data.append("file", image);
  data.append("upload_preset", "wuasdhir");
  data.append("api_key", "467774564616796");
  data.append("cloud_name", "dl4wpdkh8");
  data.append("folder", folder);

  const res = await fetch(`https://api.cloudinary.com/v1_1/dl4wpdkh8/image/upload`, {
    method: "POST",
    body: data,
  })
  return res.json();
};

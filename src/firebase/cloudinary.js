// Upload image to Cloudinary
export async function uploadToCloudinary(file) {
  const cloudName = "do85jzh6y"; // replace with your Cloudinary cloud name
  const unsignedUploadPreset = "admin_upload"; // your unsigned preset

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", unsignedUploadPreset);

  try {
    const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/upload`, {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    return data.secure_url; // return the URL of uploaded image
  } catch (err) {
    console.error("Cloudinary upload error:", err);
    throw err;
  }
}

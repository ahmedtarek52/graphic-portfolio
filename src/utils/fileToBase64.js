/**
 * Convert a file to base64 data URL
 * @param {File} file - The file to convert
 * @returns {Promise<string>} - Base64 data URL
 */
export function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

/**
 * Convert a file to compressed base64 data URL
 * @param {File} file - The image file to convert
 * @param {number} quality - Compression quality (0-1)
 * @param {number} maxWidth - Maximum width for the compressed image
 * @param {number} maxHeight - Maximum height for the compressed image
 * @returns {Promise<string>} - Compressed base64 data URL
 */
export async function fileToCompressedBase64(file, quality = 0.7, maxWidth = 800, maxHeight = 600) {
  // Import compressImage dynamically to avoid circular dependencies
  const { compressImage } = await import('./compressImage');
  
  try {
    // Compress the image first
    const compressedBlob = await compressImage(file, quality, maxWidth, maxHeight);
    
    // Convert compressed blob to base64
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(compressedBlob);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  } catch (error) {
    // If compression fails, fall back to regular base64 conversion
    console.warn('Image compression failed, using regular base64 conversion:', error);
    return fileToBase64(file);
  }
}
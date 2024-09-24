export async function generateImages(prompt: string, count: number = 1): Promise<string[]> {
  try {
    const response = await fetch('/api/generate-images', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt, count }),
    });

    const data = await response.json();
    return data.imageUrls; // Assuming the API returns an array of image URLs
  } catch (error) {
    console.error('Error generating images:', error);
    // Return an array of placeholder images with a message if the image generation fails
    return Array(count).fill('/placeholder.png?height=300&width=300&text=图片生成失败！请查看网络！');
  }
}

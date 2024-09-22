import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface AIGenerateProps {
  prompt: string;
  onImageGenerated: (imageUrl: string) => void;
}

export default function AIGenerate({ prompt, onImageGenerated }: AIGenerateProps) {
  const [generatedImage, setGeneratedImage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerateImage = async () => {
    setIsLoading(true);
    try {
      // Replace this with your actual API call to the large language model
      const response = await fetch('/api/generate-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate image');
      }

      const data = await response.json();
      setGeneratedImage(data.imageUrl);
      onImageGenerated(data.imageUrl);
    } catch (error) {
      console.error('Error generating image:', error);
      // Handle error (e.g., show an error message to the user)
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>AI 图像生成</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p>基于您的梦境描述："{prompt}"</p>
        <Button onClick={handleGenerateImage} disabled={isLoading} className="w-full bg-[#A2B5BB] hover:bg-[#8FA5AB] text-white">
          {isLoading ? '生成中...' : '生成图像'}
        </Button>
        {generatedImage && (
          <div className="mt-4">
            <Image
              src={generatedImage}
              alt="Generated image"
              width={400}
              height={400}
              className="rounded-lg"
            />
          </div>
        )}
      </CardContent>
    </Card>
  );
}

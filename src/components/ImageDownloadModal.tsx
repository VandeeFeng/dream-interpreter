import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Loader2 } from 'lucide-react';

interface ImageDownloadModalProps {
  imageUrl: string;
  onClose: () => void;
}

export default function ImageDownloadModal({ imageUrl, onClose }: ImageDownloadModalProps) {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async (format: 'jpeg' | 'png' | 'svg') => {
    setIsDownloading(true);
    try {
      // Here you would typically call an API to generate the image in the desired format
      // For this example, we'll simulate a download
      await new Promise(resolve => setTimeout(resolve, 1000));
      const link = document.createElement('a');
      link.href = imageUrl;
      link.download = `dream-image.${format}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading image:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <Card className="w-full max-w-md bg-white p-6 rounded-lg">
        <CardContent className="space-y-4">
          <div className="relative w-full h-48">
            <Image
              src={imageUrl}
              alt="Dream interpretation"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="flex justify-center space-x-4">
            <Button onClick={() => handleDownload('jpeg')} disabled={isDownloading} className="bg-[#A2B5BB] hover:bg-[#8FA5AB] text-white">
              {isDownloading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
              JPEG
            </Button>
            <Button onClick={() => handleDownload('png')} disabled={isDownloading} className="bg-[#A2B5BB] hover:bg-[#8FA5AB] text-white">
              {isDownloading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
              PNG
            </Button>
            <Button onClick={() => handleDownload('svg')} disabled={isDownloading} className="bg-[#A2B5BB] hover:bg-[#8FA5AB] text-white">
              {isDownloading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
              SVG
            </Button>
          </div>
          <Button onClick={onClose} variant="outline" className="w-full bg-[#A2B5BB] hover:bg-[#8FA5AB] text-white">
            Close
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}

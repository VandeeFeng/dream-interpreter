'use client'

import AIGenerate from './AIGenerate';
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import { Home, Share2, Download } from 'lucide-react'
import VanGoghClouds from './van-gogh-clouds'
import { motion, AnimatePresence } from 'framer-motion'
import ImageDownloadModal from './ImageDownloadModal';

export default function DreamInterpreter() {
  const [step, setStep] = useState(1)
  const [dreamDescription, setDreamDescription] = useState('')
  const [additionalDetails, setAdditionalDetails] = useState('')
  const [selectedImage, setSelectedImage] = useState('')
  const [finalImage, setFinalImage] = useState('')
  const [dreamInterpretation, setDreamInterpretation] = useState('')
  const [aiPrompt, setAiPrompt] = useState('')
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  const handleSubmitDescription = (e: React.FormEvent) => {
    e.preventDefault()
    setAiPrompt(dreamDescription)
    setStep(2)
  }

  const handleImageSelection = (image: string) => {
    setSelectedImage(image)
    setStep(3)
  }

  const handleSubmitDetails = (e: React.FormEvent) => {
    e.preventDefault()
    setAiPrompt(prevPrompt => `${prevPrompt}\n额外细节: ${additionalDetails}`)
    setStep(4)
  }

  const handleFinalImageSelection = (image: string) => {
    setFinalImage(image)
    setDreamInterpretation(`基于您的描述"${dreamDescription}"和额外细节"${additionalDetails}"，这个梦可能象征着个人成长和变革。梦中的场景暗示您可能正在经历一个转变期，面对新的挑战和机遇。这个梦鼓励您拥抱变化，相信自己有能力应对新的情况。`)
    setStep(5)
  }

  const generateImageUrl = (imageUrl: string) => imageUrl;

  const handleReset = () => {
    setStep(1)
    setDreamDescription('')
    setAdditionalDetails('')
    setSelectedImage('')
    setFinalImage('')
    setDreamInterpretation('')
    setAiPrompt('')
  }

  const handleShare = () => {
    alert('分享功能待实现')
  }

  const handleDownload = () => {
    setIsDownloadModalOpen(true);
  }

  const fadeInOut = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.5, ease: "easeInOut" }
  }

  return (
    <div className="min-h-screen bg-[#F0EAE2] flex items-center justify-center p-4 relative overflow-hidden">
      <VanGoghClouds />
      <Card className="w-full max-w-2xl bg-[#F7F3F0] shadow-lg relative z-10">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-semibold text-[#6E7F80]">梦境解析</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div key="step1" {...fadeInOut}>
                <form onSubmit={handleSubmitDescription} className="space-y-4">
                  <Label htmlFor="dream-description" className="text-[#8E8E8E] text-lg">请描述你的梦境：</Label>
                  <Input
                    id="dream-description"
                    value={dreamDescription}
                    onChange={(e) => setDreamDescription(e.target.value)}
                    placeholder="我梦见自己变成了一条鱼，在海洋中自由地游动..."
                    required
                    className="bg-[#E8E1D9] border-[#B0A8A2] text-[#5C5C5C] placeholder-[#B0A8A2]"
                  />
                  <Button type="submit" className="w-full bg-[#A2B5BB] hover:bg-[#8FA5AB] text-white">生成图片</Button>
                </form>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="step2" {...fadeInOut}>
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-[#6E7F80] text-center">生成梦境图片：</h2>
                  <AIGenerate />
                  <Button onClick={() => setStep(3)} className="w-full bg-[#A2B5BB] hover:bg-[#8FA5AB] text-white">
                    下一步
                  </Button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="step3" {...fadeInOut}>
                <form onSubmit={handleSubmitDetails} className="space-y-4">
                  <Label htmlFor="additional-details" className="text-[#8E8E8E] text-lg">请提供更多细节：</Label>
                  <Input
                    id="additional-details"
                    value={additionalDetails}
                    onChange={(e) => setAdditionalDetails(e.target.value)}
                    placeholder="水很清澈，我感觉很放松..."
                    required
                    className="bg-[#E8E1D9] border-[#B0A8A2] text-[#5C5C5C] placeholder-[#B0A8A2]"
                  />
                  <Button type="submit" className="w-full bg-[#A2B5BB] hover:bg-[#8FA5AB] text-white">重新生成图片</Button>
                </form>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div key="step4" {...fadeInOut}>
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-[#6E7F80] text-center">生成最终图片：</h2>
                  <AIGenerate />
                  <Button onClick={() => setStep(5)} className="w-full bg-[#A2B5BB] hover:bg-[#8FA5AB] text-white">
                    完成
                  </Button>
                </div>
              </motion.div>
            )}

            {step === 5 && (
              <motion.div key="step5" {...fadeInOut}>
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-[#6E7F80] text-center">梦境解析</h2>
                  <Image
                    src={generateImageUrl(finalImage)}
                    alt="Selected dream image"
                    width={600}
                    height={400}
                    className="w-full rounded-lg shadow-md"
                  />
                  <p className="text-[#5C5C5C] leading-relaxed">{dreamInterpretation}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
        {step === 5 && (
          <CardFooter className="flex justify-center space-x-4 mt-6">
            <Button onClick={handleReset} className="bg-[#A2B5BB] hover:bg-[#8FA5AB] text-white">
              <Home className="mr-2 h-4 w-4" />
              回到首页
            </Button>
            <Button onClick={handleShare} className="bg-[#A2B5BB] hover:bg-[#8FA5AB] text-white">
              <Share2 className="mr-2 h-4 w-4" />
              分享
            </Button>
            <Button onClick={handleDownload} className="bg-[#A2B5BB] hover:bg-[#8FA5AB] text-white">
              <Download className="mr-2 h-4 w-4" />
              保存图片
            </Button>
          </CardFooter>
        )}
        {isDownloadModalOpen && (
          <ImageDownloadModal
            imageUrl={generateImageUrl(finalImage)}
            onClose={() => setIsDownloadModalOpen(false)}
          />
        )}
      </Card>
    </div>
  )
}
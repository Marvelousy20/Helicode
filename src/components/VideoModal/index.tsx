import React, { useState } from "react";
import ReactPlayer from "react-player/youtube";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { DialogTitle } from "@radix-ui/react-dialog";
import Image from "next/image";

interface VideoModalProps {
  url: string;
  buttonText?: string;
}

const VideoModal: React.FC<VideoModalProps> = ({
  url,
  buttonText = "Watch Video",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div className="bg-[#8D58FF4D] rounded-[12px] inline-flex items-center p-1.5">
          <Button className="transition-colors text-white flex items-center gap-2 font-light text-xs">
            {buttonText}
            <Image src="/video.svg" alt="video" width={24} height={24} />{" "}
          </Button>
        </div>
      </DialogTrigger>
      <DialogContent className="p-0 border-none bg-black w-[90%] sm:w-[80%] md:max-w-[800px] mx-auto">
        <DialogTitle></DialogTitle>
        <div className="relative pt-[56.25%] w-full">
          <ReactPlayer
            url={url}
            width="100%"
            height="100%"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
            }}
            controls
            playing={isOpen}
            onEnded={() => setIsOpen(false)}
            config={
              {
                youtube: {
                  playerVars: {
                    modestbranding: 1,
                    rel: 0,
                  },
                },
              } as any
            }
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoModal;

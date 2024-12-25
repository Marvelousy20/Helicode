import React, { useState } from "react";
import ReactPlayer from "react-player/youtube";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
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
            config={{
              youtube: {
                playerVars: {
                  modestbranding: 1,
                  rel: 0,
                },
              },
            }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoModal;

// import React from "react";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";

// interface VideoModalProps {
//   videoId: string; // YouTube video ID
//   buttonText?: string;
// }

// const VideoModal: React.FC<VideoModalProps> = ({
//   videoId,
//   buttonText = "Watch Video",
// }) => {
//   return (
//     <Dialog>
//       <DialogTrigger asChild>
//         <div className="bg-[#8D58FF4D] rounded-[12px] inline-flex items-center p-1.5">
//           <Button className="transition-colors text-white flex items-center gap-2 font-light text-xs">
//             {buttonText}
//             <Image src="/video.svg" alt="video" width={24} height={24} />
//           </Button>
//         </div>
//       </DialogTrigger>
//       <DialogContent className="sm:max-w-[800px]">
//         <DialogHeader>
//           <DialogTitle></DialogTitle>
//         </DialogHeader>
//         <div className="aspect-video w-full">
//           <iframe
//             width="100%"
//             height="100%"
//             src={`https://www.youtube.com/embed/${videoId}`}
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//             className="rounded-lg"
//           />
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default VideoModal;

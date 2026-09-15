import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { ModalType } from '../types';

interface CourseVideoPlayerProps {
  onOpenModal: (modal: ModalType) => void;
}

export const CourseVideoPlayer: React.FC<CourseVideoPlayerProps> = ({ onOpenModal }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // User scrolled into view — play
            video.play().catch(() => {
              // Autoplay blocked by browser: mute and retry
              video.muted = true;
              video.play().catch(() => {});
            });
          } else {
            // User scrolled away — pause
            video.pause();
          }
        });
      },
      {
        threshold: 0.4, // 40% of the video must be visible to trigger play
      }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <div id="course-video" className="w-full space-y-6">
      {/* Video Container */}
      <div
        ref={containerRef}
        className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-yellow-400/40 bg-black shadow-[0_20px_60px_rgba(250,204,21,0.08)]"
      >
        <div className="relative w-full aspect-video min-h-[220px] sm:min-h-[420px] lg:min-h-[500px] bg-black">
          <video
            ref={videoRef}
            src="/intro.mp4"
            className="w-full h-full object-contain bg-black"
            controls
            playsInline
            preload="metadata"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Video Callout Footer Strip */}
      <div className="bg-zinc-950/90 border border-yellow-400/30 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-1">
            <h4 className="text-xs sm:text-sm font-bold text-white">Ready to learn this exact institutional framework for profitable trading?</h4>
          </div>
          <p className="text-[11px] sm:text-xs text-zinc-400">Next cohort enrollment now opened. Lifetime strategy access &amp; personal desk audits.</p>
        </div>

        <div className="flex flex-col xs:flex-row items-center gap-2 sm:gap-3 w-full sm:w-auto shrink-0">
          <button
            onClick={() => onOpenModal('become_client')}
            className="w-full sm:w-auto px-6 py-3 sm:py-2.5 rounded-full bg-yellow-400 text-zinc-950 font-black text-xs sm:text-sm hover:bg-yellow-300 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-md shadow-yellow-400/30 cursor-pointer min-h-[44px]"
          >
            <span>Apply Now — $1,500</span>
            <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </div>
  );
};

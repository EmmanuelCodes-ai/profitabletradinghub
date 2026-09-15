import React, { useState } from 'react';
import {
  Play,
  Video,
  Sparkles,
  ArrowRight,
  Link as LinkIcon,
  Check,
  X,
  ExternalLink
} from 'lucide-react';
import { ModalType } from '../types';
import defaultPosterBg from '../assets/images/forex_trading_bg_1788569476587.jpg';

interface CourseVideoPlayerProps {
  onOpenModal: (modal: ModalType) => void;
}

export const CourseVideoPlayer: React.FC<CourseVideoPlayerProps> = ({ onOpenModal }) => {
  // Allow storing a custom video URL (YouTube, Vimeo, or MP4 direct file)
  const DEFAULT_VIDEO = '/intro.mp4';
  const [customVideoUrl, setCustomVideoUrl] = useState<string>(() => {
    return localStorage.getItem('pothub_custom_video_url') || DEFAULT_VIDEO;
  });
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isEditingUrl, setIsEditingUrl] = useState<boolean>(false);
  const [inputUrl, setInputUrl] = useState<string>('');

  const handleSaveUrl = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = inputUrl.trim();
    setCustomVideoUrl(trimmed);
    localStorage.setItem('pothub_custom_video_url', trimmed);
    setIsEditingUrl(false);
    if (trimmed) {
      setIsPlaying(true);
    }
  };

  const handleClearUrl = () => {
    setCustomVideoUrl('');
    localStorage.removeItem('pothub_custom_video_url');
    setIsPlaying(false);
    setIsEditingUrl(false);
  };

  // Convert typical YouTube or Vimeo watch URLs to embed format
  const getEmbedUrl = (url: string): string => {
    if (!url) return '';
    try {
      // YouTube standard or short links
      if (url.includes('youtube.com/watch')) {
        const urlObj = new URL(url);
        const v = urlObj.searchParams.get('v');
        return v ? `https://www.youtube-nocookie.com/embed/${v}?autoplay=1&rel=0` : url;
      }
      if (url.includes('youtu.be/')) {
        const id = url.split('youtu.be/')[1]?.split('?')[0];
        return id ? `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0` : url;
      }
      if (url.includes('vimeo.com/')) {
        const id = url.split('vimeo.com/')[1]?.split('?')[0];
        return id ? `https://player.vimeo.com/video/${id}?autoplay=1` : url;
      }
      return url;
    } catch {
      return url;
    }
  };

  const effectiveVideoUrl = customVideoUrl || DEFAULT_VIDEO;
  const isDirectVideoFile = effectiveVideoUrl.match(/\.(mp4|webm|ogg)($|\?)/i);
  const embedSrc = getEmbedUrl(effectiveVideoUrl);

  return (
    <div id="course-video" className="w-full space-y-6">
      {/* Main Video Placement Container */}
      <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-yellow-400/40 bg-[#0a0a0a] shadow-[0_20px_60px_rgba(250,204,21,0.08)] group transition-all">

        {/* Aspect Ratio Frame (16:9) */}
        <div className="relative w-full aspect-video min-h-[220px] sm:min-h-[420px] lg:min-h-[500px] flex items-center justify-center overflow-hidden bg-zinc-950">

          {/* Case 1: Custom Video is playing */}
          {isPlaying && effectiveVideoUrl ? (
            isDirectVideoFile ? (
              <video
                src={effectiveVideoUrl}
                controls
                autoPlay
                className="w-full h-full object-contain bg-black"
              >
                Your browser does not support the video tag.
              </video>
            ) : (
              <iframe
                src={embedSrc}
                title="Course Overview Video"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )
          ) : (
            /* Case 2: Video Placement Placeholder / Poster Screen */
            <>
              {/* Background Poster Image */}
              <img
                src={defaultPosterBg}
                alt="Institutional Trading Desk Preview"
                className="absolute inset-0 w-full h-full object-cover object-center opacity-40 brightness-75 transition-all duration-700"
              />

              {/* Cinematic Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/80 pointer-events-none" />

              {/* Status Badges */}
              <div className="absolute top-3 left-3 sm:top-6 sm:left-6 z-20 flex items-center gap-1.5 sm:gap-2">
                <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-[10.5px] sm:text-xs font-semibold text-white shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-yellow-400" />
                  <span>VIDEO PLACEMENT</span>
                </div>
                <div className="hidden xs:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-yellow-400/15 backdrop-blur-md border border-yellow-400/30 text-[10px] sm:text-[11px] font-bold text-yellow-400">
                  <Sparkles className="w-3 h-3" />
                  <span>1080p HD</span>
                </div>
              </div>

              {/* Custom Video URL Indicator button (top right) */}
              <div className="absolute top-3 right-3 sm:top-6 sm:right-6 z-20">
                <button
                  onClick={() => {
                    setInputUrl(customVideoUrl === DEFAULT_VIDEO ? '' : customVideoUrl);
                    setIsEditingUrl(!isEditingUrl);
                  }}
                  className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/20 hover:border-yellow-400 text-[10px] sm:text-[11px] font-medium text-zinc-300 hover:text-white transition-all flex items-center gap-1.5 cursor-pointer shadow-lg"
                >
                  <LinkIcon className="w-3 h-3 text-yellow-400 shrink-0" />
                  <span className="hidden xs:inline">Change Video</span>
                  <span className="xs:hidden">Edit</span>
                </button>
              </div>

              {/* Center Play Button & Placement Overlay */}
              <div className="relative z-20 flex flex-col items-center justify-center text-center space-y-3 sm:space-y-4 px-3 sm:px-4 max-w-lg">
                <button
                  onClick={() => {
                    setIsPlaying(true);
                  }}
                  aria-label="Play course overview video"
                  className="group relative w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-yellow-400 text-zinc-950 flex items-center justify-center shadow-[0_0_50px_rgba(250,204,21,0.45)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
                >
                  <div className="absolute inset-0 rounded-full bg-yellow-400/40 animate-ping pointer-events-none" />
                  <Play className="w-6 h-6 sm:w-10 sm:h-10 fill-zinc-950 translate-x-0.5 group-hover:scale-110 transition-transform" />
                </button>

                <div className="space-y-1">
                  <div className="text-sm sm:text-xl font-bold text-white tracking-wide">
                    Click to Watch
                  </div>
                  <p className="text-[11px] sm:text-sm text-zinc-300 max-w-xs sm:max-w-md mx-auto">
                    Watch the full strategy breakdown — institutional framework explained
                  </p>
                </div>
              </div>
            </>
          )}

        </div>

        {/* Modal / Inline Bar to configure or paste Custom Video URL */}
        {isEditingUrl && (
          <div className="bg-zinc-900 border-t border-zinc-800 p-4 sm:p-5 animate-in fade-in duration-200">
            <form onSubmit={handleSaveUrl} className="max-w-2xl mx-auto space-y-2">
              <div className="flex items-center justify-between text-xs text-zinc-300 mb-1">
                <span className="font-semibold text-yellow-400">Set Custom Video URL:</span>
                <span className="text-zinc-500">Supports YouTube, Vimeo, or .mp4 files</span>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="url"
                  value={inputUrl}
                  onChange={(e) => setInputUrl(e.target.value)}
                  placeholder="e.g. https://www.youtube.com/watch?v=... or your video.mp4"
                  className="flex-1 bg-black border border-zinc-700 focus:border-yellow-400 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-zinc-500 outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-zinc-950 font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  <Check className="w-4 h-4 stroke-[3]" />
                  <span>Apply</span>
                </button>
                {customVideoUrl && (
                  <button
                    type="button"
                    onClick={handleClearUrl}
                    className="px-3 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs transition-colors cursor-pointer"
                    title="Remove custom video"
                  >
                    Clear
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => setIsEditingUrl(false)}
                  className="p-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                  title="Close input"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        )}

      </div>

      {/* Video Callout Footer Strip */}
      <div className="bg-zinc-950/90 border border-yellow-400/30 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-1">
            <h4 className="text-xs sm:text-sm font-bold text-white">Ready to learn this exact institutional framework for profitable trading?</h4>
          </div>
          <p className="text-[11px] sm:text-xs text-zinc-400">Next cohort enrollment now opened. Lifetime strategy access & personal desk audits.</p>
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

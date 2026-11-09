'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

// Opens a video in a lightbox. Children render the trigger (Agina's circle play button by default).
export default function VideoPopup({ src, className = 'tj_circle_btn video-popup', children }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      <a href={src} className={className} onClick={(e) => { e.preventDefault(); setOpen(true); }} aria-label="Play video">
        {children}
      </a>
      {open && createPortal(
        <div className="ps-video-modal" role="dialog" aria-modal="true" onClick={() => setOpen(false)}>
          <button type="button" className="ps-video-close" aria-label="Close video" onClick={() => setOpen(false)}>
            <i className="tji-cancel" />
          </button>
          <video src={src} controls autoPlay playsInline onClick={(e) => e.stopPropagation()} />
        </div>,
        document.body,
      )}
    </>
  );
}

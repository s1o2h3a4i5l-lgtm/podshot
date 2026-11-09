'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import tn from '@/lib/aginaEffects';
import sectionHold from '@/lib/sectionHold';
import mobileEffects from '@/lib/mobileEffects';

// Re-runs Agina's animation engine on every route so the new page's sections get their effects.
export default function Effects() {
  const pathname = usePathname();
  useEffect(() => {
    window.scrollTo(0, 0);
    const stopEffects = tn();
    const stopHold = sectionHold();
    const stopMobile = mobileEffects();
    return () => { stopMobile(); stopHold(); stopEffects?.(); };
  }, [pathname]);
  return null;
}

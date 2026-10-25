'use client';

import * as amplitude from '@amplitude/unified';
import { useEffect } from 'react';

export function Amplitude() {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') return;

    amplitude.initAll('de753a5aed08bc6be1114f0416f4ba39', {"analytics":{"autocapture":true},"sessionReplay":{"sampleRate":1}});
  }, []);

  return null;
}

export default amplitude;
'use client';

import * as amplitude from '@amplitude/unified';

function initAmplitude() {
  if (typeof window !== 'undefined') {
    amplitude.initAll('de753a5aed08bc6be1114f0416f4ba39', {"analytics":{"autocapture":true},"sessionReplay":{"sampleRate":1}});
  }
}

initAmplitude();

export const Amplitude = () => null;
export default amplitude;
import MobileDetect from 'mobile-detect';
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { headers } from 'next/headers'

export function middleware(req: NextRequest) {
  const headersList = headers();
  const userAgent = headersList.get('user-agent');

  const md = new MobileDetect(userAgent!);


  // Using mobile-detect for more accurate device detection
  if (md.mobile()) {
    let destination = '/yourWebContentPage'; // Default to web content page for demonstration

    if (md.os() === 'iOS') {
      destination = 'https://apps.apple.com/us/app/pup-diary/id6476625040'; // iOS-specific page
    } else if (md.os() === 'AndroidOS') {
      destination = 'https://play.google.com/store/apps/details?id=com.bensforge.pupdiary'; // Android-specific page
    }

    return NextResponse.redirect(destination);
  }
}


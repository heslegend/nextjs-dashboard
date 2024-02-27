import type { NextRequest } from 'next/server'
import { NextResponse, userAgent } from 'next/server'

export function middleware(req: NextRequest) {
  const md = userAgent(req);


    let destination = 'https://apps.apple.com/us/app/pup-diary/id6476625040'; // Default to web content page for demonstration

    if (md.os.name === 'iOS') {
      destination = 'https://apps.apple.com/us/app/pup-diary/id6476625040'; // iOS-specific page
    } else if (md.os.name === 'AndroidOS') {
      destination = 'https://play.google.com/store/apps/details?id=com.bensforge.pupdiary'; // Android-specific page
    }

    return NextResponse.redirect(destination);
}


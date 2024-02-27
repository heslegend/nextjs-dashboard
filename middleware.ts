import type { NextRequest } from 'next/server'
import { NextResponse, userAgent } from 'next/server'

export function middleware(req: NextRequest) {
  const { ua } = userAgent(req)

  if (/iP(hone|ad|od)/.test(ua)) {
    return NextResponse.redirect(
      'https://apps.apple.com/us/app/pup-diary/id6476625040'
    )
  } else if (/Android/.test(ua)) {
    return NextResponse.redirect(
      'https://play.google.com/store/apps/details?id=com.bensforge.pupdiary'
    )
  } else {
    return NextResponse.redirect('https://yourdomain.com')
  }
}


import type { NextRequest } from 'next/server'
import { NextResponse, userAgent } from 'next/server'

export function middleware(req: NextRequest) {
  const { ua } = userAgent(req)

  if (/iP(hone|ad|od)/.test(ua)) {
    return NextResponse.redirect(
      'https://apps.apple.com/in/app/yourapp/id123456789'
    )
  } else if (/Android/.test(ua)) {
    return NextResponse.redirect(
      'https://play.google.com/store/apps/details?id=com.yourapp'
    )
  } else {
    return NextResponse.redirect('https://yourdomain.com')
  }
}

export const config = {
  matcher: '/get',
}
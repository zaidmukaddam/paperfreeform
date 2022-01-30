import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Logo = ({ href }: { href?: string }) => {
  href = href || '/'
  return (
    <Link href={href}>
      <a>
        {/* <span className="sr-only">PaperFreeForm</span> */}
        <Image src="/pff.svg" width={145} height={24} alt="PaperFreeForm logo" />
      </a>
    </Link>
  )
}

export { Logo }

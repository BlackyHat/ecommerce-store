import Image from 'next/image'
import { SignOutButton } from '@clerk/nextjs'

import { UserInfoProps } from './types'

export const UserInfo: React.FC<UserInfoProps> = ({
  title,
  image,
  email,
  userName,
}) => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="sr-only">{title}</h2>

        <div className="mx-auto mr-0 w-fit space-y-4 rounded-xl border border-slate-200 px-12 py-8 text-right">
          <Image
            src={image.src}
            alt={image.alt}
            width={100}
            height={100}
            className="mx-auto mb-8 size-20 rounded-full border"
          />

          <a
            href={`mailto:${email}`}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            {email}
          </a>

          {userName && <p>{userName}</p>}

          <SignOutButton />
        </div>
      </div>
    </section>
  )
}

import content from '@/data/common.json'

import Facebook from '@/public/icons/facebook.svg'
import Instagram from '@/public/icons/instagram.svg'
import Linkedin from '@/public/icons/linkedin.svg'

export const SocialLinks: React.FC = () => {
  const { title, ariaLabel, links } = content.socialLinks

  return (
    <div>
      <p className="delimeter relative mb-4 text-xl font-medium leading-[64px] md:mb-10 md:text-2xl smOnly:text-center">
        {title}
      </p>

      <ul className="smOnly:delimeter flex gap-4 smOnly:items-center smOnly:justify-center smOnly:after:-bottom-4">
        {links.map(({ title, link }) => (
          <li key={title}>
            <a
              className="flex size-10 items-center justify-center rounded-full border border-black bg-black transition-colors hover:bg-neutral-700 focus:bg-neutral-700"
              href={link}
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label={ariaLabel.concat(' ', title)}
            >
              {title === 'Facebook' && <Facebook className="size-6" />}

              {title === 'Instagram' && <Instagram className="size-6" />}

              {title === 'Linkedin' && <Linkedin className="size-6" />}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

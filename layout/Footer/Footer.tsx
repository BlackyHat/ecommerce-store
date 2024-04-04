import { ContactLinks, Logo, SocialLinks } from '@/components/ui'

import content from '@/data/common.json'

export const Footer = () => {
  const { copyrights, terms, policy } = content.footer

  return (
    <footer className="border-t pb-4 pt-12">
      <div className="container smOnly:space-y-4">
        <div className="md:mb-20 md:grid md:grid-cols-3 md:gap-12">
          <Logo className="self-start smOnly:mb-8 smOnly:justify-center" />

          <ContactLinks />

          <SocialLinks />
        </div>

        <div className="py-4 md:flex md:items-center md:justify-between">
          <ul className="relative flex items-center gap-4 md:order-2 md:justify-end smOnly:mb-4 smOnly:justify-center">
            <li className="md:delimeter relative">
              <a
                href={terms.href}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-block text-center text-base text-neutral-500  transition-colors hover:text-black"
              >
                {terms.label}
              </a>
            </li>

            <li>
              <a
                href={policy.href}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-block text-center text-base text-neutral-500 transition-colors hover:text-black"
              >
                {policy.label}
              </a>
            </li>
          </ul>

          <p className="text-center text-base text-black">{copyrights}</p>
        </div>
      </div>
    </footer>
  )
}

import { ContactLinks, Logo, SocialLinks } from '@/components/ui'

import content from '@/data/common.json'

export const Footer = () => {
  const { copyrights, terms, policy } = content.footer

  return (
    <footer className="border-t pt-12">
      <div className="container">
        <div className="mb-20 grid grid-cols-3 gap-12">
          <Logo className="self-start" />

          <ContactLinks />

          <SocialLinks />
        </div>

        <div className="flex items-center justify-between">
          <p className="text-center text-base text-black">{copyrights}</p>

          <ul className="relative flex items-center justify-end gap-4">
            <li className='delimeter relative'>
              <a
                href={terms.href}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-block py-4 text-center text-base text-neutral-500  transition-colors hover:text-black"
              >
                {terms.label}
              </a>
            </li>

            <li>
              <a
                href={policy.href}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-block py-4 text-center text-base text-neutral-500 transition-colors hover:text-black"
              >
                {policy.label}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

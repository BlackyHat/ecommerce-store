import content from '@/data/common.json'

export const ContactLinks = () => {
  const { title, email, telegram } = content.contactLinks

  return (
    <div>
      <p className="delimeter mb-4 text-xl font-medium leading-[64px] md:mb-10 md:text-2xl smOnly:text-center">
        {title}
      </p>

      <ul className="flex flex-col gap-[16px] smOnly:items-center">
        <li className="w-fit">
          <a
            className="text-neutral-500 transition-colors hover:text-black focus:text-black md:text-[18px]"
            href={`mailto:${email.path}`}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            {email.path}
          </a>
        </li>

        <li className="w-fit">
          <a
            className="text-neutral-500 transition-colors hover:text-black focus:text-black md:text-[18px]"
            href={telegram.path}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            {telegram.label}
          </a>
        </li>
      </ul>
    </div>
  )
}

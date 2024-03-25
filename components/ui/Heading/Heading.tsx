import { cn } from '@/utils'
import { HeadingProps } from './types'

export const Heading: React.FC<HeadingProps> = ({
  title,
  description,
  className,
  descClassName,
}) => {
  return (
    <div>
      <h2
        className={cn(
          'text-xl font-bold tracking-tight sm:text-3xl',
          className,
        )}
      >
        {title}
      </h2>

      <p
        className={cn(
          'sm:text-small text-xs text-muted-foreground',
          descClassName,
        )}
      >
        {description}
      </p>
    </div>
  )
}

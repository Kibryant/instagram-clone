import { cn } from '@/lib/utils'

type SectionProps = {
  children: React.ReactNode
  className?: string
}

const Section = ({ children, className }: SectionProps) => {
  return (
    <section className="w-full px-2 flex justify-center items-center">
      <div className={cn('w-full max-w-7xl', className)}>{children}</div>
    </section>
  )
}

export { Section }

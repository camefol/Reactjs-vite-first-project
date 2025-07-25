import { ReactNode } from 'react'

type Variant = 'default' | 'dark' | 'blue'
type SectionSize = 'default' | 'medium' | 'large' | 'full'  

interface LayoutProps {
  children: ReactNode
  variant?: Variant
  className?: string
  sectionSize?: SectionSize
}

const variantClasses: Record<Variant, string> = {
  default: '',
  dark: 'bg-gradient-to-br from-slate-50 via-gray-50 to-stone-100',
  blue:'bg-gradient-to-r from-blue-400 via-indigo-300 to-blue-500'
}

const sectionSizes: Record<SectionSize, string> = {
  default: '',
  medium:'min-h-128',
  large:'min-h-150',
  full:'min-h-screen'
}

const Section = ({
  children,
  variant = 'default',
  className = '',
  sectionSize = 'default'
}: LayoutProps) => {
  return (
    <section className={`w-screen min-h-64 block text-base font-light font-serif text-center tracking-wide border-gray-300 medium-blur ${variantClasses[variant]} ${className} ${sectionSizes[sectionSize]}`}>
      {children}
    </section>
  )
 }

 export default Section
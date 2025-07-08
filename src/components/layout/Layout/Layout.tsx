import Header from '../Header'
import Footer from '../Footer'
import  Navigator  from '../../../components/common/Navigator'
import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-200 via-indigo-100 to-purple-300 max-w-screen">

      <div className="relative z-10 ">
      <Navigator />
        <Header />
        <main className="flex justify-center px-4 py-4">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}
export default Layout
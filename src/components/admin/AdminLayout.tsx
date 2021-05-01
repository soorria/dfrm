import { useUI } from '@/context/UIContext'
import Sidebar from './sidebar/Sidebar'

interface MainLayoutProps {}

const AdminLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { sidebarOpen, toggleSidebar } = useUI()
  return (
    <div className="relative flex flex-row flex-1 w-full h-full max-w-screen-lg mx-auto md:py-4">
      <div
        onClickCapture={() => toggleSidebar(false)}
        className={`md:hidden absolute inset-0 bg-gray-500 duration-75 transition-opacity ${
          sidebarOpen ? 'opacity-75' : 'opacity-0'
        }`}
      />
      <div
        className={`absolute left-0 w-full max-w-[18rem] h-full transform inset-y-0 md:pt-4 transition-transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <Sidebar />
      </div>
      <main role="main" className="flex-1 min-h-full md:ml-[18rem] p-4">
        {children}
      </main>
    </div>
  )
}

export default AdminLayout

import { BookOpen, Code, FileText, Zap, TrendingUp } from 'lucide-react'

const iconMap = {
  'book-open': BookOpen,
  'code': Code,
  'file-text': FileText,
  'zap': Zap,
  'trending-up': TrendingUp,
}

export default function Sidebar({ activeSection, setActiveSection, darkMode }) {
  const sections = [
    { id: 'roadmap', label: 'Roadmap', icon: 'trending-up' },
    { id: 'resources', label: 'Resources', icon: 'book-open' },
    { id: 'summaries', label: 'Summaries', icon: 'file-text' },
    { id: 'cheatsheets', label: 'Cheat Sheets', icon: 'code' },
    { id: 'flashcards', label: 'Flashcards', icon: 'zap' },
  ]

  return (
    <aside className={`w-64 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-r p-4 min-h-screen`}>
      <nav className="space-y-2">
        {sections.map((item) => {
          const Icon = iconMap[item.icon]
          const isActive = activeSection === item.id
          return (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg ${
                isActive ? 'bg-blue-600 text-white' : `${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`
              }`}
              aria-current={isActive ? 'page' : 'false'}
            >
              <Icon size={20} />
              {item.label}
            </button>
          )
        })}
      </nav>
    </aside>
  )
}


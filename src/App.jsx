import { useState, useEffect } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Roadmap from './pages/Roadmap'
import Resources from './pages/Resources'
import Cheatsheets from './pages/Cheatsheets'
import Flashcards from './pages/Flashcards'
import Summaries from './pages/Summaries'

function App() {
  const [activeSection, setActiveSection] = useState('roadmap')
  const [darkMode, setDarkMode] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [expandedPhases, setExpandedPhases] = useState(new Set())
  const [expandedTopics, setExpandedTopics] = useState(new Set())
  const [selectedTopicId, setSelectedTopicId] = useState(null)

  useEffect(() => {
    const saved = localStorage.getItem('python-course-preferences')
    if (saved) {
      const prefs = JSON.parse(saved)
      setDarkMode(prefs.darkMode || false)
    }
  }, [])

  const savePreferences = (nextDarkMode) => {
    const prefs = { darkMode: nextDarkMode }
    localStorage.setItem('python-course-preferences', JSON.stringify(prefs))
  }

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const next = !prev
      savePreferences(next)
      return next
    })
  }

  const handleTopicSelect = (phaseId, topicId) => {
    const newExpandedPhases = new Set(expandedPhases)
    newExpandedPhases.add(phaseId)
    setExpandedPhases(newExpandedPhases)

    const newExpandedTopics = new Set(expandedTopics)
    newExpandedTopics.add(topicId)
    setExpandedTopics(newExpandedTopics)

    setSelectedTopicId(topicId)
    setActiveSection('resources')
  }

  const renderContent = () => {
    switch (activeSection) {
      case 'roadmap':
        return <Roadmap darkMode={darkMode} onTopicSelect={handleTopicSelect} />
      case 'resources':
        return (
          <Resources
            expandedPhases={expandedPhases}
            setExpandedPhases={setExpandedPhases}
            expandedTopics={expandedTopics}
            setExpandedTopics={setExpandedTopics}
            darkMode={darkMode}
            selectedTopicId={selectedTopicId}
            setSelectedTopicId={setSelectedTopicId}
          />
        )
      case 'cheatsheets':
        return <Cheatsheets darkMode={darkMode} />
      case 'flashcards':
        return <Flashcards darkMode={darkMode} />
      case 'summaries':
        return <Summaries darkMode={darkMode} />
      default:
        return <Roadmap darkMode={darkMode} />
    }
  }

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} ${darkMode ? 'text-white' : 'text-gray-900'}`}>
        <Header
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
        <div className="flex max-w-7xl mx-auto">
          {sidebarOpen && (
            <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} darkMode={darkMode} />
          )}
          <main className="flex-1 p-8">
            {renderContent()}
          </main>
        </div>
      </div>
    </div>
  )
}

export default App


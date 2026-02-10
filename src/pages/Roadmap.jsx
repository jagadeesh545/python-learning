import { courseData } from '../data'
import TopicIcon from '../components/TopicIcon'

export default function Roadmap({ darkMode, onTopicSelect }) {
  const phases = courseData.roadmap.phases

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Learning Roadmap</h2>
      {phases.map((phase) => (
        <div key={phase.id} className={`card border rounded-lg p-6 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
          <div className="flex justify-between mb-4">
            <h3 className="text-xl font-semibold">{phase.title}</h3>
            <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{phase.duration}</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {phase.topics.map((topic) => (
              <div
                key={topic.id}
                onClick={() => onTopicSelect && onTopicSelect(phase.id, topic.id)}
                className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                  darkMode
                    ? 'border-gray-700 hover:bg-gray-700 hover:border-blue-500'
                    : 'border-gray-200 hover:bg-gray-50 hover:border-blue-400'
                }`}
              >
                <div className="flex items-center gap-3">
                  <TopicIcon topic={topic.name} darkMode={darkMode} />
                  <span>{topic.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}


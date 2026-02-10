import { courseData } from '../data'

export default function Summaries({ darkMode }) {
  const summaries = courseData.summaries

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Key Summaries</h2>
      <div className="grid gap-6">
        {summaries.map((summary) => (
          <div key={summary.id} className={`card border rounded-lg p-6 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
            <h3 className="text-xl font-semibold mb-3">{summary.title}</h3>
            <ul className="space-y-2">
              {summary.points.map((point, i) => (
                <li key={i} className={`flex items-start gap-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <span className={`text-lg ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}


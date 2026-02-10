import { courseData } from '../data'

export default function Cheatsheets({ darkMode }) {
  const sheets = courseData.cheatsheets

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Cheat Sheets</h2>
      {sheets.map((sheet) => (
        <div key={sheet.id} className={`card border rounded-lg p-6 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
          <h3 className="text-xl font-semibold mb-4">{sheet.title}</h3>
          {sheet.cmds.map((item, i) => (
            <div key={i} className={`grid grid-cols-2 gap-4 p-3 mb-2 rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
              <code className={darkMode ? 'text-blue-400' : 'text-blue-600'}>{item.cmd}</code>
              <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>{item.desc}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}


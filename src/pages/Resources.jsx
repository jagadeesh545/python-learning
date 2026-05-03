import { courseData } from '../data'
import TopicIcon from '../components/TopicIcon'
import { useEffect, useRef, useState } from 'react'
import ReactMarkdown from 'react-markdown'

// Assuming Vite as your bundler, you can import files as raw strings using '?raw'
import envIntro from '../../articles/environment-management-intro.md?raw'
import reqGuide from '../../articles/requirements-txt-guide.md?raw'
import poetryGuide from '../../articles/poetry-guide.md?raw'
import uvGuide from '../../articles/uv-guide.md?raw'

export default function Resources({ expandedPhases, setExpandedPhases, expandedTopics, setExpandedTopics, darkMode, selectedTopicId, setSelectedTopicId }) {
  const phases = courseData.roadmap.phases
  const topicRefs = useRef({})
  const [activeArticle, setActiveArticle] = useState(null)

  const articleContent = {
    'env-intro': envIntro,
    'req-guide': reqGuide,
    'poetry-guide': poetryGuide,
    'uv-guide': uvGuide,
  }

  // Safely extract the raw string and provide a fallback if the file is empty
  const getMarkdownContent = (key) => {
    const rawContent = articleContent[key]
    const text = typeof rawContent === 'string' ? rawContent : (rawContent?.default || '')
    return text.trim() ? text : '⚠️ *Article content is empty or failed to load. Try restarting your Vite server.*'
  }

  useEffect(() => {
    if (selectedTopicId && topicRefs.current[selectedTopicId]) {
      topicRefs.current[selectedTopicId].scrollIntoView({ behavior: 'smooth', block: 'start' })
      setSelectedTopicId(null)
    }
  }, [selectedTopicId, setSelectedTopicId])

  const togglePhase = (phaseId) => {
    const newSet = new Set(expandedPhases)
    if (newSet.has(phaseId)) {
      newSet.delete(phaseId)
    } else {
      newSet.add(phaseId)
    }
    setExpandedPhases(newSet)
  }

  const toggleTopic = (topicId) => {
    const newSet = new Set(expandedTopics)
    if (newSet.has(topicId)) {
      newSet.delete(topicId)
    } else {
      newSet.add(topicId)
    }
    setExpandedTopics(newSet)
  }

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Resources</h2>

      {/* Markdown Article Modal */}
      {activeArticle && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50">
          <div className={`relative w-full max-w-4xl min-h-[50vh] max-h-[90vh] overflow-y-auto rounded-lg p-8 shadow-xl ${darkMode ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-800'}`}>
            <button
              onClick={() => setActiveArticle(null)}
              className={`absolute top-4 right-4 text-3xl leading-none font-bold ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-black'}`}
            >
              &times;
            </button>
            <div className="space-y-4">
              <ReactMarkdown
                components={{
                  h1: ({node, ...props}) => <h1 className="text-3xl font-bold mb-6" {...props} />,
                  h2: ({node, ...props}) => <h2 className="text-2xl font-bold mt-8 mb-4 border-b pb-2" {...props} />,
                  h3: ({node, ...props}) => <h3 className="text-xl font-semibold mt-6 mb-3" {...props} />,
                  p: ({node, ...props}) => <p className="mb-4 leading-relaxed" {...props} />,
                  ul: ({node, ...props}) => <ul className="list-disc list-outside ml-6 mb-4 space-y-2" {...props} />,
                  ol: ({node, ...props}) => <ol className="list-decimal list-outside ml-6 mb-4 space-y-2" {...props} />,
                  li: ({node, ...props}) => <li {...props} />,
                  a: ({node, ...props}) => <a className="text-blue-500 hover:underline" target="_blank" rel="noreferrer" {...props} />,
                  code(props) {
                    const {children, className, node, ...rest} = props
                    const match = /language-(\w+)/.exec(className || '')
                    return match ? (
                      <pre className={`p-4 my-4 rounded-lg overflow-x-auto ${darkMode ? 'bg-gray-900 text-gray-300' : 'bg-gray-100 text-gray-800'}`}>
                        <code className={className} {...rest}>
                          {children}
                        </code>
                      </pre>
                    ) : (
                      <code className={`px-1.5 py-0.5 rounded text-sm font-mono ${darkMode ? 'bg-gray-700 text-blue-300' : 'bg-gray-200 text-blue-600'}`} {...rest}>
                        {children}
                      </code>
                    )
                  }
                }}
              >
                {getMarkdownContent(activeArticle)}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      )}

      {phases.map((phase) => (
        <div
          key={phase.id}
          className={`card border rounded-lg p-6 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}
        >
          <div
            className="flex justify-between items-center mb-4 cursor-pointer"
            onClick={() => togglePhase(phase.id)}
          >
            <div className="flex items-center gap-3">
              <span className="text-lg">{expandedPhases.has(phase.id) ? '▼' : '▶'}</span>
              <h3 className="text-xl font-semibold">{phase.title}</h3>
            </div>
          </div>
          {expandedPhases.has(phase.id) && (
            <div className="space-y-4">
              {phase.topics.map((topic) => (
                <div
                  key={topic.id}
                  ref={(el) => (topicRefs.current[topic.id] = el)}
                  className={`p-4 rounded cursor-pointer ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}
                  onClick={() => toggleTopic(topic.id)}
                >
                  <div className={`flex items-center justify-between ${expandedTopics.has(topic.id) ? 'mb-3' : 'mb-0'}`}>
                    <div className="flex items-center gap-3">
                      <TopicIcon topic={topic.name} darkMode={darkMode} />
                      <h4 className="font-semibold">{topic.name}</h4>
                    </div>
                    <span className="text-lg">{expandedTopics.has(topic.id) ? '▼' : '▶'}</span>
                  </div>
                  {expandedTopics.has(topic.id) && (
                    <div className="ml-8 space-y-3 mt-3">
                      {['Docs', 'Articles', 'Videos', 'Projects'].map((type) => (
                        <div key={type}>
                          <p className="font-medium text-sm mb-1">{type}</p>
                          {type === 'Articles' && topic.id === 'kafka' ? (
                            <ul className="list-disc list-inside text-sm space-y-1">
                              <li>
                                <a
                                  href="https://medium.com/@sivakami.kanda/golden-rules-interactions-between-python-async-event-loop-threads-and-kafka-4581da7d4f40"
                                  target="_blank"
                                  rel="noreferrer"
                                  className={darkMode ? 'text-blue-400 underline' : 'text-blue-600 underline'}
                                >
                                  Golden Rules – interactions between Python async event loop, threads, and Kafka
                                </a>
                              </li>
                            </ul>
                          ) : type === 'Articles' && topic.id === 'asyncio' ? (
                            <ul className="list-disc list-inside text-sm space-y-1">
                              <li>
                                <a
                                  href="https://superfastpython.com/threadpoolexecutor-in-python/"
                                  target="_blank"
                                  rel="noreferrer"
                                  className={darkMode ? 'text-blue-400 underline' : 'text-blue-600 underline'}
                                >
                                  ThreadPoolExecutor in Python – Complete Guide
                                </a>
                              </li>
                            </ul>
                          ) : type === 'Articles' && topic.id === 'packaging' ? (
                            <ul className="list-disc list-inside text-sm space-y-1">
                              <li>
                                <button
                                  onClick={() => setActiveArticle('env-intro')}
                                  className={`hover:underline text-left ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}
                                >
                                  Introduction to Python Environment Management
                                </button>
                              </li>
                              <li>
                                <button
                                  onClick={() => setActiveArticle('req-guide')}
                                  className={`hover:underline text-left ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}
                                >
                                  Managing Dependencies with requirements.txt
                                </button>
                              </li>
                              <li>
                                <button
                                  onClick={() => setActiveArticle('poetry-guide')}
                                  className={`hover:underline text-left ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}
                                >
                                  Modern Python Packaging with Poetry
                                </button>
                              </li>
                              <li>
                                <button
                                  onClick={() => setActiveArticle('uv-guide')}
                                  className={`hover:underline text-left ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}
                                >
                                  Ultra-fast Python with uv
                                </button>
                              </li>
                            </ul>
                          ) : (
                            <p className={`text-sm italic ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>TBD</p>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

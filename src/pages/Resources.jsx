import { courseData } from '../data'
import TopicIcon from '../components/TopicIcon'
import { useEffect, useRef } from 'react'

export default function Resources({ expandedPhases, setExpandedPhases, expandedTopics, setExpandedTopics, darkMode, selectedTopicId, setSelectedTopicId }) {
  const phases = courseData.roadmap.phases
  const topicRefs = useRef({})

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


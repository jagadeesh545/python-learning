import * as LucideIcons from 'lucide-react'

const iconMap = {
  'python': 'Python',
  'syntax': 'Code',
  'testing': 'FlaskConical',
  'web': 'Globe2',
  'data': 'Database',
  'async': 'Zap',
  'cli': 'Terminal',
  'packaging': 'Package',
  'default': 'BookOpen',
}

export default function TopicIcon({ topic, size = 24, darkMode }) {
  const key = (topic || '').toLowerCase()
  const iconName = iconMap[key] || iconMap.default
  const IconComponent = LucideIcons[iconName] || LucideIcons.BookOpen
  const color = darkMode ? '#60a5fa' : '#3b82f6'

  return <IconComponent size={size} color={color} />
}


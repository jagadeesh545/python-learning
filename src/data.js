// Data configuration for the Python Software Engineering (Backend & Microservices) course
export const courseData = {
  title: 'Python Software Engineering (Backend & Microservices)',
  roadmap: {
    phases: [
      {
        id: 'python-basics',
        title: 'Phase 1: Backend Python Foundations',
        duration: '3-4 weeks',
        topics: [
          { id: 'syntax', name: 'Syntax & Data Types', icon: 'code' },
          { id: 'control-flow', name: 'Control Flow & Functions', icon: 'code' },
          { id: 'collections', name: 'Collections & Iteration', icon: 'code' },
          { id: 'modules', name: 'Modules & Packages', icon: 'package' },
        ],
      },
      {
        id: 'python-systems',
        title: 'Phase 2: HTTP APIs & Services',
        duration: '4-6 weeks',
        topics: [
          { id: 'files', name: 'File I/O & OS', icon: 'database' },
          { id: 'networking', name: 'Networking & HTTP', icon: 'network' },
          { id: 'cli', name: 'CLI Tools & Automation', icon: 'terminal' },
          { id: 'testing', name: 'Testing & Debugging', icon: 'bug' },
        ],
      },
      {
        id: 'python-backend',
        title: 'Phase 3: Web Backends & Microservices',
        duration: '4-6 weeks',
        topics: [
          { id: 'fastapi', name: 'FastAPI', icon: 'globe' },
          { id: 'django', name: 'Django', icon: 'globe' },
          { id: 'kafka', name: 'Kafka & Event-Driven Design', icon: 'zap' },
          { id: 'auth', name: 'Auth & Security', icon: 'lock' },
          { id: 'orm', name: 'Databases & ORMs', icon: 'database' },
        ],
      },
      {
        id: 'python-advanced',
        title: 'Phase 4: Operations & Scaling',
        duration: '3-4 weeks',
        topics: [
          { id: 'asyncio', name: 'Asyncio & Concurrency', icon: 'zap' },
          { id: 'performance', name: 'Performance & Profiling', icon: 'gauge' },
          { id: 'packaging', name: 'Packaging & Tooling', icon: 'package' },
          { id: 'deploy', name: 'Deployment & CI/CD', icon: 'git-branch' },
        ],
      },
    ],
  },
  cheatsheets: [
    {
      id: 'python-shell',
      title: 'Python Shell & Virtualenv',
      cmds: [
        { cmd: 'python -m venv .venv', desc: 'Create virtual environment' },
        { cmd: 'source .venv/bin/activate', desc: 'Activate virtualenv (Unix)' },
        { cmd: 'pip install -r requirements.txt', desc: 'Install dependencies' },
        { cmd: 'python -m pip install --upgrade pip', desc: 'Upgrade pip' },
      ],
    },
    {
      id: 'testing',
      title: 'Testing & Tooling',
      cmds: [
        { cmd: 'python -m pytest', desc: 'Run tests with pytest' },
        { cmd: 'pytest -k "pattern"', desc: 'Run tests matching pattern' },
        { cmd: 'ruff check .', desc: 'Run Ruff linter' },
        { cmd: 'mypy .', desc: 'Run mypy type checker' },
      ],
    },
    {
      id: 'kafka',
      title: 'Kafka Basics',
      cmds: [
        { cmd: 'kafka-topics.sh --list --bootstrap-server localhost:9092', desc: 'List topics' },
        { cmd: 'kafka-topics.sh --create --topic demo --bootstrap-server localhost:9092 --partitions 3 --replication-factor 1', desc: 'Create topic' },
        { cmd: 'kafka-console-producer.sh --topic demo --bootstrap-server localhost:9092', desc: 'Start console producer' },
        { cmd: 'kafka-console-consumer.sh --topic demo --from-beginning --bootstrap-server localhost:9092', desc: 'Start console consumer' },
      ],
    },
  ],
  summaries: [
    {
      id: 'idiomatic-python',
      title: 'Idiomatic Python',
      points: [
        'Prefer list/dict comprehensions over manual loops when building collections',
        'Use context managers (with ...) for files, locks, and resources',
        'Leverage dataclasses or pydantic models for structured data',
        'Follow PEP 8 for naming, spacing, and imports',
      ],
    },
    {
      id: 'systems',
      title: 'Python for Systems Work',
      points: [
        'Use pathlib for file paths instead of os.path for clearer, safer code',
        'Combine subprocess.run with check=True and timeouts for robust shell calls',
        'Use logging instead of print for production diagnostics',
        'Design small, composable CLI tools that can be chained with other programs',
      ],
    },
    {
      id: 'kafka-overview',
      title: 'Kafka in Backend Architectures',
      points: [
        'Kafka is a distributed log used for durable event streaming between services.',
        'Producers write records to topics; consumers read from topics independently using consumer groups.',
        'Use Kafka to decouple microservices via events, avoiding tight HTTP coupling.',
        'Model events as immutable facts and design idempotent consumers to handle retries and replays.',
      ],
    },
  ],
  flashcards: [
    {
      question: 'What is the difference between a list and a tuple in Python?',
      answer: 'Lists are mutable sequences, tuples are immutable sequences.',
    },
    {
      question: 'What is the difference between list.sort() vs sorted()?',
      answer: 'list.sort() is a method that sorts the list in place and returns None, sorted() is a function that returns a new sorted list and does not modify the original list.',
    },
    {
      question: 'What does "if __name__ == \'__main__\':" do?',
      answer: 'It runs the block only when the file is executed as a script, not when imported.',
    },
    {
      question: 'What problem does Kafka primarily solve in microservice architectures?',
      answer: 'It provides a durable, scalable event log to decouple producers and consumers via asynchronous messaging.',
    },
  ],
}


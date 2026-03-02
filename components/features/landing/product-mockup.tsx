type Priority = 'high' | 'medium' | 'low'

interface Task {
  title: string
  priority: Priority
  assignee: string
  assigneeColor: string
  tag: string
  tagClass: string
  due: string
  progress?: number
}

const TODO_TASKS: Task[] = [
  {
    title: 'Design onboarding flow',
    priority: 'high',
    assignee: 'J',
    assigneeColor: 'bg-violet-500',
    tag: 'Design',
    tagClass: 'bg-pink-100 text-pink-700',
    due: 'Mar 5',
  },
  {
    title: 'Set up CI/CD pipeline',
    priority: 'medium',
    assignee: 'S',
    assigneeColor: 'bg-indigo-500',
    tag: 'DevOps',
    tagClass: 'bg-blue-100 text-blue-700',
    due: 'Mar 8',
  },
  {
    title: 'Write API documentation',
    priority: 'low',
    assignee: 'M',
    assigneeColor: 'bg-amber-500',
    tag: 'Docs',
    tagClass: 'bg-zinc-100 text-zinc-600',
    due: 'Mar 12',
  },
]

const IN_PROGRESS_TASKS: Task[] = [
  {
    title: 'Implement user authentication',
    priority: 'high',
    assignee: 'T',
    assigneeColor: 'bg-emerald-500',
    tag: 'Backend',
    tagClass: 'bg-green-100 text-green-700',
    due: 'Mar 3',
    progress: 65,
  },
  {
    title: 'Build dashboard analytics',
    priority: 'medium',
    assignee: 'J',
    assigneeColor: 'bg-violet-500',
    tag: 'Frontend',
    tagClass: 'bg-purple-100 text-purple-700',
    due: 'Mar 6',
    progress: 40,
  },
]

const REVIEW_TASKS: Task[] = [
  {
    title: 'Optimize database queries',
    priority: 'high',
    assignee: 'S',
    assigneeColor: 'bg-indigo-500',
    tag: 'Backend',
    tagClass: 'bg-green-100 text-green-700',
    due: 'Mar 1',
    progress: 90,
  },
]

const DONE_TASKS: Task[] = [
  {
    title: 'Set up project repository',
    priority: 'medium',
    assignee: 'M',
    assigneeColor: 'bg-amber-500',
    tag: 'DevOps',
    tagClass: 'bg-blue-100 text-blue-700',
    due: 'Feb 28',
  },
  {
    title: 'Define project requirements',
    priority: 'low',
    assignee: 'T',
    assigneeColor: 'bg-emerald-500',
    tag: 'Planning',
    tagClass: 'bg-indigo-100 text-indigo-700',
    due: 'Feb 25',
  },
]

const PRIORITY_CLASSES: Record<Priority, string> = {
  high: 'bg-red-100 text-red-600',
  medium: 'bg-amber-100 text-amber-600',
  low: 'bg-zinc-100 text-zinc-500',
}

function TaskCard({ task }: { task: Task }) {
  return (
    <div className="bg-white rounded-lg p-3 shadow-sm border border-zinc-100 hover:shadow-md transition-shadow cursor-pointer">
      <div className="flex items-center gap-1.5 mb-2 flex-wrap">
        <span
          className={`text-[9px] font-semibold px-1.5 py-0.5 rounded uppercase tracking-wide ${PRIORITY_CLASSES[task.priority]}`}
        >
          {task.priority}
        </span>
        <span className={`text-[9px] font-medium px-1.5 py-0.5 rounded ${task.tagClass}`}>
          {task.tag}
        </span>
      </div>
      <p className="text-xs font-medium text-zinc-800 leading-snug mb-2">{task.title}</p>
      {task.progress !== undefined && (
        <div className="mb-2">
          <div className="flex justify-between items-center mb-1">
            <span className="text-[9px] text-zinc-400">Progress</span>
            <span className="text-[9px] text-zinc-400">{task.progress}%</span>
          </div>
          <div className="w-full h-1 bg-zinc-100 rounded-full">
            <div
              className="h-1 bg-violet-500 rounded-full"
              style={{ width: `${task.progress}%` }}
            />
          </div>
        </div>
      )}
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center gap-1">
          <svg
            className="w-3 h-3 text-zinc-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="text-[9px] text-zinc-400">{task.due}</span>
        </div>
        <div
          className={`w-5 h-5 rounded-full ${task.assigneeColor} flex items-center justify-center text-white text-[8px] font-semibold`}
        >
          {task.assignee}
        </div>
      </div>
    </div>
  )
}

interface ColumnProps {
  title: string
  count: number
  dotClass: string
  labelClass: string
  tasks: Task[]
}

function KanbanColumn({ title, count, dotClass, labelClass, tasks }: ColumnProps) {
  return (
    <div className="w-52 shrink-0">
      <div className="flex items-center gap-2 mb-3 px-1">
        <div className={`w-2 h-2 rounded-full ${dotClass}`} />
        <span className={`text-[10px] font-semibold uppercase tracking-wider ${labelClass}`}>
          {title}
        </span>
        <span className="ml-auto text-[10px] text-zinc-400 bg-zinc-200 rounded-full px-1.5 py-0.5">
          {count}
        </span>
      </div>
      <div className="flex flex-col gap-2">
        {tasks.map((task, i) => (
          <TaskCard key={i} task={task} />
        ))}
        <button className="w-full p-2 text-[10px] text-zinc-400 border border-dashed border-zinc-200 rounded-lg hover:border-violet-300 hover:text-violet-400 transition-colors">
          + Add task
        </button>
      </div>
    </div>
  )
}

export function ProductMockup() {
  return (
    <div className="rounded-xl overflow-hidden shadow-2xl border border-border/50 bg-background select-none">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-4 py-3 bg-zinc-100 border-b border-zinc-200">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
          <div className="w-3 h-3 rounded-full bg-[#28C840]" />
        </div>
        <div className="flex-1 mx-3">
          <div className="bg-white rounded-md px-3 py-1 text-[10px] text-zinc-400 text-center font-mono">
            app.flowtask.io/workspace/q2-roadmap
          </div>
        </div>
        <div className="flex gap-1.5">
          <div className="w-4 h-4 rounded-sm bg-zinc-200" />
          <div className="w-4 h-4 rounded-sm bg-zinc-200" />
        </div>
      </div>

      {/* App sidebar + main */}
      <div className="flex">
        {/* Sidebar */}
        <div className="hidden sm:flex w-44 border-r border-zinc-100 bg-zinc-50 flex-col py-3 shrink-0">
          <div className="px-3 mb-3">
            <div className="flex items-center gap-2 px-2 py-1.5 bg-white rounded-lg shadow-sm border border-zinc-100">
              <div className="w-5 h-5 rounded bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
                <svg
                  className="w-2.5 h-2.5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <span className="text-[10px] font-semibold text-zinc-700">Acme Inc</span>
            </div>
          </div>
          <div className="px-2 space-y-0.5">
            {[
              { label: 'Home', active: false, icon: '⊞' },
              { label: 'My Tasks', active: false, icon: '✓' },
              { label: 'Inbox', active: false, icon: '✉' },
            ].map(({ label, active, icon }) => (
              <div
                key={label}
                className={`flex items-center gap-2 px-2 py-1.5 rounded-md text-[10px] ${
                  active
                    ? 'bg-violet-50 text-violet-700 font-medium'
                    : 'text-zinc-500 hover:bg-zinc-100'
                }`}
              >
                <span>{icon}</span>
                {label}
              </div>
            ))}
          </div>
          <div className="mt-3 px-3">
            <p className="text-[9px] font-semibold text-zinc-400 uppercase tracking-wider mb-1 px-1">
              Projects
            </p>
            <div className="space-y-0.5">
              {[
                { name: 'Q2 Roadmap', color: 'bg-violet-500', active: true },
                { name: 'Marketing', color: 'bg-pink-500', active: false },
                { name: 'Platform v2', color: 'bg-indigo-500', active: false },
              ].map(({ name, color, active }) => (
                <div
                  key={name}
                  className={`flex items-center gap-2 px-2 py-1.5 rounded-md text-[10px] cursor-pointer ${
                    active ? 'bg-violet-50 text-violet-700 font-medium' : 'text-zinc-500'
                  }`}
                >
                  <div className={`w-2 h-2 rounded-sm ${color}`} />
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 overflow-hidden">
          {/* App header */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-white border-b border-zinc-100">
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold text-zinc-800">Q2 Product Roadmap</span>
              <div className="flex gap-0.5">
                <span className="px-2 py-0.5 text-[10px] font-medium bg-violet-100 text-violet-700 rounded-full cursor-pointer">
                  Board
                </span>
                <span className="px-2 py-0.5 text-[10px] text-zinc-500 rounded-full cursor-pointer hover:bg-zinc-100">
                  List
                </span>
                <span className="px-2 py-0.5 text-[10px] text-zinc-500 rounded-full cursor-pointer hover:bg-zinc-100">
                  Timeline
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-1.5">
                {[
                  { color: 'bg-violet-500', letter: 'J' },
                  { color: 'bg-indigo-500', letter: 'S' },
                  { color: 'bg-pink-500', letter: 'A' },
                  { color: 'bg-amber-500', letter: 'M' },
                ].map(({ color, letter }, i) => (
                  <div
                    key={i}
                    className={`w-6 h-6 rounded-full ${color} border-2 border-white flex items-center justify-center text-white text-[9px] font-semibold`}
                  >
                    {letter}
                  </div>
                ))}
              </div>
              <button className="ml-1 px-2.5 py-1 text-[10px] font-medium bg-violet-600 text-white rounded-full">
                + Add Task
              </button>
            </div>
          </div>

          {/* Kanban board */}
          <div className="bg-zinc-50 p-4 overflow-x-auto">
            <div className="flex gap-3 min-w-max">
              <KanbanColumn
                title="To Do"
                count={3}
                dotClass="bg-zinc-400"
                labelClass="text-zinc-500"
                tasks={TODO_TASKS}
              />
              <KanbanColumn
                title="In Progress"
                count={2}
                dotClass="bg-violet-500"
                labelClass="text-violet-600"
                tasks={IN_PROGRESS_TASKS}
              />
              <KanbanColumn
                title="In Review"
                count={1}
                dotClass="bg-amber-500"
                labelClass="text-amber-600"
                tasks={REVIEW_TASKS}
              />
              <KanbanColumn
                title="Done"
                count={2}
                dotClass="bg-emerald-500"
                labelClass="text-emerald-600"
                tasks={DONE_TASKS}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

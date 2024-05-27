import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <div className="min-h-screen w-full bg-slate-900 text-slate-200">
      <div className="flex-1 flex flex-col gap-4 p-8 pt-6">
        <Outlet />
      </div>
    </div>
  )
}

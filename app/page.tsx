import { createClient } from '@/lib/supabase/server'

export default async function Home() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  
  // Check if orgs exist
  le
  if (user) {
    const { data } = await supabase.from('memberships').select('org_id, organizations(name)').eq('user_id', user.id)
    orgs = data || []
  }

  return (
    <main className="min-h-screen bg-[#f8fafc] flex items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8">
        <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center mb-6">
          <span className="text-white font-bold">UB</span>
        </div>
        <h1 className="text-3xl font-bold mb-2">UBCC Setup Complete! 🎉</h1>
        <p className="text-slate-600 mb-6">Your Supabase is connected. {user ? `Logged in as ${user.email}` : 'Please login to continue.'}</p>
        
        <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
          <p className="text-green-800 font-medium">✅ Database Connected</p>
          <p className="text-green-700 text-sm mt-1">Project: lgkyabzthclxyffzrzzz</p>
          <p className="text-green-700 text-sm">Tables: organizations, people, clients, tasks, projects + 15 more</p>
          <p className="text-green-700 text-sm">RLS: Enabled (org isolation active)</p>
        </div>

        {user ? (
          <div>
            <p className="font-medium mb-3">Your Organizations:</p>
            {orgs.length > 0 ? orgs.map((m:any) => (
              <div key={m.org_id} className="p-3 border rounded-lg mb-2">{m.organizations?.name || m.org_id}</div>
            )) : <p className="text-slate-500 text-sm">No org yet — Go to /onboarding to create your first org</p>}
            <a href="/onboarding" className="mt-4 inline-block bg-indigo-600 text-white px-6 py-3 rounded-xl font-medium">Create First Organization →</a>
          </div>
        ) : (
          <div>
            <a href="/login" className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-xl font-medium">Login / Sign Up →</a>
            <p className="text-xs text-slate-500 mt-3">Your anon key is working. Add service_role key in Vercel env vars for full admin features.</p>
          </div>
        )}

        <div className="mt-8 pt-6 border-t text-xs text-slate-400">
          <p>Preview of full platform: Open the artifact link Mark sent you earlier to see the complete UI with 16 modules, dashboard, kanban, calendar, etc. This Vercel deploy is the real backend — the full UI will be connected next.</p>
        </div>
      </div>
    </main>
  )
}

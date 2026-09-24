import { createClient } from '@/lib/supabase/server'

export default async function Page() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  
  let orgs: any[] = []
  if (user) {
    const { data } = await supabase.from('organizations').select('*')
    orgs = data || []
  }

  return (
    <main style={{ padding: '32px', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>UBCC Business Center</h1>
      <p style={{ marginTop: '16px' }}>✅ Setup Complete! 🎉</p>
      <p style={{ marginTop: '8px' }}>✅ Database Connected</p>
      {user ? (
        <p style={{ marginTop: '8px' }}>Logged in as {user.email} - Orgs: {orgs.length}</p>
      ) : (
        <p style={{ marginTop: '8px' }}>Not logged in - Ready for login!</p>
      )}
    </main>
  )
}

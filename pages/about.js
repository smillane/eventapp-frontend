import Layout from '../components/Layout'

export default function AboutPage() {
  return (
    <Layout title='About EventsApp'>
      <h1>About</h1>
      <p>Event app to find local events, from concerts, to any others</p>
      <p>version 1.0.0</p>
      <Link href='/'>Home</Link>
    </Layout> 
  )
}

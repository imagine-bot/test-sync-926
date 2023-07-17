import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Home() {
  const [launches, setLaunches] = useState([])

  useEffect(() => {
    fetch('https://api.spacexdata.com/v4/launches')
      .then(response => response.json())
      .then(data => setLaunches(data))
  }, [])

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">SpaceX Launches</h1>
      <ul>
        {launches.map(launch => (
          <li key={launch.id} className="mb-2">
            <Link href={`/launch/${launch.id}`}>
              <a className="text-blue-500 hover:underline">{launch.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
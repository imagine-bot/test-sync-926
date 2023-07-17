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
    <div>
      <h1>SpaceX Launches</h1>
      <ul>
        {launches.map(launch => (
          <li key={launch.id}>
            <Link href={`/launch/${launch.id}`}>
              <a>{launch.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Launch() {
  const router = useRouter()
  const { id } = router.query

  const [launch, setLaunch] = useState(null)

  useEffect(() => {
    if (id) {
      fetch(`https://api.spacexdata.com/v4/launches/${id}`)
        .then(response => response.json())
        .then(data => setLaunch(data))
    }
  }, [id])

  if (!launch) return <div>Loading...</div>

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{launch.name}</h1>
      <p>{launch.details}</p>
    </div>
  )
}
import { useEffect, useState } from 'react'

/**
 * Loads the photo gallery from public/photos/photos.json at runtime.
 *
 * To add a photo: drop the image file into public/photos/ and append an entry
 *   { "src": "photos/your-photo.jpg", "caption": "Short caption", "alt": "Description" }
 * to photos.json — no code changes needed.
 */
export function usePhotos() {
  const [photos, setPhotos] = useState([])
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    let cancelled = false

    fetch('photos/photos.json')
      .then((res) => {
        if (!res.ok) throw new Error(`photos.json: ${res.status}`)
        return res.json()
      })
      .then((data) => {
        if (!cancelled) {
          setPhotos(Array.isArray(data) ? data : [])
          setStatus('done')
        }
      })
      .catch(() => {
        if (!cancelled) setStatus('error')
      })

    return () => {
      cancelled = true
    }
  }, [])

  return { photos, status }
}

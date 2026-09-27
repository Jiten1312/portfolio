import { useEffect, useState } from 'react'

/**
 * Types phrases one char at a time, holds, deletes, and moves to the next.
 * Returns the currently visible text.
 */
export function useTypewriter(phrases, { typeSpeed = 70, deleteSpeed = 35, holdMs = 1400 } = {}) {
  const [text, setText] = useState('')

  useEffect(() => {
    let phrase = 0
    let char = 0
    let deleting = false
    let timer

    const tick = () => {
      const current = phrases[phrase]
      if (!deleting) {
        char += 1
        setText(current.slice(0, char))
        if (char === current.length) {
          deleting = true
          timer = setTimeout(tick, holdMs)
          return
        }
        timer = setTimeout(tick, typeSpeed)
      } else {
        char -= 1
        setText(current.slice(0, char))
        if (char === 0) {
          deleting = false
          phrase = (phrase + 1) % phrases.length
          timer = setTimeout(tick, 400)
          return
        }
        timer = setTimeout(tick, deleteSpeed)
      }
    }

    timer = setTimeout(tick, 500)
    return () => clearTimeout(timer)
  }, [phrases, typeSpeed, deleteSpeed, holdMs])

  return text
}

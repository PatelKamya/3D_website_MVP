import { useEffect, useRef } from 'react'

const clamp = (value) => Math.min(Math.max(value, 0), 1)

export function useScrollVideo(containerRef, videoRef, reducedMotion = false) {
  const progressRef = useRef(0)
  const targetTimeRef = useRef(0)
  const scrollFrameRef = useRef()
  const playbackFrameRef = useRef()

  useEffect(() => {
    const container = containerRef.current
    const video = videoRef.current
    if (!container || !video) return

    let duration = 0
    let displayedTime = 0
    let lastFrameTime = performance.now()
    let lastSeekTime = 0
    let isActive = true

    const readDuration = () => {
      duration = Number.isFinite(video.duration) ? video.duration : 0
      video.pause()
      if (duration && !reducedMotion) {
        targetTimeRef.current = progressRef.current * Math.max(duration - 0.04, 0)
        displayedTime = targetTimeRef.current
        video.currentTime = displayedTime
      }
    }

    const updateProgress = () => {
      scrollFrameRef.current = undefined
      const rect = container.getBoundingClientRect()
      const distance = Math.max(container.offsetHeight - window.innerHeight, 1)
      const progress = clamp(-rect.top / distance)
      progressRef.current = progress
      container.style.setProperty('--scroll-progress', progress.toFixed(4))
      if (duration && !reducedMotion) targetTimeRef.current = progress * Math.max(duration - 0.04, 0)
    }

    const onScroll = () => {
      if (!scrollFrameRef.current) scrollFrameRef.current = requestAnimationFrame(updateProgress)
    }

    const smoothSeek = (now) => {
      const elapsed = Math.min(now - lastFrameTime, 64)
      lastFrameTime = now

      if (isActive && duration && !reducedMotion && video.readyState >= 2) {
        const difference = targetTimeRef.current - displayedTime
        const smoothing = 1 - Math.exp(-elapsed / 42)
        displayedTime += difference * smoothing

        // Avoid flooding the decoder with more seek requests than it can render.
        if (now - lastSeekTime >= 30 && Math.abs(video.currentTime - displayedTime) > 0.012) {
          video.currentTime = displayedTime
          lastSeekTime = now
        }
      }
      playbackFrameRef.current = requestAnimationFrame(smoothSeek)
    }

    readDuration()
    updateProgress()
    video.addEventListener('loadedmetadata', readDuration)
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    playbackFrameRef.current = requestAnimationFrame(smoothSeek)

    return () => {
      isActive = false
      video.removeEventListener('loadedmetadata', readDuration)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(scrollFrameRef.current)
      cancelAnimationFrame(playbackFrameRef.current)
    }
  }, [containerRef, videoRef, reducedMotion])

  return progressRef
}

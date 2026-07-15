import { useEffect, useRef } from 'react'

const clamp = (value) => Math.min(Math.max(value, 0), 1)

export function useScrollVideo(containerRef, videoRef, reducedMotion = false) {
  const progressRef = useRef(0)
  const targetTimeRef = useRef(0)
  const frameRef = useRef()
  const seekFrameRef = useRef()

  useEffect(() => {
    const container = containerRef.current
    const video = videoRef.current
    if (!container || !video) return

    let duration = 0
    const readDuration = () => {
      duration = Number.isFinite(video.duration) ? video.duration : 0
      video.pause()
      if (duration && !reducedMotion) targetTimeRef.current = progressRef.current * Math.max(duration - 0.04, 0)
    }

    const updateProgress = () => {
      frameRef.current = undefined
      const rect = container.getBoundingClientRect()
      const distance = Math.max(container.offsetHeight - window.innerHeight, 1)
      const progress = clamp(-rect.top / distance)
      progressRef.current = progress
      container.style.setProperty('--scroll-progress', progress.toFixed(4))
      if (duration && !reducedMotion) targetTimeRef.current = progress * Math.max(duration - 0.04, 0)
    }

    const onScroll = () => {
      if (!frameRef.current) frameRef.current = requestAnimationFrame(updateProgress)
    }

    const smoothSeek = () => {
      if (duration && !reducedMotion && video.readyState >= 2) {
        const difference = targetTimeRef.current - video.currentTime
        if (Math.abs(difference) > 0.008) video.currentTime += difference * 0.11
      }
      seekFrameRef.current = requestAnimationFrame(smoothSeek)
    }

    readDuration()
    updateProgress()
    video.addEventListener('loadedmetadata', readDuration)
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    seekFrameRef.current = requestAnimationFrame(smoothSeek)

    return () => {
      video.removeEventListener('loadedmetadata', readDuration)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(frameRef.current)
      cancelAnimationFrame(seekFrameRef.current)
    }
  }, [containerRef, videoRef, reducedMotion])

  return progressRef
}

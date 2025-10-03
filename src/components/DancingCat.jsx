import { useState, useEffect } from 'react'
import catImage from '../assets/images/cat.svg'
import '../styles/DancingCat.css'

function DancingCat() {
  const [isPlaying, setIsPlaying] = useState(true)

  const toggleAnimation = () => {
    setIsPlaying(!isPlaying)
  }

  // Keyboard navigation: Space key to toggle animation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.code === 'Space') {
        e.preventDefault()
        toggleAnimation()
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [isPlaying])

  return (
    <div className="dancing-cat-container">
      <div className="title">
        <h1>Dancing Cat</h1>
        <p>Click the button or press Space to control the animation</p>
      </div>

      <div className={`cat-wrapper ${isPlaying ? 'dancing' : 'paused'}`}>
        <img src={catImage} alt="Dancing Cat" className="cat" />
      </div>

      <button
        className="control-button"
        onClick={toggleAnimation}
        aria-label={isPlaying ? 'Stop dancing animation' : 'Start dancing animation'}
      >
        {isPlaying ? 'Stop Dancing' : 'Start Dancing'}
      </button>
    </div>
  )
}

export default DancingCat

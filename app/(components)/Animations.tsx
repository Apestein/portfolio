import "./styles/Particles.scss"
import "./styles/Stars.scss"

export function Particles() {
  const array = []
  for (let i = 0; i < 100; i++)
    array.push(
      <div key={crypto.randomUUID()} className="Particle_circle-container">
        <div className="Particle_circle"></div>
      </div>
    )
  return <div className="absolute h-screen w-full overflow-hidden">{array}</div>
}

export function Stars() {
  return (
    <>
      <div id="stars" className="-z-10"></div>
      <div id="stars2" className="-z-10"></div>
      <div id="stars3" className="-z-10"></div>
    </>
  )
}

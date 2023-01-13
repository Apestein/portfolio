import "./styles/Particles.scss"
import "./styles/Stars.css"

export function Particles() {
  const array = []
  for (let i = 0; i < 100; i++)
    array.push(
      <div key={crypto.randomUUID()} className="circle-container">
        <div className="circle"></div>
      </div>
    )
  return <div>{array}</div>
}

export function Stars() {
  return (
    <figure className="-z-10">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
    </figure>
  )
}

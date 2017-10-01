import { Link } from 'preact-router/match'
import style from './style'

export default function Header () {
  return (
    <header class={style.header}>
      <h1>Classroom Alive: Sweden to Greece</h1>
      <nav>
        <Link activeClassName={style.active} href='/'>Home</Link>
        <Link activeClassName={style.active} href='/story'>Story</Link>
      </nav>
    </header>
  )
}

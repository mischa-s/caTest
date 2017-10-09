import { Link } from 'preact-router/match'
import style from './style'

export default function Header () {
  return (
    <header class={style.header}>
      <h1>Classroom Alive: Sweden to Greece</h1>
      <nav>
        <Link activeClassName={style.active} href='/introduction'>Introduction</Link>
        <Link activeClassName={style.active} href='/'>Story</Link>
        <Link activeClassName={style.active} href='/story'>Learnings</Link>
      </nav>
    </header>
  )
}
// <Link activeClassName={style.active} href='/story'>Story</Link>
// <a href='#finances'> Finances </a>

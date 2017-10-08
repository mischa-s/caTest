import style from './style'
import OverViewSections from '../../components/overviewSections'
import StorySections from '../../components/storySections'
export default function DataRenderer () {
  return (
    <div class={style.story}>
      <OverViewSections />
      <StorySections />
    </div>
  )
}

import { map } from 'lodash'
import style from './style'
import Overview from '../../data/Overview'
export default function DataRenderer () {
  return (
    <div class={style.story}>
      { map(Overview, section => {
        return (
          <div>
            <div class={style.heading}>
              <h1 >{section.title}</h1>
              <img class={style.image} src={'../../assets/CAmap.jpg'} />
            </div>
            { map(section.text, subSection => {
              return <p class={style.content} >{subSection.content}</p>
            })}
          </div>
        )
      })}
    </div>
  )
}

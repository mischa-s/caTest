import { map } from 'lodash'
import style from '../routes/story/style'
import Overview from '../data/Overview'
export default function OverViewSections () {
  return (
    <div class={style.story}>
      { map(Overview, section => {
        console.log(section.image, 'sectroin image')
        return (
          <div>
            <div class={style.heading} id={section.id}>
              <h1 >{section.title}</h1>
              <img class={style.image} src={section.image || '../../assets/CAmap.jpg'} />
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

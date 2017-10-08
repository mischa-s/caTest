import { map } from 'lodash'
import style from '../routes/story/style'
import Story from '../data/Story'
export default function StorySections () {
  console.log(Story, 'story')
  return (
    <div class={style.story}>
      { map(Story, section => {
        return (
          <div>
            <div class={style.heading}>
              <h1 >{section.title}</h1>
              <img class={style.image} src={section.image || '../../assets/CAmap.jpg'} />
            </div>
            { map(section.text, subSection => {
              if (subSection.type === 'p') {
                return <p class={style.content} >{subSection.content}</p>
              } else if (subSection.type === 'facebookPost') {
                return (
                  <div class={style.facebookContent}>
                    <div class={style.facebookHeading}>
                      <img class={style.facebookImage} src={section.image || '../../assets/CAmap.jpg'} />
                      <h2 >CLASSROOM ALIVE BLOG: {subSection.date.toUpperCase()}</h2>
                    </div>
                    <div class={style.facebookText}>
                      { map(subSection.text, subSectionText => {
                        if (subSectionText.type === 'p') {
                          return <p>{subSectionText.content}</p>
                        }
                      })}
                    </div>
                  </div>
                )
              } else if (subSection.type === 'personalStory') {
                return (
                  <div class={style.personalContent}>
                    <div class={style.facebookHeading}>
                      <div>
                        <h2>{subSection.title.toUpperCase()} </h2>
                        <h3>{subSection.author.toUpperCase()} </h3>
                      </div>
                      <img class={style.facebookImage} src={section.image || '../../assets/CAmap.jpg'} />
                    </div>
                    <div class={style.facebookText}>
                      { map(subSection.text, subSectionText => {
                        if (subSectionText.type === 'p') {
                          return <p>{subSectionText.content}</p>
                        }
                      })}
                    </div>
                  </div>
                )
              }
            })}
          </div>
        )
      })}
    </div>
  )
}

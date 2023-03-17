import video from '../../assets/images/videos/video-thumbnail.svg'
import play from '../../assets/images/videos/action.svg'
import './Video.scss'

const Video = (): JSX.Element => {
  return (
        <div className='Video'>
            <img className='Video__img' src={ video } />
            <img className='Video__play' src={ play } />
        </div>
  )
}

export { Video }

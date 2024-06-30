import { useDrop } from 'react-dnd'
import { IMAGE_UPLOADER, TEXT_AREA } from '../../common/constant'
import { TField } from '../../common/types'
import ImageUploader from '../ImageUploader'
import './style.css'

type TWorkAreaProps = {
  fields: TField[]
}

export const Workarea = ({ fields }: TWorkAreaProps  ) => {
  const [, drop] = useDrop(() => ({
    accept: [ TEXT_AREA, IMAGE_UPLOADER ],
    drop: () => ({ name: 'workarea' }),
  }))

  const fieldRenderer = () => fields.map((field) => {
      const id = field.id
      if (field.type === TEXT_AREA) {
        return <textarea key={id} className="drop-textarea" />
      } else {
        return (
          <ImageUploader
            key={id} 
            classes={{
              image: 'drop-image',
              container: 'drop-image-uploader',
              inputField: 'drop-image-input',
            }} 
            id={id}
          />
        )
      }
    })

  return (
    <div className="drop-area" ref={drop}>
      <h2>
        WORKAREA
      </h2>
      <div>
        {fieldRenderer()}
      </div>
    </div>
  )
}

export default Workarea
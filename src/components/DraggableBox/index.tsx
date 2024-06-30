import { useDrag } from 'react-dnd'
import { TBox } from '../../common/types'
import './style.css'

export function Box({ label, type, onDrop } : TBox) {
  const [, drag] = useDrag(() => ({
    type,
    item: { label },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult()
      if (item && dropResult) onDrop(type)
    }
  }))

  return (
    <div ref={drag} className='box'>
      {label}
    </div>
  )
}

export default Box

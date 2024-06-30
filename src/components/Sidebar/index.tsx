import { IMAGE_UPLOADER, TEXT_AREA } from '../../common/constant'
import { TSidebarProps } from '../../common/types'
import Box from '../DraggableBox'
import './style.css'

function Sidebar({ addField }: TSidebarProps) {
  return (
    <div className='text-center'>
      <h2>
        SIDEBAR
      </h2>
      <Box onDrop={addField} label='TEXT' type={TEXT_AREA} />
      <Box onDrop={addField} label='IMAGE' type={IMAGE_UPLOADER} />
    </div>
  )
}

export default Sidebar
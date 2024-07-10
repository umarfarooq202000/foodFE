import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton from 'react-loading-skeleton'

function SkeletonLoader() {
  return (
    <div className='flex'>
        
            <Skeleton  height={130} width={130} borderRadius={130} />;
    </div>
  )
}

export default SkeletonLoader

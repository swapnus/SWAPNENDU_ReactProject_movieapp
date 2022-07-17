import { Spinner } from 'react-bootstrap'

type Props = {
    size: 'small' | 'medium' | 'large',
    message: string
}

const sizeMap = {
    small: { width: '1rem', height: '1rem' },
    medium: { width: '2rem', height: '2rem' },
    large: { width: '4rem', height: '4rem' }
}
const LoadingIndicator = ({ size, message }: Props) => {
    return (
        <div className='d-flex flex-column align-items-center my-2'>
            <Spinner animation='border' variant='secondary' role='status' style={sizeMap[size]}>
            </Spinner>
            <span className='visually-hidden'>{message}</span>
            <span className='my-2'>{message}</span>
        </div>
    )
}

LoadingIndicator.defaultProps = {
    size: 'medium',
    message: 'Loading...'
}

export default LoadingIndicator
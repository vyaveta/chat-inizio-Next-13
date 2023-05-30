
import EmptyState from '../components/EmptyState'

const page = () => {
  return (
        // <button onClick={() => signOut()} >Log out</button>
        <div className='hidden lg:block lg:pl-80 h-full' >
          <EmptyState />
        </div>
    )
}

export default page
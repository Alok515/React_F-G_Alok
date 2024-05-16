import { Form } from './components/Form'
import { Link } from 'react-router-dom';

function FeedBack() {
  
  return (
    <>
      <div>
        <Form />
      </div>
      <div className='text-center my-4 '>
        <Link to="/table">
          <button className="bg-green-400 hover:bg-green-300 m-auto rounded-md py-1 px-8 shadow-lg">View Table</button>
        </Link>
      </div>
    </>
  )
}

export default FeedBack;

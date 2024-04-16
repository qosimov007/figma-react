import img1 from '../src/img/USER.png'
import btn from '../src/img/btn.png'
import User from '../src/img/img2.png'
import './App.css'

function App() {

  return (
    <>
    <table>
      <tr>
        <td>Brend</td>
        <td>Category</td>
        <td>Price</td>
        <td>Status</td>
        <td>Action</td>
      </tr>
    </table>
      
      <table className='tab'>
        <tr>
          <td><img src={img1} alt="" /></td>
          <td className='td'>Technology</td>
          <td className='td'>200.00$</td>
          <td className='td'><button>Available</button></td>
          <td className='td'><img src={btn} alt="" /></td>
        </tr>
      </table>
      <table className='tab'>
        <tr>
          <td><img src={img1} alt="" /></td>
          <td className='td'>Technology</td>
          <td className='td'>200.00$</td>
          <td className='td'><button>Available</button></td>
          <td className='td'><img src={btn} alt="" /></td>
        </tr>
      </table>
      <table className='tab'>
        <tr>
          <td><img src={User} alt="" /></td>
          <td className='td'>Technology</td>
          <td className='td'>200.00$</td>
          <td className='td'><button>Available</button></td>
          <td className='td'><img src={btn} alt="" /></td>
        </tr>
      </table>
      <table className='tab'>
        <tr>
          <td><img src={img1} alt="" /></td>
          <td className='td'>Technology</td>
          <td className='td'>200.00$</td>
          <td className='td'><button>Available</button></td>
          <td className='td'><img src={btn} alt="" /></td>
        </tr>
      </table>
      <table className='tab'>
        <tr>
          <td><img src={img1} alt="" /></td>
          <td className='td'>Technology</td>
          <td className='td'>200.00$</td>
          <td className='td'><button>Available</button></td>
          <td className='td'><img src={btn} alt="" /></td>
        </tr>
      </table>
    </>
  )
}

export default App

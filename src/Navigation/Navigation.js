
import {Link,useNavigate} from 'react-router-dom'
import './Navigation.css'

export default function Navigation() {
  const navigate=useNavigate()
  const userRole=localStorage.getItem("userRole")
  const userId=localStorage.getItem("userId")
  console.log(userRole)
  function handleLogout(){
    localStorage.removeItem('userRole')
    localStorage.removeItem('userId')
    navigate('./login')
  }

   
  return (
    <nav>
        <Link to="/">Home</Link>{
          userId ? (
            <>
            {
              userRole==="admin" && <Link to ='/add-Product'>Add Product</Link>
            }
            <Link to="/cart">cart</Link>
            <Link onClick={handleLogout}>Logout</Link>
            </>
          ):(
            <>
            <Link to='./login'>login</Link>
            <Link to='./Signup'>Signup</Link>
            </>
          )
        }
        
    </nav>
    
  )
}

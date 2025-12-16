import { Link } from 'react-router-dom';
import './Header.css';

function Header(){
return(
  <>
    <section id="sec">
    <div id='main-div'>
<div id="img-logo">
<h2>FOOD-APP</h2>


</div>
<div>
<nav id="head-ul">
<Link className="head-li" to="/">HOME</Link>
<Link className="head-li" to="/About">ABOUT</Link>
<Link className="head-li" to="/Contact">CONTACT </Link>
<Link className="head-li" to="/Cart"> CART</Link>
</nav>

</div></div>
    </section>
    </>
);



}
export default Header ;
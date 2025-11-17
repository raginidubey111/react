import './Header.css';


const Header = () => {
    return (
    
    <>
<section id="sec">
    <div id='main-div'>
<div id="img-logo">
<img id='img' src="../assets/swiggy-logo.png" />


</div>



<div>
<ul id="head-ul">
<li className="head-li"><input type="text" placeholder="Search" /></li>
<li className="head-li">Center</li>
<li className="head-li">Help</li>
<li className="head-li">Sign In </li>
<li className="head-li">Cart</li>
</ul>

</div></div>
    </section>
    </>);


}

export default Header;
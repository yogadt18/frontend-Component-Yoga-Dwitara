import "../App.css";
import logo from "../logo.png";

const Logo = {
    nama:"",
    imageUrl: "",
    imageSize: 100,
};
const Navbar = () => {
    return ( 
        <nav>
        <img className="" src={logo}alt={"Logo"+Logo.nama} style={{ width: Logo.imageSize, height: Logo.imageSize }}/>
            <h1>Loket Express</h1>
            <div className="nav-menu">
                <a href="index.html">Beranda</a>
                <a href="/Layanan">Layanan</a>
                <a href="/Transaksi">Transaksi</a>
                <a href="/login">Login</a>
            </div>
        </nav>
     );
}
 
export default Navbar;
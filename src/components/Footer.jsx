function Footer() {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <>
        <div className="Footer">
            {/* <div  >
            <h5>Email: mycrownlocs@gmail.com</h5>
       </div>
        <div  >
            <h5 >Phone: (262) 770-5142</h5>
        </div> */}
        <div >
            <h5>Copyright @ {year} by Nerah's Passion. | All Rights Reserved</h5>
            <h5>Designed and created by Monicah Cloud</h5>
        </div> 
        </div>
        </>
    );
}

export default Footer;
function Footer() {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <>
        <div className="Footer"
        style={{
               padding:5,
               marginTop: 50
              }}>
            <p>Copyright @ {year} by Nerah's Passion. | All Rights Reserved
            Designed and created by Monicah Cloud</p>
        </div> 

        </>
    );
}

export default Footer;
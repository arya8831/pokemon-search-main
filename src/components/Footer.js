function Footer(){
    return(
        <div className = 'footer flex justify-center my-3'>
            <div className = 'flex justify-around'>
                <a href = "https://drive.google.com/file/d/1mJgfCOsS3cguLaNXYSXGaI7wYb3ej35-/view?usp=sharing/" target = "_blank">
                    <img className = "mx-2" width = "28px" height = "28px" src = '/web.png' alt = 'website' />
                </a>

                <a href = "https://github.com/arya8831" target = "_blank">
                    <img className = "mx-2" width = "28px" height = "28px" src = '/github.png' alt = 'github' />
                </a>

                <a href = "https://www.linkedin.com/in/arya-chatterjee8831" target = "_blank">
                    <img className = "mx-2" width = "28px" height = "28px" src = '/linkedin.png' alt = 'linkedin' />
                </a>
            </div>
        </div>
    );
}

export default Footer;

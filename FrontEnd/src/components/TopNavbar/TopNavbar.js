function TopNavbar(props) {

    return(
        <>
            <div className={`navbar py-4 pl-5 ${props.sidebar ? 'add-left-margin' : ''}`}>
                <a className="navbar-brand" onClick={props.toggleSidebar}>Vaccine App</a>
            </div>
        </>
    )
}

export default TopNavbar;
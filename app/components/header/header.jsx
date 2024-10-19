export default function Header() {

    return (

        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container">
                    <a class="navbar-brand head" style={{ fontFamily: "Telma-Medium" }} href="#">
                        <img src="/greenlogo.png" alt="Logo" width="50" height="50" class="d-inline-block me-2" />
                        <span style={{color: "#0E6937"}}>LA</span> cite
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse ms-5" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">About us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Faq</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contact us</a>
                            </li>

                        </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search lands" aria-label="Search" style={{ borderRadius: "20px"}}/>
                            <button class="btn btn-md text-white" type="submit" style={{ backgroundColor: "#0E6937", borderRadius: "20px" }}>Login</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )

}
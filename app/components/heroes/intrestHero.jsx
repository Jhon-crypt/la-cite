export default function IntrestHero() {

    return (

        <>
            <div class="container mt-5">
                <div class="mb-3">
                    <h1 style={{ fontFamily: "Telma-Bold" }}>Find your interest</h1>
                    <p class="text-muted">We offer a wide range of variety</p>
                </div>

                <div class="mt-2 mb-4">
                    <div class="row">
                        <div class="col">
                            <div class="card">
                                <img src="/plot-only.jpg" class="card-img-top" alt="..." style={{ width: "100%", height: "200px", objectFit: "cover" }} />
                                <div class="card-body">
                                    <h5 class="card-title" style={{ fontFamily: "Telma-Medium" }}>Plot only</h5>
                                    <p class="card-text text-muted">Individuals or families looking to build their own homes from the ground up, allowing for complete customization in design and layout.</p>
                                    <button href="#" class="custom-card-outline-btn">Explore in maps</button>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">

                                <img src="/house-only.jpg" class="card-img-top" alt="..." style={{ width: "100%", height: "200px", objectFit: "cover" }} />

                                <div class="card-body">
                                    <h5 class="card-title" style={{ fontFamily: "Telma-Medium" }}>House only</h5>
                                    <p class="card-text">Typically used for residential purposes; buyers can design and build their own home according to their preferences.</p>
                                    <button href="#" class="custom-card-outline-btn">Explore in maps</button>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">

                                <img src="/pa.jpeg" class="card-img-top" alt="..." style={{ width: "100%", height: "200px", objectFit: "cover" }} />

                                <div class="card-body">
                                    <h5 class="card-title" style={{ fontFamily: "Telma-Medium" }}>Plot with construction option</h5>
                                    <p class="card-text">Ideal for buyers who want a hassle-free building process with the option to select from various designs.</p>
                                    <button href="#" class="custom-card-outline-btn">Explore in maps</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
            </div>
        </>

    )

}
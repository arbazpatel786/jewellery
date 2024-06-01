import './UserPannel.css';

const Userpannel = () => {
    return (
        <>



            <div className="home-container">
                {/* Header can be a separate component */}
                <header className="home-header">
                    <h1>Welcome to JewelSpark</h1>

                </header>

                {/* Main content area */}
                <main className="home-main">
                    <section className="featured-items">
                        <h2>Featured Collection</h2>
                        {/* Add your featured products here */}
                    </section>

                    <section className="about-us" id="about">
                        <h2>About JewelSpark</h2>
                        <p>
                            JewelSpark offers an exquisite collection of jewelry that is a blend of modern design and traditional craftsmanship.
                        </p>
                    </section>
                </main>


            </div>





        </>

    )
}
export default Userpannel;
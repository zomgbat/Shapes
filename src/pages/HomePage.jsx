import '../styles/HomePage.css'


function HomePage() {
    return (
        <>
            <div className='completeDash'>
                <header className="header">
                    <h1><img className="i1" src="https://ourshapes.files.wordpress.com/2023/02/whatsapp-image-2023-02-02-at-20.15.57.jpeg" alt="IronSkydive Logo" /> Shapes </h1>
                    <br />
                    <aside className="quote">
                        <p className="p1"> <i> “A people without knowledge of their past history, origin and culture is like a tree without roots...’”</i> - MARCUS GARVEY (JAMAICAN ACTIVIST) </p>
                    </aside>
                </header>

                <section className="dark-background" id="general-information">
                    <article className="container">
                        <h3> Hello! </h3>
                        <p className="text"> The most fascinating stories on Earth...

                        </p>
                        <a className="link-btn" href="#"> Learn More </a>
                    </article>

                    <article className="container">
                        <h3> About us </h3>
                        <p className="text"> We like a lot of programming websites, but we also love to practice sports. </p>
                        <a className="link-btn" href="#"> Watch Video </a>
                    </article>

                    <article className="container">
                        <h3> Wanna Join? </h3>
                        <p className="text"> Join our fitness program to be in good shape while learning. </p>
                        <a className="link-btn" href="#"> Register </a>
                    </article>
                </section>

                <section className="dark-background" id="general-information">
                    <article className="container">

                        <p className="text">
                            The most fascinating stories on Earth. Our main aim is to deliver the most fascinating stories from around the world and beyond, along with illustrating how dark a place the past could be. The idea comes from the website Stories that Shocked the World – my previous employer. Some stories are taken from there but all are written by myself. It is important to consider that many of these stories show inhumanity. Although the website is for entertainment purposes, that is used in the sense of learning and sharing. We do not write these stories to make light of any person but to understand their lives. To never take for granted what we have, make the world a better place, and understand how easy it is to return to the darkness of the past.
                        </p>
                    </article>
                </section>
            </div>
        </>
    )
}

export default HomePage;
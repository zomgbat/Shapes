import React from 'react';
import '../styles/HomePage.css'; // Importing the CSS file
import RandomQuoteGenerator from '../components/Quote';
import Gallery from '../components/Gallery';


function HomePage() {

    
    return (
        <html>
            <head>
                <meta charSet="utf-8" />
                <title>Shapes - Welcome</title>
                <link rel="stylesheet" href="styles.css" />
            </head>
            <body>
                

                
                
                <div className="search-bar">
                    <input type="text" placeholder="Search..." />
                    <button>Search</button>
                </div>
                <header className="header">
                    <h1><img className="i1" src="https://ourshapes.files.wordpress.com/2023/02/whatsapp-image-2023-02-02-at-20.15.57.jpeg" alt="IronSkydive Logo" /> Shapes </h1>
                    <br />
                    <h2></h2>
                    <aside className="quote">
                        <br />
                        <br />
                        <br />
                        <br />
                        <p className="p1"> <i> “A people without knowledge of their past history, origin and culture is like a tree without roots...’”</i> - MARCUS GARVEY (JAMAICAN ACTIVIST) </p>
                        <RandomQuoteGenerator /> {/* Include the RandomQuoteGenerator component here */}
 </aside>
                    
                </header>

                <section className="container" id="structure">
                
                    
                    <div className="article-container">
                        <article className="service-box">
                            <a href="/LaikaPage">
                                <img src="https://upload.wikimedia.org/wikipedia/en/7/71/Laika_%28Soviet_dog%29.jpg" alt="Laika undergoing training" />
                                <h4>Laika</h4>
                                <p>The Canine Cosmonaut – From the Streets to the Stars</p>
                            </a>
                        </article>
                        <article className="service-box">
                            <img src="https://ourshapes.files.wordpress.com/2023/01/rasputin_1916-1.jpg" alt="Rasputin" />
                            <h4>Rasputin</h4>
                            <p>Faith Healer? Or Lustful Charlatan?</p>
                        </article>
                        <article className="service-box">
                            <img src="https://ourshapes.files.wordpress.com/2023/01/enriqueta_marti.jpg" alt="Enriqueta Martí" />
                            <h4>Enriqueta Martí</h4>
                            <p>The Vampiress of El Raval</p>
                        </article>
                        <article className="service-box">
                            <img src="https://ourshapes.files.wordpress.com/2023/01/sukur2-4914-1578975840.jpg" alt="Hakan Sukur" />
                            <h4>Hakan Sukur</h4>
                            <p>The Superstar Striker Exiled by Erdogan</p>
                        </article>
                    </div>
                </section>


                <section className="dark-background" id="general-information">
                    <article className="container">
                        <h3> Our Content </h3>
                        <img src="https://ourshapes.wordpress.com/wp-content/uploads/2023/01/laika_inside_sputnik2-32.jpg?w=750" alt="Laika Inside Sputnik 2" />
                    <p className="text"> The most fascinating stories on Earth Our main aim is to deliver the most fascinating stories from around the world and beyond, along with illustrating how dark a place the past could be. The idea comes from the website Stories that Shocked the World – my previous employer. Some stories are taken from there but all are written by myself. It is important to consider that many of these stories show inhumanity. Although the website is for entertainment purposes, that is used in the sense of learning and sharing. We do not write these stories to make light of any person but to understand their lives. To never take for granted what we have, make the world a better place, and understand how easy it is to return to the darkness of the past. </p>
                              <img src="https://ourshapes.wordpress.com/wp-content/uploads/2023/01/laika_inside_sputnik2-32.jpg?w=750" alt="Laika Inside Sputnik 2" />
                   <a className="link-btn" href="/AboutPage"> Learn More </a>
                    </article>

                    <article className="container">
                        <h3> The Sugar City Archives § </h3>
                        <img src="https://ourshapes.wordpress.com/wp-content/uploads/2023/01/al-2.png?w=590" alt="Al-2" />
                    <p className="text"> Shameless Plug
                            Also, access to my book series, including fantasy/psychological trilogy Alba Lands, you can find a large preview and learn more here –</p>
                        <a className="link-btn" href="https://zomgbat.wordpress.com"> Watch Video </a>
                    </article>

                    <article className="container">
                        <h3> Other Stuff – </h3>
                        <img src="https://ourshapes.wordpress.com/wp-content/uploads/2023/02/chjpdmf0zs9zdgf0awmvaw1hz2uvd2vic2l0zs8ymdiylta0l2xyl2zybwfnawnfy3vizv9wyxrpzw5jzv9nyw1lcy1pbwfnzs1rewjkodzqmc5qcgc.jpg" alt="Shapes Image" />
                        <p className="text"> Life Hacks – 30 mins a day can make you an expert. Free courses from the likes of Khan Academy, Duolingo, Alison, CourseBuffet. CodeCademy, FreeCodeCamp, Lrn, TL;DR, ZenHabits, Babbel, Drops, Mind Tools, Yousician, Anki, Memrise, Course Buffer, Busuu, Now I Know

                            Must see videos- Mostly from Youtube such as the ‘History of the World’ from Bill Wurtz and ‘Epic History’ below.

Some fantasy articles, (Mostly works from former employer GamersDecide.com) </p>
                        <a className="link-btn" href="#"> Register </a>
                    </article>

                   
                </section>


          

                <section className="dark-background" id="team">
                    <h3> Team </h3>
                    <p className="section-text"> Our team collectively has 75 years of experience. Odds are, when you jump out of the plane with these professionals, you won't go splat. </p>
                    <hr />
                    <div>
                        <article>
                            <h4 className="member-name"> Harold Rothstein </h4>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/xuCn8ux2gbs" frameborder="0" allowfullscreen></iframe>
                        </article>
                        <article>
                            <h4 className="member-name"> Susan Phillips </h4>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/G1p6rlDCxq0" frameborder="0" allowfullscreen></iframe>
                        </article>
                    </div>
                </section>
                <Gallery /> {/* Include the RandomQuoteGenerator component here */}


                <section className="container" id="schedule">
                    <h3> Schedule </h3>
                    <table className="schedule-table" cellPadding="0" cellSpacing="0">
                        <thead>
                            <tr>
                                <th> time </th>
                                <th> Monday </th>
                                <th> Tuesday </th>
                                <th> Wednesday </th>
                                <th> Thursday </th>
                                <th> Friday </th>
                                <th> Saturday </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td> 9:00 - 11:00 </td>
                                <td> </td>
                                <td> </td>
                                <td> X </td>
                                <td> </td>
                                <td> X </td>
                                <td> X </td>
                            </tr>
                            <tr>
                                <td> 12:00 - 14:00 </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> X </td>
                                <td> X </td>
                            </tr>
                            <tr>
                                <td> 15:00 - 17:00 </td>
                                <td> </td>
                                <td> </td>
                                <td> X </td>
                                <td> X </td>
                                <td> X </td>
                                <td> X </td>
                            </tr>
                        </tbody>
                    </table>

                    <h3> Schedule a Time Slot </h3>
                    <form className="slot-form" action="/register" method="post">
                        <div className="slot-form-container">
                            <label> Email </label>
                            <input type="email" placeholder="Enter your email" />
                        </div>

                        <div className="slot-form-container">
                            <label> Participants </label>
                            <input type="Number" placeholder="Number of participants" />
                        </div>

                        <div className="slot-form-container">
                            <label> Date </label>
                            <input type="date" />
                        </div>

                        <div className="slot-form-container">
                            <label> Time </label>
                            <select>
                                <option value="early"> 9:00 - 11:00 </option>
                                <option value="mid"> 12:00 - 14:00 </option>
                                <option value="late"> 15:00 - 17:00 </option>
                            </select>
                        </div>

                        <div className="slot-form-container">
                            <button type="submit"> Reserve Your Slot! </button>
                        </div>
                    </form>
                </section>

                <footer className="dark-background footer">
                    <div className="container">
                        <p>&copy; 2024 MyWebsite. All rights reserved.</p>
                    </div>
                    <section>
                        <h5> Contact Information </h5>
                        <address className="address">IronSkydive <br /> 226 Boulevard Voltaire, <br /> 75011 Paris, <br /> France <br /> +33 1 79 75 40 00</address>
                        <h5> Follow Us </h5>
                        <ul>
                            <li><a href="#"> Twitter </a></li>
                            <li><a href="#"> Facebook </a></li>
                            <li><a href="#"> Instagram </a></li>
                        </ul>
                    </section>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.142047744348!2d2.3354330160472316!3d48.87456857928921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e38f817b573%3A0x48d69c30470e7aeb!2sIronhack!5e0!3m2!1sen!2ses!4v1495208746099" className="map-frame" frameBorder="0" style={{ border: 0 }} allowFullScreen />
                </footer>
            </body>
        </html>
    );
}

export default HomePage;

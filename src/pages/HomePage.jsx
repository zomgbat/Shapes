import React from 'react';
import '../styles/HomePage.css'; // Importing the CSS file
import RandomQuoteGenerator from '../components/Quote';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import { useState } from 'react'
import '../styles/App.css'

function HomePage() {
    const [count, setCount] = useState(0)
   
    const [catImage, setCatImage] = useState('https://ourshapes.wordpress.com/wp-content/uploads/2023/02/whatsapp-image-2023-02-02-at-20.15.57.jpeg');

    const changeImage = () => {
        setCatImage('https://www.mercurynews.com/wp-content/uploads/2019/06/ODIN1.jpg?w=1024');
    };


    const CoolDynamicButton = () => {
        const [hovered, setHovered] = useState(false);

        const buttonStyle = {
            padding: '15px 30px',
            fontSize: '18px',
            fontWeight: 'bold',
            color: hovered ? '#ffffff' : '#333333',
            backgroundColor: hovered ? '#333333' : '#ffffff',
            border: '2px solid #333333',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            textDecoration: 'none',
            display: 'inline-block',
            marginTop: '20px', // Added margin-top for spacing
        };

        return (
            <a
                href="https://zomgbat.github.io/Game-Project/"
                style={buttonStyle}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                My First Homemade Video Game!
            </a>
        );
    };
   
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
                    <h1>SHAPES</h1>
                    <h1> <img src={catImage} id="dynamic-cat" className="image1" alt="Cat Image" onClick={changeImage} /> </h1>
                    <br />
                    <h2></h2>
                    <aside className="quote">
                        <br />
                        <br />
                        <br />
                        <br />
                        <p>    Original Site: <br></br><a href="https://ourshapes.wordpress.com" target="_blank" rel="noopener noreferrer">ourshapes.wordpress.com</a> </p>
                       <blockquote><p className="p1"> 
                        <i> “A people without knowledge of their past history, origin and culture is like a tree without roots...’”</i></p> 
                           <p>- MARCUS GARVEY (JAMAICAN ACTIVIST) <br></br></p>
                       </blockquote>   <RandomQuoteGenerator /> {/* Include the RandomQuoteGenerator component here */}
 </aside>
                    
                </header>

                <section>
                
                    
                    <div className="article-container">
                        <article className="service-box">
                            <a href="/LaikaPage">
                                <img src="https://upload.wikimedia.org/wikipedia/en/7/71/Laika_%28Soviet_dog%29.jpg" alt="Laika undergoing training" />
                                <h4>Laika</h4>
                                <p>The Canine Cosmonaut – From the Streets to the Stars</p>
                                <h5>Shock Rating:2</h5>

                            </a>
                        </article>
                        <article className="service-box">
                            <a href="/RasputinPage">
                            <img src="https://ourshapes.files.wordpress.com/2023/01/rasputin_1916-1.jpg" alt="Rasputin" />
                            <h4>Rasputin</h4>
                            <p>Faith Healer? Or Lustful Charlatan?</p>
                                <h5>Shock Rating:2</h5>
                        </a>
                        </article>
                        <article className="service-box">
                            <a href="/EnriquetaPage">
                            <img src="https://ourshapes.files.wordpress.com/2023/01/enriqueta_marti.jpg" alt="Enriqueta Martí" />
                            <h4>Enriqueta Martí</h4>
                            <p>The Vampiress of El Raval</p>
                                <h5>Shock Rating:4</h5>
                        </a>
                        </article>
                        <article className="service-box">
                            <a href="/HakanPage">
                            <img src="https://ourshapes.files.wordpress.com/2023/01/sukur2-4914-1578975840.jpg" alt="Hakan Sukur" />
                            <h4>Hakan Sukur</h4>
                            <p>The Superstar Striker Exiled by Erdogan</p>
                                <h5>Shock Rating:2</h5>
                          </a>
                        </article>
                    </div>
                </section>


                <section className="dark-background" id="general-information">
                    <article className="container">
                        <h3> Our Content </h3>
                        <img src="https://ourshapes.wordpress.com/wp-content/uploads/2023/01/laika_inside_sputnik2-32.jpg?w=750" alt="Laika Inside Sputnik 2" />
                    <p className="text"> The most fascinating stories on Earth Our main aim is to deliver the most fascinating stories from around the world and beyond, along with illustrating how dark a place the past could be. The idea comes from the website Stories that Shocked the World – my previous employer. Some stories are taken from there but all are written by myself. It is important to consider that many of these stories show inhumanity. 
                        <br></br>
                        <br></br>
                        Although the website is for entertainment purposes, that is used in the sense of learning and sharing. We do not write these stories to make light of any person but to understand their lives. To never take for granted what we have, make the world a better place, and understand how easy it is to return to the darkness of the past. </p>
                              <img src="https://ourshapes.wordpress.com/wp-content/uploads/2023/01/laika_inside_sputnik2-32.jpg?w=750" alt="Laika Inside Sputnik 2" />
                   <a className="link-btn" href="/AboutPage"> Learn More </a>
                    </article>

                    <article className="container">
                        <h3> The Sugar City Archives § </h3>
                        <img src="https://ourshapes.wordpress.com/wp-content/uploads/2023/01/al-2.png?w=590" alt="Al-2" />
                    <p className="text"> Shameless Plug
                            Also, access to my book series, including fantasy/psychological trilogy Alba Lands, you can find a large preview and learn more here –</p>
                        <a className="link-btn" href="https://zomgbat.wordpress.com"> Site </a>
                    </article>

                    <article className="container">
                        <h3> Other Stuff – </h3>
                        <img src="https://ourshapes.wordpress.com/wp-content/uploads/2023/02/chjpdmf0zs9zdgf0awmvaw1hz2uvd2vic2l0zs8ymdiylta0l2xyl2zybwfnawnfy3vizv9wyxrpzw5jzv9nyw1lcy1pbwfnzs1rewjkodzqmc5qcgc.jpg" alt="Shapes Image" />
                        <p className="text"> Life Hacks – 30 mins a day can make you an expert. Free courses from the likes of Khan Academy, Duolingo, Alison, CourseBuffet. CodeCademy, FreeCodeCamp, Lrn, TL;DR, ZenHabits, Babbel, Drops, Mind Tools, Yousician, Anki, Memrise, Course Buffer, Busuu, Now I Know
<br></br>
<br></br>
                         Must see videos- Mostly from Youtube such as the ‘History of the World’ from Bill Wurtz and ‘Epic History’ below. Some fantasy articles, (Mostly works from former employer GamersDecide.com) </p>
                        <a className="link-btn" href="https://www.coursera.org/"> Coursera </a>
                        <CoolDynamicButton />
                    </article>

                   
                </section>


                <Gallery /> {/* Include the RandomQuoteGenerator component here */}


                <section className="container" id="schedule">
                    <h3> Current New Story Schedule </h3>
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
                                <th> Sunday </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td> 07:00 - 12:00 </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                            </tr>
                            <tr>
                                <td> 12:00 - 18:00 </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> X </td>
                            </tr>
                            <tr>
                                <td> 18:00 - 00:00 </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                            </tr>
                        </tbody>
                    </table>

                    <h3> Request a Story </h3>
                    <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
                        <input type="hidden" name="form-name" value="contact" />

                        <div className="slot-form-container">
                            <label>Email</label>
                            <input type="email" name="email" placeholder="Enter your email" required />
                        </div>

                        <div className="slot-form-container">
                            <label>Your Name</label>
                            <input type="text" name="name" placeholder="Enter your name" required />
                        </div>

                        <div className="slot-form-container">
                            <label>Story</label>
                            <input type="text" name="story" placeholder="Enter your story" required />
                        </div>

                        <div className="slot-form-container">
                            <label>Date</label>
                            <input type="date" name="date" required />
                        </div>

                        <div className="slot-form-container">
                            <label>Type</label>
                            <select name="type" required>
                                <option value="early">You want to write</option>
                                <option value="mid">You want us to write</option>
                                <option value="late">You want someone else to write</option>
                            </select>
                        </div>

                        <div className="slot-form-container">
                            <button type="submit">Send!</button>
                        </div>
                    </form>

                </section>
                <div class="frontlogos">
                    <a href="https://vitejs.dev" target="_blank">
                        <img src={viteLogo} className="logo" alt="Vite logo" />
                    </a>
                    <a href="https://react.dev" target="_blank">
                        <img src={reactLogo} className="logo react" alt="React logo" />
                    </a>

                    <p>Made with Vite + React .</p>

                    

                </div>


                 
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                

                <Footer></Footer>
            </body>
        </html>
    );
}

export default HomePage;

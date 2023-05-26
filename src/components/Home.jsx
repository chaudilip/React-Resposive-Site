import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";


function Home() {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TechyStar</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            We are only solution to the tech problems you face every day. We are
            leading tech company whose aim is to increase the problem solving
            ability in children.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            impedit delectus asperiores illo incidunt itaque debitis laborum
            blanditiis? Ipsa tenetur dolorem incidunt minima, ab quidem
            recusandae eius repudiandae quas, molestiae exercitationem dolorum
            sed necessitatibus reiciendis qui praesentium! Laborum quo harum
            reprehenderit! Inventore itaque minima aut, sit corporis alias,
            veritatis nemo libero harum animi quasi amet! Atque expedita natus
            tenetur saepe eius temporibus ut harum fugiat labore numquam iusto
            consectetur ea eaque deleniti voluptas earum inventore soluta
            doloremque ullam dolores explicabo, eligendi, perspiciatis minima!
            Facere, aliquid explicabo iste tempora delectus suscipit,
            repudiandae quas cum iusto laudantium velit odio minima expedita
            temporibus?
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{ 
                animationDelay:"0.3s"
            }}>
                <AiFillGoogleCircle />
                <p>Google</p>
            </div>
            <div style={{
                animationDelay:"0.5s"
            }}>
                <AiFillAmazonCircle />
                <p>Amazon</p>
            </div>
            <div style={{
                animationDelay:"0.7s"
            }}>
                <AiFillYoutube />
                <p>Youtube</p>
            </div>
            <div style={{
                animationDelay:"1s"
            }}>
                <AiFillInstagram />
                <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

export default Home;

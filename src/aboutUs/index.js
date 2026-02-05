import Header from "../home/Header";
import Footer from "../home/Footer";
import logo from "../assets/img/logo.JPG";
import bgImage from "../assets/banner/bgimage1.jpeg";
function Principal() {
  return (
    <div style={{ backgroundColor: "rgba(249, 177, 177, 0.62)" }}>
      {/* <div style={{backgroundImage:"url(//www.html.am/images/backgrounds/background-image-2.gif)"}}> */}

      <Header />
      {/* <img src={bgImage} loading="eager" alt="Image" 
            style={{width:'100%',height:'190%',opacity:'0.4',display:'block',position:'absolute'}}
            ></img> */}

      <div className="container my-5">
        <div className="text-center mb-5">
          <img src={logo} width="90" height="90" alt="logo" />
          {/* <p>St. Joseph Public School</p> */}
        </div>

        <section>
          <h1></h1>
          <p style={{ textAlign: "justify", fontSize: "20px" }}>
            &emsp;&emsp;&emsp;&emsp;<strong>St. Joseph Public School</strong> is
            run and managed by the Catholic Fathers of the MCBS Congregation.The 
            members of this Congregation are actively involved in various fields
            including education at multiple levels, social work, and care for the
            destitute, medical services, spiritual guidance, and the mental and
            psychological development of people around the world. Our school
            administration works in close collaboration with the Holy Cross
            and Sacred Heart of Sisters, who are members of an
            international congregation.
            <br />
            <br />
            St. Joseph Public School Founded in June 2013, and it has been
            growing steadily since its inception. It is a co-educational
            institution, and the medium of instruction is English. The
            attractive building and an environment friendly atmosphere make. St.
            Joseph a place where students excel in their academic and co
            -curricular areas. We create an environment that nurtures our
            students to become responsible Global Citizens.
            <br />
            <br />
            We believe that the school’s responsibility goes beyond imparting
            academic knowledge; it must also cultivate strong moral character to
            help students become better human beings.
          </p>
        </section>

        <section> <br />
          <h2>School Motto : “EMPOWERING TO EXCEL”</h2>
          {/* <h2>The Preamble</h2>
            <p>We the people of India having solemnly resolved to constitute India into a SOVEREIGN SOCIALIST SECULAR DEMOCRATIC REPUBLIC and to secure to all its citizens:</p>
            <ul>
                <li><strong>JUSTICE</strong> - social, economic and political</li>
                <li><strong>LIBERTY</strong> - of thought, expression, belief, faith and worship</li>
                <li><strong>EQUALITY</strong> - of status and of opportunity; and to promote among them all</li>
                <li><strong>FRATERNITY</strong> - assuring the dignity of the individual and the unity and integrity of the Nation</li>
            </ul> */}
        </section>

        <section>
          <h2>Our Aim</h2>
          <ul>
            <li>Aspire to inspire the young minds</li>
            <li>To empower tomorrow</li>
            <li>Inspire for better living by instilling values</li>
            <li>Motivate lives to explore life goals</li>
          </ul>
        </section>

        <section>
          <h2>Vision</h2>
          <p>
            The vision is for every student graduating from this school to have
            grown in their sense of the divine, respect for human life,
            compassion for the poor, concern for justice, awareness of
            oppressive social structures, commitment to build a better human
            society and becoming responsible citizens.
          </p>
        </section>
      </div>
      <Footer />
    </div>
    // </div>
  );
}

export default Principal;

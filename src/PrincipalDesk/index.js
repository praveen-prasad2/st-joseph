import Header from "../home/Header";
import Footer from "../home/Footer";
import "./princ.css";
import bgImage from "../assets/banner/bgimage1.jpeg";

function Principal() {
  return (
    <div className="App" style={{ backgroundColor: "#f5f5f5" }}>
      <Header />

      {/* Banner Section */}
      <div
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
        }}
      >
        <div
          style={{
            padding: "0px 0px",
            borderRadius: "10px",
          }}
        >
          <h1 className="principal-heading">Message From Principal's Desk</h1>
        </div>
      </div>

      {/* Main Content */}
      <div
        className="c1 doc-content"
        style={{
          margin: "0 auto",
          backgroundColor: "#fff",
          borderRadius: "12px",
        }}
      >
        <p className="c2">
          <span className="c0">
            Dear Parents, Staff, Students and Well Wishers,
          </span>
        </p>

        <p className="c2">
          <span className="c0">
            As we turn the pages of our annual diary, let us pause to reflect on
            the journey we have travelled together and the milestones we have
            achieved. Each year brings new challenges, opportunities, and
            triumphs, and it is with a sense of pride and optimism that I
            address you today.
          </span>
        </p>

        <p className="c2">
          <span className="c0">
            At ST. JOSEPH PUBLIC SCHOOL, THENPOTHAI, we are not merely
            educators; we are architects of dreams, sculptors of character, and
            guardians of potential. Our mission extends beyond the confines of
            the classroom, encompassing the holistic development of every
            individual entrusted to our care.
          </span>
        </p>

        <p className="c2">
          <span className="c0">
            In the corridors of our institution, I witness the indomitable
            spirit of resilience, the pursuit of excellence, and the joy of
            discovery. Our students, guided by the wisdom of our faculty and the
            unwavering support of their families, continue to soar to new
            heights, breaking barriers and redefining boundaries.
          </span>
        </p>

        <p className="c2">
          <span className="c0">
            As we embark on another chapter in the annals of our school's
            history, let us embrace the values of integrity, compassion, and
            empathy. Let us nurture a culture of inclusivity, where diversity is
            celebrated and every voice is heard.
          </span>
        </p>

        <p className="c2">
          <span className="c0">
            To the parents, I extend my deepest appreciation for your trust and
            partnership. Your unwavering support is the cornerstone of our
            success, and together, we shall continue to inspire and empower the
            next generation of leaders, thinkers, and innovators.
          </span>
        </p>

        <p className="c2">
          <span className="c0">
            To the dedicated faculty and staff, I offer my profound gratitude
            for your tireless efforts and unwavering commitment. Your passion
            for teaching, your dedication to our students, and your relentless
            pursuit of excellence are the bedrock upon which our institution
            stands.
          </span>
        </p>

        <p className="c2">
          <span className="c0">
            In the pages of this diary lie the stories of our collective journey
            — a testament to the power of education, the resilience of the human
            spirit, and the promise of a brighter tomorrow. Let us seize each
            moment, cherish each accomplishment, and continue to write the
            narrative of success, one page at a time.
          </span>
        </p>

        <p className="c2">
          <span className="c0">
            As we prepare to embark on this new academic year, let us do so with
            a sense of unity, purpose, and optimism. May it be a year filled
            with learning, growth, and success for each and every member of our
            school community.
          </span>
        </p>

        <p className="c2">
          <span className="c0">
            Wishing you all the best for the journey ahead.
          </span>
        </p>

        <br />

        <p className="c2">
          <strong>Warm regards,</strong>
        </p>
        <p className="c2 father">
          <strong>Fr. Dominic Mundatt MCBS</strong>
        </p>
        <p className="c2">Principal</p>
        <p className="c2">St. Joseph Public School</p>
      </div>

      <Footer />
    </div>
  );
}

export default Principal;

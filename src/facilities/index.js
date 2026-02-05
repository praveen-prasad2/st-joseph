import React from "react";
import Header from "../home/Header";
import Footer from "../home/Footer";
import One from '../assets/img/facility/lib.jpg';
import Two from '../assets/img/facility/computerlab.jpg';
import Three from '../assets/img/facility/Sciencelab.jpg';
import Four from '../assets/img/facility/vedicmathes.webp';
import Five from '../assets/img/facility/Abacus.png';
import Six from '../assets/img/facility/communicationskill.jpeg';
import Seven from '../assets/img/facility/robo.jpeg';
import Eight from '../assets/img/facility/transport.jpg';
import Nine from '../assets/img/facility/counsling.jpeg';
import Ten from '../assets/img/facility/medical.jpeg';
import './style.css'; 

const Facilities = () => {

    let facilitiesArr = [{Topic:'Library', Image:One, Description:'A well-equipped library is a welcoming space where readers of all ages explore ideas, access a wide range of books and digital resources, and find a peaceful place to study. Our collection spans fiction, non-fiction, reference materials, and multimedia sources selected to support learning, creativity, and lifelong curiosity. Friendly staff are available to help you find information, recommend reading, and use library services, including study areas and computer access. Visit us to discover new books, join reading programs, or simply enjoy a quiet corner for focused reading.'},
                   {Topic:'Computer Lab', Image:Two, Description:'Our computer lab is a state-of-the-art facility designed to enhance digital learning and technical skills. Equipped with modern computers, high-speed internet, and the latest software, it provides students with access to a wide range of educational and creative tools. The lab supports activities such as programming, graphic design, research, and online learning, fostering both technical proficiency and problem-solving abilities. With experienced instructors and a well-organized setup, students receive guidance to use technology effectively and responsibly. The computer lab serves as a hub for innovation, collaboration, and the development of skills essential for success in the digital age.'},
                {Topic:'Science Lab', Image:Three, Description:'Our science lab is a well-equipped and interactive learning space designed to spark curiosity and promote scientific thinking among students. It features modern instruments, apparatus, and safety equipment that enable learners to perform experiments in Physics, Chemistry, and Biology with confidence. The lab environment encourages hands-on exploration, allowing students to connect theoretical knowledge with practical applications. Under the guidance of skilled instructors, students develop observation, analysis, and problem-solving skills while adhering to strict safety protocols. This dynamic space nurtures innovation, critical thinking, and a deeper understanding of the wonders of science.'},
            {Topic:'Vedic Maths', Image:Four, Description:'Vedic Maths is an ancient system of mathematics that uses simple and innovative techniques to solve problems quickly and accurately. Based on ancient Indian principles, it enhances mental calculation skills, boosts concentration, and improves problem-solving speed. By learning Vedic Maths, students can perform complex calculations in seconds, making mathematics easier, faster, and more enjoyable.'},
        {Topic:'Abacus', Image:Five, Description:'The Abacus is a time-tested tool that helps develop strong numerical and mental arithmetic skills in children. Using beads and rods, it trains the brain to visualize numbers and perform calculations without relying on paper or calculators. Abacus learning improves memory, concentration, and analytical ability, laying a strong foundation for mathematical confidence and accuracy.'},
    {Topic:'Communicative Skills', Image:Six, Description:'Our communicative skills program is designed to help students express themselves clearly, confidently, and effectively in both spoken and written forms. Through interactive activities, group discussions, presentations, and role-play sessions, learners develop strong vocabulary, grammar, and pronunciation. The program also focuses on active listening, body language, and interpersonal communication, ensuring students are well-prepared for academic, professional, and social interactions in the real world.'},
{Topic:'Robotics', Image:Seven, Description:'Our robotics program introduces students to the exciting world of technology, innovation, and automation. Using modern kits and coding platforms, learners design, build, and program robots to perform various tasks. This hands-on approach enhances creativity, logical thinking, and problem-solving abilities while fostering teamwork and innovation. The program equips students with essential STEM skills, preparing them for the future in an increasingly technology-driven world.'},
{Topic:'Transport', Image:Eight, Description:'Our institution provides a safe, reliable, and well-organized transport facility to ensure hassle-free commuting for students and staff. The fleet of buses is equipped with comfortable seating, GPS tracking, and experienced drivers to maintain punctuality and safety. Routes are carefully planned to cover major areas, making travel convenient and secure for everyone.'},
{Topic:'Counselling Cell', Image:Nine, Description:'The counselling cell offers a supportive and confidential environment where students can seek guidance for academic, personal, and emotional challenges. Our trained counsellors help students develop self-confidence, manage stress, and make informed decisions about their future. Through one-on-one sessions, workshops, and awareness programs, the cell promotes mental well-being and a positive school environment.'},
{Topic:'Medical', Image:Ten, Description:'Our campus has a well-equipped medical facility to address any health-related needs of students and staff. A qualified medical professional is available during school hours to provide first aid, handle emergencies, and monitor general health. Regular health check-ups and awareness programs are conducted to encourage healthy habits and ensure overall well-being.'}];
    return(<>
    <Header />
    <div className="bodyNew">
    <div class="container">
    {facilitiesArr.map((item, i) => (
      <div class="section" key={i}>
         {i % 2 == !0 &&<div>
      <img src={item.Image} alt={item.Topic}/>
      </div>}
        <div class="text-block">
          <h2>{item.Topic}</h2>
          <p style={{fontSize:'18px'}}>&emsp; {item.Description}</p>
        </div>
       {i % 2 === 0 && <div>
          <img src={item.Image} alt={item.Topic}/>
        </div>}
      </div>
    ))}
    {/* <div class="section">
      <div class="text-block">
        <h2>Library</h2>
        <p style={{fontSize:'18px'}}>&emsp; A well-equipped library is a welcoming space where readers of all ages explore ideas, access a wide range of books and digital resources, and find a peaceful place to study. Our collection spans fiction, non-fiction, reference materials, and multimedia sources selected to support learning, creativity, and lifelong curiosity. Friendly staff are available to help you find information, recommend reading, and use library services, including study areas and computer access. Visit us to discover new books, join reading programs, or simply enjoy a quiet corner for focused reading.</p>
      </div>
      <div>
        <img src={Sample} alt="Sample Image 1"/>
      </div>
    </div>


    <div class="section">
      <div>
      <img src={Sample} alt="Sample Image 2"/>
      </div>
      <div class="text-block">
        <h2>Computer lab</h2>
        <p style={{fontSize:'18px'}}>&emsp; Our computer lab is a state-of-the-art facility designed to enhance digital learning and technical skills. Equipped with modern computers, high-speed internet, and the latest software, it provides students with access to a wide range of educational and creative tools. The lab supports activities such as programming, graphic design, research, and online learning, fostering both technical proficiency and problem-solving abilities. With experienced instructors and a well-organized setup, students receive guidance to use technology effectively and responsibly. The computer lab serves as a hub for innovation, collaboration, and the development of skills essential for success in the digital age.</p>
      </div>
    </div> */}
    
  </div>
  </div>
</>)
}
export default Facilities;
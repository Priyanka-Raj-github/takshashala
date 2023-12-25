import React from 'react'
import './principal.css'
function Principal  ()  {
  return (
    <div>
      <>
  <hr />
  <div className="main_principal">
    <div className="container_principal">
      <img src="/principle.enc" alt="logo" id="pimg" />
      <p id="name_principal">
        <u>Dr. Anil Kumar Singh</u>
      </p>
      <div className="nav">
        <section className='nav_section'>
          <a href="#b1"  className='nav_name'>About</a>
        </section>
        <div id="line" />
        <section className='nav_section'>
          <a href="#b2"  className='nav_name'>Message</a>
        </section>
      </div>
    </div>
    <p id="b1" className="head_principal">
      About Principal <i className="arrow_right" />
      <i className="arrow_right" />
      <i className="arrow_right" />
    </p>
    <div className="content_principal">
      Anil Kumar Singh is a distinguished individual who earned his B.Tech
      degree in Civil Engineering from the prestigious Indian Institute of
      Technology Bombay. With a strong academic foundation and a passion for
      civil engineering, he embarked on a journey that has culminated in
      remarkable achievements. Having honed his skills at one of the country's
      premier institutions, Anil Kumar Singh has brought his wealth of knowledge
      and expertise to the field of education. Currently serving as the
      Principal of Government Women's Polytechnic in Bihar, he plays a pivotal
      role in shaping the academic landscape and nurturing the next generation
      of professionals. Anil Kumar Singh's leadership is marked by a commitment
      to excellence, innovation, and inclusivity. Under his guidance, the
      institution has witnessed advancements in both infrastructure and academic
      programs. His dedication to fostering a conducive learning environment has
      contributed to the overall development of students and the institution
      alike. As a Civil Engineering graduate from IIT Bombay, Anil Kumar Singh
      embodies the values of technical prowess, analytical thinking, and a
      commitment to societal progress. His journey from an IIT graduate to the
      principal of a government polytechnic reflects not only his personal
      success but also his dedication to imparting quality education and
      empowering aspiring individuals in Bihar.
    </div>
    <p id="b2" className="head_principal">
      Principal's Message
      <i className="arrow_right" />
      <i className="arrow_right" />
      <i className="arrow_right" />{" "}
    </p>
    <div className="msg">
      <div id="contact_principal">
        <img src="/download.jpg" alt="pen paper" id="pen" />
        <div id="email">
          <i>contact_principal </i>: 98934854002 <br />
          <br />
          <i>Email </i>: gwpPatna@gmail.com
        </div>
      </div>
      <div className="content_principal" id="content2">
        I feel highly delighted on the occasion of launching our new website for
        the Institute. In this website students will get complete information of
        educational and other activities of the institute. As such this
        institute is not only imparting regular diploma education but it is also
        open to general mass and youth to learn and develop technical skill for
        the betterment of their career. Teachers and staff of this institution
        are whole heartedly engaged in developing the technical skill of
        enthusiastic youth who wants to do something special and worthwhile in
        their life. Institution is engaged right from 8.30 a.m. to 6.00 p.m. in
        different activities. These activities and programs are running under
        overall guidance of the central and state government under the
        framework, norms and conditions laid down for various technical courses.
        Students can select the activity of their own choice according to their
        education and ability.
      </div>
    </div>
  </div>
</>

    </div>
  )
}

export default Principal

import styles from "./aboutmecontent.module.css"
function AboutMeContent(){
    return (
      <div className={styles.aboutmecontentwrapper}>
        <h1 className={styles.headerdesign}>About Myself</h1>
        <p className={styles.para}>
          The journey of a Bagmaker who transitions into becoming a Junior
          Full-stack Software Engineer.
        </p>
        <p className={styles.para}>
          On the eve of Christmas, I decided to follow a tutorial on HTML and
          CSS on youtube video while waiting for the turkey to be fully-cooked.
          After 6 months of learning to code by myself and following tutorials
          on the internet, I got accepted to join a Bootcamp. since this
          Bootcamp was fully remote, I learned how to communicate and work
          successfully as part of a self-direct Agile team.
        </p>
        
        <p className={styles.para}>
          During the Bootcamp, I learned the fundamentals of Testing, Back-end
          technologies, and front-end technologies. While on the Bootcamp I also
          learned the fundamental of CyberSecurity in my spare time and learned
          UX/UI courses thought by professional UI/UX designers.
        </p>
      </div>
    );
}

export default AboutMeContent
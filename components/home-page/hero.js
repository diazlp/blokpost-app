import Image from "next/image";
import classes from "./hero.module.css";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/diaz-img.jpg"
          alt="my-handsome (NOT)-photo"
          width={300}
          height={300}
        />
      </div>
      <h1>Greetings! Im Diaz</h1>
      <p>
        I blog about everything you need to know about everything I did know
        that you need to know!
      </p>
    </section>
  );
};

export default Hero;

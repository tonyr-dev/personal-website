import Avatar from '../../components/Avatar';
import Bio from '../../components/Bio/Bio';
import Title from '../../components/Title';

function Hero() {
  return (
    <section className="flex justify-center items-center">
      <div className="mt-6">
        <Title />
        <Avatar />
        <Bio />
      </div>
    </section>
  );
}

export default Hero;

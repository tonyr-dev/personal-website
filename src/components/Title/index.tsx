import TypingAnimation from '../TypingAnimation/TypingAnimation';

export default function Title() {
  return (
    <>
      <p className="font-sans block text-pink-400">
        <TypingAnimation typingSpeed={70}>Hi I&apos;m</TypingAnimation>
      </p>
      <h1 className="font-sans text-5xl font-bold text-slate-200 block">
        <TypingAnimation typingSpeed={70} delay={500}>
          Tony Robertson
        </TypingAnimation>
      </h1>
    </>
  );
}

/* <p className="font-sans block text-pink-400">Hi I&apos;m</p>
<h1 className="font-sans font-bold text-5xl text-slate-200 block">
  Tony Robertson
</h1> */

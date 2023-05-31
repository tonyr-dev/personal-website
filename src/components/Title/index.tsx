import TypingAnimation from '../TypingAnimation/TypingAnimation';

export default function Title() {
  return (
    <div className="w-fit mx-auto">
      <p className="font-sans block text-pink-400">
        <TypingAnimation typingSpeed={100}>Hi I&apos;m</TypingAnimation>
      </p>
      <h1 className="font-sans text-4xl font-bold text-slate-200 block">
        <TypingAnimation typingSpeed={100} delay={7}>
          Tony Robertson
        </TypingAnimation>
      </h1>
    </div>
  );
}

/* <p className="font-sans block text-pink-400">Hi I&apos;m</p>
<h1 className="font-sans font-bold text-5xl text-slate-200 block">
  Tony Robertson
</h1> */

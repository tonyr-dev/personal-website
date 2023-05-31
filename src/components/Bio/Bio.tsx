import PopSquare from '../PopSquare/PopSquare';
import TypingAnimation from '../TypingAnimation/TypingAnimation';

export default function Bio() {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="font-sans w-60 self-center text-center text-slate-200">
        <TypingAnimation typingSpeed={30} delay={45}>
          I&apos;m currently working on my portfolio but please feel free to
          reach out via
        </TypingAnimation>{' '}
        <span className="text-orange-400">
          <TypingAnimation typingSpeed={100} delay={70}>
            email
          </TypingAnimation>
        </span>{' '}
        <TypingAnimation typingSpeed={100} delay={72}>
          or
        </TypingAnimation>
        <span className="text-blue-400">
          {' '}
          <TypingAnimation typingSpeed={100} delay={74}>
            linkedin
          </TypingAnimation>
        </span>
        <TypingAnimation typingSpeed={100} delay={75}>
          .
        </TypingAnimation>
      </p>

      <div className="flex justify-center items-center gap-3 mt-3">
        <PopSquare delay={7.2}>
          <a
            href="mailto:contact@tonyroberts.dev"
            className="inline-flex items-center text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M5.478 5.559A1.5 1.5 0 016.912 4.5H9A.75.75 0 009 3H6.912a3 3 0 00-2.868 2.118l-2.411 7.838a3 3 0 00-.133.882V18a3 3 0 003 3h15a3 3 0 003-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0017.088 3H15a.75.75 0 000 1.5h2.088a1.5 1.5 0 011.434 1.059l2.213 7.191H17.89a3 3 0 00-2.684 1.658l-.256.513a1.5 1.5 0 01-1.342.829h-3.218a1.5 1.5 0 01-1.342-.83l-.256-.512a3 3 0 00-2.684-1.658H3.265l2.213-7.191z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M12 2.25a.75.75 0 01.75.75v6.44l1.72-1.72a.75.75 0 111.06 1.06l-3 3a.75.75 0 01-1.06 0l-3-3a.75.75 0 011.06-1.06l1.72 1.72V3a.75.75 0 01.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </PopSquare>
        <PopSquare delay={7.8}>
          <a
            href="mailto:contact@tonyroberts.dev"
            className="inline-flex items-center text-white bg-gradient-to-br from-blue-400 to-purple-800 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enableBackground="new 0 0 100 100"
              viewBox="0 0 100 100"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="m80.667 14h-61.352c-2.934 0-5.315 2.325-5.315 5.188v61.617c0 2.867 2.381 5.195 5.315 5.195h61.352c2.936 0 5.333-2.328 5.333-5.195v-61.617c0-2.863-2.397-5.188-5.333-5.188zm-45.313 61.354h-10.684v-34.359h10.684zm-5.342-39.057c-3.423 0-6.19-2.774-6.19-6.194 0-3.415 2.767-6.189 6.19-6.189 3.415 0 6.189 2.774 6.189 6.189 0 3.42-2.774 6.194-6.189 6.194zm45.338 39.057h-10.667v-16.708c0-3.986-.078-9.111-5.551-9.111-5.558 0-6.405 4.341-6.405 8.822v16.998h-10.675v-34.36h10.245v4.692h.146c1.426-2.7 4.91-5.549 10.106-5.549 10.806 0 12.802 7.114 12.802 16.369v18.847z" />
            </svg>
          </a>
        </PopSquare>
      </div>
    </div>
  );
}

function Home() {
  return (
    <section className="flex justify-center items-center">
      <div className="mt-6">
        <p className="font-sans block text-pink-400">Hi I&apos;m</p>
        <h1 className="font-sans font-bold text-5xl text-slate-200 block">
          Tony Robertson
        </h1>
        <div className="flex flex-col justify-center items-center">
          <img className=" w-80" src="images/profile.png" alt="profile" />
          <p className="font-sans w-60 self-center text-center text-slate-200">
            I&apos;m currently working on my portfolio but please feel free to{' '}
            <a className="text-pink-400" href="mailto:contact@tonyroberts.dev">
              email me
            </a>{' '}
            or reach out to me on{' '}
            <a
              className="text-pink-400"
              href="https://www.linkedin.com/in/anthony-robertson-793b22139"
            >
              linkedin
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;

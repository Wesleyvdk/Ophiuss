import "../globals.css";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex"></div>

      <div className="relative flex place-items-center after:absolute after:-z-20 after:h-[280px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <div className="w-72">
          <p className="mb-5">
            In the realm of esports, a captivating legend was born in 2021—the
            tale of Ophiussa Esports. Four visionaries, NextFox, Deimo63, Wavey,
            and Jesse, embarked on a journey that would etch their names into
            the annals of gaming lore. Hailing from the enchanting lands of
            Portugal, they united under a shared purpose: to elevate their
            compatriots onto the illustrious European stage.
          </p>
          <p className="mb-5">
            Ophiussa's essence surpassed borders, for they aspired to create an
            inclusive haven where gamers from all walks of life could revel in
            joyous camaraderie and fierce competition. Portuguese or not, all
            were welcomed to partake in the mesmerizing dance of digital duels.
          </p>
          <p className="mb-5">
            The name "Ophiussa" was imbued with ancient mystique, whispered
            through time by the venerable Greeks. Long ago, it graced the
            Portuguese territories near the river Tagus, an epitaph denoting the
            "Land of Serpents." These serpentine creatures embodied the spirit
            of Ophiussa—a potent symbol of resilience, agility, and wisdom.
          </p>
          <p className="mb-5">
            Rocket League became the epicenter of Ophiussa's endeavors—a
            battleground where dreams took flight. Their pre-made teams, woven
            together by bonds of friendship, demonstrated unwavering unity.
            Embodied in the ERS teams, the unyielding ambition propelled them
            toward greatness.
          </p>
          <p className="mb-5">
            With every pulse of their collective hearts, Ophiussa's passion
            blazed brighter. Victories became laurels of triumph, and defeats,
            stepping stones toward enlightenment. They honed their skills,
            crafting an indomitable spirit that set them apart.
          </p>
          <p className="mb-5">
            Beyond the arenas, Ophiussa's reach extended far and wide. Through
            charity events, they extended a benevolent hand, uplifting spirits
            and inspiring hope. In workshops, they nurtured burgeoning talents,
            lighting a spark in the hearts of future gaming stars.
          </p>
          <p className="mb-5">
            Fans, enamored by their mesmerizing prowess, rallied as devoted
            disciples. Ophiussa's legacy echoed through time, binding the gaming
            cosmos in a tapestry of unity and dreams.
          </p>
          <p className="mb-5">
            And thus, their grand saga unfolded—a timeless tale that transcended
            mere existence. Within their name lay the blueprint of greatness,
            where destiny intertwined with ambition.
          </p>
          <p className="mb-5">
            Under the celestial canopy, Ophiussa danced with celestial grace,
            its brilliance illuminating the path for generations to come. United
            in purpose, their legend thrived, etching their indelible mark on
            the ever-evolving tapestry of esports.
          </p>
        </div>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-3 lg:text-left">
        <a
          href="/about"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            About{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Ophiussa Esports!
          </p>
        </a>

        <a
          href="https://discord.gg/bmbvyZkcr6"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Contact{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Contact Us.</p>
        </a>

        <a
          href="/partners"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Partners{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Our Partners.</p>
        </a>
      </div>
    </main>
  );
}

/* =========================================================
   PROJECT WRITE-UPS
   One entry per project that has a full detail page, keyed by
   the same `slug` used in script.js. A project without an entry
   here just won't get a "Read the full write-up" link on its
   card — everything still works fine without one.

   Each entry can include:

   - tagline    : optional short line shown under the title
                  (falls back to the card's `blurb` if omitted)
   - video      : optional { embed: "https://www.youtube.com/embed/VIDEO_ID" }
   - storeEmbed : optional Steam widget URL, e.g.
                  "https://store.steampowered.com/widget/APPID/"
   - sections   : array of { heading, body }
                  `body` is raw HTML — <p>, <ul><li>, <a>, <strong>
                  all work. Add/remove/reorder sections freely;
                  common ones are Overview, Goals & Motivation,
                  Tools & Technologies, Process & Development,
                  Features, My Contributions, Results & Outcome,
                  Lessons Learned — but there's no fixed list.
   - media      : array of { src, caption }
                  images shown in a gallery grid at the bottom.
                  Drop files in assets/img/projects/<slug>/gallery/
   - credits    : optional array of { name, url } for teammates
   ========================================================= */

const PROJECT_DETAILS = {

  /*
    Bro's Adventure
  */

  "bros-adventure": {
    tagline: "",
    sections: [
      {
        heading: "Overview",
        body: `<p></p>`
      },
      {
        heading: "Goals & Motivation",
        body: `<p></p>`
      },
      {
        heading: "Tools & Technologies",
        body: `<ul>
          <li></li>
        </ul>`
      },
      {
        heading: "Process & Development",
        body: `<p></p>`
      },
      {
        heading: "Features",
        body: `<ul>
          <li></li>
        </ul>`
      },
      {
        heading: "My Contributions",
        body: `<p></p>`
      },
      {
        heading: "Results & Outcome",
        body: `</p>`
      },
      {
        heading: "Lessons Learned",
        body: `</p>`
      }
    ],
    media: [
    ]
  },

  /*
    VANT
  */

  "vant": {
    tagline: "a 1-vs-4 asymmetric game where a VR player stomps around as a mech armed with a giant hammer, while up to four PC players try to bring it down with guns first",
    sections: [
      {
        heading: "Overview",
        body: `<p></p>`
      },
      {
        heading: "Goals & Motivation",
        body: `<p></p>`
      },
      {
        heading: "Tools & Technologies",
        body: `<ul>
          <li></li>
        </ul>`
      },
      {
        heading: "Process & Development",
        body: `<p></p>`
      },
      {
        heading: "Features",
        body: `<ul>
          <li></li>
        </ul>`
      },
      {
        heading: "My Contributions",
        body: `<p></p>`
      },
      {
        heading: "Results & Outcome",
        body: `</p>`
      },
      {
        heading: "Lessons Learned",
        body: `</p>`
      }
    ],
    media: [
      { src: "assets/img/projects/vant/gallery/01.png", caption: "the arena" },
      { src: "assets/img/projects/vant/gallery/02.png", caption: "the final mech" },
      { src: "assets/img/projects/vant/gallery/03.png", caption: "the mech cockpit" },
      { src: "assets/img/projects/vant/gallery/04.png", caption: "cel-shaded graphics" },
      { src: "assets/img/projects/vant/gallery/05.png", caption: "custom made VFX" },
      { src: "assets/img/projects/vant/gallery/06.png", caption: "hammer concept art" },
      { src: "assets/img/projects/vant/gallery/07.png", caption: "mech concept art" },
      { src: "assets/img/projects/vant/gallery/08.png", caption: "mech concept art" },
      { src: "assets/img/projects/vant/gallery/09.png", caption: "mech rendering in Maya" },
    ],
    credits: [
      { name: "Anagha", url: "https://www.linkedin.com/in/anagha-polapragada-14147b288" },
      { name: "Ty", url: "" },
      { name: "Riley", url: "" },
      { name: "Michael", url: "https://www.linkedin.com/in/michael-howard562" },
      { name: "Haneul (Sky)", url: "https://www.linkedin.com/in/haneul-lee-rundee" },
      { name: "Chris", url: "https://www.linkedin.com/in/mhchriskim" },
      { name: "Nathan", url: "https://www.linkedin.com/in/nathanleong123" },
      { name: "Songyang", url: "https://www.linkedin.com/in/vomunar" },
      { name: "Zan", url: "https://www.linkedin.com/in/zanmoffat" },
      { name: "Adam", url: "https://www.linkedin.com/in/adam-lonstein" },
      { name: "Kai", url: "https://www.linkedin.com/in/phuajiankai" },
      { name: "Doyoon", url: "https://www.linkedin.com/in/doyoon" },
    ]
  },

  /*
    Spell It Out
  */

  "spell-it-out": {
    tagline: "a Unity-powered dungeon crawler where you defeat skeletons by literally drawing spells with your mouse using gesture-based magic",
    storeEmbed: { platform: "itch", url: "https://itch.io/embed/4121196" },
    sections: [
      {
        heading: "Overview",
        body: `<p>Spell it Out (WIP) is a Nintendo Switch dungeon crawler developed as a school assignment using an official Nintendo Switch DevKit, the Nintendo SDK, and Joy-Con input systems. Players progress through procedurally generated dungeon rooms, defeating increasingly difficult skeleton enemies to unlock the path forward. Combat is entirely spell-based, with players casting magic by drawing gestures using either the Switch touchscreen or Joy-Cons, blending motion and touch controls into core gameplay. The project focused on console-specific development, gesture recognition, procedural level flow, and scalable enemy difficulty within a constrained academic timeline (about 4 weeks).</p>
        
        <figure>
          <img src="assets/img/projects/spell-it-out/title-card.png" alt="Spell It Out main menu">
          <figcaption>main menu</figcaption>
        </figure>`
      },
      {
        heading: "Goals & Motivation",
        body: `<p>Spell it Out (WIP) was developed as a school project with the primary goal of learning how to build a game for the Nintendo Switch using the official Nintendo SDK and Joy-Con input systems. The project emphasized understanding console-specific development, including motion controls, touchscreen input, and platform constraints, while working collaboratively with a team of programmers. For me personally, it was an opportunity to gain hands-on experience with Unity and C#, deepen my understanding of input systems and gesture recognition, and learn how to design and implement gameplay features within a console-focused development pipeline.</p>`
      },
      {
        heading: "Tools & Technologies",
        body: `<ul>
          <li><b>Language(s):</b> C#</li>
          <li><b>Frameworks/Engine:</b> Unity 6</li>
          <li><b>Other tools:</b> Git, GitHub</li>
        </ul>`
      },
      {
        heading: "Process & Development",
        body: `<p>Spell it Out (WIP) was developed by a small team of four programmers using a relaxed but effective collaboration process. Most communication happened through Discord, with weekly in-person meetings every Friday to review progress, discuss challenges, and set goals for the following week. Tasks were self-assigned based on strengths and interests, allowing each team member to work independently while staying aligned on the overall vision. Despite the informal structure, everyone consistently met their goals, resulting in steady progress and a strong team collaboration experience.</p>`
      },
      {
        heading: "Features",
        body: `<ul>
          <li><b>Gesture-Based Spell Casting:</b> Spells are cast by drawing symbols using the Nintendo Switch touchscreen or Joy-Con motion controls, powered by a custom gesture recognition system.</li>
          <li><b>Nintendo Switch-Specific Input Support:</b> Full integration with the Nintendo SDK, including Joy-Con input handling and touchscreen interaction.</li>
          <li><b>Procedurally Generated Dungeons:</b> Each playthrough features a randomly generated dungeon layout, ensuring varied room progression.</li>
          <li><b>Scaling Enemy Difficulty:</b> Skeleton enemies progressively increase in difficulty as the player advances deeper into the dungeon.</li>
          <li><b>Unity & C# Gameplay Systems:</b> Core gameplay, combat logic, dungeon flow, and input systems were implemented in Unity using C#.</li>
          <li><b>Team-Based Development:</b> Built collaboratively by a small team of programmers with shared ownership of systems and features.</li>
        </ul>`
      },
      {
        heading: "My Contributions",
        body: `<p>As a gameplay programmer, I was responsible for designing and implementing the core gameplay systems and level flow. I built all dungeon rooms and developed the level and level manager systems, including procedural dungeon generation and serialization to preserve dungeon state when transitioning into combat scenes. I implemented the combat system, handled room-based progression, and created the foundational UI screens such as the main menu, win screen, and lose screen. My work focused on ensuring smooth gameplay flow, reliable scene transitions, and a cohesive dungeon experience from start to finish.</p>`
      },
      {
        heading: "Results & Outcome",
        body: `<p>Spell it Out (WIP) received a 100% on the assignment and successfully met its goal of delivering a fun, playable game built for the Nintendo Switch. While the game is still far from fully polished, the core systems and gameplay loop are complete and enjoyable. With access to the Switch DevKit no longer available, development will continue on the PC version using mouse-based spell casting. The game is currently available on Itch.io, and the team plans to keep iterating on and improving the project over time.</p>`
      },
      {
        heading: "Lessons Learned",
        body: `<p>Spell it Out (WIP) helped me build a strong foundation in Unity and C#, while giving me hands-on experience with high-level gameplay scripting and system design. I gained practical experience implementing a simplified dungeon generation system, combat mechanics, and managing scene transitions in a real project. Working with a small team further strengthened my collaboration and communication skills. Most importantly, developing for the Nintendo Switch taught me to design within hardware constraints, from baking lighting and reducing polygon counts to making performance-conscious decisions throughout development.</p>`
      }
    ],
    media: [
      { src: "assets/img/projects/spell-it-out/gallery/01.png", caption: "dungeon exploration scene" },
      { src: "assets/img/projects/spell-it-out/gallery/02.png", caption: "combat scene" },
      { src: "assets/img/projects/spell-it-out/gallery/03.png", caption: "procedurally generated dungeon" },
      { src: "assets/img/projects/spell-it-out/gallery/04.png", caption: "combat room behind the curtain" },
      { src: "assets/img/projects/spell-it-out/gallery/05.png", caption: "first time in C#" },
      { src: "assets/img/projects/spell-it-out/gallery/06.png", caption: "nintendo switch gameplay" },
    ],
    credits: [
      { name: "Sam", url: "https://www.linkedin.com/in/sam-friedman-4a964133b" },
      { name: "Haneul (Sky)", url: "https://www.linkedin.com/in/haneul-lee-rundee" },
      { name: "Hyeonjoon", url: "https://www.linkedin.com/in/hyeonjoon-nam" },
    ]
  },

  /*
    LUMINARY
  */

  "luminary": {
    tagline: "a story-driven forest adventure in Unreal Engine 5, featuring puzzle-solving, potion crafting, and awesome VFX",
    video: {
      embed: "https://www.youtube.com/embed/kl5m03vxzeE"
    },
    sections: [
      {
        heading: "Overview",
        body: `<p>Luminary is a story-driven forest adventure created over two semesters by a team of about 13, 
        combining programming, art, and music to bring a magical world to life. Players control a witch traveling 
        through a corrupted forest, solving puzzles, harvesting plants, and brewing potions to cleanse the land. 
        As the graphics programmer, I handled all particle effects, VFX, materials, cutscenes using the Sequencer, 
        lighting, the day/night cycle, and contributed to gameplay mechanics, player systems, and UI implementation.</p>`
      },
      {
        heading: "Goals & Motivation",
        body: `<p>Luminary was a year-long school project aimed at combining programming, art, and music to create an 
        immersive, story-driven experience. I wanted to expand my skills in graphics, VFX, materials, and Unreal 
        Engine 5 systems while collaborating with a larger, multidisciplinary team for the first time. The goal was to 
        build a polished game with compelling visuals, engaging mechanics, and a rich, interactive world.</p>`
      },
      {
        heading: "Tools & Technologies",
        body: `<ul>
          <li><b>Language(s):</b> UE Blueprints</li>
          <li><b>Frameworks/Engine:</b> Unreal Engine 5.4.4</li>
          <li><b>Other tools:</b> Perforce, ClickUp</li>
        </ul>`
      },
      {
        heading: "Process & Development",
        body: `<p>Luminary was developed using a structured workflow to keep everyone coordinated. Programmers and 
        artists each had advocates, and our producer, Marichris, helped keep the team organized. We held daily standup 
        meetings and frequent collaboration sessions to discuss design and implementation. The designers guided both 
        programmers and artists on what to create, and everyone worked together closely to bring the game world to 
        life.</p>
        
        <div data-carousel="team-photos"></div>
        `
      },
      {
        heading: "Features",
        body: `<ul>
          <li><b>Puzzle & Exploration Gameplay:</b> Players traverse a corrupted forest, solving puzzles and 
          interacting with the environment.</li>
          <li><b>Potion Crafting & Elemental Mechanics:</b> Harvest plants and brew potions to cleanse different types 
          of corruption.</li>
          <li><b>Dynamic Day/Night Cycle & Night Sky:</b> Immersive visuals with a fully implemented day/night cycle 
          and realistic sky.</li>
          <li><b>Advanced VFX & Particles:</b> All particle effects, VFX, and materials were crafted to enhance 
          gameplay and atmosphere.</li>
          <li><b>Cutscenes & Storytelling:</b> Sequencer-based cutscenes deliver narrative moments throughout the 
          game.</li>
          <li><b>UI Systems:</b> Main menu, journal, and player HUD were implemented for a polished user 
          experience.</li>
        </ul>`
      },
      {
        heading: "My Contributions",
        body: `<p>As the graphics programmer for Luminary, I was responsible for all particle effects, VFX, materials, 
        and lighting, including the night sky and day/night cycle. I created cutscenes using the Sequencer, 
        contributed to gameplay mechanics like grid mode, and worked extensively in the player blueprint. I also 
        implemented UI elements such as the Main Menu and the journal, and helped artists integrate their work into 
        the game, ensuring both visuals and gameplay felt cohesive and polished.</p>`
      },
      {
        heading: "Results & Outcome",
        body: `<p>Luminary is currently a somewhat polished, playable game with compelling visuals, gameplay, and 
        story, though it could use some additional refinement. The team hopes to eventually release it on Steam, but 
        the project's future is still undecided. Regardless, it was a rewarding year-long collaboration that showcased 
        our ability to create a large-scale, multidisciplinary game.</p>`
      },
      {
        heading: "Lessons Learned",
        body: `<p>Luminary taught me how to collaborate with a larger, multidisciplinary team, including artists, designers, and musicians, for the first time. It was also my first experience using Unreal Engine 5, which helped me expand my skills in graphics, VFX, materials, lighting, cutscenes, and UI. Overall, the project strengthened my ability to work on complex systems and integrate different disciplines into a cohesive, polished game.</p>`
      }
    ],
    media: [
      { src: "assets/img/projects/luminary/gallery/01.png", caption: "title screen" },
      { src: "assets/img/projects/luminary/gallery/02.jpeg", caption: "gameplay illustration" },
      { src: "assets/img/projects/luminary/gallery/03.jpg", caption: "first-semester wip" },
      { src: "assets/img/projects/luminary/gallery/04.jpg", caption: "first-semester wip" },
      { src: "assets/img/projects/luminary/gallery/05.png", caption: "intro cutscene" },
      { src: "assets/img/projects/luminary/gallery/06.png", caption: "fire frog shrine cutscene" },
      { src: "assets/img/projects/luminary/gallery/07.png", caption: "fire frog shrine cutscene" },
      { src: "assets/img/projects/luminary/gallery/08.png", caption: "mountain view of map" },
      { src: "assets/img/projects/luminary/gallery/09.png", caption: "player journal" },
      { src: "assets/img/projects/luminary/gallery/10.png", caption: "end cutscene" },
      { src: "assets/img/projects/luminary/gallery/11.png", caption: "first-semester wip" },
      { src: "assets/img/projects/luminary/gallery/12.jpeg", caption: "swamp concept art" },
    ],
    carousels: {
      "team-photos": [
        { src: "assets/img/projects/luminary/team1.JPG", caption: "the Luminary team" },
        { src: "assets/img/projects/luminary/team2.JPG", caption: "the Luminary team" },
        { src: "assets/img/projects/luminary/team3.jpg", caption: "the Luminary team" },
      ]
    },
    credits: [
      { name: "Edward", url: "https://www.linkedin.com/in/edward-mondragon-95973a107" },
      { name: "Jaina", url: "https://www.linkedin.com/in/jaina-juanico" },
      { name: "Corinna", url: "https://www.linkedin.com/in/corinna-scully" },
      { name: "Aram", url: "https://www.linkedin.com/in/aram-collazo-a41b3b242" },
      { name: "Marichris", url: "https://www.linkedin.com/in/marichris-writer" },
      { name: "Skye", url: "https://www.linkedin.com/in/skye-sears" },
      { name: "Anagha", url: "https://www.linkedin.com/in/anagha-polapragada-14147b288" },
      { name: "Wes", url: "https://www.linkedin.com/in/rares-morosan-bb7343215" },
      { name: "Nova", url: "https://www.linkedin.com/in/nova-hilton" },
      { name: "Ty", url: "" },
      { name: "Riley", url: "" },
    ]
  },

  /*
    COSMIC CARGO
  */

  "cosmic-cargo": {
    tagline: "a sophomore-year team project: a custom C++/OpenGL engine built from scratch, wrapped around a 2D space-cargo game.",
    video: {
      embed: "https://www.youtube.com/embed/NrGlFFcoZQ0"
    },
    storeEmbed: { platform: "steam", url: "https://store.steampowered.com/widget/4056230/" },
    sections: [
      {
        heading: "Overview",
        body: `<p>Cosmic Cargo is a space-themed game I worked on during my sophomore year with my team, Wormhole 
        Wizards. We started out as an all-programmer team and built the game from scratch in a custom C++/OpenGL 
        engine, later bringing on designers in the second semester. I mainly handled graphics programming with OpenGL, 
        but I also jumped into gameplay programming and helped shape the overall feel of the game.</p>`
      },
      {
        heading: "Goals & Motivation",
        body: `<p>This project started as a school assignment, but our team also wanted to make something we'd be 
        proud to show off later (something we could eventually even put on Steam). For me, it was a chance to dive 
        deeper into C++ and get hands-on experience with building a custom engine. I learned a ton about OpenGL and 
        GLSL shader programming, improved my teamwork and collaboration skills, and overall gained valuable experience 
        in both graphics and gameplay programming while working on a full game.</p>`
      },
      {
        heading: "Tools & Technologies",
        body: `<ul>
          <li><b>Language(s):</b> C++, GLSL</li>
          <li><b>Frameworks/Engine:</b> Custom-built C++/OpenGL engine</li>
          <li><b>Other tools:</b> TortoiseSVN, Visual Studio, Trello, Aseprite</li>
        </ul>`
      },
      {
        heading: "Process & Development",
        body: `<p>In the first semester, our design decisions came from team brainstorming sessions and frequent 
        discussions with our professors. We used Trello to stay organized, and our teammate
        <a href="https://www.linkedin.com/in/alexander-falkowski-11360078">Alex</a> acted as producer, keeping the 
        team on track and making sure we hit our milestones. Any challenges or disputes were openly discussed until we 
        reached a solution, and we submitted weekly work logs for feedback. We also held milestone meetings, planning 
        sessions, and reflections to track progress and improve our workflow.</p>
        
        <p>In the second semester, the process stayed largely the same, but we expanded the team by bringing in 
        designers. This allowed us to refine the gameplay and visuals while maintaining the organization and 
        collaboration practices we had already established.</p>
        
        <figure>
          <img src="assets/img/projects/cosmic-cargo/gallery/team.jpg" alt="Cosmic Cargo team photo">
          <figcaption>the Wormhole Wizards team</figcaption>
        </figure>
        `
      },
      {
        heading: "Features",
        body: `<ul>
          <li><b>Custom 2D Engine:</b> Built from scratch in C++ and OpenGL, giving us full control over rendering and 
          gameplay systems. Real-time JSON serial and deserialization.</li>
          <li><b>Space-themed Gameplay:</b> Build and navigate ships, manage cargo, and tackle challenges in procedurally 
          generated space environments.</li>
          <li><b>Polished Graphics:</b> Implemented shaders and custom rendering techniques to make the visuals pop in a 2D 
          space setting.</li>
        </ul>`
      },
      {
        heading: "My Contributions",
        body: `<p>I played a key role in both the technical and creative aspects of Cosmic Cargo. All of the pixel art 
        in the game is my work, and I also implemented many core systems, including the graphics system, background 
        system, and in-game VFX. I created animations for passing levels, the level select screen, and helped set up 
        our advanced particle system, which my teammate later optimized and expanded. I also worked on the engine 
        early on, laying the foundation for the team to build and optimize it further.</p>`
      },
      {
        heading: "Results & Outcome",
        body: `<p>Cosmic Cargo ended up being a really solid sophomore year game. People loved playing it, and we were 
        proud of how it turned out, especially considering that in the first semester, with no designers, it was more 
        of a tech demo than a full game. After the second semester, the addition of designers helped us polish it into 
        a proper game. In class, we earned a passing grade with kudos from professors, who were impressed by the 
        game's performance. Apparently, we'd even broken their record for the number of particles rendered 
        simultaneously (in the millions!) while maintaining a stable framerate.</p>`
      },
      {
        heading: "Lessons Learned",
        body: `<p>Cosmic Cargo was my first major C++ project and my first time really diving into OpenGL and GLSL, so 
        I ran into a lot of challenges. Much of the graphics system ended up being a bit of a mess at first because I 
        didn't fully understand how everything worked: from the rendering pipeline to managing shaders to just using 
        C++ in general. Thankfully, <a href="https://www.linkedin.com/in/justinli00">my TA at the time</a> walked me 
        through many of these concepts, helping me untangle the system and really learn how graphics engines function. 
        Every mistake was a learning opportunity, and now I have a much deeper understanding of graphics programming, 
        engine architecture, and shader work. If I could go back, I'd approach the engine and graphics system very 
        differently with the knowledge I have now.</p>`
      }
    ],
    media: [
      { src: "assets/img/projects/cosmic-cargo/gallery/01.png", caption: "title screen with black hole VFX" },
      { src: "assets/img/projects/cosmic-cargo/gallery/02.png", caption: "fun test scene" },
      { src: "assets/img/projects/cosmic-cargo/gallery/03.png", caption: "death screen VFX" },
      { src: "assets/img/projects/cosmic-cargo/gallery/04.png", caption: "fun real-time post processor settings" },
      { src: "assets/img/projects/cosmic-cargo/gallery/05.png", caption: "level select screen" },
      { src: "assets/img/projects/cosmic-cargo/gallery/06.png", caption: "broke my post processor" },
      { src: "assets/img/projects/cosmic-cargo/gallery/07.png", caption: "tutorial level" },
      { src: "assets/img/projects/cosmic-cargo/gallery/08.png", caption: "level complete scene" },
    ],
    credits: [
      { name: "Sebastian", url: "https://www.linkedin.com/in/sebastian-o-brian-81878b271" },
      { name: "Lucas", url: "https://www.linkedin.com/in/lucas-nakashita-650282171" },
      { name: "Kevin", url: "https://www.linkedin.com/in/kevinmasson" },
      { name: "Max", url: "https://www.linkedin.com/in/max-ortman-b5805a194" },
      { name: "Alex", url: "https://www.linkedin.com/in/alexander-falkowski-11360078" },
      { name: "Michael", url: "https://www.tk1t.gg/" },
      { name: "Cole", url: "https://www.linkedin.com/in/cole-dickson-244562354" },
    ]
  },

  /*
    Battle Bond
  */

  "battle-bond": {
    tagline: "a top-down, co-op tank game where teamwork is key, featuring custom pixel art and challenging enemies",
    video: {
      embed: "https://www.youtube.com/embed/KO1uKE100NI"
    },
    sections: [
      {
        heading: "Overview",
        body: `<p>Battle Bond is a top-down, co-op tank game I worked on during a summer semester with a team of four freshmen programmers. Built in C using a professor-provided engine, the game challenges two players to control a single tank (one handling movement, the other shooting) as they progress through enemy-filled levels and face a massive boss called Po!i-T0nK3RZ. I handled all the pixel art for the game and programmed all enemies and the boss, gaining early experience in game programming and design before diving into graphics and physics in later projects.</p>`
      },
      {
        heading: "Goals & Motivation",
        body: `<p>Battle Bond started as a school project, but I also saw it as a chance to learn how to program a full game from start to finish. As a freshman, I wanted hands-on experience with C programming, enemy AI, and level design, while also exploring pixel art and co-op gameplay mechanics. The goal was to build something fun, challenging, and polished within the short summer semester.</p>`
      },
      {
        heading: "Tools & Technologies",
        body: `<ul>
          <li><b>Language(s):</b> C</li>
          <li><b>Frameworks/Engine:</b> Custom-built C engine given to us</li>
          <li><b>Other tools:</b> GitHub, Visual Studio, GitHub Projects, Aseprite</li>
        </ul>`
      },
      {
        heading: "Process & Development",
        body: `<p>As the producer for Battle Bond, I coordinated our team of four freshmen programmers and kept us organized using GitHub Projects to track tasks. When we needed to plan or make decisions, we discussed everything together as a team. The process was a bit rough at times, given that we were all new to game development, but collaborating closely and iterating quickly helped us complete the game within the short summer semester.</p>`
      },
      {
        heading: "Features",
        body: `<ul>
          <li><b>Co-op Tank Gameplay:</b> Two players control a single tank - one handles movement, the other handles shooting - requiring teamwork to clear levels.</li>
          <li><b>Challenging Levels & Boss:</b> Progress through enemy-filled levels and face a massive boss called Po!i-T0nK3RZ.</li>
          <li><b>Controller Support:</b> Thanks to teammate Rei, the game supports controllers with vibration feedback for a more immersive experience.</li>
          <li><b>Custom Pixel Art:</b> All of the game's pixel art was created by me using Aseprite.</li>
          <li><b>Enemy & Boss Programming:</b> I programmed all enemies and the boss behavior, including attack patterns and AI logic.</li>
        </ul>`
      },
      {
        heading: "My Contributions",
        body: `<p>I contributed both creatively and technically to Battle Bond. I created all of the pixel art using Aseprite and designed all five levels for the game. On the programming side, I implemented all enemy and boss behavior, ensuring the AI and attack patterns were challenging and fun. As the producer, I also coordinated the team, keeping tasks organized and the project on track.</p>`
      },
      {
        heading: "Results & Outcome",
        body: `<p>For a game built in just a short summer semester, Battle Bond turned out really well. The professors loved it and suggested we submit it to the game gallery. While the game was mostly left untouched after the summer, it was well-received and people especially enjoyed the co-op gameplay. I'm considering revisiting it to polish and showcase it in the gallery, as it was a fun and rewarding project that highlighted teamwork and creative design.</p>`
      },
      {
        heading: "Lessons Learned",
        body: `<p>Battle Bond taught me a lot about teamwork and project management, especially in my role as producer where staying organized and keeping the team on track was key. It was also my first time creating pixel art, which gave me valuable creative experience. On the programming side, I gained hands-on practice with C, designing enemy behaviors and programming the boss, which helped build the foundation for more advanced gameplay and engine work in future projects.</p>`
      }
    ],
    media: [
      { src: "assets/img/projects/battle-bond/gallery/01.png", caption: "title screen" },
      { src: "assets/img/projects/battle-bond/gallery/02.png", caption: "final boss: Po!i-T0nK3RZ" },
      { src: "assets/img/projects/battle-bond/gallery/03.png", caption: "level 2" },
      { src: "assets/img/projects/battle-bond/gallery/04.png", caption: "xbox controller support" },
      { src: "assets/img/projects/battle-bond/gallery/05.png", caption: "level 3" },
      { src: "assets/img/projects/battle-bond/gallery/06.png", caption: "level 1" },
    ],
    credits: [
      { name: "Rei", url: "https://www.linkedin.com/in/evan-anderson-bb702b1b6/" },
      { name: "Alex", url: "https://www.linkedin.com/in/alexander-falkowski-11360078" },
      { name: "Lucas", url: "https://www.linkedin.com/in/lucas-nakashita-650282171" },
    ]
  },

  /*
    LEFT 4 B4IT
  */

  "left-4-b4it": {
    tagline: "a short underwater survival game where you play as an angler fish, battling zombie fish and upgrading your abilities between levels",
    sections: [
      {
        heading: "Overview",
        body: `<p>LEFT 4 B4IT was my first team game project, created in a 5-6 week half-fall semester with two other classmates using C and the CProcessing engine. In the game, you play as an angler fish navigating darker and deeper waters, shooting beams from your light to fend off zombie fish. Between levels, players can upgrade their light, health, or speed from a pirate octopus in a sunken ship. I was responsible for programming all the enemy behaviors, gaining my first real experience in game programming and team development.</p>
        
        <figure>
          <img src="assets/img/projects/left-4-b4it/title-card.png" alt="LEFT 4 B4IT main menu">
          <figcaption>main menu</figcaption>
        </figure>`
      },
      {
        heading: "Goals & Motivation",
        body: `<p>LEFT 4 B4IT was a school project designed to give us hands-on experience with C programming and game development in a short timeframe. As it was my first team project, I wanted to learn how to collaborate on a game, implement enemy behaviors, and get a feel for building gameplay systems from scratch. The goal was to make a fun, challenging underwater survival game while gaining foundational skills for future projects.</p>`
      },
      {
        heading: "Tools & Technologies",
        body: `<ul>
          <li><b>Language(s):</b> C</li>
          <li><b>Frameworks/Engine:</b> CProcessing (Custom-built C engine given to us)</li>
          <li><b>Other tools:</b> TortoiseSVN, Visual Studio</li>
        </ul>`
      },
      {
        heading: "Process & Development",
        body: `<p>For LEFT 4 B4IT, our team would brainstorm together on design decisions, like the types of enemies and general gameplay ideas. Once we had a plan, we split off into our individual tasks where I focused on programming all the enemy behaviors while my teammates worked on other aspects of the game. This structure allowed us to collaborate on creative decisions while making steady progress on our individual contributions.</p>`
      },
      {
        heading: "Features",
        body: `<ul>
          <li><b>Underwater Survival Gameplay:</b> Play as an angler fish navigating increasingly dark levels, fending off zombie fish enemies.</li>
          <li><b>Upgradeable Abilities:</b> Between levels, choose to upgrade your light, health, or speed to survive deeper waters.</li>
          <li><b>Enemy AI:</b> All enemy behaviors were programmed to challenge the player and create dynamic underwater combat.</li>
        </ul>`
      },
      {
        heading: "My Contributions",
        body: `<p>I was responsible for programming all the enemy behaviors in LEFT 4 B4IT, designing how the zombie fish moved, attacked, and reacted to the player. This was my first experience programming game AI and working as part of a team, giving me foundational skills in both C programming and collaborative development.</p>`
      },
      {
        heading: "Results & Outcome",
        body: `<p>LEFT 4 B4IT was a fun and rewarding project that earned us a passing grade. Given that it was an early, simple game created in a short timeframe, it didn’t go beyond the classroom, which is typical for many starter projects. Despite that, it provided valuable experience in teamwork, C programming, and designing enemy behaviors, laying the groundwork for more advanced projects later in my degree.</p>`
      },
      {
        heading: "Lessons Learned",
        body: `<p>LEFT 4 B4IT taught me the basics of working in a team, collaborating on design decisions, and dividing tasks efficiently. I gained my first real experience programming enemy behaviors in C, which helped me understand AI and gameplay systems. It also gave me insight into how early projects often start simple, and how foundational teamwork and coding skills set the stage for more complex games later.</p>`
      }
    ],
    media: [
      { src: "assets/img/projects/left-4-b4it/gallery/01.png", caption: "shop scene" },
      { src: "assets/img/projects/left-4-b4it/gallery/02.png", caption: "dark level" },
      { src: "assets/img/projects/left-4-b4it/gallery/03.png", caption: "death screen" },
      { src: "assets/img/projects/left-4-b4it/gallery/04.png", caption: "variety of enemies" },
    ],
    credits: [
      { name: "James", url: "https://www.linkedin.com/in/james-hardy-4a7008184" },
      { name: "Javier", url: "https://www.linkedin.com/in/javier-carballo-flor-4b5a51211" },
    ]
  },

  /*
    Zombie Clicker
  */

  "zombie-clicker": {
    tagline: "a fast-paced reflex game where you move your character and click on increasingly speedy zombies to survive",
    sections: [
      {
        heading: "Overview",
        body: `<p>Zombie Clicker was my first solo game project at DigiPen, created in just 2-3 weeks using C and the CProcessing engine. In the game, you move your character with WASD while zombies chase you, and you must click on each zombie before it reaches you. The challenge increases as each zombie gets faster, testing the player's reflexes and aim. This project introduced me to game programming, basic AI, and creating playable mechanics from scratch.</p>
        
        <figure>
          <img src="assets/img/projects/zombie-clicker/title-card.png" alt="Zombie Clicker main menu">
          <figcaption>main menu</figcaption>
        </figure>`
      },
      {
        heading: "Goals & Motivation",
        body: `<p>Zombie Clicker was a school project designed to help me learn the basics of game programming and working with a custom engine. As my first solo game, the goal was to build a playable, challenging experience from scratch while practicing C programming, simple AI, and gameplay mechanics. It was all about gaining hands-on experience and understanding how to turn code into a fun game.</p>`
      },
      {
        heading: "Tools & Technologies",
        body: `<ul>
          <li><b>Language(s):</b> C</li>
          <li><b>Frameworks/Engine:</b> CProcessing (Custom-built C engine given to us)</li>
          <li><b>Other tools:</b> Visual Studio</li>
        </ul>`
      },
      {
        heading: "Process & Development",
        body: `<p>For Zombie Clicker, I worked entirely solo over 2-3 weeks. I started by planning the core gameplay loop: moving the character and having zombies chase the player. Then I programmed the basic AI, character movement, and click detection, testing each part as I went. With no art assets, everything was represented with simple shapes like squares and circles, which allowed me to focus on programming mechanics and ensuring the gameplay felt responsive and fun.</p>`
      },
      {
        heading: "Features",
        body: `<ul>
          <li><b>Fast-Paced Reflex Gameplay:</b> Move your character with WASD and click on zombies before they reach you.</li>
          <li><b>Increasing Challenge:</b> Each zombie gets faster, testing the player's aim and reflexes.</li>
          <li><b>Basic AI:</b> Programmed simple enemy behaviors to chase the player.</li>
        </ul>`
      },
      {
        heading: "My Contributions",
        body: `<p>I developed Zombie Clicker entirely on my own, programming the character movement, enemy AI, and click-based combat mechanics. Since it was a solo project, I handled all aspects of gameplay implementation, testing, and iteration, which gave me my first hands-on experience building a playable game from scratch.</p>`
      },
      {
        heading: "Results & Outcome",
        body: `<p>Zombie Clicker earned a passing grade, and while the game didn't go beyond the classroom, it was well-received by the professor, who noted that it was impressive given my skill level at the time. The project gave me valuable early experience in game programming and creating playable mechanics from scratch.</p>`
      },
      {
        heading: "Lessons Learned",
        body: `<p>Zombie Clicker taught me the fundamentals of game programming, including character movement, basic AI, and implementing core gameplay loops. As my first solo project, I learned how to take a concept from idea to playable game, manage my time over a short development period, and iterate on mechanics to make the game fun and responsive. It laid the groundwork for more complex projects in future semesters.</p>`
      }
    ],
    media: [
      { src: "assets/img/projects/zombie-clicker/gallery/01.png", caption: "gameplay scene" },
      { src: "assets/img/projects/zombie-clicker/gallery/02.png", caption: "nearly impossible after 40 zombies" },
      { src: "assets/img/projects/zombie-clicker/gallery/03.png", caption: "rendering code" },
    ]
  }

};

---
title: Cosmic Cargo
description: A sophomore-year project combining custom engine programming and fun 2D gameplay.
author: Nathaniel Thoma
date: 2024-04-27 00:34:00 +0800
categories: [School Projects]
tags: [CPP, Custom Engine, OpenGL, Programming, Video Game, TortoiseSVN]
carousels:
  - images: 
    - image: /assets/img/cosmic-cargo-slider/img8.png
      caption: Title screen with cool black hole VFX
    - image: /assets/img/cosmic-cargo-slider/img1.png
      caption: Test scene where I was working on sprite animation
    - image: /assets/img/cosmic-cargo-slider/img7.png
      caption: Death screen with some cool VFX I worked on
    - image: /assets/img/cosmic-cargo-slider/img2.png
      caption: ImGui window interacting with my post processor in real-time
    - image: /assets/img/cosmic-cargo-slider/img6.png
      caption: Level select screen I implemented
    - image: /assets/img/cosmic-cargo-slider/img3.png
      caption: Broke my post processor
    - image: /assets/img/cosmic-cargo-slider/img4.png
      caption: Tutorial level
    - image: /assets/img/cosmic-cargo-slider/img5.png
      caption: Level complete scene
---

<iframe src="https://store.steampowered.com/widget/4056230/" frameborder="0" width="646" height="190"></iframe>

---

{% include embed/youtube.html id='NrGlFFcoZQ0' %}

## Overview
Cosmic Cargo is a space-themed game I worked on during my sophomore year with my team, Wormhole Wizards. We started out as an all-programmer team and built the game from scratch in a custom C++/OpenGL engine, later bringing on designers in the second semester. I mainly handled graphics programming with OpenGL, but I also jumped into gameplay programming and helped shape the overall feel of the game.

---

## Goals / Motivation
This project started as a school assignment, but our team also wanted to make something we’d be proud to show off later (something we could eventually even put on Steam). For me, it was a chance to dive deeper into C++ and get hands-on experience with building a custom engine. I learned a ton about OpenGL and GLSL shader programming, improved my teamwork and collaboration skills, and overall gained valuable experience in both graphics and gameplay programming while working on a full game.

---

![Desktop View](assets/img/opengl-logo.png){: width="972" height="589" .w-50 .right}
## Tools & Technologies
- Language(s): C++, GLSL
- Frameworks / Engines: Custom-built C++/OpenGL engine
- Other tools: TortoiseSVN, Visual Studio, Trello, Aseprite

---

## Process / Development
In the first semester, our design decisions came from team brainstorming sessions and frequent discussions with our professors. We used Trello to stay organized, and our teammate [Alex](https://www.linkedin.com/in/alexander-falkowski-11360078) acted as producer, keeping the team on track and making sure we hit our milestones. Any challenges or disputes were openly discussed until we reached a solution, and we submitted weekly work logs for feedback. We also held milestone meetings, planning sessions, and reflections to track progress and improve our workflow.

In the second semester, the process stayed largely the same, but we expanded the team by bringing in designers. This allowed us to refine the gameplay and visuals while maintaining the organization and collaboration practices we had already established.

![Desktop View](assets/img/cosmic-cargo-team.jpg)

[Sebastian](https://www.linkedin.com/in/sebastian-o-brian-81878b271/), [Lucas](https://www.linkedin.com/in/lucas-nakashita-650282171/), Cole, [Kevin](https://www.linkedin.com/in/kevinmasson/), [Me](https://www.linkedin.com/in/nthoma/), [Max](https://www.linkedin.com/in/max-ortman-b5805a194/), [Alex](https://www.linkedin.com/in/alexander-falkowski-11360078), [Michael](https://www.tk1t.gg/)

---

## Features
- **Custom 2D Engine**: Built from scratch in C++ and OpenGL, giving us full control over rendering and gameplay systems. Real-time JSON serial and deserialization.
- **Space-themed Gameplay**: Build and navigate ships, manage cargo, and tackle challenges in procedurally generated space environments. 
- **Polished Graphics**: Implemented shaders and custom rendering techniques to make the visuals pop in a 2D space setting.

---

## My Contributions
I played a key role in both the technical and creative aspects of Cosmic Cargo. All of the pixel art in the game is my work, and I also implemented many core systems, including the graphics system, background system, and in-game VFX. I created animations for passing levels, the level select screen, and helped set up our advanced particle system, which my teammate later optimized and expanded. I also worked on the engine early on, laying the foundation for the team to build and optimize it further.

---

## Results / Outcome
Cosmic Cargo ended up being a really solid sophomore year game. People loved playing it, and we were proud of how it turned out, especially considering that in the first semester, with no designers, it was more of a tech demo than a full game. After the second semester, the addition of designers helped us polish it into a proper game. ~~While it’s not on Steam yet, we’re working toward that.~~ (**EDIT:** It is now on Steam!) In class, we earned a passing grade with kudos from professors, who were impressed by the game’s performance. Apparently, we'd even broken their record for the number of particles rendered simultaneously (in the millions!) while maintaining a stable framerate.

---

![Desktop View](assets/img/mistake.png){: width="972" height="589" .w-50 .left}
## Lessons Learned
Cosmic Cargo was my first major C++ project and my first time really diving into OpenGL and GLSL, so I ran into a lot of challenges. Much of the graphics system ended up being a bit of a mess at first because I didn’t fully understand how everything worked: from the rendering pipeline to managing shaders to just using C++ in general. Thankfully, my [TA at the time](https://www.linkedin.com/in/justinli00) walked me through many of these concepts, helping me untangle the system and really learn how graphics engines function. Every mistake was a learning opportunity, and now I have a much deeper understanding of graphics programming, engine architecture, and shader work. If I could go back, I’d approach the engine and graphics system very differently with the knowledge I have now.

---

## Media

{% include carousel.html height="50" unit="%" duration="9999" number="1" %}
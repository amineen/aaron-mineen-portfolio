import React from "react";
import Reveal from "@/components/Reveal";
import Welcome from "@/components/Welcome";
import Intro from "@/components/Intro";
import Intro2 from "@/components/Intro2";

export default function Home() {
  return (
    <div className="bg-slate-600 text-slate-200">
      <Reveal>
        <Welcome />
      </Reveal>
      <Reveal>
        <Intro />
      </Reveal>
      <Reveal>
        <Intro2 />
      </Reveal>
    </div>
  );
}

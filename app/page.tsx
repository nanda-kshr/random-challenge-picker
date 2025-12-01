"use client";

import { useCallback, useEffect, useState } from "react";
import type { Challenge } from "../lib/challenges";
import { CHALLENGES } from "../lib/challenges";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center rc-bg-background font-sans">
      <main className="flex w-full flex-col items-center justify-start py-4 px-4 sm:px-8">
        <header className="flex w-full items-center justify-center pb-4">
          <h1 className="text-lg rc-header-title">Random Challenge Picker</h1>
        </header>

        <ChallengePicker />
      </main>
    </div>
  );
}

function ChallengePicker() {
  // Use challenges collection from constants
  const [challenges] = useState<Challenge[]>(CHALLENGES);
  const [current, setCurrent] = useState<Challenge | null>(null);
  // no accept/difficulty flows for minimal UI

  // Pick random challenge
  const pickRandom = useCallback(() => {
    if (!challenges.length) return;
    const idxA = Math.floor(Math.random() * challenges.length);
    const idxB = Math.floor(Math.random() * challenges.length);
    const idxC = Math.floor(Math.random() * challenges.length);
    const idxD = Math.floor(Math.random() * challenges.length);
    const idx = [idxA, idxB, idxC, idxD][Math.floor(Math.random() * 4)];
    setCurrent(challenges[idx]);
  }, [challenges]);

  // If none selected on mount, pick one
  useEffect(() => {
    if (!current) pickRandom();
  }, []);

  // Keyboard handler to pick random with Space (optional)
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        e.preventDefault();
        pickRandom();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [pickRandom]);

  // Save last and accepted to localStorage
  useEffect(() => {
    if (!current) return;
    try {
      localStorage.setItem("last-challenge", JSON.stringify(current));
    } catch (e) {
      // ignore
    }
  }, [current]);

  // No accepted items

  // Restore on mount
  useEffect(() => {
    try {
      const val = localStorage.getItem("last-challenge");
      if (val) {
        const parsed = JSON.parse(val) as Challenge;
        setCurrent(parsed);
      }
    } catch (e) {
      // ignore
    }
  }, []);

  // No accepted list to restore

  

  // no accept flow

  

  return (
    <div className="flex flex-col items-center gap-6">
          <div className="w-full flex justify-center">
          <div
            className={`relative rc-card-responsive transform overflow-hidden rounded-xl rc-card-border rc-card-bg p-6 text-center shadow-lg ${
              current ? "" : "opacity-50"
            }`}
          >

            <div className="flex h-full w-full flex-col items-center justify-center pb-16">
              <h3 className="text-lg rc-card-title">{current?.title}</h3>
              <p className="rc-card-desc">{current?.description}</p>
            </div>

            <div className="absolute left-1/2 bottom-4 transform -translate-x-1/2">
              <button
                className={`rc-btn rounded-md px-6 py-3 text-sm rc-bg-accent`}
                onClick={pickRandom}
              >
                Pick random
              </button>
            </div>

          </div>
        </div>
        
      </div>
  );
}

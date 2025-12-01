export type Challenge = {
  id: number;
  title: string;
  description?: string;
  difficulty?: "Easy" | "Medium" | "Hard";
};

export const CHALLENGES: Challenge[] = [
  { id: 1, title: "Describe the outside scenery in the most dramatic way possible for 30 seconds." },
  { id: 2, title: "Whisper a motivational speech to the friend sitting next to you." },
  { id: 3, title: "Pretend you're reviewing the train like a travel vlogger." },
  { id: 4, title: "Make up a fake 'fact' about every station you pass for the next 5 stations." },
  { id: 5, title: "Write a 10-word story about the trip and read it aloud." },
  { id: 6, title: "Ask a passenger (politely!) what their favorite snack is." },
  { id: 7, title: "Compliment a stranger's bag, jacket, or headphones." },
  { id: 8, title: "Freeze like a statue for 10 seconds when someone says your name." },
  { id: 9, title: "Take a group selfie but only the one person allowed to smile is you." },
  { id: 10, title: "Invent a short commercial for an imaginary snack and perform it." },
  { id: 13, title: "Tell a two-line spooky story to the person across (whisper)." },
  { id: 14, title: "Make up a quirky character living in the compartment and narrate their day." },
  { id: 15, title: "Teach the person next to you a tongue twister." },
  { id: 16, title: "Conduct an imaginary orchestra for 20 seconds to the rhythm of the rails." },
  { id: 22, title: "Invent a brief, friendly handshake with some stranger." },
  { id: 23, title: "Speak only in movie quotes for one minute." },
  { id: 26, title: "Share your funniest travel mishap." },
  { id: 27, title: "Recite a three-line poem about the rhythm of the rails." },
  { id: 28, title: "Describe the nearest building as if it were a secret palace." },
    { id: 30, title: "Count the next five stations and clap softly at each stop you pass." },
    { id: 31, title: "Describe your first crush and explain the moment you realized you liked them (do not use real names)." },
    { id: 33, title: "Tell the group about an awkward-but-funny thing you did because of a crush." },
    { id: 34, title: "Recreate your best 'butterflies' moment with a girl. for 2 minutes" },
    { id: 35, title: "Whisper a playful secret about your younger self" },

    { id: 36, title: "Play '20 Questions' with a fellow passenger about an everyday object." },
    { id: 37, title: "Draw a quick map of today's route and show it to someone nearby." },
    { id: 38, title: "Offer to trade a small object (a pen, sticker) for a short story." },
    { id: 39, title: "Teach someone a simple two-step dance and perform it together." },
    { id: 40, title: "Mime your favorite movie and have others guess the title." },
    { id: 41, title: "Compose and recite a train-themed haiku." },
    { id: 42, title: "Start a compliment chain: give three compliments in thirty seconds." },
    { id: 43, title: "Invent a playful backstory for a passenger and tell it aloud." },
    { id: 44, title: "Record a one-minute 'podcast intro' about today's journey." },
    { id: 45, title: "Find something blue and write a short poem about it." },
    { id: 46, title: "Count how many different languages you hear in five minutes." },
    { id: 47, title: "Lead a sixty-second breathing or relaxation exercise for the group." },
    { id: 48, title: "Whistle a song's chorus and encourage someone to finish the line." },
    { id: 49, title: "Describe an object using only sounds (no words)." },
    { id: 50, title: "Make a tiny paper fortune and gift it to a stranger with a smile." },
  ];


export default CHALLENGES;

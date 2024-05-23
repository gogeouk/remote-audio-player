import { getSoundById } from "./db.ts";
import { SoundPlayer } from "./SoundPlayer.ts";

// const sound = await getSoundById("collect-coins");

// console.log(`Playing ${sound.name}`);

// const player = new SoundPlayer();
// await player.play(`./audio/${sound.file}`);
// player.reportStatus();

Deno.serve({port: 9595},  async (req) => {
  const url = new URL(req.url);
  if (url.pathname.substring(0, 11) === "/playsound/") {
    const soundcode = url.pathname.substring(11);
    console.log(`playing sound ${soundcode}`);

    try {
      const sound = await getSoundById(soundcode);
      const player = new SoundPlayer();
      await player.play(`./audio/${sound.file}`);
      return new Response(`played sound ${sound.name}`);
    } catch {
      console.log("There was an error playing the sound");
      return new Response(`could not play sound`);
    }
    
  } else {
    return new Response("Ambient Audio is live!");
  }

  // console.log("Method:", req.method);

  // const url = new URL(req.url);
  // console.log("Path:", url.pathname);
  // console.log("Query parameters:", url.searchParams);

  // console.log("Headers:", req.headers);

  // if (req.body) {
  //   const body = await req.text();
  //   console.log("Body:", body);
  // }
  // return new Response("Hello, world", {
  //     status: 200,
  //     headers: {
  //       "content-type": "text/plain; charset=utf-8",
  //     },
  //   });

  
});
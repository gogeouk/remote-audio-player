import { getAllSounds, getSoundById } from "./utils/db.ts";
import { SoundPlayer } from "./utils/soundPlayer.ts";
import { RouteURL } from "./utils/routeUrl.ts";

Deno.serve({port: 9595},  async (req) => {
  const url = new RouteURL(req.url);

  if (url.startsWith('/list')) {
    const sounds = await getAllSounds();
    return new Response(JSON.stringify(sounds), {
      headers: {
         "content-type": "text/json; charset=utf-8",
       },
    })
  }

  if (url.startsWith("/playsound")) {
    const soundcode = url.part(1);
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
  } 
  
  // Nothing else returned;
  return new Response("Ambient Audio is live!");
});

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
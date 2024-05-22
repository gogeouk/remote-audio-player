import { getSoundById } from "./db.ts";
import { SoundPlayer } from "./SoundPlayer.ts";

const sound = await getSoundById("collect-coins");

console.log(`Playing ${sound.name}`);

const player = new SoundPlayer();
await player.play(`/home/lee/ambientaudio/${sound.file}`);
player.reportStatus();

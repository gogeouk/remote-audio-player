import { Sound } from "./SoundPlayer.ts";

export const kv = await Deno.openKv("./sounds.db");

export async function getSounds() {
	const sounds = [];
	const soundfiles = await kv.list({prefix: ["soundfiles"]});
	for await (const sound of soundfiles) {
		sounds.push(sound.value);
	}
	return sounds;
}

export async function getSoundById(id: string): Promise<Sound> {
	const sound = await kv.get(["soundfiles", id]);
	return sound.value as Sound;
}

export async function getRandomSound() {
	const sounds = await getSounds();
	return sounds[~~(Math.random() * sounds.length)];
}
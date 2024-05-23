import { kv } from "./utils/db.ts"

const sounds = [
	{
		id:   "aaron-mp3",
		name: "Aaron MP3",
		file: "aaron-is-a-drone.mp3"
	},
	{
		id:   "aaron-m4a",
		name: "Aaron M4A",
		file: "aaron-is-a-drone.m4a"
	},
	{
		id:   "aaron-ogg",
		name: "Aaron OGG",
		file: "aaron-is-a-drone.ogg"
	},
	{
		id:   "collect-coins",
		name: "Collect Coins",
		file: "collect-points-190037.mp3"
	},
	{
		id:   "in-the-mood",
		name: "In the Mood",
		file: "InTheMood.mp3"
	},
]

for (const sound of sounds) {
	await kv.set(["soundfiles", sound.id], sound);
}


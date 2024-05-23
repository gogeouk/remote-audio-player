const successCues = ["Starting playback"];
const errorCues = ["File not found", "Failed to open"];

export type Sound = {
	id: string;
	name: string;
	file: string;
}


export class SoundPlayer {
	private output?: Deno.CommandOutput;
	
	async play(filename: string) {
		const command = new Deno.Command("mplayer", {
			args: [filename]
		});
		this.output = await command.output();
	}
	
	reportStatus() {
		const decoder = new TextDecoder();
		const outString = decoder.decode(this.output?.stdout);
		const errString = decoder.decode(this.output?.stderr);

		successCues.forEach(cue => {
			if (outString.includes(cue)) {
				console.log("success");
			}
		})

		errorCues.forEach(cue => {
			if (errString.includes(cue)) {
				console.log("failed: ", cue);
			}
		})
	}	
}


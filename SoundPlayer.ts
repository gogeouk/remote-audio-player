const successCues = ["Starting playback"];
const errorCues = ["File not found", "Failed to open"];

export class SoundPlayer {
	private output = {stdout: "", stderr: "", code: undefined};
	
	async play(filename) {
		const command = new Deno.Command("mplayer", {
			args: [filename]
		});
		self.output = await command.output();
	}
	
	reportStatus() {
		const decoder = new TextDecoder();
		const outString = decoder.decode(self.output.stdout);
		const errString = decoder.decode(self.output.stderr);

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


Needs Raspberry Pi 3 or later flashed with Raspberry Pi OS 64 bit. (Used "bookworm" version for this guide.)

### Install

1. Install Deno (currently ``)
2. Install mplayer (`sudo apt install mplayer`)
3. Install git (`sudo apt install git`)

4. `git clone https://gitea.ontoast.uk/codetoastie/ambient-audio.git`
5. `cd ambient-audio`
6. `deno run --watch --allow-net --allow-write --allow-read --allow-run --unstable-kv server.ts`

### The server
The server will be running at `http://[server]:9595/`

To show all stored sounds as JSON, to to endpoint `/list/`

To play a particular sound, go to endpoint `/playsound/[id]/`

### To install as a service (which will auto-restart on boot)

1. Edit **ambient-audio.service** with correct username and script paths
2. Copy **ambient-audio.service** to systemd directory (`sudo cp ambient-audio.service /etc/systemd/system`)
3. Save and reload systemd (`sudo systemctl daemon-reload`)
4. Enable and restart the service:

        sudo systemctl enable ambient-audio.service
        sudo systemctl start ambient-audio.service

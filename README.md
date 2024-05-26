Needs Raspberry Pi 3 or later flashed with Raspberry Pi OS 64 bit. (Used "bookworm" version for this guide.)

### Install

1. Install Deno (currently `curl -fsSL https://deno.land/install.sh | sh`)
2. Install mplayer (`sudo apt install mplayer`)
3. Install git (`sudo apt install git`)

4. `git clone https://github.com/gogeouk/remote-audio-player.git`
5. `cd remote-audio-player`
6. `deno run --watch --allow-net --allow-write --allow-read --allow-run --unstable-kv server.ts`

### The server
The server will be running at `http://[server]:9595/`

To show all stored sounds as JSON, to to endpoint `/list/`

To play a particular sound, go to endpoint `/playsound/[id]/`

### To install as a service (which will auto-restart on boot)

1. Edit **remote-audio-player.service** with correct username and script paths
2. Copy **remote-audio-player.service** to systemd directory (`sudo cp remote-audio-player.service /etc/systemd/system`)
3. Save and reload systemd (`sudo systemctl daemon-reload`)
4. Enable and restart the service:

        sudo systemctl enable remote-audio-player.service
        sudo systemctl start remote-audio-player.service

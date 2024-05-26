Needs Raspberry Pi 3 or later flashed with Raspberry Pi OS 64 bit. (Used "bookworm" version for this guide.)

Install Deno
Install mplayer
Install git

git clone https://gitea.ontoast.uk/codetoastie/ambient-audio.git

deno run --watch --allow-net --allow-write --allow-read --allow-run --unstable-kv server.ts

http://[server]:9595/

/list/ (show all sounds as JSON)
/playsound/[id]/

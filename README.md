# dorker
A simple google dorker built in js

[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)

# Installation
```
git clone https://github.com/krishpranav/dorker
cd dorker
phantomjs dorker.js
```


# Usage

```
-d [dork]                   specify google dork
-D [dork_file]              specify google dorks
-s [site]                   set site name
-S [sites_file]             set sites filename
-f [filter]                 set custom filter
-t [msec]                   set timeout between query
-T [msec]                   set captcha retry timeout
```


# Examples
```
phantomjs dorker.js ghdb -q oracle -o oracle_dorks.txt
phantomjs dorker.js ghdb -c "vulnerable files" -o vuln_files.txt
phantomjs dorker.js ghdb -c 0 -o all_dorks.txt

phantomjs dorker.js google -d "mysql running.on" -S "sites.txt"
phantomjs dorker.js google -D vuln_servers.txt -f "inurl:com" -f "inurl:net"
```

Terminal Commands
=================


**find a process**

        ps -aef 


**search for string**

        grep node

**find a process called node**

        ps -aef | grep node
        pgrep node

**find a process named node and kill it**

        ps -aef | grep node
        kill -9 {pid}
        pkill node

**follow the tail/end of a text file:**

        tail -f {logfile}


**get help/manual for command:**

        man {command}

**run server in background**
        
        nohup node server.js &

**check what sudo permissions your user has:**

        sudo -l

example for running command as sudo:
        
        sudo pkill

**yum is the package manager for centOS**
        
        yum install {command}

example:

        yum install nginx


**start/stop nginx service**

        sudo service nginx {start/stop}


**put foreground process to sleep**

        CONTROL-Z

**wake up the last process you put to sleep**

        fg 

**show all sleeping processes**

        jobs

**emacs/vi editor**

        emacs/vi {file}
        
**detach the session and run in the background.**

        nohup node server.js &
        
**change the default pw through SSH**

        passwd {username}
        
**hide hidden files**

        defaults write com.apple.finder AppleShowAllFiles -bool {true/false}
        
**start a http server**

        python -m SimpleHTTPServer 3000
  
        






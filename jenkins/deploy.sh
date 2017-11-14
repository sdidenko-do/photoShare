#!/bin/bash
 ssh sergiy@107.170.228.60 <<EOF        
 cd ~/fulano/photoShare 
 git pull       
 npm install --production       
 pm2 restart all
 exit       
EOF

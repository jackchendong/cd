#!/bin/bash
# Script: /usr/local/cron/ssh_scan.sh
# Author cnscn <http://www.redlinux.org>
# Date: 2012-05-11
# ex： */10 * * * * /root/ssh_scan.sh  十分钟扫描一次 就永久屏蔽ip

export LC_ALL=UTC

#扫描10分钟内的登陆失败的IP
SCANNER=$( tm=$(date -d '10 minutes ago' +"%h %d %H") && \
             awk -v tm="$tm" ' $0 ~ tm &&  /Failed password/ && /ssh2/ { print $(NF-3) ; } ' /var/log/secure \
           | sort \
           | uniq -c \
           | awk '{print $1"="$2;}' \
        )

for i in $SCANNER
do
    #截取IP与数量
     IP=`echo $i|awk -F= '{print $2}'`
    NUM=`echo $i|awk -F= '{print $1}'`

    #数量大于8次，则使用iptables禁止IP
    if [ $NUM -gt 8 ]
    then
        iptables -vnL | grep DROP | grep $IP &>/dev/null
        [ $? -eq 0 ] || /sbin/iptables -I INPUT -s $IP -j DROP
        echo "`date` $IP($NUM)" >> /var/log/scanner.log
    fi
done
#End of Script
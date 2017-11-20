#清楚默认规则
iptables -F 
iptables -X
iptables -Z
iptables -t nat -F
iptables -t nat -X
iptables -t nat -Z

#filter表的默认规则
iptables -P INPUT DROP
iptables -P OUTPUT ACCEPT
iptables -P FORWARD DROP


#INPUT链的基本规则
iptables -A INPUT -m state --state RELATED,ESTABLISHED -j ACCEPT
iptables -A INPUT -m state --state INVALID -j ACCEPT
iptables -A INPUT -i lo -j ACCEPT


#FORWARD基本规则
iptables -A FORWARD -m state --state RELATED,ESTABLISHED -j ACCEPT
iptables -A FORWARD -m state --state INVALID -j ACCEPT



#sshd
iptables -A INPUT -p tcp  --dport 22 -j ACCEPT
iptables -A INPUT -p udp  --dport 22 -j ACCEPT


#nginx 或 apache
iptables -A INPUT -p tcp  --dport 80 -j ACCEPT
iptables -A INPUT -p udp  --dport 80 -j ACCEPT

#mongodb
#iptables -A INPUT -p tcp  --dport 27017 -j ACCEPT
#iptables -A INPUT -p udp  --dport 27017 -j ACCEPT
#iptables -A INPUT -p tcp  --dport 28017 -j ACCEPT
#iptables -A INPUT -p udp  --dport 28017 -j ACCEPT

#443端口
iptables -A INPUT -p tcp  --dport 443 -j ACCEPT
iptables -A INPUT -p udp  --dport 443 -j ACCEPT

#mysql
#iptables -A INPUT -p tcp --dport 3306 -j ACCEPT
#nginx
#iptables -A INPUT -p tcp  --dport 8000 -j ACCEPT
#iptables -A INPUT -p udp  --dport 8000 -j ACCEPT
#/usr/libexec/iptables/iptables.init save 
service iptables save
systemctl restart iptables 


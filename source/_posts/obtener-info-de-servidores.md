title: Herramientas básicas para obtener información de servidores
date: 2015-09-22 13:30:19
author: agodin3z
tags: [hacking, moochackingmu, linux]
cover: https://lh3.googleusercontent.com/-OsAVL_UZGwM/VgGuHqoysjI/AAAAAAAAAmw/GLyl0snDdCc/s912-Ic42/banner-1-1.jpg
---


## ¿Cómo obtener información de un servidor? ##

Para obtener la información un servidor es necesario usar algunas herramientas, algunas de ellas son: el programa **ping**, el protocolo **whois** y la herramienta **nmap**. A continuación se dará una breve explicación de como usar estas tres herramientas.

<!-- more -->

### ping
Es una herramienta que suele venir preinstalada en todos los sistemas operativos modernos, su objetivo es determinar si un host (identificado por una determinada IP) es accesible desde otro host.

#### **¿Cómo usar esta herramienta?**

* ***GNU/Linux y MacOS:***

Para usarla sólo basta con abrir una terminal y empezar a escribir lo siguiente:

```bash
 $ ping -c 4 andresgodinez.me

 PING andresgodinez.me (192.30.252.153) 56(84) bytes of data.
 64 bytes from pages.github.com (192.30.252.153): icmp_seq=1 ttl=43 time=133 ms
 64 bytes from pages.github.com (192.30.252.153): icmp_seq=2 ttl=43 time=130 ms
 64 bytes from pages.github.com (192.30.252.153): icmp_seq=3 ttl=43 time=133 ms
 64 bytes from pages.github.com (192.30.252.153): icmp_seq=4 ttl=43 time=136 ms

 --- andresgodinez.me ping statistics ---
 4 packets transmitted, 4 received, 0% packet loss, time 3004ms
 rtt min/avg/max/mdev = 130.582/133.375/136.498/2.133 ms
```

Donde la opción `-c num` es usada para limitar la cantidad de paquetes que se enviarán al servidor de destino (en este caso se enviarían 4 paquetes).

>Además puedes acceder a la documentación de la herramienta escribiendo `man ping` en la terminal.

* ***Windows:***

Ejecutamos la `cmd` y escribimos:

```bat
C:\> ping -n 4 andresgodinez.me

PING andresgodinez.me (192.30.252.153) 56(84) bytes of data.
64 bytes from pages.github.com (192.30.252.153): icmp_seq=1 ttl=43 time=133 ms
64 bytes from pages.github.com (192.30.252.153): icmp_seq=2 ttl=43 time=130 ms
64 bytes from pages.github.com (192.30.252.153): icmp_seq=3 ttl=43 time=133 ms
64 bytes from pages.github.com (192.30.252.153): icmp_seq=4 ttl=43 time=136 ms

--- andresgodinez.me ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3004ms
rtt min/avg/max/mdev = 130.582/133.375/136.498/2.133 ms

```

Donde la opción `-n num` es usado para limitar la cantidad de paquetes que se enviarán al servidor de destino (en este caso se enviarían 4 paquetes).

> La documentación para el uso de esta herramienta en Windows la puedes encontrar [aquí](https://technet.microsoft.com/es-es/library/cc732509%28v=ws.10%29.aspx).

### whois

En entornos GNU/Linux y MacOS, esta herramienta ya viene preinstalada, caso contrario es en Windows, por lo que tienes que descargarlo [aquí](https://technet.microsoft.com/en-us/sysinternals/bb897435.aspx) o sino usar una versión online como [ésta](http://whois.domaintools.com/).

Esta herramienta es un protocolo TCP basado en petición/respuesta que se utiliza para efectuar consultas en una base de datos que permite obtener información sobre el propietario de un nombre de dominio o una dirección IP en Internet.

#### **¿Cómo usar esta herramienta?**

* ***GNU/Linux y MacOS:***

Abrimos una terminal y escribimos:

```bash
$ whois www.andresgodinez.me

Domain ID:D15706293-ME
Domain Name:ANDRESGODINEZ.ME
Domain Create Date:06-Apr-2015 00:31:55 UTC
Domain Last Updated Date:03-Aug-2015 15:45:25 UTC
Domain Expiration Date:06-Apr-2016 00:31:55 UTC
Last Transferred Date:
Sponsoring Registrar:NameCheap R216-ME (1068)
Created by:NameCheap R216-ME (1068)
Last Updated by Registrar:NameCheap R216-ME (1068)
Domain Status:CLIENT TRANSFER PROHIBITED
Registrant ID:KO4IVZ2K2AJO3T5N
Registrant Name:WhoisGuard Protected
Registrant Organization:WhoisGuard, Inc.
Registrant Address:P.O. Box 0823-03411
Registrant Address2:
Registrant Address3:
Registrant City:Panama
Registrant State/Province:Panama
Registrant Country/Economy:PA
Registrant Postal Code:00000
Registrant Phone:+507.8365503
Registrant Phone Ext.:
Registrant FAX:+51.17057182
Registrant FAX Ext.:
Registrant E-mail:b558bd17f41b415b9cef2e5fe58ed4c7.protect@whoisguard.com
Admin ID:0GGPXFBSAIUYOUIY
Admin Name:WhoisGuard Protected
Admin Organization:WhoisGuard, Inc.
Admin Address:P.O. Box 0823-03411
Admin Address2:
Admin Address3:
Admin City:Panama
Admin State/Province:Panama
Admin Country/Economy:PA
Admin Postal Code:00000
Admin Phone:+507.8365503
Admin Phone Ext.:
Admin FAX:+51.17057182
Admin FAX Ext.:
Admin E-mail:b558bd17f41b415b9cef2e5fe58ed4c7.protect@whoisguard.com
Tech ID:SLVLWVCN1EQKI4XE
Tech Name:WhoisGuard Protected
Tech Organization:WhoisGuard, Inc.
Tech Address:P.O. Box 0823-03411
Tech Address2:
Tech Address3:
Tech City:Panama
Tech State/Province:Panama
Tech Country/Economy:PA
Tech Postal Code:00000
Tech Phone:+507.8365503
Tech Phone Ext.:
Tech FAX:+51.17057182
Tech FAX Ext.:
Tech E-mail:b558bd17f41b415b9cef2e5fe58ed4c7.protect@whoisguard.com
Nameservers:DNS1.REGISTRAR-SERVERS.COM
Nameservers:DNS2.REGISTRAR-SERVERS.COM
Nameservers:DNS3.REGISTRAR-SERVERS.COM
Nameservers:DNS4.REGISTRAR-SERVERS.COM
Nameservers:DNS5.REGISTRAR-SERVERS.COM
Nameservers:
Nameservers:
Nameservers:
Nameservers:
Nameservers:
Nameservers:
Nameservers:
Nameservers:
DNSSEC:Unsigned
```
> Puedes acceder a su documentación escribiendo `man whois` en la terminal.

* ***Windows:***

Utilizando una versión online, en éste caso accesamos a la página de [Whois de DomainTools](http://whois.domaintools.com/) y escribimos la dirección web o la IP del servidor del que queremos consultar su información.

![whois-index](https://lh3.googleusercontent.com/-XyZ0aaDtE2k/VgIJ7TLPrJI/AAAAAAAAAnU/T7MsuXgXwuI/s912-Ic42/whois-1-1.png)

El resultado es el siguiente, en la parte izquierda veremos la información del propietario del dominio o del servidor que hemos consultado y en la parte izquierda estan otras herramientas como para ver el historial de propietarios del dominio, el historial de hosting en que ha estado el dominio, entre otras más.

![whois-info](https://lh3.googleusercontent.com/-jb8SdpzndI4/VgIJ5Nyzw-I/AAAAAAAAAnM/WrLYOF-Ze0c/s912-Ic42/whois-1-2.png)

### Nmap

Es una herramienta de código abierto para exploración de redes y auditoría de seguridad. Se utiliza para determinar qué equipos se encuentran disponibles en una red, conocer los puertos que están abiertos en un servidor, el sistema operativo y las aplicaciones que están corriendo en él, qué tipo de filtros de paquetes o cortafuegos se están utilizando, entre muchas otras características.

#### **Instalación**

* ***MacOS:***

Utilizando el gestor de paquetes Homebrew:

```bash
$ brew install nmap
```

* ***GNU/Linux:***

Utilizando el gestor de paquetes por defecto del sistema:

```bash
// Debian, Ubuntu y derivados
$ sudo apt-get install nmap

// RedHat, Fedora y derivados
$ sudo yum install nmap

// ArchLinux y derivados
$ sudo pacman -S nmap
```

* ***Windows:***
 Descargando el instalador desde el [portal de descargas de nmap](https://nmap.org/download.html).

 > Durante el proceso de instalación, debes seleccionar instalar WinPcap.
 >
 > Además, antes de ejecutar el comando `nmap` deberás estar ubicado (por línea de comandos) en el directorio donde fue instalado (donde se encuentre el nmap.exe)
 >
> Tambien cuenta con una interfáz gráfica llamada "Zenmap", puedes encontrar más información [aquí](https://nmap.org/zenmap/).


 #### **Usos básicos**


 * **Escaneo de puertos**
 Hace una verificación por medio de intentos de conexión y dependiendo de la repuesta que le muestre cada puerto, dice si está habilitado o inhabilitado.

```bash
 $ nmap 192.168.1.1

 Starting Nmap 6.47 ( http://nmap.org ) at 2015-09-22 19:54 CST
 Nmap scan report for 192.168.1.1
 Host is up (0.034s latency).
 Not shown: 996 closed ports
 PORT   STATE SERVICE
 21/tcp open  ftp
 22/tcp open  ssh
 23/tcp open  telnet
 80/tcp open  http

 Nmap done: 1 IP address (1 host up) scanned in 2.25 seconds
```


 * **Escaneo en modo oculto**
 Para hacer un escaneo sin dejar huellas de la ip, usando TCP SYN.

```bash
 # nmap -sS 192.168.1.1

 Starting Nmap 6.47 ( http://nmap.org ) at 2015-09-22 19:55 CST
 Nmap scan report for 192.168.1.1
 Host is up (0.12s latency).
 Not shown: 996 closed ports
 PORT   STATE SERVICE
 21/tcp open  ftp
 22/tcp open  ssh
 23/tcp open  telnet
 80/tcp open  http
 MAC Address: 64:68:0C:77:FE:C3 (Comtrend)

 Nmap done: 1 IP address (1 host up) scanned in 2.31 seconds
```
 > Este escaneo requiere de privilegios de root para ejecutarse.

 * **Escaneo con ping**
 Esto escaneará las 255 direcciones de la IP que queramos, la opción `-sP` indica que será un escaneo mediante ping. Si el destino contesta con otro ping o con un paquete TCP RST significa que está operativo.

```bash
 $ nmap -sP 192.168.1.0/24

Starting Nmap 6.47 ( http://nmap.org ) at 2015-09-22 19:56 CST
Nmap scan report for 192.168.1.1
Host is up (0.0086s latency).
Nmap scan report for 192.168.1.3
Host is up (0.00018s latency).
Nmap scan report for 192.168.1.6
Host is up (0.032s latency).
Nmap done: 256 IP addresses (3 hosts up) scanned in 5.32 seconds
```


 * **Escaneo para determinar el sistema operativo**
 Este escaneo usa las pequeñas diferencias en la implementacion de los protocolos para determinar el sistema operativo del host que se está escaneando.

```bash
 # nmap -O 192.168.1.1

 Starting Nmap 6.47 ( http://nmap.org ) at 2015-09-22 19:57 CST
 Nmap scan report for 192.168.1.1
 Host is up (0.0072s latency).
 Not shown: 996 closed ports
 PORT   STATE SERVICE
 21/tcp open  ftp
 22/tcp open  ssh
 23/tcp open  telnet
 80/tcp open  http
 MAC Address: 64:68:0C:77:FE:C3 (Comtrend)
 Device type: general purpose
 Running: Linux 2.6.X
 OS CPE: cpe:/o:linux:linux_kernel:2.6
 OS details: Linux 2.6.13 - 2.6.32
 Network Distance: 1 hop

 OS detection performed. Please report any incorrect results at http://nmap.org/submit/ .
 Nmap done: 1 IP address (1 host up) scanned in 4.53 seconds
```
 > Este escaneo requiere de privilegios de root para ejecutarse.


 * **Escaneo de servicios de puertos que estan habilitados**
 Escribiendo la opción `-sV` podemos habilitar el escaneo de puertos abiertos.

```bash
 $ nmap -sV 192.168.1.1

Starting Nmap 6.47 ( http://nmap.org ) at 2015-09-22 19:59 CST
Nmap scan report for 192.168.1.1
Host is up (0.033s latency).
Not shown: 996 closed ports
PORT   STATE SERVICE    VERSION
21/tcp open  ftp
22/tcp open  tcpwrapped
23/tcp open  tcpwrapped
80/tcp open  tcpwrapped

Service detection performed. Please report any incorrect results at http://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 13.64 second
```
> Para más información sobre nmap, puedes consultar su documentación escribiendo `man nmap` en la terminal o ingresando a su [Página de manual](https://nmap.org/man/es/).

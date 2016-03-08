###Configuration of MongoDB on Raspberry Pi 2

**Install Docker on Raspberry Pi 2**

$ curl -sSL http://downloads.hypriot.com/docker-hypriot_1.8.2-1_armhf.deb >/tmp/docker-hypriot_1.8.2-1_armhf.deb

$ sudo dpkg -i /tmp/docker-hypriot_1.8.2-1_armhf.deb

$ rm -f /tmp/docker-hypriot_1.8.2-1_armhf.deb

$ sudo sh -c 'usermod -aG docker $SUDO_USER'

$ sudo systemctl enable docker.service

**Build MongoDB Images**

continue...

------

Ref. Links:

- [Docker Installation on Raspberry Pi](https://github.com/umiddelb/armhf/wiki/Get-Docker-up-and-running-on-the-RaspberryPi-%28ARMv6%29-in-three-steps)
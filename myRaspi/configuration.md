###Configuration of MongoDB on Raspberry Pi 2

**Install Docker on Raspberry Pi 2**

$ cd /PATH_TO_YOUR_RASPBERRY_PI_PRJ

$ curl -sSL http://downloads.hypriot.com/docker-hypriot_1.8.2-1_armhf.deb >/tmp/docker-hypriot_1.8.2-1_armhf.deb

$ sudo dpkg -i /tmp/docker-hypriot_1.8.2-1_armhf.deb

$ rm -f /tmp/docker-hypriot_1.8.2-1_armhf.deb

$ sudo sh -c 'usermod -aG docker $SUDO_USER'

$ sudo systemctl enable docker.service

**Build MongoDB Images**

Take a look at the configuration.md under different folders for reference.

------

Ref. Links:

- [Docker Installation on Raspberry Pi](https://github.com/umiddelb/armhf/wiki/Get-Docker-up-and-running-on-the-RaspberryPi-%28ARMv6%29-in-three-steps)

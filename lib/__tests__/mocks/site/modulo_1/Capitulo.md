# Otto DIY


**Background information:**

Otto is truly Opensource; it means the hardware is easily discerned so that others can make it, is also Arduino compatible, 3D printable and customizable, the perfect opportunity to build and have your very first robot, learn robotics and have fun, you will learn the logical connection between code and action, and by assembling it, you will understand how its components and electronics work.

visit www.ottodiy.com for more detailed info.

### **Build Your Own Robot**[](https://docs.google.com/presentation/d/1SrlUREWKDYUIi2Riy9XX7KEzB7MnS0AgW7JPXjC0_Hc/edit?usp=sharing)

[For Starters read this guide! click here](https://docs.google.com/presentation/d/1SrlUREWKDYUIi2Riy9XX7KEzB7MnS0AgW7JPXjC0_Hc/edit?usp=sharing)

![image](https://wikifactory.com/files/RmlsZTo0MjM2OTc=)

## How it Works
















































@[youtube](https://youtube.com/embed/VD6sgTo6NOY)

â€‹

### Otto walks, dances, makes sounds and avoids obstacles, easy to program and expand or customize by your own.

![undefined](https://alpha.wikifactory.com/files/RmlsZTo0NDg5)

â€‹

â€‹
















































## Part List

### Otto DIY can be made with [Builder Kit \(full with 3D printed parts\)](https://www.ottodiy.com/store#!/Otto-DIY-builder-kit/p/135022769/category=0) and [Maker Kit \(only electronics\)](https://www.ottodiy.com/store#!/Otto-DIY-maker-kit/p/135022782/category=0) or create your own project with this open source content.

Here there is a list of the materials you will need to build Otto.

![image](https://wikifactory.com/files/RmlsZToyMDY4NDY%3D)

* 1 x Nano ATmega328
* 1 x Nano I/O shield
* 1 x USB-A to Mini-USB Cable
* 1 x Ultrasound sensor HC-SR04
* 4 x Micro servo SG90 9g
* 1 x Buzzer
* 6 x Female/Female Dupont Wires
* 1 x AA battery holder
* 4 x AA Batteries Alkaline \(must be new or have 1.5V each\)
* 1 x Micro Switch Self lock On/Off 8x8mm
* extra screws
* ### M**ake it** [**rechargeable and better performance with this power boost module**](https://www.ottodiy.com/store#!/battery-charger-power-booster-with-switch/p/185515272/category=0)

[View OttoDIY_head_V10.stl @ Wikifactory](https://wikifactory.com/+OttoDIY/otto-diy/file/3Dprint/OttoDIY_head_V10.stl)

[View OttoDIY_body_V10.stl @ Wikifactory](https://wikifactory.com/+OttoDIY/otto-diy/file/3Dprint/OttoDIY_body_V10.stl)

[View OttoDIY_leg_V10.stl @ Wikifactory](https://wikifactory.com/+OttoDIY/otto-diy/file/3Dprint/OttoDIY_leg_V10.stl)

**x2**

[View OttoDIY_foot_V10.stl @ Wikifactory](https://wikifactory.com/+OttoDIY/otto-diy/file/3Dprint/OttoDIY_foot_V10.stl)

**x2**

â€‹

**Tools:**

* Small Phillips screwdriver.
* Computer.
* Scissors or pliers.

## 3D Printing


























If you bought a **Builder kit** you can skip ahead but if you have the **Maker kit** you have to[ 3D print the parts ](https://wikifactory.com/+OttoDIY/otto-diy/files/3Dprint)but Otto is very well designed for 3D printing, so wont give you trouble if you follow this common parameters:

* Recommended to use a FDM 3D printer with PLA material.
* No need supports or rafts.
* Resolution: 0.20mm
* Fill density 20%

â€‹

All parts in total use 115gr aprox. equivalent to 14.5m of regular PLA 1.75mm thickness, it should take around **8 hours to 3D print** a full set of parts for one Otto even less with a proper 3D printer and optimized settings.


























## Software

### For **beginners it** is recommended to start coding by using our new Blockly a simple visual programming software:

Otto Blockly is completely autonomous \(no need for Arduino IDE, or libraries setup and no Internet access is required\).

![image](https://wikifactory.com/files/RmlsZToyODQ0MjU=)

1. Download [](http://www.mblock.cc/mblock-software/)from our website here \(https://www.ottodiy.com/#blockly\)
2. Install OttoBlockly.
3. Open an example.
4. Connect your Otto robot.
5. Make sure is in Arduino nano\*, **USB port where Otto is connected.**
6. Upload and yes is that easy!

if does not upload successufully try chossing "Arduino Nano Old bootloader" instead

@[youtube](https://youtube.com/embed/chcWxh4Co_c)

**If your computer did not recognize the USB device you should install the driver CH340 for your Operative System find it here:** [https://sparks.gogo.co.nz/ch340.html](https://sparks.gogo.co.nz/ch340.html)

â€‹

Play with the examples and start mixing blocks in multiple ways to decide the behaviour of your robot and generate your own codes.

[View OttoBlocklyguide.pdf @ Wikifactory](https://wikifactory.com/+OttoDIY/otto-diy/file/Instruction%20manual/OttoBlocklyguide.pdf)

â€‹

An updated guide of this .pdf is [in google drive for you to adapt or add new content!](https://docs.google.com/presentation/d/1jh1YUd1DXlZO7h1t5rbZ6TVFUV2EXkUZw6Xn3NSr9KY/edit?usp=sharing)

Learn more about [Otto Blockly in our video tutorials here](https://www.youtube.com/watch?v=chcWxh4Co_c&list=PLM8mB7UZ2USdlarFKv-UfXQbgmiuqSqAN)

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

â€‹

### For **more advanced** Arduino programming.

### It will allow you to really exploit the potential of your robot, you will be able to try many example codes \(sketchs\) that you can just simply upload and modify them for your own programs.

1. Download [Arduino IDE software for free here](https://www.arduino.cc/en/Main/Software)
2. Install Arduino IDE software in you computer.
3. Download the Otto libraries that are here [https://wikifactory.com/+OttoDIY/otto-diy/file/OttoDIYLibV9.zip](https://wikifactory.com/+OttoDIY/otto-diy/file/OttoDIYLibV9.zip)
4. Open Arduino IDE, navigate to Sketch &gt; Include Library &gt; Add .ZIP Library. At the top of the drop down list, select the option to "Add .ZIP Library''.
5. You will be prompted to select the library. Navigate to the .zip file's location, that you just downloaded and open as it is.
6. Return to the Sketch &gt; Include Library menu. menu. You should now see the library at the bottom of the drop-down menu. That means is ready to use Ottos codes!
7. Connect your Otto through USB.
8. Select in Arduino Tools/
   Board:            â€œArduino Nanoâ€
   Processor:     â€œATmega328 \(Old bootloader\)"
   Port COM\# \(where your Otto is connected\)\*
9. Open in File/Examples/OttoDIYLib/dance/Otto\_allmoves\_V9.ino
10. Check/Upload the code and your Otto will move!

\* make sure the driver CH340 was installed in your computer by checking is visible in  COM\# **If your computer did not recognize the USB device you should install the driver CH340, depending on your Operative System find it here:** [https://sparks.gogo.co.nz/ch340.html](https://sparks.gogo.co.nz/ch340.html)

## Electronics
















### **Before inserting the AA batteries you should check your connections and test your robot with the USB cable connected to a computer.**

As a good practice you should check your electronics and software in your computer, before assembling all the robot, this avoid having to disassemble the whole robot to fix something. You can do this by just connecting all the servos, in the place indincated in the wring below **and upload any code** that makes Otto move with Otto Blockly or Arduino.

![image](https://wikifactory.com/files/RmlsZToyODQ0Mjg=)

â€‹

â€‹

If you feel ready for Batteries you can also check if your power source works, depending of the type of cells you have there can be 2 options:

![image](https://wikifactory.com/files/RmlsZToyODQ0MjY=)

![image](https://wikifactory.com/files/RmlsZToyODQ0Mjc=)

â€‹

There are actually plenty options to power your Otto robot in multiple ways, we explore in more detail in this blog post article: https://www.ottodiy.com/blog/power
















## Assembly Instructions

Gather all the off the shelf hardware parts that you'll need for this assembly, or start with our full kits which come with all parts needed. Kits are available from our website www.ottodiy.com

â€‹

Before getting started with the assembly, download and read carefully this [PDF from the instruction manuals files tab folder.](https://wikifactory.com/+OttoDIY/otto-diy/files/Instruction%20manual)

[View OttoDIY_Manual_V9.pdf @ Wikifactory](https://wikifactory.com/+OttoDIY/otto-diy/file/Instruction%20manual/OttoDIY_Manual_V9.pdf)

â€‹

If you do not understand something in the manual you can just refer to this video that shows how to build Otto.

@[youtube](https://youtube.com/embed/34v7R0FrSNE)

â€‹

If you see some missaligment in the movements, double check that you centered the legs and feet repect to your servos before fixing with the short screw, then it should work ok, but if you want more precise walk and movements, then you can do some electronic calibration as we explain in detail in this blog article: https://www.ottodiy.com/blog/calibration

## Customize

Download, print, cut and make papercrafts of Otto to personalize your robot.

[https://wikifactory.com/+OttoDIY/otto-diy/files/Papercraft](https://wikifactory.com/+OttoDIY/otto-diy/files/Papercraft)

[View OttoDIY_papercraft_milky_A4.png @ Wikifactory](https://wikifactory.com/+OttoDIY/otto-diy/file/Papercraft/OttoDIY_papercraft_milky_A4.png)

Or if you wanna learn 3D modeling Otto is design using [TinkerCAD ](https://www.tinkercad.com/users/h8O1zJQboeH-camilo-parra-palacio)a FREE 3D modeling online software! , you can modify Otto parts for further improvements or create new accessories for new features.

[View OttoDIY_v09.step @ Wikifactory](https://wikifactory.com/+OttoDIY/otto-diy/file/CAD/OttoDIY_v09.step)

![image](https://wikifactory.com/files/RmlsZToyNDE2NzM%3D)

Read this blog post to learn more options of how to redesign your own robot [https://www.ottodiy.com/blog/design](https://www.ottodiy.com/blog/design)

â€‹

Then do not forget to submit your robot creation here! https://wikifactory.com/new-project

## Join the Otto Builder community!



























Follow us, subscribe, give us a like and share your creativity.

â€‹

1. [Join us here in Wikifactory](https://wikifactory.com/invite/SW52aXRlTGluazo3Ng/ZzHGYHg9oAwik0u-vJrz-x0fsEWrONV54SaYpNx9t1A) [](https://www.youtube.com/c/ottodiy?sub_confirmation=1)& check our [Forum](https://wikifactory.com/+OttoDIY/forum) for questions.
2. [Group in Facebook](https://www.facebook.com/groups/ottodiy/). to share and ask for help in the community and like our [Facebook page](https://www.facebook.com/ottodiy/)
3. [Join the community on Discord chat server! ](https://discord.gg/CZZytnw)
4. [YouTube channel](https://www.youtube.com/c/ottodiy?sub_confirmation=1) for more how to videos and tutorials.
5. [Instagram](https://www.instagram.com/ottodiy/) follow us and share \#ottodiy
6. [Twitter](https://twitter.com/ottodiy) follow us and share \#ottodiy
7. [Give us some feedback please and Fill our new development survey!](https://forms.gle/ZzJUGfxbXbbv2yd5A)

Be a part of this friendly community of robot builders, teachers and makers!

Welcome to our Otto Builder community!



























## How to contribute?
















* [New Remixes or designs ](https://wikifactory.com/+OttoDIY/projects)of similar robots you can just upload here into Wikifactory as Otto DIY projects [submit any creation you have made here](https://wikifactory.com/new-project) they help show the project possibilities, reach and community collaboration.
* Educational content, PPTs. guides, tutorials of all kinds to [add into the openEDU project](https://wikifactory.com/+OttoDIY/open-edu)
* We need more language [translations for our Otto Blockly](https://github.com/OttoDIY/blockly) with this more people around the world will learn programming and you can code in your own language.
* In the same repository you can help us report issues or solve them or pull request other improvements.
* Ideas or [improvements for our mobile App!](https://github.com/OttoDIY/OttoDIYApp)

â€‹

If you find trouble in these platform you can just send us the files we will upload for you and give the appropriate credits to you.

â€‹

Happy to have you as a part ofÂ the Otto Community :\) and thanks!
















## Next Steps




Congratulations you have made probably your very first robot! or at least your first Otto :D

â€‹

Learn more about coding, electronics , design, 3Dprinting  and robotics in general [in our Open EDU \(Open Education\) program here](https://wikifactory.com/+OttoDIY/open-edu)

â€‹

After that is time to [add a Bluetooth module](https://www.ottodiy.com/store#!/Bluetooth-module-BLE/p/167767133/category=0) to play and[ learn coding with the mobile APP](https://www.ottodiy.com/#app), alternately you can upgrade your Otto with[ more sensors](https://www.ottodiy.com/store#!/c/0/offset=9&sort=normal).

â€‹

[Follow the instructions here for Otto DIY+ in the Bluetooth section](https://wikifactory.com/+OttoDIY/otto-diy-plus).

â€‹

See you there!




## Licenses
























Our software and code are licensed with [GNU General Public License v3.0 ](https://www.gnu.org/licenses/gpl-3.0.en.html)

Our hardware and 3D prints are licensed with [CERN OHL V2](https://ohwr.org/cernohl)

Our documenation is licensed with [Creative Commons Attribution-ShareAlike 4.0 International License.](https://creativecommons.org/licenses/by-sa/4.0/)

CC-BY-SA

â€‹

To make it simple ALWAYS mention www.ottodiy.com in any redistribution and let us know in advance your plans, we will help you. If you receive something for free give it for free too, so you should publish your changes or imporvements as open source as well.

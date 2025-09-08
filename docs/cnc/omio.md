---
sidebar_position: 1
---
# Omio X6-2200 CNC

![Omio X6-2200 CNC Machine](/img/omio-x6-2200-cnc.jpg)

The is a desktop portable CNC that is capable of doing Wood and Metal work.I started my work on the CNC in January 2024 during the interim. At the time, I figured out how to do simple things like jogging the CNC (moving) and also running simple G-Codes that would make patterns on wood. There was still a lot to learn, as I had only touched the surface of operating the CNC.

## CAM

CAM is the equivalent of CAD for CNC. It makes instructions for the CNC to follow while cutting, and also allows you to do many more things, such as making scheduled stops and setting up for bit swapping. A few CAM options are listed below:

| Vendor | Software | Free? |
|--------|----------|-------|
| AutoDesk | Inventor CAM | For Students |
| Dassault Systèmes | Solidworks HSM CAM | For Students |


### Inventor CAM

![Inventor CAM Interface](/img/inventor-cam-screenshot.jpg)

:::note
I would recommend using Inventor CAM, as I have found fewer problems with using it, and this document will only showcase the use of Inventor, but SolidWorks has a similar workflow compared to Inventor and can also be used.
:::

## G-Code

G-Code is what CAM programs such as Inventor and Solidworks generate and has the instructions for the CNC to use. Usually, these programs generate a .tap file, which can be opened in CNC control software such as Mach3.
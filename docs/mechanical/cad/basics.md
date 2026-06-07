---
sidebar_position: 1
---

# CAD Basics

Welcome to the CAD basics! Here we have some basic terminology, shortcuts, and useful plug-ins that you can use to get started with FTC CAD.

### &&Defining Sketches, Overdefinition and Assemblies&&

When you draw lines and circles in CAD, the software doesn't automatically know how big they are or where they belong in space. **&&Defining&&** a sketch means adding dimensions (measurements) and constraints (rules like making two lines parallel or a circle tangent to a line) so that your drawing is locked into place. 

If you leave a sketch **&&underdefined&&**, you can still click and drag the lines around. In Onshape, underdefined sketch lines are colored blue. While this is fine when you're just brainstorming, leaving sketches underdefined in your final robot design can mess up the geometry of your entire robot.

The goal is to **&&fully define&&** your sketch. This happens when you've provided exactly enough dimensions and constraints so that nothing can move. Once a sketch is fully defined, Onshape turns the lines black. This gives you confidence that your part won't accidentally change shape later on.

However, you can also go too far and **&&overdefine&&** a sketch. This happens when you give the software conflicting rules—like telling a triangle it has three 90-degree angles, or trying to dimension a line that is already locked in place by other constraints. When you overdefine a sketch, Onshape gets confused and will usually highlight the conflicting lines or constraints in red. To fix it, you just need to delete the extra dimensions or constraints.

#### How This Applies to Assemblies

These exact same concepts carry over when you move from sketching 2D parts to putting together 3D **assemblies**. 

Instead of sketch lines and dimensions, assemblies use parts (like brackets, motors, and extrusions) and **mates** (which are just 3D constraints, like fastening two faces together or adding a revolute mate to let a wheel spin). 

- **&&Underdefined Assembly&&**: If you don't add enough mates, your robot parts will float away or pass through each other when you try to move the assembly. 
- **&&Fully Defined Assembly&&**: When you apply the right amount of mates, your parts will behave exactly as they would in real life. Static parts are locked together, and moving parts (like arms or wheels) only move along their intended axes.
- **&&Overdefined Assembly&&**: Just like in a sketch, if you give conflicting instructions (e.g., fastening a gear in place but also adding a mate that tells it to spin), the software will throw an error. 

## &&CAD Software&&
| Vendor | Software | Free? |
|--------|----------|-------|
| AutoDesk | Fusion | For Students |
| Dassault Systèmes | Solidworks Design | For Students |
| PTC | Onshape | Free |

:::note
Our team primarily uses Onshape for its CAD needs. This is due to the fact that it is free for students, built for collaboration, and already has an existing parts library for most of our common components (e.g. motors, bearings, etc.) that we use for FTC.
:::

## &&Performance Tips&&
CAD is very resource intensive, especially if you use a non-cloud-based software such as Autodesk Fusion or Solidworks. To help mitigate this, see if your computer has a dedicated GPU or dGPU (newer, higher-end laptops are commonly equipped with NVIDIA RTX Series dGPUs). If it does, go into Windows settings, System, Display, Graphics, and then set the CAD software to use the dGPU. 

## &&Onshape Keyboard Shortcuts&&
| Keybind | Feature | Use Case |
|----------|---------|---------|
| L | Line | Draws a line. |
| R or G | Corner/Center-Point Rectangle | Draws a rectangle. |
| C | Circle | Draws a circle. |
| Q | Construction Mode | Toggles construction geometry. When enabled, lines, arcs, and circles will be construction geometry instead of regular geometry. |
| U | Project | Projects an edge, face, or curve onto the current sketch. |
| S | Shortcuts | Open a quick-access menu for commonly used features. |
| Shift + E | Extrude | Extrudes a sketch. (Adds/Removes Material) |
| A | Arc | Draws an arc. |
| D | Dimension | Adds a dimension to a sketch. |
| F | Zoom to Fit | Fits the entire model within your view. |
| N | View Normal To | Orients your view to look directly at the selected plane or sketch. |
| P | Hide/Show Planes | Toggles the visibility of the default Top, Front, and Right planes. |
| I | Coincident Constraint | Snaps two points together, or a point onto a line. |
| J | Fastened Mate | Quickly adds a fastened mate between two parts in an assembly. |

## &&Useful FeatureScripts&&

FeatureScripts are custom tools written by the community that automate repetitive tasks in Onshape. For FTC, these are absolute game-changers. Instead of manually sketching out complex hole patterns or calculating belt lengths, you can use a FeatureScript to do it in one click.

Some of the most useful FeatureScripts you should add to your Onshape toolbar include:
- **[Belt & Chain Gen](https://cad.onshape.com/documents/53c0b14cad92676c14e04e97/w/1271c254ccb0a79563210195/e/59c07f39dcb84652c3dbbf0f)**: Calculates and models belt and chain paths between pulleys and sprockets so you know exactly what size you need.
- **[Vent](https://cad.onshape.com/documents/702f94d6e4ffb0c64f611f87/v/20a92abfa698419347aea2c1/e/d55354e2782385e34e0395c4)**: Quickly removes material from custom plates in an organized pattern to save weight while maintaining strength.
- **[Timing Belt Pulley](https://cad.onshape.com/documents/55ae3138e0cd7c325239208b/v/bfe7a53a6752a35e56338377/e/b08c0071a21e9ab74baaf916?jumpToIndex=173)**: Automatically generates custom timing belt pulleys with the exact tooth count and profile you specify.
- **[Gear Lab](https://cad.onshape.com/documents/f349bdd78c53f3325055aefc/v/0ca31cd0b35e796be912d9e2/e/53214cbff7d86d5817cf8efb)**: Easily generates custom gears tailored to your precise pitch and tooth count needs.

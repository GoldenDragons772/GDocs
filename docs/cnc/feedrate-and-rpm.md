---
sidebar_position: 4
---

# Feedrate and RPM

## Feedrate

This determines the rate at which material is fed to the bit. Generally, it is better to run the CNC at lower feeds because we currently don't have a proper fixture plate. If you run the CNC at higher feeds than recommended, there is a chance that you can damage the CNC and also break the expensive bits.

## RPM

RPM (Rotations Per Minute) is the speed the spindle spins. We found that 22,000 RPM is generally a good speed for different types of materials and didn't change from that.

## Cutting Feedrates

| Material | Bit | Feedrate | RPM | Coolant? |
|----------|-----|----------|-----|----------|
| Lexan | 6mm | 400-600 mm/min | 22000 | No |
| Aluminum | 6mm | 150-400 mm/min | 22000 | Yes |
| Wood | 6mm | 250-400 mm/min | 22000 | No |

## Drilling

| Material | Bit | Plunge Feedrate | RPM | Coolant? |
|----------|-----|-----------------|-----|----------|
| Lexan | 4mm | 30-60 mm/min | 22000 | No |
| Aluminum | 4mm | 30 mm/min | 22000 | Yes |
| Wood | 4mm | 30-45 mm/min | 22000 | No |

:::tip
These are units we found to work better for the machine, and are generally recommended to start with these. If you found better feeds and RPMs, I would recommend documenting them for future use.
:::

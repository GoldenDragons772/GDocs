---
sidebar_position: 2
---

# Vision and Pipeline

## 772 Vision Pipeline in Action

![Vision Pipeline Demo](/img/vision-pipeline.gif)

Allows us to automatically swivel the claw servo to align with the sample, which makes it easier and also reduces time for picking up samples from the submersible. This also helps us with defensive gameplay as we could still align with nearby samples even when we get pushed around in competition.

## Pipeline

To achieve this, we use an OpenCV pipeline that allows us to use multiple vision algorithms such as color detection and contour/edge detection. After we have this information, we essentially draw boxes on these shapes and then use trig (arctan) to find the angle offset between the sample and the lower edge of the screen, which allows us to then convert this into a unit the servos can understand to swivel to.

## How It Works

### 1. Color Detection
The pipeline first identifies samples based on their color characteristics, filtering out background noise and focusing on game elements.

### 2. Contour/Edge Detection
Once colors are identified, the system uses contour detection to find the exact boundaries and shapes of the samples.

### 3. Angle Calculation
Using trigonometry (specifically arctan), the system calculates the angle offset between:
- The detected sample position
- The lower edge of the camera view

### 4. Servo Control
The calculated angle is converted into servo units, allowing the claw to automatically swivel and align with the target sample.

## Benefits

- **Faster Sample Collection**: Automated alignment reduces pickup time
- **Improved Accuracy**: Consistent positioning regardless of driver skill
- **Defensive Capability**: Maintains alignment even when pushed by opponents
- **Reduced Driver Load**: Allows drivers to focus on navigation and strategy

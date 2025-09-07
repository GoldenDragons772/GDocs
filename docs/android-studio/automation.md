---
sidebar_position: 5
---

# Automation

![Team 772 Robot](/img/automation.gif)

## 772 IntoTheDeep Season Robot Automation

We use automation for many tasks on the robot to reduce stress on our driver and also make the robot a lot quicker when scoring. A well-tuned automation system can:

- **Removes stress from drivers** - Drivers can focus on navigation and strategy
- **Minimizes errors from humans** - Consistent, repeatable actions
- **Makes cycle times a lot quicker** - Faster than manual control
- **The robot can drive and also perform these actions asynchronously** - Multi-tasking capabilities

## Sensors Used

To achieve automation, we use two sensors:

### Vision
Vision systems allow the robot to identify and track game elements, targets, and field positions automatically.

### Limit Switch
Limit switches provide physical feedback when mechanisms reach specific positions, ensuring accurate positioning.

## Code Implementation

Code for the automation can be found below.

```kotlin
/**
 * Command to transfer a sample by moving the intake system to transfer position,
 * opening the outtake claw, and moving the outtake arm to transfer position.
 * This command is used in both teleop and auto modes to prepare the robot for sample transfer.
 */
class TransferSampleCommand(private val intakeSystem: IntakeSystem, private val outtakeSystem: OuttakeSystem, private val climbSystem: ClimbSystem): SequentialCommandGroup() {

    init {
        addCommands(
            InstantCommand({Log.i("CMDS", this.javaClass.name + "\n"+  intakeSystem.stateString() + "\n" + outtakeSystem.stateString())}),
            climbSystem.setTargetPosition(ClimbSystem.ClimbState.HOME),
            //intakeSystem.setClaw(IntakeSystem.IntakePosition.TARGET),
            outtakeSystem.clawOpen(),
            //outtakeSystem.moveArmToTransferPrep(),
            intakeSystem.moveToTransfer(),
            WaitCommand(200),
            outtakeSystem.moveArmToTransfer(),
            WaitUntilCommand{ outtakeSystem.getClawButtonState() }.withTimeout(400),
            outtakeSystem.clawClose(),
            WaitCommand(200),
            intakeSystem.setClaw(IntakeSystem.IntakePosition.HOME),
            outtakeSystem.moveArmToScore()
        )
    }

}
```

## Benefits of Robot Automation

Robot automation is crucial in competitive robotics because it:
- Increases scoring efficiency
- Reduces driver workload
- Provides consistent performance under pressure
- Allows for complex multi-step operations
- Enables simultaneous driving and mechanism control

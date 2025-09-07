# Development Environment

## Advanced Users

Please don't follow this if you don't have experience with the command line (powershell, cmd).

### Install Git

1. Open an elevated Command Prompt or Powershell window
   - This can be done by pressing Win + R and pressing "Yes"
2. Type `winget install Git.Git` and go through the install process
3. Generate a new SSH Key and add it to the SSH Agent
4. Add your SSH Key to your Github Account

### Install and Open Android Studio

1. Open an elevated Command Prompt or Powershell window
2. Type `winget install Google.AndroidStudio` and go through the install process

### Install the Android SDK

1. Open Android Studio
2. Follow the instructions to set up the IDE and install the Android SDK.

### Clone the FTC SDK

Now that you have set up the development environment, it's time to clone the FTC SDK:

1. Figure out what the URL for the FTC SDK is (at the time of writing it's https://github.com/FIRST-Tech-Challenge/FtcRobotController.git)
2. Clone the repository (Note that some developers keep their clone repositories in a folder for that purpose).
3. In your not-necessarily-elevated pwsh/cmd, navigate to the folder in which you want your repository to be located
4. Clone the repository using Git:

```bash
git clone https://github.com/FIRST-Tech-Challenge/FtcRobotController.git
```

## User Friendly Setup

### Android Studio

1. Download Android Studio from [here](https://developer.android.com/studio).
2. Run the installer that you just downloaded.
3. The installer should guide you through the process.
4. Done! Android Studio should have been installed successfully.

**NOTE:** Make sure you have a Java JDK installed on your systems or allow the installer to install it for you. The Android SDK may also need to be downloaded and usually, it is done automatically by the Android Studio Installer.

### Git / GitHub Desktop

Choose either:
- **git** (command line tool)
- **GitHub Desktop** (more user-friendly graphical interface)

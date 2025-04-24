# Valorant Tracker - Tamii

## Description
Valorant Tracker is a Chrome extension that allows users to copy important information from the Valorant Tracker website directly to their clipboard. This extension is designed to work seamlessly with the tracker.gg/valorant website.

## Features
- Copies player information such as name, rank, views, and private status to the clipboard.
- Valorant-inspired UI design.
- Easy-to-use interface with a single button click.

## Installation
1. Clone or download this repository.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" in the top-right corner.
4. Click on "Load unpacked" and select the folder containing this extension.

## Usage
1. Open the tracker.gg/valorant website and navigate to a player's profile.
2. Click on the extension icon in the Chrome toolbar.
3. Click the "Copy Info" button in the popup.
4. The player's information will be copied to your clipboard.

## Files
- **manifest.json**: Defines the extension's metadata and permissions.
- **background.js**: Handles background tasks and messaging.
- **popup.html**: The HTML structure of the popup interface.
- **popup.js**: Contains the logic for the popup's functionality.
- **style.css**: Styles the popup with a Valorant-inspired design.
- **icon/**: Contains the extension's icons in various sizes.

## Permissions
This extension requires the following permissions:
- `clipboardWrite`: To copy data to the clipboard.
- `activeTab`: To interact with the currently active tab.
- `scripting`: To execute scripts in the context of the active tab.
- `host_permissions`: To access the tracker.gg/valorant website.

## Author
Created by [Tamino1230](https://github.com/Tamino1230).

## License
This project is licensed under the MIT License.
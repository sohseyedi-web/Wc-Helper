# Location Distance Finder

A simple React app that displays a list of nearby locations sorted by proximity to the user's current location. The app uses geolocation to get the user's position and calculates the distance between the user and predefined locations, showing distances in meters if they are less than 1 kilometer, or in kilometers otherwise.

## Features
- **Get User Location**: Uses browser's geolocation API to get the current position of the user.
- **Calculate Distances**: Calculates the distance between the user's location and a list of predefined locations.
- **Sorted Locations**: Displays the locations sorted by nearest to farthest.
- **Dynamic Distance Display**: Shows the distance in meters if less than 1 km; otherwise, displays in kilometers.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/location-distance-finder.git
    cd location-distance-finder
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the app:
    ```bash
    npm start
    ```

## Usage
When the app is loaded, it will:
1. Prompt the user for permission to access their location.
2. Once permission is granted, it retrieves the user's current location.
3. It calculates the distance from the user's location to each predefined location.
4. Displays the list of locations sorted by proximity, showing distances in meters if under 1 km.

### Important Note
The app requires location permissions from the browser. If permissions are denied, the app will not be able to fetch the user's location and will show an error in the console.

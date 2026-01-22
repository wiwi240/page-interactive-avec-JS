# Interactive Page with JavaScript Events

## Project Overview

This project demonstrates JavaScript event handling on an interactive web page. It showcases how to use the DOM API to listen for user interactions and dynamically manipulate HTML elements.

---

## File Structure

```
page_react/
├── exo_events.html    # Main HTML file
└── script.js          # JavaScript event handlers
```

---

## `exo_events.html` - HTML Structure

### Language & Framework
- **HTML5** - Markup language for structuring the page
- **Bootstrap 4.3.1** - CSS framework for responsive design and pre-built components

### Content & Structure

The HTML file creates an interactive webpage with the following sections:

#### 1. **Header Section**
- **Dark Navigation Bar** - Contains a logo "JS & Events" and a hamburger menu button
- **Collapsible Menu** - Hidden by default, displays when hamburger icon is clicked
  - Contains a welcome message: "Coucou ! Et oui, depuis le début j'étais caché."
  - Includes contact links (Twitter, Facebook, Email)

#### 2. **Main Content Area**
- **Hero Section (Jumbotron)** - Welcome banner with two navigation buttons
  - Left button (blue): Navigation to "thehackingproject.org"
  - Right button (gray): Rotates cards to the right

#### 3. **Card Gallery**
- **Three Bootstrap Cards** displaying information about:
  1. HTML5 - Description and HTML icon
  2. CSS3 - Description and CSS icon
  3. JavaScript (assumed in the full file)
- Each card contains:
  - An image
  - Descriptive text
  - "View" button (green) - Toggles text/image visibility on hover
  - "Edit" button (gray outline) - Changes card text color

#### 4. **Footer**
- Implicit footer element (targeted by JavaScript for click tracking)

---

## `script.js` - JavaScript Event Handlers

### Language
- **Vanilla JavaScript (ES6)** - No frameworks, pure DOM manipulation

### Key Features & Event Listeners

#### 1. **Footer Click Counter**
- Counts footer clicks and logs the count to console

#### 2. **Hamburger Menu Toggle**
- Toggles the visibility of the collapsed navigation menu using Bootstrap's `collapse` class

#### 3. **Card Edit Buttons - Color Change**
- **First Card (HTML)** - Toggles red text color
- **Second Card (CSS)** - Toggles green text color
- Clicking the gray "Edit" button toggles the card color on/off

#### 4. **Navbar Double-Click - Bootstrap Toggle**
- Double-clicking the navbar disables/enables Bootstrap CSS styling

#### 5. **View Button - Image/Text Toggle**
- Hovering over "View" button hides/shows card description text
- Resizes image between 100% and 20% width

#### 6. **Card Rotation - Right (Gray Button)**
- Moves the last card to the beginning of the gallery

#### 7. **Card Rotation - Left (Blue Button)**
- Moves the first card to the end of the gallery

---

## Technologies Used

| Technology | Purpose |
|-----------|---------|
| **HTML5** | Page structure |
| **Bootstrap 4** | Styling and responsive layout |
| **JavaScript (Vanilla)** | Event handling and DOM manipulation |

---

## Event Types Demonstrated

- `click` - Basic click interactions
- `dblclick` - Double-click interactions
- `mouseover` - Hover effects
- `toggle` - Class manipulation with classList

---

## How to Use

1. Open `exo_events.html` in a web browser
2. Interact with various elements:
   - Click the hamburger menu to reveal hidden content
   - Click cards' "Edit" buttons to change colors
   - Hover over "View" buttons to toggle text/images
   - Click the navigation buttons to rotate the card gallery
   - Double-click the navbar to toggle Bootstrap styling
   - Click the footer to count clicks (check browser console)

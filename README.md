Certainly! Below is the updated **README.md** file with the preview link added. I've included a new section called **Live Preview** to make it easy for users to access the deployed application.



# Caffeine Street Website

Welcome to the **Caffeine Street** website repository! This project is a modern, visually appealing coffee shop website designed with a focus on user experience and aesthetics. The website features a **glass morphism effect**, a uniform gradient background, and responsive design to ensure compatibility across devices.



## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Live Preview](#live-preview)
5. [Installation and Setup](#installation-and-setup)
6. [Folder Structure](#folder-structure)
7. [Customization](#customization)
8. [Contributing](#contributing)
9. [License](#license)



## Project Overview

The **Caffeine Street** website is a fully functional coffee shop website that showcases the shop's menu, gallery, and contact information. It includes interactive elements such as animations, hover effects, and a Google Maps integration for location display. The latest updates introduce a **glass morphism effect** using modern CSS techniques like `backdrop-filter` and `opacity`, enhancing the visual appeal without compromising usability.

Key highlights of the project include:
- A cohesive design language with frosted glass overlays.
- A responsive layout optimized for all screen sizes.
- SEO-friendly structure with meta tags and schema markup.
- Interactive animations and smooth transitions.

---

## Features

- **Glass Morphism Effect**: Frosted glass overlays and containers with blur effects for a modern look.
- **Responsive Design**: Fully responsive layout for optimal viewing on desktops, tablets, and mobile devices.
- **Gradient Background**: A soft gradient background complements the frosted glass theme.
- **Interactive Animations**: Smooth scroll animations powered by [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/).
- **Gallery with Lightbox**: High-quality image gallery with lightbox functionality for an immersive experience.
- **Google Maps Integration**: Embedded map for displaying the coffee shop's location.
- **SEO Optimization**: Meta tags and schema markup for better search engine visibility.
- **Social Media Links**: Direct links to Instagram and Facebook for customer engagement.
- **Contact Form**: A functional form for inquiries, feedback, and event bookings.


## Live Preview

You can preview the live version of the **Caffeine Street** website by visiting the following link:

[**Live Preview**](https://caffeinestreet.netlify.app/)

This link will take you to the deployed application where you can explore all the features and interact with the website.


## Technologies Used

- **HTML5**: Semantic and accessible markup.
- **CSS3**: Modern styling techniques, including `backdrop-filter`, `box-shadow`, and gradients.
- **Bootstrap 5**: Responsive grid system and pre-built components.
- **JavaScript**: Interactivity and animations.
- **AOS (Animate On Scroll)**: Scroll-based animations.
- **Lightbox2**: Gallery lightbox functionality.
- **Google Fonts**: Custom fonts for typography.
- **Font Awesome**: Icons for social media and other UI elements.
- **Google Maps API**: Interactive map for location display.


## Installation and Setup

### Prerequisites

- A code editor (e.g., [Visual Studio Code](https://code.visualstudio.com/)).
- A web browser (e.g., Google Chrome, Firefox).
- Basic knowledge of HTML, CSS, and JavaScript.

### Steps to Run Locally

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/caffeine-street.git
   cd caffeine-street
   ```

2. **Open the Project**:
   - Open the `index.html` file in your preferred web browser to view the website.

3. **Set Up Google Maps API**:
   - Replace `YOUR_GOOGLE_MAPS_API_KEY` in the `contact.html` file with your actual Google Maps API key.

4. **Customize Content**:
   - Update the text, images, and links in the respective files to match your coffee shop's details.

## Folder Structure

The project is organized into the following directories:

```
caffeine-street/
├── assets/
│   ├── images/          # Images used in the website (e.g., hero image, gallery photos).
├── css/
│   └── style.css        # Main CSS file for global styles and glass morphism effect.
├── js/
│   ├── main.js          # JavaScript for animations and interactivity.
│   └── gallery.js       # JavaScript for gallery functionality.
├── index.html           # Homepage of the website.
├── about.html           # About Us page.
├── menu.html            # Menu page.
├── gallery.html         # Gallery page.
├── contact.html         # Contact page.
└── README.md            # This file.
```



## Customization

### Updating Content

- **Text**: Edit the HTML files (`index.html`, `about.html`, etc.) to update the content.
- **Images**: Replace the images in the `assets/images/` folder with your own high-resolution images.
- **Colors**: Modify the gradient background and glass morphism effect in the `style.css` file.

### Adding New Pages

To add a new page:
1. Create a new HTML file (e.g., `team.html`).
2. Link the new page in the navigation bar (`navbar`) across all HTML files.
3. Add relevant content and styles.

### Adjusting Glass Morphism Effect

To customize the glass morphism effect:
- Locate the `.glass-effect` class in the `style.css` file.
- Adjust properties like `backdrop-filter`, `background-color`, and `border-radius` to suit your design preferences.



## Contributing

We welcome contributions from the community! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature or fix"
   ```
4. Push to your forked repository:
   ```bash
   git push origin feature-name
   ```
5. Submit a pull request detailing your changes.


## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code as per the terms of the license.


## Acknowledgments

- [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/)
- [Lightbox2](https://lokeshdhakar.com/projects/lightbox2/)
- [Google Fonts](https://fonts.google.com/)
- [Font Awesome](https://fontawesome.com/)
- [Bootstrap](https://getbootstrap.com/)


Thank you for visiting the **Caffeine Street** repository! If you have any questions or suggestions, feel free to open an issue or contact the maintainers.

Happy coding! ☕  

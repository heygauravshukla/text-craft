# TextCraft

TextCraft is a modern online text editor built with Next.js, Tailwind CSS, and Shadcn/UI. It allows users to easily edit, format, and analyze their text with various tools.

## Features

- **Text Manipulation:** Convert text to lowercase or uppercase, remove extra spaces, and clear text.
- **Clipboard Integration:** Copy text to clipboard with ease.
- **Text Summary:** Displays word and character counts, and estimated reading time.
- **Text Preview:** View a real-time preview of your text.
- **Mode Toggle:** Switch between light and dark themes.

## Technologies Used

- **Next.js:** A React framework for building server-rendered and statically generated web applications.
- **Tailwind CSS:** A utility-first CSS framework for creating custom designs without leaving your HTML.
- **Shadcn/UI:** A set of accessible and customizable UI components for React.
- **Radix UI:** Low-level UI components for building design systems and complex UI.
- **Lucide:** A collection of open-source icons.

## Installation

To get started with TextCraft, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/heygauravshukla/text-craft.git
   cd text-craft
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

4. **Open your browser and visit:**

   ```
   http://localhost:3000
   ```

## Usage

### Home Page

The homepage contains the following sections:

- **Header:** Displays the site title "TextCraft" and a mode toggle button for switching themes.
- **Hero Section:** Includes a heading and description of the application's capabilities.
- **Editor Section:** Features a text area for input, along with action buttons to manipulate the text.
- **Summary Section:** Shows the text summary, including word count, character count, and estimated reading time.

### Editor Actions

- **Copy:** Copy the text to the clipboard.
- **Lowercase:** Convert the text to lowercase.
- **Uppercase:** Convert the text to uppercase.
- **Remove Extra Spaces:** Remove unnecessary spaces from the text.
- **Clear:** Clear the text area.

## Configuration

### Environment Variables

No special environment variables are required for this project. However, you can configure additional settings in the `.env` file if needed.

### Tailwind CSS Configuration

Tailwind CSS is configured in the `tailwind.config.js` file. You can customize your theme and add additional plugins as needed.

## Contributing

If you'd like to contribute to TextCraft, please follow these guidelines:

1. **Fork the repository.**
2. **Create a new branch for your feature or bug fix.**
3. **Commit your changes and push to your fork.**
4. **Submit a pull request.**

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- **Next.js** for providing an excellent framework for building React applications.
- **Tailwind CSS** for making it easy to create beautiful designs.
- **Shadcn/UI** for the accessible and customizable UI components.
- **Radix UI** for the robust low-level components.
- **Lucide** for the icons used in the application.

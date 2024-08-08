"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  CaseLower,
  CaseUpper,
  Copy,
  RemoveFormatting,
  Trash2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, ChangeEvent } from "react";

export default function Home() {
  // State to hold the text input value
  const [text, setText] = useState<string>("");

  // Handle changes to the text area input
  const handleOnChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  // Copy text to the clipboard with error handling
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      // Optionally notify user of success
    } catch (error) {
      console.error("Failed to copy text:", error);
      // Optionally notify user of error
    }
  };

  // Convert text to lowercase
  const handleLowerCaseClick = () => {
    setText(text.toLowerCase());
  };

  // Convert text to uppercase
  const handleUpperCaseClick = () => {
    setText(text.toUpperCase());
  };

  // Remove extra spaces from the text
  const handleExtraSpaces = () => {
    const newText = text.split(/\s+/).filter(Boolean).join(" ");
    setText(newText);
  };

  // Clear the text area
  const handleClearClick = () => {
    setText("");
  };

  // Calculate the word count
  const wordCount = text.split(/\s+/).filter(Boolean).length;

  return (
    <>
      <header>
        {/* Header section with site title and mode toggle */}
        <div className="container py-4 border-b flex items-center justify-between">
          <a href="/" className="text-2xl font-bold font-serif">
            TextUtils
          </a>
          <ModeToggle />
        </div>
      </header>

      <main>
        {/* Hero section */}
        <section className="my-12">
          <div className="container grid place-content-center text-center">
            {/* Hero Heading */}
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Transform your text effortlessly!
            </h1>

            {/* Hero Description */}
            <p className="leading-7 mt-6 max-w-[80ch]">
              Edit, format, and analyze text quickly with TextUtils. Simplify
              your text management and boost productivity with ease.
            </p>
          </div>
        </section>

        {/* Editor section */}
        <section className="my-12">
          <div className="container grid gap-4">
            {/* Text area for user input */}
            <div className="grid w-full gap-1.5">
              <Label htmlFor="message" className="text-xl mb-2">
                Your text
              </Label>
              <Textarea
                placeholder="Type or paste your text here."
                id="message"
                value={text}
                onChange={handleOnChange}
                rows={8}
                className="resize-y" // Allow vertical resizing
              />
            </div>

            {/* Action buttons for text manipulation */}
            <div className="flex flex-wrap gap-2">
              <Button
                variant="default"
                disabled={text.length === 0}
                onClick={handleCopy}
                aria-label="Copy text to clipboard"
              >
                <Copy className="mr-2 h-4 w-4" /> Copy
              </Button>

              <Button
                variant="outline"
                disabled={text.length === 0}
                onClick={handleLowerCaseClick}
                aria-label="Convert text to lowercase"
              >
                <CaseLower className="mr-2 h-4 w-4" /> Lowercase
              </Button>

              <Button
                variant="outline"
                disabled={text.length === 0}
                onClick={handleUpperCaseClick}
                aria-label="Convert text to uppercase"
              >
                <CaseUpper className="mr-2 h-4 w-4" /> Uppercase
              </Button>

              <Button
                variant="outline"
                disabled={text.length === 0}
                onClick={handleExtraSpaces}
                aria-label="Remove extra spaces"
              >
                <RemoveFormatting className="mr-2 h-4 w-4" /> Remove extra
                spaces
              </Button>

              <Button
                variant="outline"
                disabled={text.length === 0}
                onClick={handleClearClick}
                aria-label="Clear text"
              >
                <Trash2 className="mr-2 h-4 w-4" /> Clear
              </Button>
            </div>
          </div>
        </section>

        {/* Summary section */}
        <section className="my-12">
          <div className="container grid gap-4">
            {/* Text summary showing word and character count */}
            <div>
              <p className="text-xl">Text Summary</p>
              <p className="text-sm text-muted-foreground">
                {wordCount} words and {text.length} characters
              </p>
              <p className="text-sm text-muted-foreground">
                {Math.round(0.008 * wordCount * 100) / 100} minutes read
              </p>
            </div>

            {/* Text preview displaying current text or a placeholder */}
            <div>
              <p className="text-xl">Text Preview</p>
              <p className="text-sm text-muted-foreground">
                {text.length > 0 ? text : "Nothing to preview!"}
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

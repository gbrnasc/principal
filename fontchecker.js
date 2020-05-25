import { Typefont } from "fontchecker/src/index.js";

async function getFontFromImage (fontchecker/ocr/1.jpeg) {
    const fonts = await Typefont(fontchecker/ocr/1.jpeg);
    
    return fonts[0]; // Return the most similar font.
}    
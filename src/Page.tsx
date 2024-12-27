import logo from './assets/logo.png'
import logo3 from './assets/chroma-flyer-global.jpg'
import dex from './assets/dex.png'
import { useState } from 'react';
const content = {
    text: "Chromakopia is an innovative cryptocurrency designed to revolutionize the way feliciathegoat and fans interact. By combining blockchain technology with the vibrant energy of world tours, Chromakopia aims to create a decentralized ecosystem that enhances fan experiences while empowering artists with new revenue streams.",
    highlightWords: {
        "Chromakopia": "hover:text-white",
        "is": "hover:text-white",
        "an": "hover:text-white",
        "innovative": "hover:text-white",
        "cryptocurrency": "hover:text-white",
        "designed": "hover:text-white",
        "to": "hover:text-white",
        "revolutionize": "hover:text-white",
        "the": "hover:text-white",
        "way": "hover:text-white",
        "feliciathegoat": "hover:text-white",
        "and": "hover:text-white",
        "fans": "hover:text-white",
        "interact": "hover:text-white",
        "By": "hover:text-white",
        "combining": "hover:text-white",
        "blockchain": "hover:text-white",
        "technology": "hover:text-white",
        "with": "hover:text-white",
        "vibrant": "hover:text-white",
        "energy": "hover:text-white",
        "of": "hover:text-white",
        "world": "hover:text-white",
        "tours": "hover:text-white",
        "aims": "hover:text-white",
        "create": "hover:text-white",
        "a": "hover:text-white",
        "decentralized": "hover:text-white",
        "ecosystem": "hover:text-white",
        "that": "hover:text-white",
        "enhances": "hover:text-white",
        "experiences": "hover:text-white",
        "while": "hover:text-white",
        "empowering": "hover:text-white",
        "new": "hover:text-white",
        "revenue": "hover:text-white",
        "streams.": "hover:text-white"
    }
};

const Page = () => {
    const [copied, setCopied] = useState(false);
    const text = "8dxV42fuPWXQ8Ds75qEjAB3tqXxppezL7QEN5zMapump";

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };
    const addHighlights = (text: string) => {
        const words = text.split(' ');
        return words.map((word, index) => {
            // Remove punctuation for checking but keep it for display
            const cleanWord = word.replace(/[.,!?]$/, '');
            const punctuation = word.match(/[.,!?]$/)?.[0] || '';
            
            if (cleanWord in content.highlightWords) {
                return (
                    <span key={index} 
                          className={`${content.highlightWords[cleanWord as keyof typeof content.highlightWords]} transition-colors duration-300`}>
                        {cleanWord}{punctuation}{' '}
                    </span>
                );
            }
            return word + ' ';
        });
    };

    return (
        <div className="h-auto w-full bg-[#00843d] ">
            <div className="h-screen flex flex-col sm:flex-row items-center justify-center gap-20">
                <img src={logo} alt="logo" className="w-[200px] sm:w-[400px] md:w-[400px] lg:w-[400px] mt-10" />
                <h1 className="w-[400px] cursor-default leading-8 font-fira text-md mt-10 text-center text-black font-bold">
                    {addHighlights(content.text)}
                </h1>
                
            </div>
            <div className="relative group">
            <p 
                onClick={handleCopy} 
                className="cursor-pointer text-center text-lg text-black font-fira hover:text-white transition-colors duration-300"
            >
                {text}
            </p>
            <span 
                className={`absolute left-1/2 -translate-x-1/2 -top-8 px-2 py-1 bg-black text-white text-sm rounded transition-opacity duration-300 ${
                    copied ? 'opacity-100' : 'opacity-0'
                }`}
            >
                Copied!
            </span>
        </div>
            <div className="h-[80vh] flex flex-col items-center justify-center">
    <iframe 
        src="https://open.spotify.com/embed/album/0U28P0QVB1QRxpqp5IHOlH?utm_source=generator" 
        width="400" 
        height="400" 
        frameBorder="0" 
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy"
        className="rounded-xl"
    ></iframe>
</div>
            <div className="h-screen flex flex-col items-center justify-center">
                <img src={logo3} alt="logo" className="w-[400px] sm:w-[400px] md:w-[500px] lg:w-[600px] mt-10" />
            </div>
            <div className="h-auto flex flex-col items-center justify-center">
                <h1 className="w-[400px] cursor-default leading-8 font-fira text-md mt-10 text-center text-black font-bold">
                   Coming Soon...
                </h1>
            </div>
            
            <hr className="w-full border-green-800 border-1 mt-20" />
                <div className="flex flex-col items-center justify-center">
                <img src={dex} alt="logo" className="w-[30px] my-10 cursor-pointer" />
                </div>
        </div>
    );
};

export default Page
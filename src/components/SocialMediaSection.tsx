



import Image, { StaticImageData } from "next/image";



interface SocialCardProps {
    name: string;
    url: string;
    image: string | StaticImageData; // ✅ FIX
    color: string;
}


export function SocialCard({ name, url, image }: SocialCardProps) {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative p-6 rounded-[1.25rem] bg-white/5 border border-saffron/20 hover:bg-white/10 transition-all duration-300 flex flex-col items-center text-center group"
        >
            {/* icon circle */}
            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <Image
                    src={image}
                    alt={name}
                    width={28}
                    height={28}
                    className="object-contain"
                />
            </div>

            {/* title */}
            <h3 className="font-display font-semibold text-sm !text-white">
                {name}
            </h3>
        </a>
    );
}
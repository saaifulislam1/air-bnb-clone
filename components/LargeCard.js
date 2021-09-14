import React from 'react'
import Image from "next/image";

function LargeCard({img,title,description,buttonText}) {
    return (
        <section className="cursor-pointer relative py-16">
            <div className="relative h-96 min-w-[300px]">
                <Image className="rounded-2xl "
                src={img} layout="fill" objectFit="cover" />
                
            </div>
            <div className="absolute top-32 left-12">
                <h3 className="text-4xl mb-3 w-64">{title}</h3>
                <p>
                    {description}
                </p>
                <button className="text-white bg-gray-900 px-4 py-2 rounded-lg mt-5 text-sm">{buttonText}</button>
                {/* these are tailwind utility classes, extremely easy to use!!! */}

            </div>

        </section>
    )
}

export default LargeCard

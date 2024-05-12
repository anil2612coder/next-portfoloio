import Tag from "./Tag";
import { Roboto } from 'next/font/google'
 
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

function Project ({ headline, image, text, tags, link,github }: { headline: string, image: string, text: string, tags: string[], link: string,github:string }) {
    return ( 
    <div className="flex flex-col transition-all hover:scale-105 scale-100 bg-opacity-20 bg-black rounded-lg max-h-max max-w-96 m-3 text-white">
        <img className="w-fit h-fit rounded-t-lg max-h-64" alt={text} src={image}/>
        <div className="flex gap-3 justify-center mt-2">
            <a className="p-1 bg-blue-300 rounded-lg text-blue-600 font-semibold border-2 border-gray-400" href={link}>Deploy Link</a>
            <a className="p-1 bg-blue-300 rounded-lg text-blue-600 font-semibold border-2 border-gray-400" href={github}>Github Code</a>
        </div>
        <div className="p-4">
            <div className="text-2xl font-sans text-teal-300 font-bold mb-4">{headline}</div>
            <p>{text}</p>
            <ul className="mt-2 flex flex-wrap" aria-label="Technologies used:">
                {tags.map((item, index) =>
                    <li key={index} className="mr-1.5 mt-2"><Tag title={item} /></li>
                )}
            </ul>
        </div>
    </div>
    )
}

export default Project;
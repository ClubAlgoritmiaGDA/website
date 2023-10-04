import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
    return (
        <main className="h-screen flex items-center justify-center flex-col bg-algoritmia-blue">
            <div className="text-white">Hola amigues :) un boton de shadcn pa que lo vean</div>
            <Link
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                className={buttonVariants({
                    variant: 'default',
                })}
            >
                <h1>Click me!</h1>
            </Link>
        </main>
    )
}

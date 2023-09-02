import { Button } from '@/components/ui/button'


export default function Home() {
    return (
        <main className="h-screen flex items-center justify-center flex-col">
            <div className="text-red-500 bg-green-200 text-sm hover:text-4xl transition-all duration-200">
                Hoasdala amigues :) un boton de shadcn pa que lo vean
            </div>
            <Button variant={'destructive'} size={'lg'}>
                Hola
            </Button>
        </main>
    )
}

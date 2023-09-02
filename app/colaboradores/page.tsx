import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ColaboratorCard } from '@/components/ui/ColaboratorCard'
import { Key } from 'react'

type Colaborator = {
    name: String
    email: String
    photo: String
}

const colaborators: Colaborator = [
    {
        name: 'Jorge Plasencia',
        email: 'jorgeplasenciaaj@gmail.com',
        photo: 'https://i.ibb.co/PNK1ZF1/Photo-on-02-09-23-at-12-02-p-m.jpg',
    },
    {
        name: 'Davide',
        email: 'davide@edivad.com',
        photo: 'https://i.ibb.co/PNK1ZF1/Photo-on-02-09-23-at-12-02-p-m.jpg',
    },
    {
        name: 'Davide',
        email: 'davide@edivad.com',
        photo: 'https://i.ibb.co/PNK1ZF1/Photo-on-02-09-23-at-12-02-p-m.jpg',
    },
    {
        name: 'Davide',
        email: 'davide@edivad.com',
        photo: 'https://i.ibb.co/PNK1ZF1/Photo-on-02-09-23-at-12-02-p-m.jpg',
    },
    {
        name: 'Davide',
        email: 'davide@edivad.com',
        photo: 'https://i.ibb.co/PNK1ZF1/Photo-on-02-09-23-at-12-02-p-m.jpg',
    },
]

export default function Home() {
    return (
        <main className="h-screen flex items-center justify-center flex-col">
            <div className="grid grid-cols-2 ">
                {colaborators.map(
                    (colaborator: {
                        email: String | Key
                        name: String
                        photo: String
                    }) => (
                        <ColaboratorCard
                            className={'m-2'}
                            key={colaborator.email}
                            name={colaborator.name}
                            email={colaborator.email}
                            photo={colaborator.photo}
                        />
                    )
                )}
            </div>
        </main>
    )
}

import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'
import { Card } from '@/components/ui/Card'

interface IColaboratorCard {
    name: String
    email: String
    photo: String
    className?: String
}

function ColaboratorCard({ name, email, photo, className }: IColaboratorCard) {
    return (
        <Card className={cn('p-3 w-96', className)}>
            <div className="flex space-x-2 items-center">
                <img
                    className="w-20 h-20 rounded-full"
                    src={photo}
                    alt={name}
                />
                <div className="">
                    <h4 className="text-lg font-semibold text-gray-700">
                        {name}
                    </h4>
                    <p className="text-sm font-medium text-gray-600">{email}</p>
                </div>
            </div>
        </Card>
    )
}

ColaboratorCard.defaultProps = {
    className: '',
}

ColaboratorCard.displayName = 'ColaboratorCard'

export { ColaboratorCard }

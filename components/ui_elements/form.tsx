"use client"

import { Input } from "@/components/ui/input"

interface ProfileFormType {
    loginType: string
}

export function ProfileForm({ loginType }: ProfileFormType) {


    return (
        <div className="flex flex-col gap-6">
            {loginType === "login" ? <div className="flex max-sm:flex-col gap-6">
                <Input placeholder="Email*" type="email" required />
                <Input placeholder="Password*" type="password" required />
            </div> :
                <>
                    <div className="flex max-sm:flex-col gap-6">
                        <Input placeholder="First Name*" required />
                        <Input placeholder="Last Name*" required />
                    </div>
                    <div className="flex max-sm:flex-col gap-6">
                        <Input placeholder="Email*" type="email" required />
                        <Input placeholder="Confirm your email*" type="email" required />
                    </div>
                    <div className="flex max-sm:flex-col gap-6">
                        <Input placeholder="Password*" type="password" required />
                        <Input placeholder="Password confirmation*" type="password" required />
                    </div>
                </>
            }

        </div>
    )
}

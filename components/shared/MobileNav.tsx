import { Button } from "@/components/ui/button"

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { NavLinks } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Separator } from "../ui/separator";


export function MobileNavButton() {
    const pathname = usePathname();

    return (
        <div className="md:hidden">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline"><Image src="/icons/menu.png" width={30} height={30} alt="menu" /></Button>
                </SheetTrigger>
                <SheetContent side="bottom">
                    <SheetHeader>
                        <div className='flex items-center gap-2 top-0'>
                            <Image
                                src="/icons/logo.png"
                                width={28}
                                height={28}
                                alt='logo'
                            />
                            <p className='text-xl'>Y3mate</p>
                        </div>
                            <SheetDescription>
                                Y3mate YouTube Downloader helps you download 
                                any YouTube video in the best quality.
                            </SheetDescription>
                    </SheetHeader>
                    <Separator className="my-3"/>
                    <div className="flex flex-col items-start gap-6 pl-3 pb-10" >
                        {NavLinks.map((items) => {
                            const isActive = pathname === items.route;

                            return (
                                <Link href={items.route} key={items.label}>
                                    <p className={`${isActive && 'text-violet-500'} `}>{items.label}</p>
                                </Link>
                            )
                        }
                        )}
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    )
}

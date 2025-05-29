import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'
import { Rowdies } from 'next/font/google'
import { Button } from './ui/button'
import { ChevronDown, FileText, GraduationCap, Layout, LayoutDashboard, PenBox, StarsIcon } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'
const rowdies = Rowdies({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-lobster',
})

const Header = () => {
    return (
        <header className='fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60'>
            <nav className='container mx-auto px-4 flex items-center justify-between h-16'>
                <Link href={'/'}>
                    <h1 className={`${rowdies.className} text-2xl md:text-5xl font-bold tracking-wider text-gray-100 py-2 `}>Ai<span className='text-blue-500'>4</span>U</h1>
                </Link>
                <div className='flex items-center space-x-2 md:space-x-4'>
                    <SignedIn>
                        <Link href={'/dashboard'}>
                            <Button variant={'outline'}>
                                <LayoutDashboard className='h-4 w-4' />
                                <span className='hidden md:block'>Industry Insights</span>
                            </Button>
                        </Link>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button>
                                    <StarsIcon className='h-4 w-4' />
                                    <span className='hidden md:block'>Growth Tools</span>
                                    <ChevronDown className='h-4 w-4' />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem>
                                    <Link href={'/resume'} className='flex items-center space-x-2'>
                                        <FileText className='h-4 w-4' />
                                        <span className='hidden md:block'>Build Resume</span>
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link href={'/ai-cover-letter'} className='flex items-center space-x-2'>
                                        <PenBox className='h-4 w-4' />
                                        <span className='hidden md:block'>Cover Letter</span>
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link href={'/interview'} className='flex items-center space-x-2'>
                                        <GraduationCap className='h-4 w-4' />
                                        <span className='hidden md:block'>Interview Prep</span>
                                    </Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SignedIn>
                    <SignedOut>
                        <SignInButton>
                            <Button variant={'outline'}>
                                Sign In
                            </Button>
                        </SignInButton>
                    </SignedOut>
                    <SignedIn>
                        <UserButton
                            appearance={{
                                elements: {
                                    avatarBox: {
                                        width: "40px", 
                                        height: "40px", 
                                    },
                                    userButtonPopoverCard: {
                                        boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)",
                                    },
                                    userPreviewMainIdentifier: {
                                        fontWeight: "600", 
                                    },
                                },
                            }}
                            afterSignOutUrl='/'
                        />
                    </SignedIn>

                </div>
            </nav>
        </header>
    )
}

export default Header
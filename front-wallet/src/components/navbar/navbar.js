import { useRouter } from 'next/router'
import { removeCookie, getCookies } from 'cookies-next'
import LogoutButton from '../buttons/logoutButton'
import { HydrationProvider, Server, Client } from 'react-hydration-provider';

export default function Navbar({ links }) {
    const router = useRouter()
    const handleSignOut = () => {
        removeCookie(undefined, 'accessToken')
        removeCookie(undefined, 'refreshToken')
        removeCookie(undefined, 'username')
        router.push('/login')
    }

    const cookies = getCookies(undefined);
    const username = cookies['username'];

    return (
        <HydrationProvider>
            <Server>
                <div>Loading...</div>
            </Server>
            <Client>
                {username && (
                    <nav className="bg-gray-600 w-full fixed top-0 h-16 flex items-center">
                        <img width="120" src="https://res.cloudinary.com/dpemaw1yo/image/upload/v1686156961/Design_sem_nome-removebg-preview_jxifvk.png" />
                        <div className="flex justify-between items-center w-full h-full mr-5">
                            <ul className="flex justify-between items-center list-none m-0">
                                {links && links.map((link, index) => (
                                    <li key={index} className="ml-5 text-white">
                                        <a href={link.href}>{link.text}</a>
                                    </li>
                                ))}
                            </ul>
                            <div className="flex items-center">
                                <span className="mr-2 text-white">Bem vindo, {username}!</span>
                                <div className="">
                                    <LogoutButton onClick={handleSignOut}>Sair</LogoutButton>
                                </div>
                            </div>
                        </div>
                    </nav>
                )}
            </Client>
        </HydrationProvider>
    );
}
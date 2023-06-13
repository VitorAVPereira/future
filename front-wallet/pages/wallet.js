import Card from "../src/components/cards/card"
import Navbar from "../src/components/navbar/navbar"
import Image from 'next/image'

export default function WalletPage() {
    return (
        <div className="">
            <Image 
                src="https://res.cloudinary.com/dpemaw1yo/image/upload/v1686156987/pexels-hasan-albari-1229861_oeisc5.jpg" 
                fill={true}  
                priority={true} 
            />
            <Navbar links={[
                {href: '/wallet', text: 'Home'},
            ]} />
            <Card titulo="Receitas" valor="0.00"/>
            <Card titulo="Despesas" valor="0.00"/>
            <Card titulo="Total" valor="0.00"/>
        </div>
    )
}
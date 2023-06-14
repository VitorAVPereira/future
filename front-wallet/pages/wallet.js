import Card from "../src/components/cards/card"
import Navbar from "../src/components/navbar/navbar"
import Image from 'next/image'

export default function WalletPage() {
    return (
        <div className="">
            <Navbar links={[
                {href: '/wallet', text: 'Home'},
            ]} />
            <Card titulo="Receitas" valor="0.00"/>
            <Card titulo="Despesas" valor="0.00"/>
            <Card titulo="Total" valor="0.00"/>
        </div>
    )
}
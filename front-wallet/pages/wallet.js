import GreenCard from "../src/components/cards/greenCard"
import Card from "../src/components/cards/card"
import RedCard from "../src/components/cards/redCard"
import Navbar from "../src/components/navbar/navbar"
import Image from 'next/image'
import { Container } from '@mui/material'
 
export default function WalletPage() {
    return (
        <Container>
            <Image
                src="/backgroundMacLigth.jpg"
                fill={true}
                style={{ objectFit: "cover" }}
                alt="Picture of the author"
            />
            <Navbar />
            <div className="flex-col">
                <div className="mt-20 lg:flex items-start">
                    <GreenCard title="Incomes" content="0.00" />
                    <RedCard title="Expenses" content="0.00" />
                </div>
                <div className="ml-20">
                    <Card title="Total" content="0.00" />
                </div>
            </div>
        </Container>
    )
}
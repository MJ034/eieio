import TextCenter from '@/components/TextCenter'
import CallToActionButton from '@/components/CallToActionButton'
import SplitImageLeft from '@/components/SplitImageLeft'
import SplitButtonLeft from '@/components/SplitButtonLeft'
import Hero from '@/components/Hero'
import { createClient } from '@prismicio/client'

const queryHomepage = () => {
  const client = createClient('mjrepo')
  return client.getSingle('home_page')
}
export  async function generateMetadata() {
  const page = await queryHomepage()
  return {
    title: 'EIE - Engineering Intelligent Environments',
    description:
      'Farming solutions start-up that aims to revolutionize the way farmers work.',
  }
}

export default async function Home() {
  const page = await queryHomepage();
  console.log(page.data.slices)
  return (
    <main>
      <Hero />
      <CallToActionButton />
      <SplitImageLeft />
      <SplitButtonLeft />
      <TextCenter />
    </main>
  )
}

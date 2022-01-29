import {
  NextApiRequest,
  NextApiResponse,
  NextPage,
} from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getSession } from '@auth0/nextjs-auth0'
import {
  AnnotationIcon,
  ArrowRightIcon,
  AtSymbolIcon,
  DocumentTextIcon,
  LoginIcon,
  PencilIcon,
} from '@heroicons/react/outline'
import { Logo } from 'components/common/Logo'
import { Layout } from 'components/Layout'
import { Button } from 'components/common/Button'

const IndexPage: NextPage = () => {
  return (
    <Layout
      title="PaperFreeForm"
      icon="/icon.svg"
      description='A Free Form Builder to save trees and create beautiful forms.'
      className="overflow-y-auto lg:flex lg:flex-row-reverse "
    >
      <div className="lg:w-1/4">
        <div className="flex px-4 py-4 items-center justify-between">
          <Logo />
          <a className="btn" href="/api/auth/login?returnTo=/create">
            <span>Log In</span>
            <LoginIcon className="icon" />
          </a>
        </div>
        <div className="p-3 pb-0 pt-0">
          <h1 className="font-bold text-xl leading-none mb-3">
            Easy form builder that works like a doc
          </h1>
          <p className="py-2 mb-5 italic font-semibold antialiased font-sans leading-4">
            {/* a small reason to use paperfreeform insted of paper to reduce deforestation */}
            <span className="text-green-400 text-xs">Don&#39;t cut down trees to make forms. </span> <br />
            <span className='text-blue-400 text-xs'>Use PaperFreeForm instead.</span>  <br />
            <span className='text-green-400 text-xs'>It&#39;s a lot simpler.</span>  <br />
            <span className='text-blue-400 text-xs'>The climate crisis is a problem.</span>  <br />
            <span className='text-green-400 text-xs'>And climate change is primarily caused by deforestation.</span>  <br />
            <span className='text-blue-400 text-xs'>PaperFreeForm is the solution.</span>  <br />
            <span className="text-green-400 text-xs">You can help save the world by using PaperFreeForm.</span>
          </p>
          <Link passHref href="/create">
            <Button variant="primary" size="lg">
              <span>Create a form</span>
              <ArrowRightIcon className="icon" />
            </Button>
          </Link>
          <span className="text-sm text-green-400 italic font-semibold">No signup required</span>
          <p className="text-gray-700 py-2 font-semibold pt-3">
            Seamlessly create online forms for all purposes and collect data
            without knowing how to code
          </p>
        </div>
        <div className="p-4 pt-1 pb-0 text-sm">
          <ul>
            <li className="flex items-center gap-2 my-2">
              <DocumentTextIcon className="icon text-gray-400" />
              <span>Create unlimited forms</span>
            </li>
            <li className="flex items-center gap-2 my-2">
              <AnnotationIcon className="icon text-gray-400" />
              <span>Receive unlimited responses</span>
            </li>
            <li className="flex items-center gap-2 my-2">
              <PencilIcon className="icon text-gray-400" />
              <span>Easily customize to match your brand</span>
            </li>
            <li className="flex items-center gap-2 my-2">
              <AtSymbolIcon className="icon text-gray-400" />
              <span>Simple form elements</span>
            </li>
          </ul>
        </div>
      </div>
      <div
        className="w-full px-4 py-8 lg:h-screen lg:flex-1 flex items-center justify-center bg-cover bg-center h-64 m-0"
        style={{ backgroundImage: 'url(./landing/background.svg)' }}
      >
        <Image
          src="/landing/screenshot.png"
          width={1000}
          height={530}
          className="rounded overflow-hidden w-full"
          alt="App screenshot"
        />
      </div>
    </Layout>
  )
}

export const getServerSideProps = ({
  req,
  res,
}: {
  req: NextApiRequest
  res: NextApiResponse
}) => {
  const session = getSession(req, res)
  const user = session && session.user

  // if user object is defined redirect to editor page
  if (user) {
    return {
      redirect: { destination: '/create', permanent: false },
    }
  }

  return {
    props: {},
  }
}

export default IndexPage

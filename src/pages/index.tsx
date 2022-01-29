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
        <div className="flex px-4 py-6 items-center justify-between">
          <Logo />
          <a className="btn" href="/api/auth/login?returnTo=/create">
            <span>Log In</span>
            <LoginIcon className="icon" />
          </a>
        </div>
        <div className="p-4">
          <h1 className="font-bold text-3xl leading-none mb-4">
            Easy form builder that works like a doc
          </h1>
          <p className="py-2 mb-5 italic font-semibold text-sm">
            {/* a small reason to use paperfreeform insted of paper to reduce deforestation */}
            <span className="text-green-400">Don&#39;t cut down trees to make forms. </span> <br />
            <span className='text-blue-400'>Use PaperFreeForm instead.</span>  <br />
            <span className='text-green-400'>It&#39;s a lot simpler.</span>  <br />
            <span className='text-blue-400'>The climate crisis is a problem.</span>  <br />
            <span className='text-green-400'>And climate change is primarily caused by deforestation.</span>  <br />
            <span className='text-blue-400'>PaperFreeForm is the solution.</span>  <br />
            <span className="text-green-400">You can help save the world by using PaperFreeForm 🌏.</span>
          </p>
          <Link passHref href="/create">
            <Button variant="primary" size="lg">
              <span>Create a form</span>
              <ArrowRightIcon className="icon" />
            </Button>
          </Link>
          <span className="text-sm text-green-400 italic font-semibold">No signup required</span>
          <p className="text-gray-700 py-2 mb-5 font-semibold pt-3">
            Seamlessly create online forms for all purposes and collect data
            without knowing how to code
          </p>
        </div>
        <div className="p-4 pt-1">
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
        className="w-full px-4 py-8 lg:h-full lg:flex-1 flex items-center justify-center bg-cover bg-center h-64 m-0"
        style={{ backgroundImage: 'url(./landing/background.svg)' }}
      >
        <Image
          src="/landing/screenshot.png"
          width={1200}
          height={630}
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

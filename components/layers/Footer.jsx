import { companyInfo, navRoutes, socialLinks } from '@/utils/contants'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <section className="bg-front">
            <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
                <nav className="flex flex-wrap justify-center -mx-5 -my-2">
                    {
                        navRoutes?.map(({ title, path, isFooterItem }) => isFooterItem && <div key={title} className="px-5 py-2">
                            <Link key={title} href={path} className="text-base leading-6 opacity-75">
                                {title}
                            </Link>
                        </div>)
                    }
                </nav>
                <div className="flex justify-center mt-8 space-x-6 text-2xl">
                    {
                        socialLinks?.map(({ icon, link, title }) =>
                            <a
                                key={title}
                                href={link}
                                className="text-gray-400 hover:text-gray-500"
                                title={title}
                            >
                                <span className="sr-only">{title}</span>
                                {icon}
                            </a>)
                    }
                </div>
                <p className="mt-8 text-base leading-6 text-center text-gray-400">
                    © {new Date().getFullYear()} {companyInfo?.name}, All rights reserved || Developed by <a className='text-primary-300' href={companyInfo?.developer.link}>{companyInfo?.developer?.title}</a>
                </p>
            </div>
        </section>
    )
}

export default Footer
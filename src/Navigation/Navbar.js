import { Fragment } from 'react'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
// import {useState} from 'react';

/*
const navigation = [
  { name: 'Home', href: '#home', current: true },
  { name: 'Resume', href: '#resume', current: false },
  { name: 'Projects', href: '#projects', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
*/

export default function Navbar() {

  /*
  const [isActive, setIsActive] = useState(false);

  const expandNavbar = () => {
    
    setIsActive(current => !current);

  };
  */

  return (
    <Disclosure as="nav" className="sticky top-6 z-50">
      {({ open }) => (
        <>
          <div className="maindivNavbar mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:block">
                  <div className="flex space-x-4">
                      <a href='#home' className='navbarButton'>Home</a>
                      <a href='#resume' className='navbarButton'>Resume</a>
                      <a href='#projects' className='navbarButton'>Projects</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Menu when it truncates */}
          <Disclosure.Panel className=" maindivNavbar sm:hidden items-center justify-center">
            <div className="space-y-1 px-2 pt-2 pb-3 flex items-center justify-center">
                <a href='#home' className='navbarButton'>Home</a>
                <a href='#resume' className='navbarButton'>Resume</a>
                <a href='#projects' className='navbarButton'>Projects</a>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

/*
{navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'text-gray-800 text-xl font-bold' : 'text-gray-800 text-xl hover:bg-gray-500 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))} */
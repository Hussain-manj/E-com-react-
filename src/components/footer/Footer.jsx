import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-pink-600 text-white">
      <div className="lg:px-3 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8 px-5">
          {/* Logo + Info */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Link to={'/'}>
                <h2 className="font-bold text-white text-2xl">Sain's</h2>
              </Link>
            </div>
            <p className="text-md mb-4 text-pink-100">
              Building amazing experiences for our customers worldwide.
            </p>
            <p className="text-sm text-pink-200">
              &copy; 2025 Sain's. All rights reserved.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-md font-medium mb-4 text-white uppercase tracking-wide">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/" 
                  className="text-md text-pink-100 hover:text-white transition-colors duration-200"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link 
                  to="/" 
                  className="text-md text-pink-100 hover:text-white transition-colors duration-200"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link 
                  to="/" 
                  className="text-md text-pink-100 hover:text-white transition-colors duration-200"
                >
                  Affiliate
                </Link>
              </li>
              <li>
                <Link 
                  to="/" 
                  className="text-md text-pink-100 hover:text-white transition-colors duration-200"
                >
                  Press
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-md font-medium mb-4 text-white uppercase tracking-wide">
              Support
            </h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/" 
                  className="text-md text-pink-100 hover:text-white transition-colors duration-200"
                >
                  Account
                </Link>
              </li>
              <li>
                <Link 
                  to="/" 
                  className="text-md text-pink-100 hover:text-white transition-colors duration-200"
                >
                  Help
                </Link>
              </li>
              <li>
                <Link 
                  to="/" 
                  className="text-md text-pink-100 hover:text-white transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link 
                  to="/" 
                  className="text-md text-pink-100 hover:text-white transition-colors duration-200"
                >
                  Customer Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-md font-medium mb-4 text-white uppercase tracking-wide">
              Legal
            </h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/" 
                  className="text-md text-pink-100 hover:text-white transition-colors duration-200"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link 
                  to="/" 
                  className="text-md text-pink-100 hover:text-white transition-colors duration-200"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link 
                  to="/" 
                  className="text-md text-pink-100 hover:text-white transition-colors duration-200"
                >
                  Licensing
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-8 lg:mt-10 pt-6 lg:pt-8 border-t border-pink-500 px-5">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex space-x-6">
              <Link 
                to="/" 
                className="text-sm text-pink-200 hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/" 
                className="text-sm text-pink-200 hover:text-white transition-colors duration-200"
              >
                Terms of Service
              </Link>
              <Link 
                to="/" 
                className="text-sm text-pink-200 hover:text-white transition-colors duration-200"
              >
                Cookie Policy
              </Link>
            </div>
            <div className="text-sm text-pink-200">
              Made with ❤️ by Sain's Team
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
import React from 'react'

const Footer = () => {
  return (
    <div>
         <footer className="bg-gray-900 text-gray-300 py-8 mt-2">
      <div className="max-w-7xl mx-auto px-4">
        {/* Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h5 className="text-lg font-semibold mb-4 text-white">Get to Know Us</h5>
            <ul className="space-y-2">
              <li>About EcomZone</li>
              <li>Careers</li>
              <li>Press Releases</li>
              <li>EcomZone Science</li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-semibold mb-4 text-white">Connect with Us</h5>
            <ul className="space-y-2">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-semibold mb-4 text-white">Make Money with Us</h5>
            <ul className="space-y-2">
              <li>Sell on EcomZone</li>
              <li>Sell under EcomZone Accelerator</li>
              <li>Protect and Build Your Brand</li>
              <li>Become an Affiliate</li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-semibold mb-4 text-white">Let Us Help You</h5>
            <ul className="space-y-2">
              <li>Your Account</li>
              <li>Returns Centre</li>
              <li>100% Purchase Protection</li>
              <li>Help</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">&copy; 2024 EcomZone</p>
          <div className="mt-4 md:mt-0 flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <span role="img" aria-label="Language">
                🌐
              </span>
              <span>English</span>
            </div>
            <div className="flex items-center space-x-1">
              <span role="img" aria-label="Country">
                🇮🇳
              </span>
              <span>India</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer
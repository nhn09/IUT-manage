import React from 'react'

const Footer = () => {
    return (
        <footer class="footer text-gray-50 bg-gray-700 relative pt-1 border-b-2 border-blue-700">
        <div class="container mx-auto px-6">
    
            <div class="sm:flex sm:mt-8">
                <div class="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
                    <div class="flex flex-col">
                        <span class="font-bold text-gray-300 uppercase mb-2">Location</span>
                        <span class="my-2">21/A</span>
                        <span class="my-2">Board Bazar</span>
                        <span class="my-2">Bangladesh</span>
                    </div>
                    <div class="flex flex-col">
                        <span class="font-bold text-gray-300 uppercase mt-4 md:mt-0 mb-2">Follow Us on</span>
                        <span class="my-2">FaceBook</span>
                        <span class="my-2">Instagram</span>
                        <span class="my-2">Youtube</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="container mx-auto px-6">
            <div class="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
                <div class="sm:w-2/3 text-center py-6">
                    <p class="text-sm text-gray-200 font-bold mb-2">
                        © 2021  IUT
                    </p>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer

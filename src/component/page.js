export default function Page() {
    return (
      <body className="bg-gray-100 font-sans">
        <section className="container mx-auto py-24 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 px-6">
            <h1 className="text-4xl md:text-6xl font-bold text-indigo-800 mb-4">
              Transform Your Business with <span className="text-orange-500">OurName</span>
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Made with 3 short prompts while testing the new Google Ultra 1.0 for the first time (9/2/24). It refused creating the whole page with detailed instructions for each section, but it performs very well when asked for a few sections at a time. Total time spent: 5 minutes.
            </p>
            <button className="bg-indigo-700 hover:bg-indigo-800 text-white font-medium py-3 px-8 rounded-full">
              Start Your Free Trial
            </button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img src="https://source.unsplash.com/random/900x400/?Event" />
          </div>
        </section>
  
        <section className="container mx-auto py-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">From Our Blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <article class="bg-white p-6 rounded-lg shadow-md">
      <img src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.5.2&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Article Image" class="rounded-lg mb-4"/> 
      <h3 class="text-xl font-semibold text-gray-800 mb-2">Article Title 1</h3>
      <p class="text-gray-600">A brief excerpt or summary of your first featured article...</p>
    </article>
    <article class="bg-white p-6 rounded-lg shadow-md">
      <img src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.5.2&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Article Image" class="rounded-lg mb-4"/> 
      <h3 class="text-xl font-semibold text-gray-800 mb-2">Article Title 1</h3>
      <p class="text-gray-600">A brief excerpt or summary of your first featured article...</p>
    </article>
    <article class="bg-white p-6 rounded-lg shadow-md">
      <img src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.5.2&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Article Image" class="rounded-lg mb-4"/> 
      <h3 class="text-xl font-semibold text-gray-800 mb-2">Article Title 1</h3>
      <p class="text-gray-600">A brief excerpt or summary of your first featured article...</p>
    </article>
          </div>
        </section>
  
        <section className="container mx-auto py-16 bg-gray-100">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-white p-8 rounded-lg shadow-md">
      <p class="text-lg text-gray-700 italic mb-4">"Great tool, streamlined our processes and significantly boosted efficiency!"</p>
      <div class="flex items-center">
        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.5.2&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="Client Avatar" class="w-12 h-12 rounded-full mr-4"/> 
        <div>
          <p class="text-gray-800 font-medium">Jane Doe</p>
          <p class="text-gray-600">CEO, Company X</p>
        </div>
      </div>
    </div>
    <div class="bg-white p-8 rounded-lg shadow-md">
      <p class="text-lg text-gray-700 italic mb-4">"Great tool, streamlined our processes and significantly boosted efficiency!"</p>
      <div class="flex items-center">
        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.5.2&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="Client Avatar" class="w-12 h-12 rounded-full mr-4"/> 
        <div>
          <p class="text-gray-800 font-medium">Jane Doe</p>
          <p class="text-gray-600">CEO, Company X</p>
        </div>
      </div>
    </div>
          </div>
        </section>
  
        <section className="container mx-auto py-16 bg-white">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-indigo-100 p-8 rounded-lg shadow-md text-center">
        <svg class="w-12 h-12 mx-auto mb-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <h3 class="text-xl font-semibold text-gray-800 mb-2">Powerful Analytics</h3>
        <p class="text-gray-600">Monitor key metrics and get actionable insights for informed decisions.</p>
      </div>
      <div class="bg-green-100 p-8 rounded-lg shadow-md text-center">
        <svg class="w-12 h-12 mx-auto mb-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <h3 class="text-xl font-semibold text-gray-800 mb-2">Seamless Collaboration</h3>
        <p class="text-gray-600">Work together in real-time, boosting teamwork and efficiency.</p>
      </div>
      <div class="bg-orange-100 p-8 rounded-lg shadow-md text-center">
        <svg class="w-12 h-12 mx-auto mb-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 1m3-1l3 1m0 0l-3 1m3-1l3 1m0 0l-3 1m3-1l3 1m0 0l-3 1m3-1l3 1m0 0l-3 1m3-1"></path></svg>
        <h3 class="text-xl font-semibold text-gray-800 mb-2">Intuitive Workflow</h3>
        <p class="text-gray-600">Streamline your tasks with an easy-to-use, optimized interface.</p>
      </div>
          </div>
        </section>
  
        <footer className="bg-gray-800 text-white py-20 px-6">
        <div class="container mx-auto flex flex-col md:flex-row justify-between items-center">
    <div>
      <h4 class="text-lg font-semibold mb-3">Useful Links</h4>
      <ul class="text-gray-300 flex flex-wrap md:flex-nowrap"> <li class="mr-4"><a href="#" class="hover:text-white">Link 1</a></li> 
        <li class="mr-4"><a href="#" class="hover:text-white">Link 2</a></li> 
        <li class="mr-4"><a href="#" class="hover:text-white">Link 3</a></li> 
        <li class="mr-4"><a href="#" class="hover:text-white">Link 4</a></li> 
        <li><a href="#" class="hover:text-white">Link 5</a></li> 
      </ul>
    </div>
    <div class="mt-6 md:mt-0">
      <h4 class="text-lg font-semibold mb-3">Follow Us</h4>
      <div class="flex space-x-4">
        <svg class="w-6 h-6 fill-current text-black" viewBox="0 0 24 24">
          <rect width="24" height="24" /> 
        </svg>
        <svg class="w-6 h-6 fill-current text-black" viewBox="0 0 24 24">
          <rect width="24" height="24" /> 
        </svg>
        <svg class="w-6 h-6 fill-current text-black" viewBox="0 0 24 24">
          <rect width="24" height="24" /> 
        </svg>
      </div>
    </div>
  </div>
        </footer>
      </body>
    );
  }
  
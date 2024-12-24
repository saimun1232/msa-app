export default function Container() {
    return (
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Feature 1 */}
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-teal-100">
              <svg
                className="w-10 h-10 text-teal-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-800">
              সম্পূর্ণ অরাজনৈতিক
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              আমাদের সকল কার্যক্রম সম্পূর্ণ অরাজনৈতিক। দাওয়াহ সার্কেল পরিচালনার
              সাথে যুক্ত সকলেই ঢাকা বিশ্ববিদ্যালয়ের সাধারণ শিক্ষার্থী।
            </p>
          </div>
  
          {/* Feature 2 */}
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-teal-100">
              <svg
                className="w-10 h-10 text-teal-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-800">
              ফ্রি মিক্সিং মুক্ত
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              ফ্রি মিক্সিং এড়িয়ে চলতে আমরা সর্বদা সচেষ্ট। তাই আমাদের কার্যক্রম
              ভালোভাবেই মেয়েদের কার্যক্রম মেন্টরদের দ্বারা পরিচালিত হয়।
            </p>
          </div>
  
          {/* Feature 3 */}
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-teal-100">
              <svg
                className="w-10 h-10 text-teal-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-800">
              সমস্থ কার্যক্রম স্বচ্ছ
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              আমাদের সমস্থ কার্যক্রম স্বচ্ছ এবং জবাবদিহিতার ভিত্তিতে পরিচালিত হয়।
            </p>
          </div>
        </div>
      </div>
    );
  }
  
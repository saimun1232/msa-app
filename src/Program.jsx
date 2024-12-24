import './index.css'
export default function Program() {
    const programs = [
      {
        title: "বেরোবি সীরাত পাঠ ও প্রতিযোগিতা",
        description:
          "আমরা ২০২০ সাল থেকে নিরবচ্ছিন্নভাবে রাসূল (ﷺ) এর জীবনাদর্শকে ফুটিয়ে দিতে বেগম রোকেয়া বিশ্ববিদ্যালয়ের শিক্ষার্থীদের জন্য সীরাত পাঠ ও প্রতিযোগিতার আয়োজন করে আসছি।",
        link: "বিস্তারিত",
      },
      {
        title: "বেরোবি ইসলামিক লাইব্রেরি",
        description:
          "বেগম রোকেয়া বিশ্ববিদ্যালয়ের শিক্ষার্থীদের জন্য অনন্য সুযোগ। একটি ইসলামী লাইব্রেরি যেখানে তারা পড়তে পারে বিভিন্ন বই। এই লাইব্রেরি শিক্ষার্থীদের জন্য ইসলামী বই পড়ার অনুপ্রেরণা জোগাতে কাজ করছে।",
        link: "বিস্তারিত",
      },
      {
        title: "বেরোবি প্র্যাকটিসিং মুসলিম বিবাহ প্ল্যাটফর্ম",
        description:
          "বেগম রোকেয়া বিশ্ববিদ্যালয়ের শিক্ষার্থীদের বিবাহের জন্য একটি প্ল্যাটফর্ম যেখানে প্র্যাকটিসিং মুসলিমদের জন্য অনন্য সুযোগ তৈরি করা হয়েছে। এটি ইসলামী বিবাহের জন্য একটি নতুন পথ তৈরি করেছে।",
        link: "বিস্তারিত",
      },
      {
        title: "বেরোবি কর্মে হাসানাহ",
        description:
          "আমরা বেগম রোকেয়া বিশ্ববিদ্যালয়ের শিক্ষার্থীদের জন্য সমাজসেবা কার্যক্রম পরিচালনা করে থাকি, যেখানে একজন শিক্ষার্থী ইসলামের বিধান অনুসারে ভালো কাজ করতে পারে।",
        link: "বিস্তারিত",
      },
      {
        title: "বেগম রোকেয়া বিশ্ববিদ্যালয়ের অস্বচ্ছল ও মেধাবী শিক্ষার্থীদের জন্য শিক্ষাবৃত্তি।",
        description:
          "বেগম রোকেয়া বিশ্ববিদ্যালয়ের অস্বচ্ছল ও মেধাবী শিক্ষার্থীদের জন্য বিশেষ স্কলারশিপ প্রোগ্রাম চালু করেছি।",
        link: "বিস্তারিত",
      },
      {
        title: "বেরোবি দাওয়াহ সার্কেল একাডেমি",
        description:
          "বেগম রোকেয়া বিশ্ববিদ্যালয়ের শিক্ষার্থীদের জন্য একটি একাডেমিক প্ল্যাটফর্ম যা দাওয়াহ ও ইসলামিক শিক্ষার প্রসারে কাজ করছে।",
        link: "বিস্তারিত",
      },
    ];
  
    return (
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          কার্যক্রম সমূহ
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <div
              key={index}
              className="border shadow-customInset border-gray-200 rounded-lg shadow-md p-6 bg-white "
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                {program.title}
              </h3>
              <p className="text-sm text-gray-600 mb-6">{program.description}</p>
              <button className="px-4 py-2 text-sm font-medium text-teal-600 border border-teal-600 rounded hover:bg-teal-600 hover:text-white transition">
                {program.link}
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
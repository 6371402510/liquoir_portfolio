import { Star, PlayCircle } from "lucide-react";

const FeedbackPage = () => {

    const feedbacks = [
        {
            owner: "Ramesh Wines Shop",
            name: "Ramesh Kumar",
            rating: 5,
            message: "Vichaar BevTrac made billing super fast and easy. Stock management is perfect now!",
            video: "/videos/demo.mp4",
        },
        {
            owner: "City Liquor Store",
            name: "Amit Singh",
            rating: 4,
            message: "Great system for barcode billing and daily reports. Very useful software.",
            video: "/videos/demo.mp4",
        },
        {
            owner: "City Liquor Store",
            name: "Amit Singh",
            rating: 4,
            message: "Great system for barcode billing and daily reports. Very useful software.",
            video: "/videos/demo.mp4",
        },
        {
            owner: "City Liquor Store",
            name: "Amit Singh",
            rating: 4,
            message: "Great system for barcode billing and daily reports. Very useful software.",
            video: "/videos/demo.mp4",
        },
     
    ];

    return (
        <div className="min-h-screen bg-gray-100 py-16 px-4">

            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-semibold text-[#003257]">
                    Our Satisfied Customers
                </h1>
                <p className="text-gray-500 mt-2">
                    Real feedback from liquor shop owners using Vichaar BevTrac
                </p>
            </div>

            {/* Feedback Cards */}
            <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">

                {feedbacks.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-1 transition"
                    >

                        {/* Video Section */}
                        <div className="relative bg-black h-56">
                            <video
                                src={item.video}
                                controls
                                className="w-full h-full object-cover"
                            />

                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <PlayCircle className="text-white w-14 h-14 opacity-80" />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6">

                            {/* Owner */}
                            <h2 className="text-xl font-semibold text-[#003257]">
                                {item.owner}
                            </h2>

                            <p className="text-sm text-gray-500 mb-2">
                                Owner: {item.name}
                            </p>

                            {/* Rating */}
                            <div className="flex gap-1 mb-3">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star
                                        key={star}
                                        size={18}
                                        className={
                                            star <= item.rating
                                                ? "text-yellow-400 fill-yellow-400"
                                                : "text-gray-300"
                                        }
                                    />
                                ))}
                            </div>

                            {/* Message */}
                            <p className="text-gray-600 leading-relaxed">
                                "{item.message}"
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeedbackPage;
import { PlayCircle, Video, ArrowRight } from "lucide-react";
import demoVideo from "../assets/demo.mp4";
import demoVideo1 from "../assets/demo2.mp4";
import demoVideo2 from "../assets/demo3.mp4";

const VideoSection = () => {
    const videos = [
        {
            title: "Vichaar BevTrac Introduction",
            desc: "Learn how BevTrac helps manage liquor shop billing, stock and reports.",
            video: demoVideo,
        },
        {
            title: "Billing System Demo",
            desc: "See barcode billing and invoice generation in action.",
            video: demoVideo1,
        },
        {
            title: "Inventory Management",
            desc: "Track stock, purchase and sales from one dashboard.",
            video: demoVideo2,
        },
    ];

    return (
        <section className="bg-[#f2f2f2] py-24 px-4">

            {/* Header */}
            <div className="max-w-7xl mx-auto text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-medium text-[#003257] tracking-tight">
                    Watch{" "}
                    <span className="text-[#ec2224]">Vichaar BevTrac</span>
                    {" "}In Action
                </h2>

                <p className="text-gray-600 text-lg mt-5">
                    Explore our product videos and understand how your liquor shop
                    management becomes easier.
                </p>
            </div>

            {/* Video Cards */}
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
                {videos.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg overflow-hidden group hover:-translate-y-2 transition-all duration-300"
                    >
                        {/* Video */}
                        <div className="relative h-60 bg-black">
                            <video
                                src={item.video}
                                controls
                                className="w-full h-full object-cover"
                            />

                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <PlayCircle
                                    className="w-16 h-16 text-white opacity-80 group-hover:scale-110 transition"
                                />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-7">
                            <div className="w-12 h-12 bg-[#ec2224] flex items-center justify-center mb-5">
                                <Video className="text-white" size={25} />
                            </div>

                            <h3 className="text-xl font-medium text-[#003257] mb-3">
                                {item.title}
                            </h3>

                            <p className="text-gray-600 leading-relaxed mb-5">
                                {item.desc}
                            </p>

                            <button className="flex items-center gap-2 text-[#ec2224] font-medium">
                                Watch Now
                                <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default VideoSection;
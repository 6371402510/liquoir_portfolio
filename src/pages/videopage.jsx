
import VideoSection from '../components/VideoSection';

const Video = () => {
  return (
    <main>
       <section className="relative bg-[#003257] h-[400px] flex items-center pt-10">

  <div className="absolute inset-0">

    <div className=" absolute inset-0 bg-gradient-to-t from-[#003257] via-[#003257]/80  to-transparent">
     </div>
</div>


  <div className="relative  max-w-7xl  mx-auto  px-4  py-24   w-full  ">
     
   
<div className="max-w-3xl">
 


      <h1 className=" text-5xl md:text-7xl font-medium text-white leading-[1.1]  tracking-tight 
        mb-6">
       
     Explore 
        <span className="text-[#ec2224]">
          {" "}Vichaar BevTrac
        </span>
        {" "}Through Videos
      </h1>



      <p className=" text-lg  text-white/70 leading-relaxed  max-w-2xl ">
        Watch product demos, billing tutorials, inventory management guides,
        and discover how Vichaar BevTrac simplifies your liquor shop
        operations with smart digital solutions.
      </p>


    </div>

  </div>

</section>

      <VideoSection/>

      

    

    </main>
  );
};

export default Video;
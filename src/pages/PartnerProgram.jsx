import {
  Handshake,
  BriefcaseBusiness,
  Users,
  MonitorCog,
  BadgeIndianRupee,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";


const PartnerProgram = () => {


  const partners = [
    {
      icon: BriefcaseBusiness,
      title: "CA Firms",
      desc: "Help your clients digitize billing, accounting and compliance."
    },
    {
      icon: Users,
      title: "Excise Consultants",
      desc: "Provide smart software solutions to liquor retailers."
    },
    {
      icon: MonitorCog,
      title: "Computer Dealers",
      desc: "Add BevTrac solutions with your hardware services."
    },
    {
      icon: Handshake,
      title: "Software Resellers",
      desc: "Grow your business by selling our retail management system."
    }
  ];


  return (

    <section>


      {/* HERO */}

      <section className="
        relative 
        bg-[#003257]
        min-h-[70vh]
        flex
        items-center
        pt-20
      ">


        <div className="
          absolute 
          inset-0
          bg-gradient-to-t 
          from-[#003257]
          via-[#003257]/90
          to-transparent
        "></div>



        <div className="
          relative
          max-w-7xl
          mx-auto
          px-4
          py-24
          w-full
        ">


          <div className="max-w-3xl">


            <p className="
              text-xs
              uppercase
              tracking-widest
              font-semibold
              text-[#ec2224]
              mb-4
            ">
              Partner Program
            </p>



            <h1 className="
              text-5xl
              md:text-7xl
              text-white
              font-medium
              leading-tight
              mb-6
            ">

              Become a 
              <span className="text-[#ec2224]">
                {" "}Referral Partner
              </span>

            </h1>



            <p className="
              text-white/70
              text-lg
              leading-relaxed
              max-w-2xl
            ">
              Join hands with Vichaar BevTrac and earn by helping
              liquor retailers adopt modern billing, inventory and
              business management solutions.
            </p>



          </div>


        </div>

      </section>





      {/* PARTNER TYPES */}


      <section className="
        bg-white
        py-24
        px-4
      ">


        <div className="
          max-w-7xl
          mx-auto
        ">


          <div className="
            text-center
            mb-16
          ">


            <h2 className="
              text-4xl
              md:text-5xl
              text-[#003257]
              font-medium
            ">

              Suitable For

            </h2>


          </div>





          <div className="
            grid
            md:grid-cols-2
            lg:grid-cols-4
            gap-6
          ">



          {partners.map((item,index)=>(

            <div
              key={index}
              className="
              border
              border-gray-200
              p-8
              group
              hover:border-[#ec2224]
              transition
              "
            >


              <div className="
                w-14
                h-14
                bg-[#f2f2f2]
                group-hover:bg-[#ec2224]
                flex
                items-center
                justify-center
                mb-6
                transition
              ">


                <item.icon
                  className="
                  text-[#003257]
                  group-hover:text-white
                  "
                  size={28}
                />

              </div>



              <h3 className="
                text-xl
                font-medium
                text-[#003257]
                mb-3
              ">
                {item.title}
              </h3>



              <p className="
                text-gray-600
                text-sm
                leading-relaxed
              ">
                {item.desc}
              </p>


            </div>

          ))}



          </div>


        </div>


      </section>






      {/* EARNING SECTION */}



      <section className="
        bg-[#003257]
        py-20
        px-4
      ">


        <div className="
          max-w-7xl
          mx-auto
          grid
          lg:grid-cols-2
          gap-12
          items-center
        ">



          <div>


            <h2 className="
              text-4xl
              md:text-5xl
              text-white
              font-medium
              mb-6
            ">

              Earn Up To 
              <span className="text-[#ec2224]">
                {" "}₹2,000 - ₹6,000
              </span>
              {" "}Per Sale

            </h2>



            <p className="
              text-white/70
              text-lg
              mb-8
            ">

              Get attractive referral rewards for every successful
              BevTrac customer you bring onboard.

            </p>



            <ul className="space-y-4">


            {[
              "Simple referral process",
              "Dedicated partner support",
              "Recurring business opportunity",
              "Grow your professional network"
            ].map((x,i)=>(

              <li
              key={i}
              className="
              flex
              gap-3
              text-white
              "
              >

                <CheckCircle
                  className="text-[#ec2224]"
                  size={22}
                />

                {x}

              </li>

            ))}


            </ul>


          </div>





          <div className="
            bg-white
            p-10
            shadow-xl
          ">


            <BadgeIndianRupee
              size={55}
              className="text-[#ec2224] mb-5"
            />


            <h3 className="
              text-3xl
              text-[#003257]
              font-medium
              mb-5
            ">

              Start Earning Today

            </h3>



            <Link
  to="/contact"
  className="
    bg-[#ec2224]
    text-white
    px-8
    py-3
    flex
    items-center
    gap-2
    hover:bg-[#c9191b]
    transition
  "
>
  Apply Now
  <ArrowRight size={18} />
</Link>


          </div>



        </div>


      </section>


    </section>

  );

};


export default PartnerProgram;
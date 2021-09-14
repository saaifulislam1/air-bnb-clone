import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/dist/client/router";

import InfoCard from "../components/InfoCard";
import { format } from "date-fns";
 

function Search({searchResults}) {

  const router = useRouter();
  const {location,startDate,endDate,noOfGuests}=router.query;
  const formattedstartDate=format (new Date(startDate), "dd MMMM yy")
  const formattedendDate=format(new Date(endDate), "dd MMMM yy")
 const formattedDateRange=`${formattedstartDate}-${formattedendDate}`;

  // const formattedstartDate=format(new Date(startDate), "dd MMMM yy")
  // const formattedendDate=format(new Date(endDate), "dd MMMM yy")
  // const formattedDateRange=`${formattedstartDate}-${formattedendDate}`


  return (
    <div>
      <Header placeHolder={`${location} | ${formattedDateRange} | ${noOfGuests} guests`} />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs font-bold px-2">300+ Stays from ({formattedDateRange} ),for {noOfGuests} guests</p>
          <h1 className="text-3xl font-semibold m-2 mb-6">Stays in {location}</h1>

          <div
            className="hidden lg:inline-flex mb-5 space-x-3 
            text-gray-800 whitespace-nowrap"
          >
            {/* Reusable tailwind class -main thing  us in styles-> global.css */}
            <p className="button">Cancelation Flexibility</p>
            <p className="button">Type of places</p>
            <p className="button">Price</p>
            <p className="button">Room and Beds</p>
            <p className="button">More filters</p>
          </div>
          
          <div className="flex flex-col">
          {
            searchResults.map(
              ({img,location,title,description,star,price,total}) => (

              <InfoCard
              key={img} 
              img={img}
              location={location}
              title={title}
              description={description}
              star={star}
              price={price}
              total={total}
              
              />
            )
            )
          }
          </div>
         
         
          
        </section>
      </main>

      <Footer />
    </div>
  );
}

 export default Search

export async function getServerSideProps(){
  const searchResults=await fetch('https://links.papareact.com/isz')
  .then((res)=>res.json());

  return{
    props: {
      searchResults,
    }
  };
}



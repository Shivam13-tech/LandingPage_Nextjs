import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center items-center mt-14">
        <div>
          <h1 className="text-2xl md:text-4xl text-center md:text-start">
            Connect with fellow travelers{" "}
          </h1>
          <h1 className="text-center my-4 text-2xl md:text-4xl mx-4 md:mx-0">
            We understand that the best journeys are shared
          </h1>
          <p className="w-[90vw] mb-2 mx-auto  md:w-[40vw] md:mx-0">
            Welcome to Wandermate, your ultimate gateway to unforgettable
            adventures! At Wandermate, we believe that travel is not just about
            the destinations but the experiences and connections you make along
            the way. Our mission is to transform every journey into an exciting
            narrative of exploration, friendship, and discovery.
          </p>
          <div className="flex justify-center items-center">
            <button className="">See Destinations</button>
          </div>
        </div>
        <div>
          <Image width={400} height={150} src="/Images/map.png" alt="map" />
        </div>
      </div>
    </div>
  );
}

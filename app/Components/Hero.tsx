const Hero = ()=>{
    return(
        <>
        <section className="flex justify-around mt-9 p-5">
            <div className="p-10">
                <h2 className="text-4xl font-semibold p-5">Welcome to</h2>
                <h1 className="text-6xl font-bold leading-20 tracking-wider p-5 pt-2">Barbershop in <br /> ManhattanNEW YORK</h1>
            </div>
           <div className=" flex justify-center">
          <img
            src="/images/image 1.png"
            alt="Barbershop in Manhattan"
            className="object-contain w-full h-full max-w-sm md:max-w-lg"
          />
        </div>
        </section>
        </>
    )
}
export default Hero
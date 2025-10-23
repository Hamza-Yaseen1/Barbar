type Icontact = {
    data:string,
    img: string
}
const contact:Icontact[] = [
    {
        data: "​254 W 27ST ST, NEW YORK, NY 10011",
        img: "/images/image 2.png"
    },
    {
        data: "​(212) 123-4567",
        img: "/images/image 4.png"
    },
    {
        data: "​341 W 11ST ST, NEW YORK, NY 10022",
        img: "/images/image 2.png"
    },
    {
        data: "​(212) 123-4567",
        img: "/images/image 2.png"
    },
]
const Hero = ()=>{
    return(
        <>
        <section className="flex justify-around mt-9 p-5">
            <div className="p-10">
                <h2 className="text-4xl font-semibold p-5">Welcome to</h2>
                <h1 className="text-6xl font-bold leading-20 tracking-wider p-5 pt-2">Barbershop in <br /> ManhattanNEW YORK</h1>
                {contact.map((contact,i)=>(

                
                <div className="flex p-4 gap-4 text-">
                    <img src={contact.img} alt="" />
                    <p>{contact.data}</p>
                </div>
                ))}
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
import Image from "next/image";
import "../globals.css";
const Footer = () => {
    return (
        <main>
            <div className="footer flex bg-black">
                <div className="logo mx-20 mt-10">
                    <Image src={"/logo.png"} alt={"logo"} width={100} height={60} />
                </div>
                <div className="about mt-10">
                    <button className="career text-white ml-20" style={{fontSize:"18px"}}>CAREERS</button>
                    <button className="contact text-white ml-20" style={{fontSize:"18px"}}>CONTACT US</button>
                    <p className="ml-20 mt-2 text-white" style={{fontSize:"12px"}}>© 2023 KIDA Studios. All Rights Reserved. KIDA Studios,<br/> kidastudios.com and the KIDA Studios logo are trademarks <br/> of KIDA Studios in India and/or other countries.</p>
                </div>
                <div className="row" style={{margin:"40px auto"}}>
                    <div className="col">
                        <Image src={"/startupindia.png"} alt={"startupindia"} width={160} height={160} />
                        <p className="text-white" style={{fontSize:"14px"}}>Certificate Number <br/>DIPP12619</p>
                    </div>
                    <div className="col">
                        <Image src={"/duns.png"} alt={"duns"} width={100} height={100} />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Footer;
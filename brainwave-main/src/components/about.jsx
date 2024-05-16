import Section from "./Section";
import Heading from "./Heading";
import service1 from "./image1.png";
import service2 from "./image2.png";
import service3 from "./image3.png";
import { Gradient } from "./design/Services";
import CompanyLogos from "./CompanyLogos";



const About = () => {
    return (
        <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="about"
    >
            <div className="container">
                <Heading
                    title="About Us"
                    text="AnsaByte specializes in offering cutting-edge technology
          solutions in various fields, including AI, data analysis,
          cyber security, ESG services, Decision Science, and digital
          transformation. Our team of experts is highly experienced,
          with decades of combined experience and academic
          backgrounds from renowned institutions like IIT & IIM.
          We are dedicated to providing innovative solutions that help
          businesses leverage data and AI to succeed in today's data-
          driven world, while ensuring the safety and security of
          their systems."
                />

                <div className="relative">
                    <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
                        <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
                            <img
                                className="w-full h-full object-cover md:object-right"
                                width={800}
                                alt="Smartest AI"
                                height={730}
                                src={service1}
                            />
                        </div>

                        <div className="relative z-1 max-w-[17rem] ml-auto">
                            <h4 className="h5 mb-4">REDEFINING YOUR DATA STRATEGY</h4>
                            <p className="body-2 mb-[3rem] text-n-3">
                                We firmly believe that every organization should have access to advanced technologies and expertise that can assist them in achieving their objectives. Our AI and data analysis solutions are customized to meet the unique needs of each client, enabling them to maximize the potential of their data and obtain valuable insights that drive business growth. Our cyber security experts are well-equipped with the latest tools and best practices to detect and prevent threats, ensuring that our clients' data and systems remain safe and secure.
                            </p>
                        </div>

                    </div>

                    <div className="relative z-1 grid gap-5 lg:grid-cols-2">
                        <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
                            <div className="absolute inset-0">
                                <img
                                    src={service2}
                                    className="h-full w-full object-cover"
                                    width={630}
                                    height={750}
                                    alt="robot"
                                />
                            </div>

                            <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                                <h4 className="h4 mb-4 text-white">HELPING YOUR BUSINESS BUILD AND GROW.</h4>
                                <p className="body-2 mb-[3rem] text-n-3 text-white">
                                    At AnsaByte, we understand the challenges businesses face in the fast-paced digital world. That's why we offer a comprehensive suite of innovative solutions to help your business build and grow. Our services in data analytics, cybersecurity, data science, decision science, ESG, and digital transformation empower your business to harness the power of digital technologies and drive growth.
                                    <br />
                                    <br />
                                    With AnsaByte as your partner, you can be confident that your business will be well-positioned to succeed in the digital era. Let us help you build and grow your business with our innovative solutions.
                                </p>
                            </div>

                        </div>

                        <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
                            <div className="py-12 px-4 xl:px-8">
                                <h4 className="h4 mb-4">INNOVATIVE SOLUTIONS TO MOVE YOUR BUSINESS FORWARD.</h4>
                                <p className="body-2 mb-[2rem] text-n-3">
                                    AnsaByte is committed to providing cutting-edge solutions that
                                    propel businesses forward. With our innovative technologies and
                                    expert services, we empower organizations to stay ahead of the
                                    curve and achieve their goals.
                                    <br />
                                    <br />
                                    Empower your business to thrive in the digital age with AnsaByte's comprehensive suite of innovative solutions. From cutting-edge data
                                    analytics and cybersecurity to game-changing digital transformation and sustainable ESG strategies, we help drive your business forward
                                    with confidence and clarity.
                                </p>
                            </div>

                            <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                                <img
                                    src={service3}
                                    className="w-full h-full object-cover"
                                    width={520}
                                    height={400}
                                    alt="Scary robot"
                                />
                            </div>
                        </div>
                    </div>
                    <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />

                    <Gradient />
                </div>
            </div>
        </Section>
    );
};

export default About;
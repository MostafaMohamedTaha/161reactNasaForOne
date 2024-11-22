import React from 'react'
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";
import { Footer, FooterCopyright, FooterLink, FooterLinkGroup } from "flowbite-react";

const Footer1 = () => {
    return (
        <div>
            <Accordion className='dark:bg-slate-900 m-4'>
                <AccordionPanel>
                    <AccordionTitle>Lorem, ipsum dolor.</AccordionTitle>
                    <AccordionContent>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet similique optio fugiat quo, corrupti quia ducimus ex, at minima sint debitis, nihil provident vero ut est error quae ipsa qui.
                        </p>
                        <p className="text-gray-500 dark:text-gray-400">
                            Lorem ipsum dolor sit amet.&nbsp;
                            <a
                                href="https://flowbite.com/docs/getting-started/introduction/"
                                className="text-cyan-600 hover:underline dark:text-cyan-500"
                            >
                                get started&nbsp;
                            </a>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, quibusdam..
                        </p>
                    </AccordionContent>
                </AccordionPanel>
                <AccordionPanel>
                    <AccordionTitle>Is there a Figma file available?</AccordionTitle>
                    <AccordionContent>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptatem incidunt nobis aliquam dolorem eaque quasi neque illum ea officiis? Ad doloribus consectetur aspernatur aut eum aliquid recusandae, nesciunt quod.
                        </p>
                        <p className="text-gray-500 dark:text-gray-400">
                            Check out the
                            <a href="https://flowbite.com/figma/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                                Figma design system
                            </a>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur voluptate accusantium tempore aperiam dolorem fugit officia nobis, sequi provident, expedita eligendi ea ducimus alias vitae error maxime libero officiis culpa nulla molestias illum unde quis delectus minus! Qui, debitis. Sequi.
                        </p>
                    </AccordionContent>
                </AccordionPanel>
                <AccordionPanel>
                    <AccordionTitle>What are the Tailwind UI?</AccordionTitle>
                    <AccordionContent>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi magnam veniam totam soluta ducimus asperiores inventore fugiat nesciunt officiis labore nobis velit non quibusdam fuga recusandae itaque, dolorem porro quos molestias ut ex magni. Voluptatem itaque commodi quas nisi asperiores!
                        </p>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, sed. Impedit esse vel quas ipsa porro repellat perspiciatis ratione eos!
                        </p>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                        <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                            <li>
                                <a href="https://flowbite.com/pro/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                                    Lorem, ipsum.
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://tailwindui.com/"
                                    rel="nofollow"
                                    className="text-cyan-600 hover:underline dark:text-cyan-500"
                                >
                                    Lorem, ipsum dolor.
                                </a>
                            </li>
                        </ul>
                    </AccordionContent>
                </AccordionPanel>
            </Accordion>
            <Footer container>
                <FooterCopyright  by="mostafa taha" year={2024} />
                <FooterLinkGroup>
                    <FooterLink >About</FooterLink>
                    <FooterLink >Privacy Policy</FooterLink>
                    <FooterLink >Licensing</FooterLink>
                    <FooterLink >Contact</FooterLink>
                </FooterLinkGroup>
            </Footer>
        </div>
    )
}

export default Footer1

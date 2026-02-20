"use client"

import { Container } from "@/app/components/container"
import Image from "next/image"
import { IconBrandGithub, IconBrandX } from '@tabler/icons-react'
import { useState } from "react"

export const TopBio = () => {
    const [expanded, setExpanded] = useState(false)
    return <div className="flex justify-center items-center pt-20">
        <Container className="">

            <div className="flex gap-10">
                <div>
                    <Image
                        src="/pfp.webp"
                        alt="profile"
                        width={150}
                        height={150}
                        className="rounded-lg"
                    />

                </div>


                <div className="flex flex-col justify-center gap-3">
                    <h1 className="text-6xl font-semibold font-mono">
                        Prince Gupta
                    </h1>

                    <h1 className="text-lg font-mono text-gray-500">
                        founder & student | cs 26
                    </h1>

                    <h1 className=" font-mono" >
                        Pushing harder everyday
                    </h1>

                </div>

            </div>

            <div className="flex flex-col gap-6 py-10">
                <div className="flex gap-4">
                    <IconBrandGithub className="size-7 text-gray-500" />
                    <IconBrandX className="size-7 text-gray-500" />
                </div>

                <h1>
                    The Only thing consistent is change
                </h1>

                <div className="font-sans text-md text-gray-200 font-light">
                    <p>
                        hey, this is prince gupta. i'm working on PlainField AI, tech that actually interests me, and shaping a version of myself i can respect. i'm into tech, philosophy, fitness and the broader project of understanding how to live well.
                    </p>

                    {expanded && (
                        <>
                            <p className="mt-4">
                                everyone seems to be "building the next big thing" — i'm building the next big me.
                                i'm driven by the need to outdo who i was yesterday. more than money or status, what matters to me is the person i'm becoming.
                            </p>

                            <p className="mt-4">
                                except the narcissistic tendencies, i do genuinely love to talk to new people, i love to learn from them, see the world through their eyes and understand how their universe works. everyone lives differently beautiful lives, i want to be a part of them all.
                            </p>
                        </>
                    )}

                    <button
                        onClick={() => setExpanded(!expanded)}
                        className="mt-3 text-sm text-gray-400 hover:text-gray-200 transition-colors cursor-pointer"
                    >
                        {expanded ? "read less" : "read more"}
                    </button>
                </div>



            </div>


        </Container>
    </div>
}
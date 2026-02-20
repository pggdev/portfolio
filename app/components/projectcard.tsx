"use client"

import { motion } from "motion/react"
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react"


interface Projects {
    projectName: string,
    live: boolean,
    desc1: string,
    timeline?: string
}


export const ProjectCard = ({ ...props }: Projects) => {
    return <div className="pl-3 border-l border-gray-600">
        <div className="flex items-center gap-4  py-[0.5px] justify-between">
            <div className="pl-6 ">
                <div className="flex items-baseline-last gap-4">

                    <h1 className="font-sans text-lg font-medium ">{props.projectName}</h1>
                    <h1 className="font-sans text-xs text-gray-500 ">{props.timeline}</h1>

                </div>
                <h1 className="font-mono text-xs text-gray-500 pt-4">{props.desc1}</h1>
            </div>


            <motion.button

                whileTap={{ scale: 0.85 }}
                className="cursor-pointer"
            >
                <motion.div
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                    {props.live ? <IconExternalLink className="size-4 text-gray-500" /> : <IconBrandGithub className="size-4 text-gray-500" />}
                </motion.div>
            </motion.button>






        </div >
    </div>

}
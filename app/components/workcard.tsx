import { IconX, IconMinus } from "@tabler/icons-react"
import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { PRERENDER_MANIFEST } from "next/dist/shared/lib/constants"

interface WorkDetail {
    companyName: string,
    Duration: string,
    Designation: string,
    desc1: string,
    desc2?: string
}
export const WorkCard = ({ ...props }: WorkDetail) => {
    const [expanded, setExpanded] = useState(false)
    return <div className="pl-3 border-l border-gray-600">
        <div className="flex items-center gap-4  py-1 justify-between">
            <div className="pl-6">
                <div className="flex items-baseline-last gap-4">

                    <h1 className="font-sans text-lg font-medium ">{props.companyName}</h1>
                    <h1 className="font-sans text-xs text-gray-500 ">{props.Duration}</h1>

                </div>
                <h1 className="font-mono text-xs text-gray-500 ">{props.Designation}</h1>
            </div>


            <motion.button
                onClick={() => setExpanded(!expanded)}
                whileTap={{ scale: 0.85 }}
                className="cursor-pointer"
            >
                <motion.div
                    animate={{ rotate: expanded ? 0 : 45 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                    <IconX className="size-2.5 text-gray-500" />
                </motion.div>
            </motion.button>






        </div >

        <AnimatePresence initial={false}>
            {expanded && (
                <motion.div
                    key="workcard-expanded"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                    className="overflow-hidden"
                >
                    <div className="pt-3 pl-6 flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                            <IconMinus className="size-3 text-gray-500" />
                            <p className="text-sm text-gray-500 max-w-4xl w-full">{props.desc1}</p>
                        </div>
                        {props.desc2 && <div className="flex items-center gap-3">
                            <IconMinus className="size-3 text-gray-500" />
                            <p className="text-sm text-gray-500 max-w-4xl w-full">{props.desc2}  </p>
                        </div>}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </div >
}
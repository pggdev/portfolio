
import { a } from "motion/react-client";
import Image from "next/image";

interface skilldetail {
    icon?: React.ReactNode;
    skill: string,
    svg?: string
}


export const SkillsCard = ({ ...props }: skilldetail) => {

    return <div className="flex">
        <div className="flex items-center gap-2 border border-gray-800 px-3 py-1">
            {props.icon}
            {props.svg &&

                <Image
                    src={props.svg}
                    alt="svg"
                    height={15}
                    width={15}
                    className=""
                />}
            <h1 className="text-gray-500 font-light font-sans">{props.skill}</h1>

        </div>
    </div>
}
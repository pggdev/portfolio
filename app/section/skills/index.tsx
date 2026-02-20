'use client'

import { Container } from "@/app/components/container"
import { SkillsCard } from "@/app/components/skillscard"

import { IconBrandNextjs, IconBrandNodejs, IconBrandPrisma, IconBrandPython, IconBrandTailwind, IconBrandTypescript, IconChevronRight } from "@tabler/icons-react"

export const Skills = () => {
    return <div className="flex justify-center items-center py-10">
        <Container>

            <h1 className="flex items-center gap-2 text-white font-semibold text-xl font-mono">
                <IconChevronRight />
                skills
            </h1>
            <div className="pt-6 flex gap-2 flex-wrap">
                <SkillsCard icon=<IconBrandTypescript className="size-4 text-gray-500" /> skill={"Typescript"} />
                <SkillsCard icon=<IconBrandNodejs className="size-4 text-gray-500" /> skill={"NodeJS"} />
                <SkillsCard icon=<IconBrandNextjs className="size-4 text-gray-500" /> skill={"NextJs"} />
                <SkillsCard icon=<IconBrandTailwind className="size-4 text-gray-500" /> skill={"Tailwind"} />
                <SkillsCard svg="/postgres.svg" skill={"Postgress"} />
                <SkillsCard icon=<IconBrandPrisma className="size-4 text-gray-500" /> skill={"Prisma"} />


            </div>

        </Container>

    </div>
}